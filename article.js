// Данные статьи (в реальном проекте получали бы через API)
let currentArticle = null;
const comments = [];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    loadArticle();
    setupComments();
    setupShareButtons();
    setupScrollTop();
    setupScrollAnimations();
    setupMobileMenu();
    setupTableOfContents();
});

// Загрузка статьи
function loadArticle() {
    // Получаем ID статьи из URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (!articleId) {
        // Если нет ID, показываем ошибку
        showError('Статья не найдена');
        return;
    }
    
    // В реальном проекте здесь был бы fetch запрос
    // Для демо используем данные из blog.js
    const allArticles = window.articles || [];
    currentArticle = allArticles.find(article => article.id == articleId);
    
    if (!currentArticle) {
        showError('Статья не найдена');
        return;
    }
    
    renderArticle();
    renderAuthorInfo();
    renderRecommendedArticles();
    updatePageTitle();
}

// Рендеринг статьи
function renderArticle() {
    const container = document.getElementById('articleContent');
    if (!container || !currentArticle) return;
    
    const formattedDate = new Date(currentArticle.date).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    const articleHTML = `
        <div class="article-header animate-in">
            <span class="article-category">${getCategoryName(currentArticle.category)}</span>
            <h1 class="article-title">${currentArticle.title}</h1>
            
            <div class="article-meta">
                <div class="author-info">
                    <div class="author-avatar">
                        <img src="${currentArticle.author.avatar}" alt="${currentArticle.author.name}">
                    </div>
                    <div class="author-details">
                        <h4>${currentArticle.author.name}</h4>
                        <p>${currentArticle.author.role}</p>
                    </div>
                </div>
                <span><i class="far fa-clock"></i> ${currentArticle.readTime}</span>
                <span><i class="far fa-calendar"></i> ${formattedDate}</span>
            </div>
            
            <div class="article-stats">
                <span class="article-stat">
                    <i class="far fa-eye"></i> ${formatNumber(currentArticle.views)} просмотров
                </span>
                <span class="article-stat">
                    <i class="far fa-heart"></i> ${formatNumber(currentArticle.likes)} лайков
                </span>
                <span class="article-stat">
                    <i class="far fa-comment"></i> ${currentArticle.comments} комментариев
                </span>
            </div>
        </div>
        
        <div class="article-image animate-in">
            <img src="${currentArticle.image}" alt="${currentArticle.title}">
        </div>
        
        <div class="article-body">
            ${generateArticleContent(currentArticle.content)}
        </div>
        
        <div class="article-tags animate-in">
            ${currentArticle.tags.map(tag => `<span class="article-tag">#${tag}</span>`).join(' ')}
        </div>
    `;
    
    container.innerHTML = articleHTML;
}

// Генерация контента статьи (в реальном проекте получали бы из БД)
function generateArticleContent(baseContent) {
    // Это демо-контент. В реальном проекте контент хранился бы в базе данных
    return `
        <p>${baseContent}</p>
        
        <h2 id="section-1">Введение</h2>
        <p>Эта статья представляет собой подробное руководство по одной из самых популярных технологий в мире веб-разработки. Мы разберем ключевые концепции, рассмотрим практические примеры и дадим советы по применению.</p>
        
        <h2 id="section-2">Основные концепции</h2>
        <p>Для понимания материала важно разобраться с базовыми концепциями. Вот ключевые моменты, которые нужно знать:</p>
        
        <ul>
            <li><strong>Первая концепция</strong> - описание и примеры использования</li>
            <li><strong>Вторая концепция</strong> - как это работает и зачем нужно</li>
            <li><strong>Третья концепция</strong> - практическое применение в реальных проектах</li>
            <li><strong>Четвертая концепция</strong> - ограничения и альтернативы</li>
        </ul>
        
        <h2 id="section-3">Практические примеры</h2>
        <p>Давайте рассмотрим практический пример использования:</p>
        
        <pre><code class="javascript">// Пример кода
function exampleFunction() {
    const data = [1, 2, 3, 4, 5];
    return data.map(item => item * 2);
}

console.log(exampleFunction()); // [2, 4, 6, 8, 10]</code></pre>
        
        <blockquote>
            <p>Важное замечание: этот подход не является единственно верным, но он доказал свою эффективность во многих проектах.</p>
        </blockquote>
        
        <h2 id="section-4">Лучшие практики</h2>
        <p>При использовании этой технологии рекомендуется придерживаться следующих лучших практик:</p>
        
        <ol>
            <li>Всегда документируйте код</li>
            <li>Используйте линтинг и форматирование</li>
            <li>Пишите тесты для критической функциональности</li>
            <li>Следуйте принципам чистого кода</li>
        </ol>
        
        <h2 id="section-5">Сравнение с альтернативами</h2>
        <p>Давайте сравним наш подход с основными альтернативами:</p>
        
        <table>
            <thead>
                <tr>
                    <th>Критерий</th>
                    <th>Наш подход</th>
                    <th>Альтернатива 1</th>
                    <th>Альтернатива 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Производительность</td>
                    <td>Высокая</td>
                    <td>Средняя</td>
                    <td>Низкая</td>
                </tr>
                <tr>
                    <td>Простота использования</td>
                    <td>Средняя</td>
                    <td>Высокая</td>
                    <td>Низкая</td>
                </tr>
                <tr>
                    <td>Поддержка сообщества</td>
                    <td>Отличная</td>
                    <td>Хорошая</td>
                    <td>Слабая</td>
                </tr>
            </tbody>
        </table>
        
        <h2 id="section-6">Заключение</h2>
        <p>Эта технология продолжает развиваться и остается одним из ключевых инструментов в арсенале разработчика. Понимание её принципов работы и лучших практик использования поможет вам создавать более качественные и производительные приложения.</p>
        
        <p>Если у вас есть вопросы или комментарии, оставляйте их ниже - мы обязательно ответим!</p>
    `;
}

// Рендеринг информации об авторе
function renderAuthorInfo() {
    const container = document.getElementById('authorInfo');
    if (!container || !currentArticle) return;
    
    container.innerHTML = `
        <div class="author-card animate-in">
            <div class="author-avatar">
                <img src="${currentArticle.author.avatar}" alt="${currentArticle.author.name}">
            </div>
            <div class="author-details">
                <h4>${currentArticle.author.name}</h4>
                <p>${currentArticle.author.role}</p>
                <p class="author-bio">Опытный разработчик с более чем 10-летним стажем. Специализируется на создании масштабируемых и производительных приложений.</p>
                <div class="author-social">
                    <a href="#" title="GitHub"><i class="fab fa-github"></i></a>
                    <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="#" title="Website"><i class="fas fa-globe"></i></a>
                </div>
            </div>
        </div>
    `;
}

// Рендеринг рекомендованных статей
function renderRecommendedArticles() {
    const container = document.getElementById('recommendedArticles');
    if (!container || !currentArticle) return;
    
    // В реальном проекте получали бы рекомендованные статьи через API
    // Для демо используем статьи из той же категории
    const allArticles = window.articles || [];
    const recommended = allArticles
        .filter(article => 
            article.id !== currentArticle.id && 
            article.category === currentArticle.category
        )
        .slice(0, 3);
    
    if (recommended.length === 0) {
        container.innerHTML = '<p class="no-recommended">Нет рекомендованных статей</p>';
        return;
    }
    
    container.innerHTML = '';
    
    recommended.forEach(article => {
        const formattedDate = new Date(article.date).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'short'
        });
        
        const articleElement = document.createElement('div');
        articleElement.className = 'recommended-article animate-in';
        
        articleElement.innerHTML = `
            <div class="recommended-image">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
            </div>
            <div class="recommended-content">
                <h4>
                    <a href="article.html?id=${article.id}">${article.title}</a>
                </h4>
                <div class="article-meta-small">
                    <span><i class="far fa-calendar"></i> ${formattedDate}</span>
                </div>
            </div>
        `;
        
        container.appendChild(articleElement);
    });
}

// Настройка оглавления
function setupTableOfContents() {
    const tocNav = document.getElementById('tableOfContents');
    if (!tocNav) return;
    
    // Ждем загрузки контента
    setTimeout(() => {
        const headings = document.querySelectorAll('.article-body h2, .article-body h3');
        
        if (headings.length === 0) {
            tocNav.innerHTML = '<p class="no-toc">Оглавление не доступно</p>';
            return;
        }
        
        let tocHTML = '<ul>';
        
        headings.forEach((heading, index) => {
            // Создаем ID, если его нет
            if (!heading.id) {
                heading.id = `section-${index + 1}`;
            }
            
            const level = heading.tagName === 'H2' ? 1 : 2;
            const indent = level === 2 ? '20px' : '0';
            
            tocHTML += `
                <li>
                    <a href="#${heading.id}" style="padding-left: ${indent}">
                        ${heading.textContent}
                    </a>
                </li>
            `;
        });
        
        tocHTML += '</ul>';
        tocNav.innerHTML = tocHTML;
        
        // Навигация по оглавлению
        tocNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Подсветка активного раздела при скролле
        const observerOptions = {
            rootMargin: '-100px 0px -50% 0px',
            threshold: 0
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Убираем активный класс у всех ссылок
                    tocNav.querySelectorAll('a').forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // Добавляем активный класс текущей ссылке
                    const activeLink = tocNav.querySelector(`a[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);
        
        headings.forEach(heading => {
            observer.observe(heading);
        });
    }, 500);
}

// Настройка комментариев
function setupComments() {
    const commentForm = document.getElementById('newCommentForm');
    const addCommentBtn = document.getElementById('addCommentBtn');
    const commentFormContainer = document.getElementById('commentForm');
    
    // Показываем/скрываем форму комментария
    addCommentBtn.addEventListener('click', function() {
        if (commentFormContainer.style.display === 'none') {
            commentFormContainer.style.display = 'block';
            addCommentBtn.innerHTML = '<i class="fas fa-times"></i> Отмена';
        } else {
            commentFormContainer.style.display = 'none';
            addCommentBtn.innerHTML = '<i class="fas fa-plus"></i> Добавить комментарий';
        }
    });
    
    // Отправка комментария
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('commentName').value.trim();
            const email = document.getElementById('commentEmail').value.trim();
            const text = document.getElementById('commentText').value.trim();
            
            if (!name || !email || !text) {
                showNotification('Заполните все поля', 'warning');
                return;
            }
            
            if (!validateEmail(email)) {
                showNotification('Введите корректный email', 'warning');
                return;
            }
            
            // Имитация отправки
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="loader"></span>';
            submitBtn.disabled = true;
            
            // Создаем новый комментарий
            const newComment = {
                id: Date.now(),
                name: name,
                email: email,
                text: text,
                date: new Date().toISOString(),
                likes: 0,
                liked: false
            };
            
            setTimeout(() => {
                // Добавляем комментарий
                comments.unshift(newComment);
                
                // Очищаем форму
                this.reset();
                
                // Возвращаем кнопку
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Скрываем форму
                commentFormContainer.style.display = 'none';
                addCommentBtn.innerHTML = '<i class="fas fa-plus"></i> Добавить комментарий';
                
                // Обновляем список комментариев
                renderComments();
                
                // Показываем уведомление
                showNotification('Комментарий успешно добавлен!', 'success');
            }, 1500);
        });
    }
    
    // Инициализируем список комментариев
    renderComments();
}

// Рендеринг комментариев
function renderComments() {
    const container = document.getElementById('commentsList');
    const countElement = document.getElementById('commentsCount');
    
    if (!container || !countElement) return;
    
    // Обновляем счетчик
    countElement.textContent = `Комментарии (${comments.length})`;
    
    if (comments.length === 0) {
        container.innerHTML = `
            <div class="no-comments">
                <i class="far fa-comments"></i>
                <p>Пока нет комментариев. Будьте первым!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    comments.forEach(comment => {
        const formattedDate = new Date(comment.date).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const commentElement = document.createElement('div');
        commentElement.className = 'comment animate-in';
        commentElement.dataset.id = comment.id;
        
        // Получаем первую букву имени для аватара
        const avatarLetter = comment.name.charAt(0).toUpperCase();
        
        commentElement.innerHTML = `
            <div class="comment-header">
                <div class="comment-avatar" style="background: ${getRandomColor()}">
                    ${avatarLetter}
                </div>
                <div class="comment-info">
                    <h4>${comment.name}</h4>
                    <span class="comment-date">${formattedDate}</span>
                </div>
            </div>
            <div class="comment-content">
                ${comment.text}
            </div>
            <div class="comment-footer">
                <div class="comment-actions">
                    <button class="comment-action like-btn ${comment.liked ? 'liked' : ''}" data-id="${comment.id}">
                        <i class="far fa-heart"></i>
                        <span class="like-count">${comment.likes}</span>
                    </button>
                    <button class="comment-action reply-btn" data-id="${comment.id}">
                        <i class="far fa-reply"></i> Ответить
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(commentElement);
    });
    
    // Добавляем обработчики для лайков
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const commentId = parseInt(this.dataset.id);
            const comment = comments.find(c => c.id === commentId);
            
            if (comment) {
                if (comment.liked) {
                    comment.likes--;
                    comment.liked = false;
                } else {
                    comment.likes++;
                    comment.liked = true;
                }
                
                renderComments();
            }
        });
    });
}

// Настройка кнопок поделиться
function setupShareButtons() {
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.classList[1]; // vk, telegram, twitter, copy
            const url = window.location.href;
            const title = document.title;
            
            switch(type) {
                case 'vk':
                    window.open(`https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
                    break;
                case 'telegram':
                    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
                    break;
                case 'twitter':
                    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
                    break;
                case 'copy':
                    navigator.clipboard.writeText(url).then(() => {
                        showNotification('Ссылка скопирована в буфер обмена!', 'success');
                    }).catch(() => {
                        showNotification('Не удалось скопировать ссылку', 'warning');
                    });
                    break;
            }
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
    setTimeout(() => {
        document.querySelectorAll('.animate-in:not(.article-loading)').forEach(el => {
            observer.observe(el);
        });
    }, 1000);
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
    const container = document.getElementById('articleContent');
    if (container) {
        container.innerHTML = `
            <div class="article-error">
                <i class="fas fa-exclamation-circle"></i>
                <h2>${message}</h2>
                <p>Попробуйте вернуться на <a href="blog.html">главную страницу блога</a></p>
            </div>
        `;
    }
}

function updatePageTitle() {
    if (currentArticle) {
        document.title = `${currentArticle.title} | CodeMaster Блог`;
    }
}

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

function getRandomColor() {
    const colors = [
        '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444',
        '#06b6d4', '#84cc16', '#ec4899', '#6366f1', '#14b8a6'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
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