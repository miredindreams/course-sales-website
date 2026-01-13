// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    loadVacancy();
    setupForm();
    setupSimilarVacancies();
    setupScrollTop();
    setupMobileMenu();
});

// Загрузка вакансии
function loadVacancy() {
    // Получаем ID вакансии из URL
    const urlParams = new URLSearchParams(window.location.search);
    const vacancyId = urlParams.get('id');
    
    if (!vacancyId) {
        // Если нет ID, показываем ошибку
        showError('Вакансия не найдена');
        return;
    }
    
    // В реальном проекте здесь был бы fetch запрос
    // Для демо используем данные из career.js
    const allVacancies = window.vacancies || [];
    const currentVacancy = allVacancies.find(v => v.id == vacancyId);
    
    if (!currentVacancy) {
        showError('Вакансия не найдена');
        return;
    }
    
    renderVacancy(currentVacancy);
    updatePageTitle(currentVacancy);
}

// Рендеринг вакансии
function renderVacancy(vacancy) {
    const container = document.getElementById('vacancyContent');
    if (!container) return;
    
    container.innerHTML = `
        <div class="vacancy-header">
            <h1 class="vacancy-title">${vacancy.title}</h1>
            
            <div class="vacancy-meta">
                <span class="vacancy-tag tag-department">
                    <i class="fas fa-building"></i>
                    ${getDepartmentName(vacancy.department)}
                </span>
                <span class="vacancy-tag tag-experience">
                    <i class="fas fa-chart-line"></i>
                    ${getExperienceName(vacancy.experience)}
                </span>
                <span class="vacancy-tag tag-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${getLocationName(vacancy.location)} ${vacancy.remote ? '(Удаленно)' : ''}
                </span>
                <span class="vacancy-salary">${vacancy.salary}</span>
            </div>
            
            <p>${vacancy.description}</p>
            
            <div class="vacancy-actions">
                <button class="btn btn-primary" id="applyNowBtn">
                    <i class="fas fa-paper-plane"></i> Откликнуться сейчас
                </button>
                <button class="btn btn-outline" id="saveVacancyBtn">
                    <i class="far fa-heart"></i> Сохранить
                </button>
            </div>
        </div>
        
        <div class="vacancy-details">
            <div class="detail-section">
                <h3><i class="fas fa-tasks"></i> Обязанности</h3>
                <ul>
                    <li>Разработка и поддержка функциональности образовательной платформы</li>
                    <li>Участие в проектировании архитектуры и принятии технических решений</li>
                    <li>Код-ревью, менторство младших коллег и обмен знаниями в команде</li>
                    <li>Оптимизация производительности и решение проблем масштабирования</li>
                    <li>Тестирование, обеспечение качества и покрытие кода тестами</li>
                    <li>Взаимодействие с продуктовой командой и другими отделами компании</li>
                </ul>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-graduation-cap"></i> Требования</h3>
                <ul>
                    ${vacancy.requirements.map(req => `<li>${req}</li>`).join('')}
                    <li>Опыт коммерческой разработки от 3 лет для senior позиций</li>
                    <li>Умение работать в команде и эффективно коммуницировать</li>
                    <li>Понимание принципов SOLID, DRY, KISS</li>
                    <li>Знание паттернов проектирования и архитектурных подходов</li>
                </ul>
                
                <div class="tech-stack">
                    ${vacancy.requirements.map(req => `<span class="tech-item">${req}</span>`).join('')}
                </div>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-plus-circle"></i> Будет преимуществом</h3>
                <ul>
                    <li>Опыт работы в образовательных проектах или EdTech</li>
                    <li>Знание современных методологий разработки (Agile, Scrum, Kanban)</li>
                    <li>Опыт проведения технических собеседований и менторства</li>
                    <li>Английский язык уровня B1 и выше</li>
                    <li>Опыт работы с высоконагруженными системами</li>
                    <li>Участие в open-source проектах или наличие портфолио</li>
                </ul>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-gift"></i> Мы предлагаем</h3>
                <div class="benefits-grid">
                    <div class="benefit-item">
                        <i class="fas fa-money-bill-wave"></i>
                        <span>Конкурентную зарплату</span>
                    </div>
                    <div class="benefit-item">
                        <i class="fas fa-laptop-house"></i>
                        <span>Удаленную работу</span>
                    </div>
                    <div class="benefit-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span>Гибкий график</span>
                    </div>
                    <div class="benefit-item">
                        <i class="fas fa-graduation-cap"></i>
                        <span>Бюджет на обучение</span>
                    </div>
                    <div class="benefit-item">
                        <i class="fas fa-heartbeat"></i>
                        <span>Медицинскую страховку</span>
                    </div>
                    <div class="benefit-item">
                        <i class="fas fa-dumbbell"></i>
                        <span>Спортивную компенсацию</span>
                    </div>
                    <div class="benefit-item">
                        <i class="fas fa-laptop"></i>
                        <span>Современное оборудование</span>
                    </div>
                    <div class="benefit-item">
                        <i class="fas fa-chart-line"></i>
                        <span>Карьерный рост</span>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-sitemap"></i> Процесс найма</h3>
                <div class="hiring-steps">
                    <div class="hiring-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>Рассмотрение резюме</h4>
                            <p>HR-менеджер рассматривает ваше резюме в течение 3 рабочих дней</p>
                        </div>
                    </div>
                    
                    <div class="hiring-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Тестовое задание</h4>
                            <p>Практическая задача, соответствующая уровню позиции (4-8 часов)</p>
                        </div>
                    </div>
                    
                    <div class="hiring-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>Техническое интервью</h4>
                            <p>Собеседование с будущим руководителем и командой (1-2 часа)</p>
                        </div>
                    </div>
                    
                    <div class="hiring-step">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h4>Культурное интервью</h4>
                            <p>Знакомство с HR и обсуждение ценностей компании (1 час)</p>
                        </div>
                    </div>
                    
                    <div class="hiring-step">
                        <div class="step-number">5</div>
                        <div class="step-content">
                            <h4>Оффер</h4>
                            <p>Обсуждение условий работы и подписание договора (1-3 дня)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Добавляем обработчики кнопок
    document.getElementById('applyNowBtn').addEventListener('click', function() {
        document.querySelector('.apply-sidebar').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    document.getElementById('saveVacancyBtn').addEventListener('click', function() {
        const btn = this;
        const originalHTML = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-heart"></i> Сохранено';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.disabled = false;
            showNotification('Вакансия сохранена в избранное', 'success');
        }, 2000);
    });
}

// Настройка похожих вакансий
function setupSimilarVacancies() {
    const container = document.getElementById('similarVacancies');
    if (!container) return;
    
    // Получаем ID текущей вакансии
    const urlParams = new URLSearchParams(window.location.search);
    const currentVacancyId = urlParams.get('id');
    
    if (!currentVacancyId) return;
    
    // В реальном проекте здесь был бы fetch запрос
    const allVacancies = window.vacancies || [];
    
    // Находим текущую вакансию
    const currentVacancy = allVacancies.find(v => v.id == currentVacancyId);
    if (!currentVacancy) return;
    
    // Находим похожие вакансии (такой же отдел и опыт, но не текущая)
    const similarVacancies = allVacancies.filter(v => 
        v.id != currentVacancyId && 
        v.department === currentVacancy.department &&
        v.experience === currentVacancy.experience
    ).slice(0, 3);
    
    if (similarVacancies.length === 0) {
        container.innerHTML = '<p class="no-similar">Похожих вакансий не найдено</p>';
        return;
    }
    
    container.innerHTML = '';
    
    similarVacancies.forEach(vacancy => {
        const vacancyElement = document.createElement('div');
        vacancyElement.className = 'similar-vacancy animate-in';
        
        vacancyElement.innerHTML = `
            <h4>${vacancy.title}</h4>
            <p>${vacancy.description}</p>
            
            <div class="vacancy-tags">
                <span class="vacancy-tag tag-department">
                    ${getDepartmentName(vacancy.department)}
                </span>
                <span class="vacancy-tag tag-experience">
                    ${getExperienceName(vacancy.experience)}
                </span>
                ${vacancy.remote ? '<span class="vacancy-tag tag-remote">Удаленно</span>' : ''}
            </div>
            
            <div class="vacancy-footer">
                <span class="vacancy-salary-sm">${vacancy.salary}</span>
                <a href="vacancy.html?id=${vacancy.id}" class="btn btn-outline btn-sm">
                    Подробнее
                </a>
            </div>
        `;
        
        container.appendChild(vacancyElement);
    });
}

// Настройка формы
function setupForm() {
    const form = document.getElementById('vacancyForm');
    if (!form) return;
    
    // Маска для телефона
    const phoneInput = document.getElementById('vacancyPhone');
    if (phoneInput) {
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
    }
    
    // Загрузка файла
    const fileInput = document.getElementById('vacancyResume');
    const fileInfo = document.getElementById('vacancyFileInfo');
    
    if (fileInput && fileInfo) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const fileSize = (file.size / 1024 / 1024).toFixed(2); // MB
                const fileName = file.name.length > 25 ? file.name.substring(0, 25) + '...' : file.name;
                
                fileInfo.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-file" style="color: var(--accent-primary);"></i>
                        <div>
                            <div style="font-weight: 500;">${fileName}</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">${fileSize} MB</div>
                        </div>
                    </div>
                `;
            } else {
                fileInfo.innerHTML = '';
            }
        });
    }
    
    // Отправка формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Проверка обязательных полей
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = 'var(--danger)';
                isValid = false;
            } else {
                field.style.borderColor = '';
            }
        });
        
        if (!isValid) {
            showNotification('Заполните все обязательные поля', 'warning');
            return;
        }
        
        // Проверка email
        const email = document.getElementById('vacancyEmail').value;
        if (!validateEmail(email)) {
            showNotification('Введите корректный email', 'warning');
            return;
        }
        
        // Проверка файла
        const fileInput = document.getElementById('vacancyResume');
        if (!fileInput.files || fileInput.files.length === 0) {
            showNotification('Загрузите резюме', 'warning');
            return;
        }
        
        const file = fileInput.files[0];
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSize = 5 * 1024 * 1024; // 5MB
        
        if (!allowedTypes.includes(file.type)) {
            showNotification('Разрешены только файлы PDF, DOC, DOCX', 'warning');
            return;
        }
        
        if (file.size > maxSize) {
            showNotification('Размер файла не должен превышать 5MB', 'warning');
            return;
        }
        
        // Имитация отправки
        submitBtn.innerHTML = '<span class="loader"></span> Отправка...';
        submitBtn.disabled = true;
        
        // Получаем ID вакансии из URL
        const urlParams = new URLSearchParams(window.location.search);
        const vacancyId = urlParams.get('id');
        
        // Собираем данные формы
        const formData = {
            vacancyId: vacancyId,
            name: document.getElementById('vacancyName').value,
            email: email,
            phone: document.getElementById('vacancyPhone').value,
            message: document.getElementById('vacancyMessage').value,
            links: document.getElementById('vacancyLinks').value,
            resume: file.name
        };
        
        // Имитация задержки отправки
        setTimeout(() => {
            // В реальном проекте здесь был бы fetch запрос
            console.log('Отклик на вакансию:', formData);
            
            // Сброс формы
            form.reset();
            fileInfo.innerHTML = '';
            
            // Возвращаем кнопку в исходное состояние
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Показываем уведомление об успехе
            showNotification('Отклик успешно отправлен! HR-менеджер свяжется с вами в течение 3 рабочих дней.', 'success');
            
            // Показываем благодарственное сообщение
            showThankYouMessage(formData.name);
        }, 2000);
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

// Вспомогательные функции
function showError(message) {
    const container = document.getElementById('vacancyContent');
    if (container) {
        container.innerHTML = `
            <div class="vacancy-error">
                <i class="fas fa-exclamation-circle"></i>
                <h2>${message}</h2>
                <p>Вернуться на <a href="career.html">страницу карьеры</a></p>
            </div>
        `;
    }
}

function updatePageTitle(vacancy) {
    if (vacancy) {
        document.title = `${vacancy.title} | CodeMaster Карьера`;
    }
}

function getDepartmentName(department) {
    const departments = {
        'tech': 'Технический',
        'education': 'Образовательный',
        'product': 'Продуктовый',
        'marketing': 'Маркетинг',
        'sales': 'Продажи',
        'support': 'Поддержка'
    };
    
    return departments[department] || department;
}

function getExperienceName(experience) {
    const experiences = {
        'intern': 'Стажер',
        'junior': 'Junior',
        'middle': 'Middle',
        'senior': 'Senior',
        'lead': 'Lead'
    };
    
    return experiences[experience] || experience;
}

function getLocationName(location) {
    const locations = {
        'remote': 'Удаленно',
        'moscow': 'Москва',
        'spb': 'Санкт-Петербург',
        'other': 'Другой город'
    };
    
    return locations[location] || location;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
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
            <h3>Спасибо за отклик, ${name || 'кандидат'}!</h3>
            <p>Ваш отклик успешно отправлен в HR-отдел. Мы рассмотрим ваше резюме и свяжемся с вами в течение 3 рабочих дней.</p>
            
            <div class="thank-you-next">
                <h4>Рекомендуем также:</h4>
                <ul>
                    <li><i class="fas fa-search"></i> Посмотреть другие вакансии</li>
                    <li><i class="fas fa-user-plus"></i> Заполнить полный профиль кандидата</li>
                    <li><i class="fas fa-bell"></i> Подписаться на уведомления о новых вакансиях</li>
                </ul>
            </div>
            
            <div class="thank-you-buttons">
                <a href="career.html" class="btn btn-primary">
                    <i class="fas fa-search"></i> К другим вакансиям
                </a>
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
        left: