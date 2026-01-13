// Данные курсов
const courses = [
    {
        id: 1,
        title: "JavaScript с нуля до Junior-разработчика",
        category: "frontend",
        description: "Освойте самый популярный язык программирования и создайте 5 реальных проектов для портфолио.",
        duration: "8 месяцев",
        level: "beginner",
        price: 64900,
        oldPrice: 79900,
        badge: "Хит продаж",
        color: "#3b82f6"
    },
    {
        id: 2,
        title: "Python для Data Science и машинного обучения",
        category: "data",
        description: "Научитесь анализировать данные, строить модели машинного обучения и визуализировать результаты.",
        duration: "10 месяцев",
        level: "intermediate",
        price: 89900,
        oldPrice: 109900,
        badge: "Новинка",
        color: "#10b981"
    },
    {
        id: 3,
        title: "React + TypeScript: современный Frontend",
        category: "frontend",
        description: "Создавайте сложные SPA-приложения с использованием TypeScript и современных подходов.",
        duration: "6 месяцев",
        level: "intermediate",
        price: 74900,
        oldPrice: 89900,
        badge: "",
        color: "#3b82f6"
    },
    {
        id: 4,
        title: "Go: разработка высоконагруженных систем",
        category: "backend",
        description: "Освойте язык Go и научитесь создавать высокопроизводительные backend-приложения.",
        duration: "7 месяцев",
        level: "advanced",
        price: 79900,
        oldPrice: 94900,
        badge: "Популярно",
        color: "#8b5cf6"
    },
    {
        id: 5,
        title: "DevOps с Docker и Kubernetes",
        category: "devops",
        description: "Автоматизация развертывания, масштабирование и управление контейнеризированными приложениями.",
        duration: "9 месяцев",
        level: "intermediate",
        price: 84900,
        oldPrice: 99900,
        badge: "",
        color: "#f59e0b"
    },
    {
        id: 6,
        title: "iOS-разработка на SwiftUI",
        category: "mobile",
        description: "Создавайте современные iOS-приложения с использованием declarative framework SwiftUI.",
        duration: "8 месяцев",
        level: "beginner",
        price: 79900,
        oldPrice: 94900,
        badge: "Скидка 20%",
        color: "#ef4444"
    }
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderCourses();
    setupFilters();
    setupFAQ();
    setupScrollTop();
    setupModal();
    setupScrollAnimations();
    setupCourseCardEffects();
});

// Рендеринг курсов
function renderCourses(filter = 'all') {
    const grid = document.getElementById('courses-grid');
    grid.innerHTML = '';
    
    const filteredCourses = filter === 'all' 
        ? courses 
        : courses.filter(course => course.category === filter);
    
    filteredCourses.forEach(course => {
        const levelClass = `level-${course.level}`;
        const levelText = course.level === 'beginner' ? 'Начальный' : 
                         course.level === 'intermediate' ? 'Средний' : 'Продвинутый';
        
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card animate-in';
        courseCard.dataset.category = course.category;
        
        courseCard.innerHTML = `
            ${course.badge ? `<div class="course-badge">${course.badge}</div>` : ''}
            <div class="course-image" style="background: linear-gradient(135deg, ${course.color}40 0%, ${course.color}20 100%);">
                <i class="fas fa-laptop-code" style="font-size: 3rem; color: ${course.color};"></i>
            </div>
            <div class="course-content">
                <div class="course-category">${course.category.toUpperCase()}</div>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div style="margin-top: auto;">
                    <div style="display: flex; gap: 12px; margin-bottom: 16px;">
                        <div class="${levelClass}">${levelText}</div>
                        <div class="course-duration"><i class="far fa-clock"></i> ${course.duration}</div>
                    </div>
                    <div class="course-meta">
                        <div class="course-price">
                            ${course.oldPrice ? `<s>${course.oldPrice.toLocaleString()} ₽</s>` : ''}
                            ${course.price.toLocaleString()} ₽
                        </div>
                        <button class="btn btn-primary btn-sm" data-course-id="${course.id}">Подробнее</button>
                    </div>
                </div>
            </div>
        `;
        
        grid.appendChild(courseCard);
    });
    
    // Добавляем обработчики на кнопки "Подробнее"
    document.querySelectorAll('[data-course-id]').forEach(btn => {
        btn.addEventListener('click', function() {
            const courseId = parseInt(this.dataset.courseId);
            openCourseModal(courseId);
        });
    });
    
    // Повторно инициализируем эффекты для новых карточек
    setupCourseCardEffects();
}

// Настройка фильтров
function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Фильтруем курсы
            const filter = this.dataset.filter;
            renderCourses(filter);
        });
    });
}

// Настройка FAQ (аккордеон)
function setupFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const toggle = this.querySelector('.faq-toggle');
            
            // Закрываем другие открытые ответы
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.previousElementSibling.querySelector('.faq-toggle').classList.remove('active');
                }
            });
            
            // Переключаем текущий ответ
            answer.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    });
}

// Кнопка "Наверх"
function setupScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Модальное окно курса
function setupModal() {
    const modal = document.getElementById('courseModal');
    const closeBtn = document.getElementById('closeModal');
    
    // Закрытие по кнопке
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });
    
    // Закрытие по клику вне окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// Открытие модального окна с информацией о курсе
function openCourseModal(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
    
    const modal = document.getElementById('courseModal');
    const title = document.getElementById('modalCourseTitle');
    const content = document.getElementById('modalCourseContent');
    
    const levelText = course.level === 'beginner' ? 'Начальный' : 
                     course.level === 'intermediate' ? 'Средний' : 'Продвинутый';
    
    title.textContent = course.title;
    
    content.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div style="display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
                <div class="level-${course.level}">${levelText}</div>
                <div style="background-color: var(--bg-tertiary); color: var(--text-primary); padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">
                    ${course.duration}
                </div>
                <div style="background-color: var(--bg-tertiary); color: var(--text-primary); padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">
                    ${course.category.toUpperCase()}
                </div>
            </div>
            
            <p style="color: var(--text-secondary); margin-bottom: 24px;">${course.description}</p>
            
            <div style="background-color: var(--bg-tertiary); padding: 20px; border-radius: var(--radius-md); margin-bottom: 24px;">
                <h4 style="margin-bottom: 12px;">Что вы получите:</h4>
                <ul style="color: var(--text-secondary); padding-left: 20px;">
                    <li style="margin-bottom: 8px;">Доступ ко всем урокам 24/7</li>
                    <li style="margin-bottom: 8px;">Проверку домашки и обратную связь от менторов</li>
                    <li style="margin-bottom: 8px;">5 реальных проектов в портфолио</li>
                    <li style="margin-bottom: 8px;">Подготовку к собеседованиям</li>
                    <li>Гарантию трудоустройства</li>
                </ul>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px;">
                <div>
                    <div class="course-price" style="font-size: 2rem;">
                        ${course.oldPrice ? `<s style="font-size: 1.2rem;">${course.oldPrice.toLocaleString()} ₽</s>` : ''}
                        ${course.price.toLocaleString()} ₽
                    </div>
                    <div style="font-size: 0.9rem; color: var(--text-muted);">или от 5 417 ₽/мес в рассрочку</div>
                </div>
                <button class="btn btn-primary enroll-btn" style="padding: 12px 32px; font-size: 1.1rem;" data-course-id="${course.id}">
                    Записаться на курс <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
    
    // Добавляем обработчик для кнопки записи
    content.querySelector('.enroll-btn').addEventListener('click', function() {
        simulateLoading(this);
    });
    
    modal.classList.add('active');
}

// Анимации при скролле
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за элементами, которые должны появляться при скролле
    document.querySelectorAll('.course-card, .section-header, .faq-item').forEach(el => {
        observer.observe(el);
    });
}

// Эффекты для карточек курсов
function setupCourseCardEffects() {
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
            
            // Добавляем свечение
            this.style.boxShadow = `
                0 20px 40px -10px rgba(0, 0, 0, 0.7),
                0 0 40px rgba(59, 130, 246, 0.3)
            `;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'var(--shadow-xl)';
        });
    });
}

// Имитация загрузки
function simulateLoading(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="loader"></span> Обработка...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
        
        // Показываем уведомление об успехе
        showNotification('Заявка отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
    }, 1500);
}

// Показать уведомление
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Стили для уведомления
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-secondary);
        border: 1px solid ${type === 'success' ? 'var(--success)' : 'var(--danger)'};
        border-left: 4px solid ${type === 'success' ? 'var(--success)' : 'var(--danger)'};
        color: var(--text-primary);
        padding: 16px 20px;
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
        box-shadow: var(--shadow-xl);
    `;
    
    document.body.appendChild(notification);
    
    // Кнопка закрытия
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Автоматическое закрытие
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Добавляем стили для анимации уведомлений
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-close {
        background: none;
        border: none;
        color: var(--text-secondary);
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: auto;
        transition: var(--transition);
    }
    
    .notification-close:hover {
        color: var(--text-primary);
    }
`;
document.head.appendChild(notificationStyles);

// Обработчики для кнопок
document.addEventListener('click', function(e) {
    // Имитация отправки формы при клике на основные кнопки
    if (e.target.classList.contains('btn-primary') && 
        !e.target.closest('.course-card') && 
        !e.target.closest('.modal') &&
        !e.target.classList.contains('enroll-btn')) {
        
        if (e.target.textContent.includes('Записаться') || 
            e.target.textContent.includes('Выбрать') ||
            e.target.textContent.includes('Начать учиться')) {
            simulateLoading(e.target);
        }
    }
    
    // Плавная прокрутка для якорных ссылок
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }
});

// Адаптивное меню для мобильных устройств
function setupMobileMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: var(--text-primary);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 8px;
    `;
    
    document.querySelector('.nav-container').appendChild(menuToggle);
    
    // Показываем на мобильных
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        document.querySelector('.nav-links').style.display = 'none';
    }
    
    // Переключаем меню
    menuToggle.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--bg-secondary)';
            navLinks.style.padding = '20px';
            navLinks.style.gap = '20px';
            navLinks.style.borderTop = '1px solid var(--border-color)';
            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        }
    });
    
    // Ресайз
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            document.querySelector('.nav-links').style.display = 'flex';
            document.querySelector('.nav-links').style.flexDirection = 'row';
            document.querySelector('.nav-links').style.position = 'static';
            document.querySelector('.nav-links').style.background = 'transparent';
            document.querySelector('.nav-links').style.padding = '0';
            menuToggle.style.display = 'none';
        } else {
            menuToggle.style.display = 'block';
            if (document.querySelector('.nav-links').style.display !== 'flex') {
                document.querySelector('.nav-links').style.display = 'none';
            }
        }
    });
}

// Инициализируем мобильное меню
setupMobileMenu();