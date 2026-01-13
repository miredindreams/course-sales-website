// Данные вакансий
const vacancies = [
    {
        id: 1,
        title: "Senior Frontend Developer (React/TypeScript)",
        department: "tech",
        experience: "senior",
        location: "remote",
        salary: "от 350 000 ₽",
        description: "Разработка пользовательских интерфейсов для образовательной платформы, участие в проектировании архитектуры, код-ревью.",
        requirements: ["React", "TypeScript", "Next.js", "GraphQL", "Redux"],
        date: "2 дня назад",
        remote: true,
        tags: ["Полная занятость", "Удаленно", "Senior"]
    },
    {
        id: 2,
        title: "Middle Backend Developer (Node.js)",
        department: "tech",
        experience: "middle",
        location: "remote",
        salary: "от 220 000 ₽",
        description: "Разработка серверной части платформы, оптимизация производительности, работа с микросервисной архитектурой.",
        requirements: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
        date: "5 дней назад",
        remote: true,
        tags: ["Полная занятость", "Удаленно", "Middle"]
    },
    {
        id: 3,
        title: "Преподаватель JavaScript",
        department: "education",
        experience: "senior",
        location: "remote",
        salary: "от 180 000 ₽ + бонусы",
        description: "Ведение онлайн-курсов по JavaScript, создание учебных материалов, менторство студентов.",
        requirements: ["JavaScript", "React", "Преподавание", "Коммуникация"],
        date: "1 неделя назад",
        remote: true,
        tags: ["Частичная занятость", "Удаленно", "Senior"]
    },
    {
        id: 4,
        title: "Product Manager",
        department: "product",
        experience: "middle",
        location: "moscow",
        salary: "от 300 000 ₽",
        description: "Управление продуктом образовательной платформы, анализ метрик, работа с командами разработки.",
        requirements: ["Product Management", "Analytics", "Agile", "Figma", "SQL"],
        date: "3 дня назад",
        remote: false,
        tags: ["Полная занятость", "Москва", "Middle"]
    },
    {
        id: 5,
        title: "DevOps Engineer",
        department: "tech",
        experience: "middle",
        location: "remote",
        salary: "от 280 000 ₽",
        description: "Настройка и поддержка инфраструктуры, автоматизация процессов, мониторинг и обеспечение отказоустойчивости.",
        requirements: ["Kubernetes", "Docker", "AWS", "Terraform", "CI/CD"],
        date: "4 дня назад",
        remote: true,
        tags: ["Полная занятость", "Удаленно", "Middle"]
    },
    {
        id: 6,
        title: "Стажер Frontend Developer",
        department: "tech",
        experience: "intern",
        location: "remote",
        salary: "50 000 ₽",
        description: "Стажировка с наставником, участие в разработке реальных проектов, обучение современным технологиям.",
        requirements: ["HTML/CSS", "JavaScript", "Git", "Желание учиться"],
        date: "1 неделя назад",
        remote: true,
        tags: ["Стажировка", "Удаленно", "Без опыта"]
    },
    {
        id: 7,
        title: "Content Marketing Manager",
        department: "marketing",
        experience: "middle",
        location: "remote",
        salary: "от 180 000 ₽",
        description: "Создание контента для блога и соцсетей, анализ эффективности контент-стратегии.",
        requirements: ["Копирайтинг", "SEO", "Аналитика", "SMM"],
        date: "6 дней назад",
        remote: true,
        tags: ["Полная занятость", "Удаленно", "Middle"]
    },
    {
        id: 8,
        title: "Data Analyst",
        department: "product",
        experience: "junior",
        location: "remote",
        salary: "от 150 000 ₽",
        description: "Анализ данных пользователей платформы, построение отчетов и дашбордов, поддержка продуктовых решений.",
        requirements: ["SQL", "Python", "Tableau", "Статистика"],
        date: "2 дня назад",
        remote: true,
        tags: ["Полная занятость", "Удаленно", "Junior"]
    }
];

// Истории успеха
const successStories = [
    {
        id: 1,
        name: "Александр Петров",
        position: "Lead Frontend Developer",
        avatar: "https://i.pravatar.cc/150?img=8",
        quote: "Начал в CodeMaster как junior-разработчик. За 3 года вырос до тимлида благодаря поддержке менторов и интересным проектам.",
        careerPath: [
            { year: "2020", position: "Junior Frontend" },
            { year: "2021", position: "Middle Frontend" },
            { year: "2022", position: "Senior Frontend" },
            { year: "2023", position: "Tech Lead" }
        ]
    },
    {
        id: 2,
        name: "Екатерина Смирнова",
        position: "Head of Education",
        avatar: "https://i.pravatar.cc/150?img=12",
        quote: "Пришла в компанию как преподаватель JavaScript. Сейчас руковожу образовательным направлением и развиваю новые курсы.",
        careerPath: [
            { year: "2019", position: "Преподаватель" },
            { year: "2020", position: "Старший преподаватель" },
            { year: "2021", position: "Руководитель курсов" },
            { year: "2022", position: "Head of Education" }
        ]
    },
    {
        id: 3,
        name: "Дмитрий Иванов",
        position: "Product Director",
        avatar: "https://i.pravatar.cc/150?img=15",
        quote: "Начинал как менеджер проектов. CodeMaster дал возможность реализовать амбициозные идеи и повлиять на развитие продукта.",
        careerPath: [
            { year: "2018", position: "Project Manager" },
            { year: "2019", position: "Product Manager" },
            { year: "2021", position: "Senior PM" },
            { year: "2023", position: "Product Director" }
        ]
    },
    {
        id: 4,
        name: "Анна Козлова",
        position: "CTO",
        avatar: "https://i.pravatar.cc/150?img=20",
        quote: "Присоединилась к команде на этапе стартапа. Вместе прошли путь от маленького проекта до лидера рынка онлайн-образования.",
        careerPath: [
            { year: "2017", position: "Fullstack Dev" },
            { year: "2018", position: "Tech Lead" },
            { year: "2020", position: "Head of Tech" },
            { year: "2022", position: "CTO" }
        ]
    }
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderVacancies();
    renderSuccessStories();
    setupFilters();
    setupForm();
    setupFAQ();
    setupScrollTop();
    setupScrollAnimations();
    setupMobileMenu();
    setupStoriesNavigation();
    setupVacancySelect();
});

// Рендеринг вакансий
function renderVacancies(filters = {}) {
    const container = document.getElementById('vacanciesList');
    const noVacancies = document.getElementById('noVacancies');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    let filteredVacancies = [...vacancies];
    
    // Применяем фильтры
    if (filters.department && filters.department !== 'all') {
        filteredVacancies = filteredVacancies.filter(v => v.department === filters.department);
    }
    
    if (filters.experience && filters.experience !== 'all') {
        filteredVacancies = filteredVacancies.filter(v => v.experience === filters.experience);
    }
    
    if (filters.location && filters.location !== 'all') {
        filteredVacancies = filteredVacancies.filter(v => {
            if (filters.location === 'remote') return v.remote === true;
            if (filters.location === 'moscow') return v.location === 'moscow';
            if (filters.location === 'spb') return v.location === 'spb';
            return true;
        });
    }
    
    // Если ничего не найдено
    if (filteredVacancies.length === 0) {
        container.style.display = 'none';
        noVacancies.style.display = 'block';
        return;
    }
    
    container.style.display = 'flex';
    noVacancies.style.display = 'none';
    
    // Рендерим вакансии
    filteredVacancies.forEach(vacancy => {
        const vacancyElement = createVacancyElement(vacancy);
        container.appendChild(vacancyElement);
    });
}

// Создание элемента вакансии
function createVacancyElement(vacancy) {
    const vacancyElement = document.createElement('div');
    vacancyElement.className = 'vacancy-card animate-in';
    vacancyElement.dataset.id = vacancy.id;
    
    vacancyElement.innerHTML = `
        <div class="vacancy-header">
            <div class="vacancy-title">
                <h3>${vacancy.title}</h3>
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
                        ${getLocationName(vacancy.location)}
                    </span>
                    ${vacancy.remote ? `
                        <span class="vacancy-tag tag-remote">
                            <i class="fas fa-laptop-house"></i>
                            Удаленно
                        </span>
                    ` : ''}
                </div>
            </div>
            <div class="vacancy-salary">
                ${vacancy.salary}
            </div>
        </div>
        
        <div class="vacancy-body">
            <p class="vacancy-description">${vacancy.description}</p>
            <div class="vacancy-requirements">
                ${vacancy.requirements.map(req => 
                    `<span class="requirement-tag">${req}</span>`
                ).join('')}
            </div>
        </div>
        
        <div class="vacancy-footer">
            <div class="vacancy-date">
                <i class="far fa-clock"></i> Опубликовано ${vacancy.date}
            </div>
            <div class="vacancy-actions">
                <button class="btn btn-outline btn-outline-sm view-vacancy" data-id="${vacancy.id}">
                    Подробнее
                </button>
                <button class="btn btn-primary btn-sm apply-vacancy" data-id="${vacancy.id}">
                    Откликнуться
                </button>
            </div>
        </div>
    `;
    
    // Добавляем обработчики
    vacancyElement.querySelector('.view-vacancy').addEventListener('click', function() {
        const vacancyId = parseInt(this.dataset.id);
        viewVacancyDetails(vacancyId);
    });
    
    vacancyElement.querySelector('.apply-vacancy').addEventListener('click', function() {
        const vacancyId = parseInt(this.dataset.id);
        applyToVacancy(vacancyId);
    });
    
    return vacancyElement;
}

// Настройка фильтров
function setupFilters() {
    const departmentFilter = document.getElementById('departmentFilter');
    const experienceFilter = document.getElementById('experienceFilter');
    const locationFilter = document.getElementById('locationFilter');
    
    function applyFilters() {
        const filters = {
            department: departmentFilter.value,
            experience: experienceFilter.value,
            location: locationFilter.value
        };
        
        renderVacancies(filters);
    }
    
    departmentFilter.addEventListener('change', applyFilters);
    experienceFilter.addEventListener('change', applyFilters);
    locationFilter.addEventListener('change', applyFilters);
}

// Рендеринг историй успеха
function renderSuccessStories() {
    const track = document.getElementById('storiesTrack');
    if (!track) return;
    
    track.innerHTML = '';
    
    successStories.forEach(story => {
        const storyElement = document.createElement('div');
        storyElement.className = 'story-card animate-in';
        
        storyElement.innerHTML = `
            <div class="story-avatar">
                <img src="${story.avatar}" alt="${story.name}">
            </div>
            <div class="story-content">
                <p>${story.quote}</p>
                <div class="story-author">
                    <h4>${story.name}</h4>
                    <p>${story.position}</p>
                </div>
            </div>
            <div class="story-career">
                <div class="career-path">
                    ${story.careerPath.map((step, index) => `
                        <div class="career-step">
                            <span class="step-year">${step.year}</span>
                            <span class="step-position">${step.position}</span>
                        </div>
                        ${index < story.careerPath.length - 1 ? '<span class="career-arrow">→</span>' : ''}
                    `).join('')}
                </div>
            </div>
        `;
        
        track.appendChild(storyElement);
    });
}

// Навигация по историям
function setupStoriesNavigation() {
    const track = document.getElementById('storiesTrack');
    const prevBtn = document.querySelector('.prev-story');
    const nextBtn = document.querySelector('.next-story');
    
    if (!track || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    
    function updateStoriesPosition() {
        if (track.children.length === 0) return;
        
        const storyWidth = track.children[0].offsetWidth + 30; // + gap
        const visibleStories = window.innerWidth > 1200 ? 3 : 
                              window.innerWidth > 768 ? 2 : 1;
        
        track.style.transform = `translateX(-${currentIndex * storyWidth}px)`;
        
        // Обновляем состояние кнопок
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= track.children.length - visibleStories;
        
        prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
        nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateStoriesPosition();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const visibleStories = window.innerWidth > 1200 ? 3 : 
                              window.innerWidth > 768 ? 2 : 1;
        
        if (currentIndex < track.children.length - visibleStories) {
            currentIndex++;
            updateStoriesPosition();
        }
    });
    
    // Адаптивная навигация при ресайзе
    window.addEventListener('resize', updateStoriesPosition);
    
    // Инициализация
    updateStoriesPosition();
}

// Настройка выпадающего списка вакансий в форме
function setupVacancySelect() {
    const select = document.getElementById('vacancySelect');
    if (!select) return;
    
    // Очищаем опции, кроме первой
    while (select.options.length > 1) {
        select.remove(1);
    }
    
    // Добавляем вакансии
    vacancies.forEach(vacancy => {
        const option = document.createElement('option');
        option.value = vacancy.id;
        option.textContent = vacancy.title;
        select.appendChild(option);
    });
}

// Настройка формы
function setupForm() {
    const form = document.getElementById('careerForm');
    if (!form) return;
    
    // Маска для телефона
    const phoneInput = document.getElementById('careerPhone');
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
    const fileInput = document.getElementById('resumeUpload');
    const fileInfo = document.getElementById('fileInfo');
    
    if (fileInput && fileInfo) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const fileSize = (file.size / 1024 / 1024).toFixed(2); // MB
                const fileName = file.name.length > 30 ? file.name.substring(0, 30) + '...' : file.name;
                
                fileInfo.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-file-pdf" style="color: var(--accent-primary);"></i>
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
        const email = document.getElementById('careerEmail').value;
        if (!validateEmail(email)) {
            showNotification('Введите корректный email', 'warning');
            return;
        }
        
        // Проверка файла
        const fileInput = document.getElementById('resumeUpload');
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
        
        // Собираем данные формы
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: email,
            phone: document.getElementById('careerPhone').value,
            positionType: document.getElementById('positionType').value,
            vacancyId: document.getElementById('vacancySelect').value,
            coverLetter: document.getElementById('coverLetter').value,
            portfolioLink: document.getElementById('portfolioLink').value,
            resume: file.name
        };
        
        // Имитация задержки отправки
        setTimeout(() => {
            // В реальном проекте здесь был бы fetch запрос
            console.log('Данные формы:', formData);
            
            // Сброс формы
            form.reset();
            fileInfo.innerHTML = '';
            
            // Возвращаем кнопку в исходное состояние
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Показываем уведомление об успехе
            showNotification('Заявка успешно отправлена! HR-менеджер свяжется с вами в течение 3 рабочих дней.', 'success');
            
            // Прокручиваем к верху
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Показываем благодарственное сообщение
            showThankYouMessage(formData.fullName);
        }, 2000);
    });
    
    // Подписка на вакансии
    const subscribeBtn = document.getElementById('subscribeVacancies');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            const email = prompt('Введите ваш email для подписки на новые вакансии:');
            
            if (email && validateEmail(email)) {
                // Имитация подписки
                const originalText = this.innerHTML;
                this.innerHTML = '<span class="loader"></span>';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                    showNotification('Вы успешно подписались на уведомления о новых вакансиях!', 'success');
                }, 1500);
            } else if (email) {
                showNotification('Введите корректный email', 'warning');
            }
        });
    }
}

// Просмотр деталей вакансии
function viewVacancyDetails(vacancyId) {
    const vacancy = vacancies.find(v => v.id === vacancyId);
    if (!vacancy) return;
    
    // В реальном проекте здесь была бы навигация на отдельную страницу вакансии
    // Для демо покажем модальное окно
    showVacancyModal(vacancy);
}

// Отклик на вакансию
function applyToVacancy(vacancyId) {
    const vacancy = vacancies.find(v => v.id === vacancyId);
    if (!vacancy) return;
    
    // Прокручиваем к форме
    const formSection = document.getElementById('applyInternship');
    if (formSection) {
        formSection.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Автозаполняем выпадающий список вакансий
        const vacancySelect = document.getElementById('vacancySelect');
        if (vacancySelect) {
            vacancySelect.value = vacancyId;
        }
        
        // Показываем сообщение
        setTimeout(() => {
            showNotification(`Вы откликаетесь на вакансию "${vacancy.title}". Заполните форму ниже.`, 'info');
        }, 500);
    }
}

// Показать модальное окно вакансии
function showVacancyModal(vacancy) {
    const modal = document.createElement('div');
    modal.className = 'vacancy-modal';
    
    modal.innerHTML = `
        <div class="vacancy-modal-content">
            <div class="modal-header">
                <h3>${vacancy.title}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="vacancy-info">
                    <div class="info-grid">
                        <div class="info-item">
                            <i class="fas fa-building"></i>
                            <div>
                                <div class="info-label">Отдел</div>
                                <div class="info-value">${getDepartmentName(vacancy.department)}</div>
                            </div>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-chart-line"></i>
                            <div>
                                <div class="info-label">Уровень</div>
                                <div class="info-value">${getExperienceName(vacancy.experience)}</div>
                            </div>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <div class="info-label">Локация</div>
                                <div class="info-value">${getLocationName(vacancy.location)} ${vacancy.remote ? '(Удаленно)' : ''}</div>
                            </div>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-money-bill-wave"></i>
                            <div>
                                <div class="info-label">Зарплата</div>
                                <div class="info-value">${vacancy.salary}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="vacancy-description-detailed">
                        <h4>Описание</h4>
                        <p>${vacancy.description}</p>
                        
                        <h4>Обязанности</h4>
                        <ul>
                            <li>Разработка и поддержка функциональности платформы</li>
                            <li>Участие в проектировании архитектуры</li>
                            <li>Код-ревью и менторство коллег</li>
                            <li>Оптимизация производительности</li>
                            <li>Тестирование и обеспечение качества</li>
                        </ul>
                        
                        <h4>Требования</h4>
                        <ul>
                            ${vacancy.requirements.map(req => `<li>${req}</li>`).join('')}
                        </ul>
                        
                        <h4>Будет плюсом</h4>
                        <ul>
                            <li>Опыт работы в образовательных проектах</li>
                            <li>Знание современных методологий разработки</li>
                            <li>Опыт проведения собеседований</li>
                            <li>Английский язык уровня B1+</li>
                        </ul>
                        
                        <h4>Мы предлагаем</h4>
                        <ul>
                            <li>Конкурентную заработную плату</li>
                            <li>Удаленную работу из любой точки мира</li>
                            <li>Гибкий график работы</li>
                            <li>Бюджет на обучение и развитие</li>
                            <li>Медицинскую страховку</li>
                            <li>Современное оборудование</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline close-modal">Закрыть</button>
                <button class="btn btn-primary apply-from-modal" data-id="${vacancy.id}">
                    Откликнуться на вакансию
                </button>
            </div>
        </div>
    `;
    
    // Стили для модального окна
    modal.style.cssText = `
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
        padding: 20px;
    `;
    
    const modalContent = modal.querySelector('.vacancy-modal-content');
    modalContent.style.cssText = `
        background: var(--bg-secondary);
        border-radius: var(--radius-lg);
        width: 100%;
        max-width: 800px;
        max-height: 90vh;
        overflow-y: auto;
        border: 1px solid var(--border-color);
        animation: slideUp 0.3s ease;
    `;
    
    // Добавляем дополнительные стили
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
        
        .vacancy-modal-content .modal-header {
            padding: 25px 30px;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .vacancy-modal-content .modal-header h3 {
            font-size: 1.5rem;
            color: var(--text-primary);
            margin: 0;
        }
        
        .vacancy-modal-content .modal-close {
            background: none;
            border: none;
            color: var(--text-secondary);
            font-size: 2rem;
            cursor: pointer;
            line-height: 1;
        }
        
        .vacancy-modal-content .modal-body {
            padding: 30px;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
            padding-bottom: 30px;
            border-bottom: 1px solid var(--border-color);
        }
        
        .info-item {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .info-item i {
            font-size: 1.5rem;
            color: var(--accent-primary);
        }
        
        .info-label {
            font-size: 0.9rem;
            color: var(--text-muted);
            margin-bottom: 5px;
        }
        
        .info-value {
            font-size: 1rem;
            color: var(--text-primary);
            font-weight: 500;
        }
        
        .vacancy-description-detailed h4 {
            font-size: 1.2rem;
            margin: 25px 0 15px;
            color: var(--text-primary);
        }
        
        .vacancy-description-detailed p {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 20px;
        }
        
        .vacancy-description-detailed ul {
            list-style: none;
            padding-left: 0;
            margin-bottom: 20px;
        }
        
        .vacancy-description-detailed li {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
            color: var(--text-secondary);
        }
        
        .vacancy-description-detailed li:before {
            content: '•';
            position: absolute;
            left: 10px;
            color: var(--accent-primary);
        }
        
        .vacancy-modal-content .modal-footer {
            padding: 25px 30px;
            border-top: 1px solid var(--border-color);
            display: flex;
            justify-content: flex-end;
            gap: 15px;
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(modal);
    
    // Обработчики кнопок
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.querySelector('.apply-from-modal').addEventListener('click', function() {
        const vacancyId = parseInt(this.dataset.id);
        modal.remove();
        applyToVacancy(vacancyId);
    });
    
    // Закрытие по клику вне окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
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
    document.querySelectorAll('.vacancy-card, .benefit-card, .story-card, .process-step').forEach(el => {
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
            <p>Ваша заявка успешно отправлена в HR-отдел. Мы рассмотрим ваше резюме и свяжемся с вами в течение 3 рабочих дней.</p>
            
            <div class="thank-you-next">
                <h4>Что дальше?</h4>
                <ul>
                    <li><i class="fas fa-envelope"></i> Проверьте email — мы отправили подтверждение</li>
                    <li><i class="fas fa-calendar"></i> Подготовьтесь к возможному собеседованию</li>
                    <li><i class="fas fa-question-circle"></i> Если у вас есть вопросы — пишите на hr@codemaster.ru</li>
                </ul>
            </div>
            
            <div class="thank-you-buttons">
                <button class="btn btn-primary explore-vacancies">
                    <i class="fas fa-search"></i> Смотреть другие вакансии
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
        text-align: center;
    `;
    
    // Добавляем стили для иконки и текста
    const style = document.createElement('style');
    style.textContent = `
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
            color: var(--text-primary);
        }
        
        .thank-you-content p {
            color: var(--text-secondary);
            margin-bottom: 25px;
            line-height: 1.6;
        }
        
        .thank-you-next {
            text-align: left;
            margin: 30px 0;
            padding: 25px;
            background: var(--bg-card);
            border-radius: var(--radius-md);
            border: 1px solid var(--border-color);
        }
        
        .thank-you-next h4 {
            font-size: 1.2rem;
            margin-bottom: 15px;
            color: var(--text-primary);
        }
        
        .thank-you-next ul {
            list-style: none;
            padding-left: 0;
        }
        
        .thank-you-next li {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            margin-bottom: 15px;
            color: var(--text-secondary);
        }
        
        .thank-you-next li i {
            color: var(--accent-primary);
            margin-top: 3px;
        }
        
        .thank-you-buttons {
            display: flex;
            gap: 15px;
            margin-top: 30px;
            flex-wrap: wrap;
            justify-content: center;
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(thankYouModal);
    
    // Обработчики кнопок
    thankYouModal.querySelector('.explore-vacancies').addEventListener('click', function() {
        const vacanciesSection = document.getElementById('vacancies');
        if (vacanciesSection) {
            vacanciesSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
        thankYouModal.remove();
    });
    
    thankYouModal.querySelector('.close-thank-you').addEventListener('click', function() {
        thankYouModal.remove();
    });
    
    // Закрытие по клику вне окна
    thankYouModal.addEventListener('click', function(e) {
        if (e.target === thankYouModal) {
            thankYouModal.remove();
        }
    });
}

// Вспомогательные функции
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

// Обработчики для кнопок на странице
document.addEventListener('click', function(e) {
    // Кнопка "Смотреть вакансии"
    if (e.target.closest('.career-hero .btn-primary')) {
        e.preventDefault();
        const vacanciesSection = document.getElementById('vacancies');
        if (vacanciesSection) {
            vacanciesSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
    
    // Кнопка "Стажировка"
    if (e.target.closest('.career-hero .btn-secondary')) {
        e.preventDefault();
        const internshipSection = document.getElementById('internship');
        if (internshipSection) {
            internshipSection.scrollIntoView({
                behavior: 'smooth'
            });
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