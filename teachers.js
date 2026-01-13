// Данные преподавателей
const teachers = [
    {
        id: 1,
        name: "Алексей Иванов",
        title: "Senior Frontend Developer",
        company: "Yandex",
        experience: "10 лет в разработке, 5 лет преподавания",
        bio: "Специализируется на React и TypeScript. Участвовал в разработке крупных проектов Яндекс.Карт и Яндекс.Диска. Автор нескольких open-source библиотек.",
        specialties: ["React", "TypeScript", "Next.js", "GraphQL"],
        expertise: "frontend",
        level: "senior",
        rating: 4.9,
        students: 1240,
        courses: 8,
        avatar: "👨‍💻",
        color: "#3b82f6",
        currentCourses: ["React Pro", "TypeScript Masterclass", "Advanced Frontend"],
        contact: {
            email: "alexey@codemaster.ru",
            telegram: "@alexey_frontend"
        }
    },
    {
        id: 2,
        name: "Мария Петрова",
        title: "Lead Backend Engineer",
        company: "Tinkoff",
        experience: "12 лет в разработке, 4 года преподавания",
        bio: "Эксперт в микросервисной архитектуре и высоконагруженных системах. Руководила разработкой бэкенда для Tinkoff Bank.",
        specialties: ["Go", "Microservices", "Kubernetes", "PostgreSQL"],
        expertise: "backend",
        level: "lead",
        rating: 4.8,
        students: 980,
        courses: 6,
        avatar: "👩‍💻",
        color: "#8b5cf6",
        currentCourses: ["Go Professional", "Microservices Architecture", "DevOps Basics"],
        contact: {
            email: "maria@codemaster.ru",
            telegram: "@maria_backend"
        }
    },
    {
        id: 3,
        name: "Дмитрий Смирнов",
        title: "CTO & Solution Architect",
        company: "OZON",
        experience: "15 лет в IT, 6 лет преподавания",
        bio: "Архитектор масштабируемых систем для электронной коммерции. Специализируется на облачных технологиях и распределенных системах.",
        specialties: ["AWS", "System Design", "Scalability", "CI/CD"],
        expertise: "fullstack",
        level: "cto",
        rating: 4.9,
        students: 1560,
        courses: 10,
        avatar: "👨‍🏫",
        color: "#10b981",
        currentCourses: ["System Design Pro", "Cloud Architecture", "Tech Leadership"],
        contact: {
            email: "dmitry@codemaster.ru",
            telegram: "@dmitry_cto"
        }
    },
    {
        id: 4,
        name: "Елена Козлова",
        title: "Senior iOS Developer",
        company: "VK",
        experience: "8 лет в мобильной разработке, 3 года преподавания",
        bio: "Эксперт по iOS разработке с опытом работы в VK и Mail.ru Group. Специализируется на SwiftUI и Combine.",
        specialties: ["Swift", "SwiftUI", "Combine", "iOS Architecture"],
        expertise: "mobile",
        level: "senior",
        rating: 4.7,
        students: 720,
        courses: 5,
        avatar: "👩‍🔬",
        color: "#ef4444",
        currentCourses: ["SwiftUI Mastery", "iOS Development", "Mobile Architecture"],
        contact: {
            email: "elena@codemaster.ru",
            telegram: "@elena_ios"
        }
    },
    {
        id: 5,
        name: "Антон Морозов",
        title: "Data Science Lead",
        company: "Yandex",
        experience: "9 лет в Data Science, 4 года преподавания",
        bio: "Руководитель отдела Data Science в Яндекс. Специализируется на машинном обучении и анализе больших данных.",
        specialties: ["Python", "ML", "Deep Learning", "Big Data"],
        expertise: "data",
        level: "lead",
        rating: 4.8,
        students: 890,
        courses: 7,
        avatar: "🧑‍🔬",
        color: "#f59e0b",
        currentCourses: ["Machine Learning Pro", "Deep Learning", "Data Analysis"],
        contact: {
            email: "anton@codemaster.ru",
            telegram: "@anton_ds"
        }
    },
    {
        id: 6,
        name: "Сергей Волков",
        title: "DevOps Engineer",
        company: "Foreign Company",
        experience: "7 лет в DevOps, 3 года преподавания",
        bio: "Работал в международных компаниях над автоматизацией и инфраструктурой. Эксперт в Docker, Kubernetes и облачных платформах.",
        specialties: ["Docker", "Kubernetes", "Terraform", "AWS"],
        expertise: "devops",
        level: "senior",
        rating: 4.7,
        students: 650,
        courses: 4,
        avatar: "👨‍💼",
        color: "#3b82f6",
        currentCourses: ["DevOps Engineering", "Kubernetes Mastery", "Cloud Infrastructure"],
        contact: {
            email: "sergey@codemaster.ru",
            telegram: "@sergey_devops"
        }
    },
    {
        id: 7,
        name: "Ольга Новикова",
        title: "FullStack Developer",
        company: "VK",
        experience: "6 лет в разработке, 2 года преподавания",
        bio: "Fullstack разработчик с опытом работы над социальными сетями. Специализируется на React и Node.js.",
        specialties: ["React", "Node.js", "PostgreSQL", "Redis"],
        expertise: "fullstack",
        level: "senior",
        rating: 4.6,
        students: 540,
        courses: 3,
        avatar: "👩‍🎨",
        color: "#8b5cf6",
        currentCourses: ["FullStack Development", "Node.js Pro", "React + Node"],
        contact: {
            email: "olga@codemaster.ru",
            telegram: "@olga_fullstack"
        }
    },
    {
        id: 8,
        name: "Игорь Лебедев",
        title: "Android Tech Lead",
        company: "Tinkoff",
        experience: "9 лет в мобильной разработке, 4 года преподавания",
        bio: "Tech Lead Android команды в Tinkoff. Эксперт в Kotlin, Coroutines и современной Android архитектуре.",
        specialties: ["Kotlin", "Android", "Coroutines", "Jetpack Compose"],
        expertise: "mobile",
        level: "lead",
        rating: 4.8,
        students: 680,
        courses: 5,
        avatar: "👨‍🚀",
        color: "#10b981",
        currentCourses: ["Android Development", "Kotlin Mastery", "Mobile Architecture"],
        contact: {
            email: "igor@codemaster.ru",
            telegram: "@igor_android"
        }
    }
];

// Данные отзывов
const reviews = [
    {
        id: 1,
        teacherId: 1,
        reviewer: "Артем Сидоров",
        position: "Frontend Developer в Яндекс",
        rating: 5,
        content: "Алексей - потрясающий преподаватель! Его курс по React полностью изменил мой подход к разработке. Особенно ценна практика - мы делали реальные проекты, а не просто теорию.",
        course: "React Pro",
        date: "2 месяца назад"
    },
    {
        id: 2,
        teacherId: 2,
        reviewer: "Екатерина Иванова",
        position: "Backend Developer в Тинькофф",
        rating: 5,
        content: "Мария обладает уникальной способностью объяснять сложные концепции простым языком. Благодаря ей я успешно прошла собеседование на позицию мидла.",
        course: "Go Professional",
        date: "1 месяц назад"
    },
    {
        id: 3,
        teacherId: 3,
        reviewer: "Михаил Петров",
        position: "Team Lead в OZON",
        rating: 5,
        content: "Дмитрий - один из лучших преподавателей, с которыми я работал. Его знания архитектуры систем помогли мне вырасти до тимлида.",
        course: "System Design Pro",
        date: "3 месяца назад"
    },
    {
        id: 4,
        teacherId: 4,
        reviewer: "Анна Ковалева",
        position: "iOS Developer в VK",
        rating: 5,
        content: "Елена не только прекрасный разработчик, но и отличный ментор. Всегда помогает разобраться в сложных моментах и дает ценные советы.",
        course: "SwiftUI Mastery",
        date: "2 недели назад"
    },
    {
        id: 5,
        teacherId: 5,
        reviewer: "Денис Соколов",
        position: "Data Scientist в Яндекс",
        rating: 5,
        content: "Курс по машинному обучению от Антона - лучшее, что я проходил. Практические задания максимально приближены к реальным задачам.",
        course: "Machine Learning Pro",
        date: "1 месяц назад"
    }
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderTeachers();
    setupFilters();
    setupReviews();
    setupModal();
    setupScrollTop();
    setupScrollAnimations();
    setupMobileMenu();
    setupLoadMore();
});

// Рендеринг преподавателей
function renderTeachers(filter = {}) {
    const grid = document.getElementById('teachersGrid');
    
    // Если это первая загрузка, очищаем
    if (!grid.dataset.page) {
        grid.innerHTML = '';
        grid.dataset.page = '1';
    }
    
    let filteredTeachers = [...teachers];
    
    // Применяем фильтры
    if (filter.specialization && filter.specialization !== 'all') {
        filteredTeachers = filteredTeachers.filter(teacher => 
            teacher.expertise === filter.specialization
        );
    }
    
    if (filter.level && filter.level !== 'all') {
        filteredTeachers = filteredTeachers.filter(teacher => 
            teacher.level === filter.level
        );
    }
    
    if (filter.company && filter.company !== 'all') {
        filteredTeachers = filteredTeachers.filter(teacher => {
            if (filter.company === 'foreign') {
                return teacher.company === 'Foreign Company';
            }
            return teacher.company.toLowerCase() === filter.company.toLowerCase();
        });
    }
    
    // Получаем текущую страницу
    const page = parseInt(grid.dataset.page);
    const itemsPerPage = 4;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const teachersToShow = filteredTeachers.slice(startIndex, endIndex);
    
    // Если ничего не найдено
    if (teachersToShow.length === 0 && page === 1) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 60px 0;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 20px;"></i>
                <h3 style="color: var(--text-primary); margin-bottom: 10px;">Преподаватели не найдены</h3>
                <p style="color: var(--text-secondary);">Попробуйте изменить параметры фильтрации</p>
            </div>
        `;
        return;
    }
    
    // Рендерим преподавателей
    teachersToShow.forEach(teacher => {
        const teacherCard = document.createElement('div');
        teacherCard.className = 'teacher-card animate-in';
        
        teacherCard.innerHTML = `
            <div class="teacher-header">
                <div class="teacher-avatar">
                    <div class="teacher-avatar-placeholder" style="background: ${teacher.color}20; color: ${teacher.color};">
                        ${teacher.avatar}
                    </div>
                </div>
                <h3 class="teacher-name">${teacher.name}</h3>
                <p class="teacher-title">${teacher.title}</p>
                <div class="teacher-company">
                    <i class="fas fa-building"></i>
                    <span>${teacher.company}</span>
                </div>
            </div>
            <div class="teacher-body">
                <div class="teacher-specialties">
                    ${teacher.specialties.map(specialty => 
                        `<span class="specialty-tag">${specialty}</span>`
                    ).join('')}
                </div>
                <p class="teacher-experience">${teacher.experience}</p>
                <div class="teacher-stats">
                    <div class="stat">
                        <span class="stat-value">${teacher.rating}</span>
                        <span class="stat-label">Рейтинг</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${teacher.students.toLocaleString()}</span>
                        <span class="stat-label">Студентов</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${teacher.courses}</span>
                        <span class="stat-label">Курсов</span>
                    </div>
                </div>
            </div>
            <div class="teacher-footer">
                <button class="btn btn-primary btn-view-profile" data-teacher-id="${teacher.id}">
                    <i class="fas fa-user"></i> Профиль преподавателя
                </button>
            </div>
        `;
        
        grid.appendChild(teacherCard);
    });
    
    // Добавляем обработчики для кнопок
    document.querySelectorAll('[data-teacher-id]').forEach(btn => {
        btn.addEventListener('click', function() {
            const teacherId = parseInt(this.dataset.teacherId);
            openTeacherModal(teacherId);
        });
    });
    
    // Показываем/скрываем кнопку "Показать еще"
    const loadMoreBtn = document.getElementById('loadMoreTeachers');
    if (endIndex >= filteredTeachers.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// Настройка фильтров
function setupFilters() {
    const filterChips = document.querySelectorAll('.filter-chip');
    
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const group = this.parentElement;
            const groupType = this.dataset.specialization ? 'specialization' : 
                             this.dataset.level ? 'level' : 'company';
            
            // Убираем активный класс у всех чипов в группе
            group.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            
            // Добавляем активный класс текущему чипу
            this.classList.add('active');
            
            // Собираем фильтры
            const filters = {};
            
            if (this.dataset.specialization) {
                filters.specialization = this.dataset.specialization;
            }
            
            if (this.dataset.level) {
                filters.level = this.dataset.level;
            }
            
            if (this.dataset.company) {
                filters.company = this.dataset.company;
            }
            
            // Сбрасываем пагинацию
            const grid = document.getElementById('teachersGrid');
            grid.dataset.page = '1';
            
            // Применяем фильтры
            renderTeachers(filters);
        });
    });
}

// Настройка отзывов
function setupReviews() {
    const track = document.getElementById('reviewsTrack');
    const prevBtn = document.querySelector('.prev-review');
    const nextBtn = document.querySelector('.next-review');
    let currentIndex = 0;
    
    // Рендерим отзывы
    reviews.forEach(review => {
        const teacher = teachers.find(t => t.id === review.teacherId);
        if (!teacher) return;
        
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        
        reviewCard.innerHTML = `
            <div class="review-header">
                <div class="reviewer-avatar">
                    ${review.reviewer.charAt(0)}
                </div>
                <div class="reviewer-info">
                    <h4>${review.reviewer}</h4>
                    <p>${review.position}</p>
                </div>
                <div class="review-rating">
                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                </div>
            </div>
            <div class="review-content">
                "${review.content}"
            </div>
            <div class="review-meta">
                <div class="review-course">
                    <i class="fas fa-graduation-cap"></i>
                    <span>${review.course}</span>
                </div>
                <div class="review-date">
                    ${review.date}
                </div>
            </div>
        `;
        
        track.appendChild(reviewCard);
    });
    
    // Навигация по отзывам
    function updateReviewsPosition() {
        const cardWidth = track.children[0].offsetWidth + 30; // + gap
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateReviewsPosition();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < track.children.length - 3) {
            currentIndex++;
            updateReviewsPosition();
        }
    });
    
    // Адаптивная навигация
    window.addEventListener('resize', updateReviewsPosition);
}

// Модальное окно преподавателя
function setupModal() {
    const modal = document.getElementById('teacherModal');
    const closeBtn = document.getElementById('closeTeacherModal');
    
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

// Открытие модального окна с информацией о преподавателе
function openTeacherModal(teacherId) {
    const teacher = teachers.find(t => t.id === teacherId);
    if (!teacher) return;
    
    const modal = document.getElementById('teacherModal');
    const title = document.getElementById('modalTeacherName');
    const content = document.getElementById('modalTeacherContent');
    
    title.textContent = teacher.name;
    
    content.innerHTML = `
        <div class="teacher-detail-header">
            <div class="teacher-detail-avatar">
                <div class="teacher-avatar-placeholder" style="background: ${teacher.color}20; color: ${teacher.color}; font-size: 3rem;">
                    ${teacher.avatar}
                </div>
            </div>
            <div class="teacher-detail-info">
                <h4>${teacher.title}</h4>
                <h2>${teacher.name}</h2>
                <div class="teacher-detail-company">
                    <i class="fas fa-building"></i>
                    <span>${teacher.company}</span>
                </div>
                <p class="teacher-detail-experience">${teacher.experience}</p>
            </div>
        </div>
        <div class="teacher-detail-body">
            <div class="detail-section">
                <h3><i class="fas fa-user-graduate"></i> О преподавателе</h3>
                <p class="teacher-bio">${teacher.bio}</p>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-star"></i> Экспертиза</h3>
                <div class="expertise-list">
                    ${teacher.specialties.map(specialty => 
                        `<span class="expertise-item">${specialty}</span>`
                    ).join('')}
                </div>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-book"></i> Ведет курсы</h3>
                <ul class="courses-list">
                    ${teacher.currentCourses.map(course => 
                        `<li>
                            <span>${course}</span>
                            <a href="index.html" class="course-link">Перейти к курсу <i class="fas fa-arrow-right"></i></a>
                        </li>`
                    ).join('')}
                </ul>
            </div>
        </div>
        <div class="teacher-detail-footer">
            <div class="teacher-contact-info">
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>${teacher.contact.email}</span>
                </div>
                <div class="contact-item">
                    <i class="fab fa-telegram"></i>
                    <span>${teacher.contact.telegram}</span>
                </div>
            </div>
            <button class="btn btn-primary">
                <i class="fas fa-calendar-alt"></i> Записаться на консультацию
            </button>
        </div>
    `;
    
    // Добавляем обработчик для кнопки записи
    content.querySelector('.btn-primary').addEventListener('click', function() {
        simulateLoading(this, `Запрос на консультацию к ${teacher.name} отправлен`);
    });
    
    modal.classList.add('active');
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
    document.querySelectorAll('.teacher-card, .process-step, .review-card').forEach(el => {
        observer.observe(el);
    });
}

// Загрузка еще преподавателей
function setupLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreTeachers');
    
    loadMoreBtn.addEventListener('click', function() {
        const grid = document.getElementById('teachersGrid');
        const currentPage = parseInt(grid.dataset.page);
        grid.dataset.page = (currentPage + 1).toString();
        
        // Получаем активные фильтры
        const filters = {};
        const activeChips = document.querySelectorAll('.filter-chip.active');
        
        activeChips.forEach(chip => {
            if (chip.dataset.specialization) {
                filters.specialization = chip.dataset.specialization;
            }
            if (chip.dataset.level) {
                filters.level = chip.dataset.level;
            }
            if (chip.dataset.company) {
                filters.company = chip.dataset.company;
            }
        });
        
        renderTeachers(filters);
        
        // Прокручиваем к новым элементам
        setTimeout(() => {
            const newCards = grid.querySelectorAll('.teacher-card:not(.animate-in)');
            if (newCards.length > 0) {
                newCards[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 100);
    });
}

// Мобильное меню
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

// Имитация загрузки
function simulateLoading(button, message = 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.') {
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="loader"></span> Обработка...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
        showNotification(message, 'success');
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
    // Имитация отправки заявки стать преподавателем
    if (e.target.closest('.become-teacher-section .btn-primary')) {
        simulateLoading(e.target, 'Заявка на преподавание отправлена! Мы рассмотрим ее в течение 3 рабочих дней.');
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