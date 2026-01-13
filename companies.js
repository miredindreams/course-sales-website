// Данные кейсов компаний
const companyCases = [
    {
        id: 1,
        company: "Yandex",
        industry: "IT & Поисковые системы",
        logo: "🔍",
        color: "#FF0000",
        challenge: "Необходимо было быстро обучить 50+ разработчиков работе с новым внутренним фреймворком для фронтенда.",
        solution: "Разработали интенсивный 6-недельный курс с практическими заданиями на реальных проектах компании. Преподавателями выступили архитекторы фреймворка.",
        results: [
            "Время адаптации разработчиков сократилось на 60%",
            "Количество ошибок при внедрении уменьшилось на 45%",
            "100% разработчиков успешно прошли обучение"
        ],
        stats: {
            employees: "50+",
            duration: "6 недель",
            satisfaction: "98%"
        }
    },
    {
        id: 2,
        company: "Tinkoff",
        industry: "Финансовые технологии",
        logo: "🏦",
        color: "#FFDD00",
        challenge: "Требовалось повысить квалификацию команды DevOps для работы с Kubernetes в высоконагруженной банковской системе.",
        solution: "Создали индивидуальную программу обучения с акцентом на безопасность, мониторинг и автоматизацию в финансовом секторе.",
        results: [
            "Время развертывания приложений сократилось на 70%",
            "Увеличилась отказоустойчивость системы",
            "Команда самостоятельно внедрила новые практики"
        ],
        stats: {
            employees: "25",
            duration: "3 месяца",
            satisfaction: "96%"
        }
    },
    {
        id: 3,
        company: "OZON",
        industry: "Электронная коммерция",
        logo: "📦",
        color: "#005BFF",
        challenge: "Нужно было подготовить junior-разработчиков для работы с микросервисной архитектурой высоконагруженного маркетплейса.",
        solution: "Реализовали программу стажировки с обучением, менторством и постепенным вовлечением в реальные проекты компании.",
        results: [
            "20 junior-разработчиков стали полноценными членами команды",
            "Снизилась нагрузка на senior-разработчиков",
            "Улучшилась культура код-ревью в командах"
        ],
        stats: {
            employees: "20",
            duration: "4 месяца",
            satisfaction: "95%"
        }
    },
    {
        id: 4,
        company: "VK",
        industry: "Социальные сети",
        logo: "👥",
        color: "#0077FF",
        challenge: "Требовалось обучить распределенные команды из разных стран современным подходам к разработке мобильных приложений.",
        solution: "Разработали онлайн-программу с учетом разных часовых поясов, интерактивными воркшопами и индивидуальными консультациями.",
        results: [
            "Единые стандарты разработки во всех командах",
            "Улучшилось качество кода на 40%",
            "Ускорился процесс онбординга новых разработчиков"
        ],
        stats: {
            employees: "100+",
            duration: "2 месяца",
            satisfaction: "97%"
        }
    },
    {
        id: 5,
        company: "Сбер",
        industry: "Банковский сектор",
        logo: "💳",
        color: "#00A550",
        challenge: "Необходимо было перевести legacy-системы на современный стек технологий с обучением действующих разработчиков.",
        solution: "Поэтапная программа обучения с параллельным рефакторингом кода и внедрением лучших практик.",
        results: [
            "Успешная миграция 3 крупных систем",
            "Производительность команд выросла на 35%",
            "Снизились операционные расходы на поддержку"
        ],
        stats: {
            employees: "75",
            duration: "8 месяцев",
            satisfaction: "94%"
        }
    }
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderCompanyCases();
    setupForm();
    setupFAQ();
    setupScrollTop();
    setupScrollAnimations();
    setupMobileMenu();
    setupCasesNavigation();
});

// Рендеринг кейсов компаний
function renderCompanyCases() {
    const track = document.getElementById('casesTrack');
    track.innerHTML = '';
    
    companyCases.forEach(companyCase => {
        const caseCard = document.createElement('div');
        caseCard.className = 'case-card animate-in';
        
        caseCard.innerHTML = `
            <div class="case-header">
                <div class="company-logo" style="background: ${companyCase.color}20; color: ${companyCase.color};">
                    ${companyCase.logo}
                </div>
                <h3 class="company-name">${companyCase.company}</h3>
                <p class="company-industry">${companyCase.industry}</p>
                <div class="company-stats">
                    <div class="company-stat">
                        <span class="stat-value">${companyCase.stats.employees}</span>
                        <span class="stat-label">сотрудников</span>
                    </div>
                    <div class="company-stat">
                        <span class="stat-value">${companyCase.stats.duration}</span>
                        <span class="stat-label">обучения</span>
                    </div>
                    <div class="company-stat">
                        <span class="stat-value">${companyCase.stats.satisfaction}</span>
                        <span class="stat-label">удовлетворенность</span>
                    </div>
                </div>
            </div>
            <div class="case-body">
                <div class="case-challenge">
                    <h4>Задача</h4>
                    <p>${companyCase.challenge}</p>
                </div>
                <div class="case-solution">
                    <h4>Решение</h4>
                    <p>${companyCase.solution}</p>
                </div>
                <div class="case-results">
                    <h4>Результаты</h4>
                    <ul class="results-list">
                        ${companyCase.results.map(result => 
                            `<li><i class="fas fa-check"></i> ${result}</li>`
                        ).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        track.appendChild(caseCard);
    });
}

// Настройка навигации кейсов
function setupCasesNavigation() {
    const track = document.getElementById('casesTrack');
    const prevBtn = document.querySelector('.prev-case');
    const nextBtn = document.querySelector('.next-case');
    let currentIndex = 0;
    
    function updateCasesPosition() {
        if (track.children.length === 0) return;
        
        const cardWidth = track.children[0].offsetWidth + 30; // + gap
        const visibleCards = window.innerWidth > 1024 ? 3 : 
                           window.innerWidth > 768 ? 2 : 1;
        
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        // Обновляем состояние кнопок
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= track.children.length - visibleCards;
        
        prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
        nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCasesPosition();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const visibleCards = window.innerWidth > 1024 ? 3 : 
                           window.innerWidth > 768 ? 2 : 1;
        
        if (currentIndex < track.children.length - visibleCards) {
            currentIndex++;
            updateCasesPosition();
        }
    });
    
    // Адаптивная навигация при ресайзе
    window.addEventListener('resize', updateCasesPosition);
    
    // Инициализация
    updateCasesPosition();
}

// Настройка формы
function setupForm() {
    const form = document.getElementById('companyForm');
    
    // Маска для телефона
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value.length <= 1) {
                value = '+7 (' + value;
            } else if (value.length <= 4) {
                value = '+7 (' + value.substring(1, 4);
            } else if (value.length <= 7) {
                value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7);
            } else if (value.length <= 9) {
                value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9);
            } else {
                value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
            }
        }
        
        e.target.value = value;
    });
    
    // Отправка формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Имитация отправки
        submitBtn.innerHTML = '<span class="loader"></span> Отправка...';
        submitBtn.disabled = true;
        
        // Собираем данные формы
        const formData = {
            company: document.getElementById('companyName').value,
            contactName: document.getElementById('contactName').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            employeesCount: document.getElementById('employeesCount').value,
            message: document.getElementById('message').value
        };
        
        // Имитация задержки отправки
        setTimeout(() => {
            // В реальном проекте здесь был бы fetch запрос
            console.log('Данные формы:', formData);
            
            // Сброс формы
            form.reset();
            
            // Возвращаем кнопку в исходное состояние
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Показываем уведомление об успехе
            showNotification('Заявка успешно отправлена! Мы свяжемся с вами в течение 2 часов.', 'success');
            
            // Показываем благодарственное сообщение
            showThankYouMessage(formData.contactName);
        }, 2000);
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
    document.querySelectorAll('.solution-card, .process-step, .case-card').forEach(el => {
        observer.observe(el);
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

// Показать благодарственное сообщение
function showThankYouMessage(name) {
    const thankYouModal = document.createElement('div');
    thankYouModal.className = 'thank-you-modal';
    thankYouModal.innerHTML = `
        <div class="thank-you-content">
            <div class="thank-you-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>Спасибо, ${name || 'коллега'}!</h3>
            <p>Ваша заявка успешно отправлена. Наш менеджер свяжется с вами в течение 2 часов для обсуждения деталей обучения.</p>
            <p>А пока вы можете:</p>
            <ul>
                <li><i class="fas fa-download"></i> Скачать презентацию наших услуг для компаний</li>
                <li><i class="fas fa-calendar"></i> Записаться на бесплатную демо-сессию</li>
                <li><i class="fas fa-book"></i> Посмотреть наши кейсы</li>
            </ul>
            <div class="thank-you-buttons">
                <button class="btn btn-primary download-presentation">
                    <i class="fas fa-download"></i> Скачать презентацию
                </button>
                <button class="btn btn-secondary close-thank-you">
                    Закрыть
                </button>
            </div>
        </div>
    `;
    
    // Стили для модального окна
    thankYouModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 4000;
        animation: fadeIn 0.3s ease;
        backdrop-filter: blur(5px);
    `;
    
    const thankYouContent = thankYouModal.querySelector('.thank-you-content');
    thankYouContent.style.cssText = `
        background: var(--bg-secondary);
        border-radius: var(--radius-lg);
        padding: 40px;
        max-width: 500px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        border: 1px solid var(--border-color);
        animation: slideUp 0.3s ease;
    `;
    
    // Добавляем стили для иконки и текста
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from {
                transform: translateY(30px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        .thank-you-icon {
            width: 80px;
            height: 80px;
            background: var(--success);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px;
            font-size: 2.5rem;
            color: white;
        }
        
        .thank-you-content h3 {
            font-size: 1.8rem;
            margin-bottom: 20px;
            text-align: center;
            color: var(--text-primary);
        }
        
        .thank-you-content p {
            color: var(--text-secondary);
            margin-bottom: 15px;
            line-height: 1.6;
        }
        
        .thank-you-content ul {
            list-style: none;
            margin: 20px 0 30px;
            padding-left: 0;
        }
        
        .thank-you-content li {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
            color: var(--text-secondary);
            padding: 12px;
            background: var(--bg-card);
            border-radius: var(--radius-md);
            border: 1px solid var(--border-color);
        }
        
        .thank-you-content li i {
            color: var(--accent-primary);
        }
        
        .thank-you-buttons {
            display: flex;
            gap: 15px;
            margin-top: 30px;
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(thankYouModal);
    
    // Обработчики кнопок
    thankYouModal.querySelector('.download-presentation').addEventListener('click', function() {
        showNotification('Презентация начнет скачиваться через несколько секунд...', 'success');
        // В реальном проекте здесь был бы fetch для скачивания файла
        setTimeout(() => {
            showNotification('Презентация успешно скачана!', 'success');
        }, 1500);
    });
    
    thankYouModal.querySelector('.close-thank-you').addEventListener('click', function() {
        thankYouModal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => thankYouModal.remove(), 300);
    });
    
    // Закрытие по клику вне окна
    thankYouModal.addEventListener('click', function(e) {
        if (e.target === thankYouModal) {
            thankYouModal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => thankYouModal.remove(), 300);
        }
    });
}

// Обработчики для кнопок на странице
document.addEventListener('click', function(e) {
    // Кнопка "Обсудить проект"
    if (e.target.closest('.companies-hero .btn-primary')) {
        e.preventDefault();
        document.querySelector('.form-section').scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    // Кнопка "Смотреть кейсы"
    if (e.target.closest('.companies-hero .btn-secondary')) {
        e.preventDefault();
        document.querySelector('.cases-section').scrollIntoView({
            behavior: 'smooth'
        });
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

// Добавляем стили для анимации уведомлений (если еще нет)
if (!document.querySelector('style[data-notification-styles]')) {
    const notificationStyles = document.createElement('style');
    notificationStyles.setAttribute('data-notification-styles', 'true');
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
}