// Данные статей
const articles = [
    {
        id: 1,
        title: "React 18: что нового и как использовать",
        excerpt: "Полный размотр новых возможностей React 18: Concurrent Features, Automatic Batching, Transitions и новые хуки.",
        content: "React 18 принес много интересных изменений...",
        category: "frontend",
        tags: ["React", "JavaScript", "Frontend"],
        author: {
            name: "Алексей Иванов",
            avatar: "https://i.pravatar.cc/80?img=1",
            role: "Senior Frontend Developer"
        },
        readTime: "8 мин",
        date: "2023-10-15",
        views: 12450,
        likes: 842,
        comments: 45,
        isFeatured: true,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "TypeScript для начинающих: типизация JavaScript",
        excerpt: "Подробное руководство по TypeScript от основ до продвинутых техник типизации.",
        content: "TypeScript - это надмножество JavaScript...",
        category: "frontend",
        tags: ["TypeScript", "JavaScript"],
        author: {
            name: "Мария Петрова",
            avatar: "https://i.pravatar.cc/80?img=5",
            role: "Lead Backend Engineer"
        },
        readTime: "12 мин",
        date: "2023-10-10",
        views: 8920,
        likes: 521,
        comments: 32,
        isFeatured: true,
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Как подготовиться к собеседованию Senior Developer",
        excerpt: "Практические советы и структура подготовки к техническому собеседованию на позицию сеньора.",
        content: "Подготовка к собеседованию Senior Developer требует...",
        category: "career",
        tags: ["Карьера", "Собеседования", "Senior"],
        author: {
            name: "Дмитрий Смирнов",
            avatar: "https://i.pravatar.cc/80?img=11",
            role: "CTO & Solution Architect"
        },
        readTime: "15 мин",
        date: "2023-10-05",
        views: 15680,
        likes: 1120,
        comments: 89,
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Микросервисы: архитектура и лучшие практики",
        excerpt: "Разбираем плюсы и минусы микросервисной архитектуры и как правильно её внедрять.",
        content: "Микросервисная архитектура стала популярной...",
        category: "backend",
        tags: ["Microservices", "Architecture", "Backend"],
        author: {
            name: "Мария Петрова",
            avatar: "https://i.pravatar.cc/80?img=5",
            role: "Lead Backend Engineer"
        },
        readTime: "20 мин",
        date: "2023-10-01",
        views: 7450,
        likes: 398,
        comments: 27,
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "Docker для разработчиков: полное руководство",
        excerpt: "От основ Docker до продвинутых техник контейнеризации приложений.",
        content: "Docker революционизировал процесс разработки...",
        category: "devops",
        tags: ["Docker", "DevOps", "Containers"],
        author: {
            name: "Сергей Волков",
            avatar: "https://i.pravatar.cc/80?img=8",
            role: "DevOps Engineer"
        },
        readTime: "18 мин",
        date: "2023-09-28",
        views: 9320,
        likes: 645,
        comments: 41,
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "SwiftUI: современная разработка iOS приложений",
        excerpt: "Обзор возможностей SwiftUI и сравнение с UIKit для разработки iOS приложений.",
        content: "SwiftUI представляет собой декларативный подход...",
        category: "mobile",
        tags: ["SwiftUI", "iOS", "Mobile"],
        author: {
            name: "Елена Козлова",
            avatar: "https://i.pravatar.cc/80?img=12",
            role: "Senior iOS Developer"
        },
        readTime: "14 мин",
        date: "2023-09-25",
        views: 6820,
        likes: 412,
        comments: 28,
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        title: "GraphQL vs REST: что выбрать в 2023",
        excerpt: "Сравнение GraphQL и REST API, плюсы и минусы каждого подхода для современных приложений.",
        content: "Выбор между GraphQL и REST - один из ключевых...",
        category: "backend",
        tags: ["GraphQL", "REST", "API"],
        author: {
            name: "Алексей Иванов",
            avatar: "https://i.pravatar.cc/80?img=1",
            role: "Senior Frontend Developer"
        },
        readTime: "10 мин",
        date: "2023-09-20",
        views: 11230,
        likes: 723,
        comments: 56,
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        title: "Оптимизация производительности React приложений",
        excerpt: "Практические техники для увеличения производительности React приложений.",
        content: "Оптимизация производительности - ключевой аспект...",
        category: "frontend",
        tags: ["React", "Performance", "Optimization"],
        author: {
            name: "Алексей Иванов",
            avatar: "https://i.pravatar.cc/80?img=1",
            role: "Senior Frontend Developer"
        },
        readTime: "16 мин",
        date: "2023-09-15",
        views: 8940,
        likes: 589,
        comments: 37,
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        title: "Python для анализа данных: Pandas и NumPy",
        excerpt: "Основы работы с данными в Python с использованием библиотек Pandas и NumPy.",
        content: "Python стал стандартом для анализа данных...",
        category: "backend",
        tags: ["Python", "Data Science", "Pandas"],
        author: {
            name: "Антон Морозов",
            avatar: "https://i.pravatar.cc/80?img=15",
            role: "Data Science Lead"
        },
        readTime: "22 мин",
        date: "2023-09-10",
        views: 7650,
        likes: 432,
        comments: 29,
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        title: "Kubernetes для разработчиков: основы оркестрации",
        excerpt: "Руководство по Kubernetes для разработчиков, которые хотят понять основы оркестрации контейнеров.",
        content: "Kubernetes стал стандартом для оркестрации...",
        category: "devops",
        tags: ["Kubernetes", "DevOps", "Containers"],
        author: {
            name: "Сергей Волков",
            avatar: "https://i.pravatar.cc/80?img=8",
            role: "DevOps Engineer"
        },
        readTime: "25 мин",
        date: "2023-09-05",
        views: 5430,
        likes: 321,
        comments: 18,
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

// Популярные статьи (первые 3 по просмотрам)
const popularArticles = [...articles]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderFeaturedArticles();
    renderArticles();
    renderPopularArticles();
    setupSearch();
    setupCategoryFilter();
    setupLoadMore();
    setupScrollTop();
    setupScrollAnimations();
    setupMobileMenu();
    setupNewsletter();
});

// Рендеринг главных статей
function renderFeaturedArticles() {
    const container = document.querySelector('.featured-articles');
    if (!container) return;
    
    const featuredArticles = articles.filter(article => article.isFeatured);
    
    container.innerHTML = '';
    
    featuredArticles.forEach(article => {
        const articleElement = createArticleElement(article, 'featured');
        container.appendChild(articleElement);
    });
}

// Рендеринг всех статей
function renderArticles(filter = 'all', page = 1) {
    const container = document.getElementById('articlesGrid');
    if (!container) return;
    
    // Если это первая загрузка, очищаем
    if (page === 1) {
        container.innerHTML = '';
        container.dataset.page = '1';
        container.dataset.filter = filter;
    }
    
    let filteredArticles = [...articles];
    
    // Применяем фильтр категории
    if (filter !== 'all') {
        filteredArticles = filteredArticles.filter(article => article.category === filter);
    }
    
    // Получаем текущую страницу
    const itemsPerPage = 6;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);
    
    // Если ничего не найдено
    if (articlesToShow.length === 0 && page === 1) {
        container.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 60px 0;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 20px;"></i>
                <h3 style="color: var(--text-primary); margin-bottom: 10px;">Статьи не найдены</h3>
                <p style="color: var(--text-secondary);">Попробуйте изменить параметры фильтрации</p>
            </div>
        `;
        return;
    }
    
    // Рендерим статьи
    articlesToShow.forEach(article => {
        if (!article.isFeatured) { // Не показываем главные статьи еще раз
            const articleElement = createArticleElement(article, 'card');
            container.appendChild(articleElement);
        }
    });
    
    // Показываем/скрываем кнопку "Загрузить еще"
    const loadMoreBtn = document.getElementById('loadMoreArticles');
    if (loadMoreBtn) {
        if (endIndex >= filteredArticles.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

// Создание элемента статьи
function createArticleElement(article, type = 'card') {
    const articleElement = document.createElement('div');
    articleElement.className = type === 'featured' ? 'featured-article animate-in' : 'article-card animate-in';
    articleElement.dataset.id = article.id;
    articleElement.dataset.category = article.category;
    
    const formattedDate = new Date(article.date).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    if (type === 'featured') {
        articleElement.innerHTML = `
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
                <span class="article-category">${getCategoryName(article.category)}</span>
            </div>
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-author">
                        <div class="author-avatar-small">
                            <img src="${article.author.avatar}" alt="${article.author.name}">
                        </div>
                        ${article.author.name}
                    </span>
                    <span><i class="far fa-clock"></i> ${article.readTime}</span>
                    <span><i class="far fa-calendar"></i> ${formattedDate}</span>
                </div>
                <h3 class="article-title">
                    <a href="article.html?id=${article.id}">${article.title}</a>
                </h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-footer">
                    <div class="article-tags">
                        ${article.tags.map(tag => `<span class="article-tag">#${tag}</span>`).join('')}
                    </div>
                    <div class="article-stats">
                        <span><i class="far fa-eye"></i> ${formatNumber(article.views)}</span>
                        <span><i class="far fa-heart"></i> ${formatNumber(article.likes)}</span>
                        <span><i class="far fa-comment"></i> ${article.comments}</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        articleElement.innerHTML = `
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
                <span class="article-category">${getCategoryName(article.category)}</span>
            </div>
            <div class="article-content">
                <div class="article-meta">
                    <span><i class="far fa-clock"></i> ${article.readTime}</span>
                    <span><i class="far fa-calendar"></i> ${formattedDate}</span>
                </div>
                <h3 class="article-title">
                    <a href="article.html?id=${article.id}">${article.title}</a>
                </h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-footer">
                    <div class="article-tags">
                        ${article.tags.slice(0, 2).map(tag => `<span class="article-tag">#${tag}</span>`).join('')}
                    </div>
                    <div class="article-stats">
                        <span><i class="far fa-eye"></i> ${formatNumber(article.views)}</span>
                        <span><i class="far fa-heart"></i> ${formatNumber(article.likes)}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Добавляем обработчик клика
    articleElement.addEventListener('click', function(e) {
        if (!e.target.closest('a')) {
            window.location.href = `article.html?id=${article.id}`;
        }
    });
    
    return articleElement;
}

// Рендеринг популярных статей
function renderPopularArticles() {
    const container = document.querySelector('.popular-articles');
    if (!container) return;
    
    container.innerHTML = '';
    
    popularArticles.forEach(article => {
        const formattedDate = new Date(article.date).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'short'
        });
        
        const popularArticle = document.createElement('div');
        popularArticle.className = 'popular-article';
        
        popularArticle.innerHTML = `
            <div class="popular-article-image">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
            </div>
            <div class="popular-article-content">
                <h4 class="popular-article-title">
                    <a href="article.html?id=${article.id}">${article.title}</a>
                </h4>
                <div class="popular-article-meta">
                    <span><i class="far fa-calendar"></i> ${formattedDate}</span>
                    <span><i class="far fa-eye"></i> ${formatNumber(article.views)}</span>
                </div>
            </div>
        `;
        
        container.appendChild(popularArticle);
    });
}

// Настройка поиска
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        
        if (query) {
            const filteredArticles = articles.filter(article => 
                article.title.toLowerCase().includes(query) ||
                article.excerpt.toLowerCase().includes(query) ||
                article.tags.some(tag => tag.toLowerCase().includes(query))
            );
            
            // В реальном проекте здесь была бы навигация на страницу поиска
            // Для демо покажем уведомление
            showNotification(`Найдено ${filteredArticles.length} статей по запросу "${query}"`, 'success');
            
            // Прокручиваем к результатам
            document.querySelector('.articles-grid').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Обработчики для поисковых тегов
    document.querySelectorAll('.search-tag').forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            const tagText = this.textContent;
            searchInput.value = tagText;
            performSearch();
        });
    });
}

// Настройка фильтра категорий
function setupCategoryFilter() {
    const filterSelect = document.getElementById('categoryFilter');
    
    filterSelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        renderArticles(selectedCategory);
    });
}

// Загрузка еще статей
function setupLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreArticles');
    
    loadMoreBtn.addEventListener('click', function() {
        const container = document.getElementById('articlesGrid');
        const currentPage = parseInt(container.dataset.page);
        const currentFilter = container.dataset.filter || 'all';
        
        container.dataset.page = (currentPage + 1).toString();
        renderArticles(currentFilter, currentPage + 1);
        
        // Прокручиваем к новым статьям
        setTimeout(() => {
            const newArticles = container.querySelectorAll('.article-card:not(.animate-in)');
            if (newArticles.length > 0) {
                newArticles[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 100);
    });
}

// Настройка рассылки
function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form form') || 
                          document.querySelector('.newsletter-form .form-group');
    
    if (newsletterForm) {
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitBtn = newsletterForm.querySelector('button');
        
        function submitNewsletter(e) {
            if (e) e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (!email) {
                showNotification('Введите email для подписки', 'warning');
                return;
            }
            
            if (!validateEmail(email)) {
                showNotification('Введите корректный email', 'warning');
                return;
            }
            
            // Имитация отправки
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="loader"></span>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                emailInput.value = '';
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                showNotification('Вы успешно подписались на рассылку!', 'success');
            }, 1500);
        }
        
        if (newsletterForm.tagName === 'FORM') {
            newsletterForm.addEventListener('submit', submitNewsletter);
        } else {
            submitBtn.addEventListener('click', submitNewsletter);
        }
    }
    
    // Подписка в сайдбаре
    const sidebarSubscribe = document.querySelector('.subscribe-form');
    if (sidebarSubscribe) {
        const emailInput = sidebarSubscribe.querySelector('input[type="email"]');
        const submitBtn = sidebarSubscribe.querySelector('button');
        
        submitBtn.addEventListener('click', function() {
            const email = emailInput.value.trim();
            
            if (!email) {
                showNotification('Введите email для подписки', 'warning');
                return;
            }
            
            if (!validateEmail(email)) {
                showNotification('Введите корректный email', 'warning');
                return;
            }
            
            // Имитация отправки
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="loader"></span>';
            this.disabled = true;
            
            setTimeout(() => {
                emailInput.value = '';
                this.innerHTML = originalText;
                this.disabled = false;
                showNotification('Вы успешно подписались на рассылку!', 'success');
            }, 1500);
        });
    }
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
    document.querySelectorAll('.featured-article, .article-card, .author-card, .popular-article').forEach(el => {
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

// Вспомогательные функции
function getCategoryName(category) {
    const categories = {
        'frontend': 'Frontend',
        'backend': 'Backend',
        'mobile': 'Mobile',
        'devops': 'DevOps',
        'career': 'Карьера',
        'news': 'Новости'
    };
    
    return categories[category] || category;
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
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

// Обработчики для кнопок
document.addEventListener('click', function(e) {
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