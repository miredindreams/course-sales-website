class WebBackground {
    constructor() {
        this.canvas = document.getElementById('webCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.lines = [];
        this.mouse = { x: 0, y: 0 };
        this.particleCount = 80;
        this.lineDistance = 150;
        this.hue = 200;
        this.hueSpeed = 0.3;
        this.pulse = 0;
        this.pulseSpeed = 0.02;
        
        this.init();
        this.animate();
        this.setupEvents();
    }
    
    init() {
        this.resize();
        
        // Создаем частицы
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                originalX: Math.random() * this.canvas.width,
                originalY: Math.random() * this.canvas.height,
                wander: Math.random() * 0.5 + 0.2,
                phase: Math.random() * Math.PI * 2
            });
        }
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createPulse(x, y) {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.lines.push({
                    x1: x,
                    y1: y,
                    x2: x + (Math.random() - 0.5) * 100,
                    y2: y + (Math.random() - 0.5) * 100,
                    life: 1,
                    speed: 0.02 + Math.random() * 0.03
                });
            }, i * 50);
        }
    }
    
    draw() {
        // Очищаем с прозрачностью для эффекта шлейфа
        this.ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Обновляем пульсацию
        this.pulse += this.pulseSpeed;
        const pulseValue = Math.sin(this.pulse) * 0.5 + 0.5;
        
        // Обновляем цвет
        this.hue += this.hueSpeed;
        if (this.hue > 280) this.hue = 200;
        if (this.hue < 200) this.hue = 280;
        
        // Обновляем и рисуем линии (паутину)
        this.ctx.lineWidth = 0.5;
        
        for (let i = 0; i < this.particles.length; i++) {
            const p1 = this.particles[i];
            
            // Плавное движение частиц
            p1.x += Math.sin(p1.phase + this.pulse * 2) * p1.wander;
            p1.y += Math.cos(p1.phase + this.pulse) * p1.wander;
            
            // Возврат к исходной позиции
            p1.x += (p1.originalX - p1.x) * 0.005;
            p1.y += (p1.originalY - p1.y) * 0.005;
            
            // Добавляем случайное движение
            p1.x += p1.speedX;
            p1.y += p1.speedY;
            
            // Отскок от границ
            if (p1.x < 0 || p1.x > this.canvas.width) p1.speedX *= -1;
            if (p1.y < 0 || p1.y > this.canvas.height) p1.speedY *= -1;
            
            // Ограничиваем позицию
            p1.x = Math.max(0, Math.min(this.canvas.width, p1.x));
            p1.y = Math.max(0, Math.min(this.canvas.height, p1.y));
            
            // Рисуем линии к другим частицам
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const distance = Math.sqrt(
                    Math.pow(p1.x - p2.x, 2) + 
                    Math.pow(p1.y - p2.y, 2)
                );
                
                if (distance < this.lineDistance) {
                    // Вычисляем прозрачность в зависимости от расстояния
                    const opacity = (1 - distance / this.lineDistance) * 0.3;
                    
                    // Создаем градиент для линии
                    const gradient = this.ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                    
                    // Используем пульсацию для анимации цвета
                    const hue1 = (this.hue + i * 2) % 360;
                    const hue2 = (this.hue + j * 2) % 360;
                    
                    gradient.addColorStop(0, `hsla(${hue1}, 70%, 60%, ${opacity * pulseValue})`);
                    gradient.addColorStop(1, `hsla(${hue2}, 70%, 60%, ${opacity * (1 - pulseValue)})`);
                    
                    this.ctx.strokeStyle = gradient;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    
                    // Добавляем небольшую кривизну для эффекта паутины
                    const midX = (p1.x + p2.x) / 2 + Math.sin(this.pulse + i) * 20;
                    const midY = (p1.y + p2.y) / 2 + Math.cos(this.pulse + j) * 20;
                    
                    this.ctx.quadraticCurveTo(midX, midY, p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
            
            // Рисуем саму частицу
            const gradient = this.ctx.createRadialGradient(
                p1.x, p1.y, 0,
                p1.x, p1.y, p1.size * 3
            );
            
            const particleHue = (this.hue + i) % 360;
            gradient.addColorStop(0, `hsla(${particleHue}, 100%, 70%, ${0.8 * pulseValue})`);
            gradient.addColorStop(1, `hsla(${particleHue}, 100%, 70%, 0)`);
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(p1.x, p1.y, p1.size * 2, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        // Обрабатываем импульсные линии
        for (let i = this.lines.length - 1; i >= 0; i--) {
            const line = this.lines[i];
            line.life -= line.speed;
            
            if (line.life <= 0) {
                this.lines.splice(i, 1);
                continue;
            }
            
            // Рисуем импульсную линию
            const gradient = this.ctx.createLinearGradient(line.x1, line.y1, line.x2, line.y2);
            const lineHue = (this.hue + i * 10) % 360;
            gradient.addColorStop(0, `hsla(${lineHue}, 100%, 70%, ${line.life * 0.7})`);
            gradient.addColorStop(1, `hsla(${lineHue + 30}, 100%, 70%, ${line.life * 0.3})`);
            
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = line.life * 2;
            this.ctx.beginPath();
            this.ctx.moveTo(line.x1, line.y1);
            
            // Добавляем изгиб
            const controlX = (line.x1 + line.x2) / 2 + Math.sin(this.pulse * 2 + i) * 30;
            const controlY = (line.y1 + line.y2) / 2 + Math.cos(this.pulse * 2 + i) * 30;
            
            this.ctx.quadraticCurveTo(controlX, controlY, line.x2, line.y2);
            this.ctx.stroke();
        }
        
        // Эффект при движении мыши
        if (this.mouse.x > 0 && this.mouse.y > 0) {
            for (const particle of this.particles) {
                const distance = Math.sqrt(
                    Math.pow(particle.x - this.mouse.x, 2) + 
                    Math.pow(particle.y - this.mouse.y, 2)
                );
                
                if (distance < 100) {
                    // Создаем градиент от мыши к частице
                    const gradient = this.ctx.createLinearGradient(
                        this.mouse.x, this.mouse.y,
                        particle.x, particle.y
                    );
                    
                    gradient.addColorStop(0, `hsla(${this.hue}, 100%, 70%, 0.3)`);
                    gradient.addColorStop(1, `hsla(${this.hue + 20}, 100%, 70%, 0.1)`);
                    
                    this.ctx.strokeStyle = gradient;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.mouse.x, this.mouse.y);
                    this.ctx.lineTo(particle.x, particle.y);
                    this.ctx.stroke();
                }
            }
        }
    }
    
    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
    
    setupEvents() {
        // Ресайз окна
        window.addEventListener('resize', () => {
            this.resize();
            
            // Обновляем исходные позиции частиц пропорционально
            const scaleX = this.canvas.width / (this.canvas.oldWidth || this.canvas.width);
            const scaleY = this.canvas.height / (this.canvas.oldHeight || this.canvas.height);
            
            for (const particle of this.particles) {
                particle.x *= scaleX;
                particle.y *= scaleY;
                particle.originalX *= scaleX;
                particle.originalY *= scaleY;
            }
            
            this.canvas.oldWidth = this.canvas.width;
            this.canvas.oldHeight = this.canvas.height;
        });
        
        // Отслеживание мыши
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            
            // Создаем импульс каждые 500мс при движении мыши
            if (!this.lastPulse || Date.now() - this.lastPulse > 500) {
                this.createPulse(e.clientX, e.clientY);
                this.lastPulse = Date.now();
            }
        });
        
        window.addEventListener('mouseout', () => {
            this.mouse.x = 0;
            this.mouse.y = 0;
        });
        
        // Импульсы при клике
        window.addEventListener('click', (e) => {
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    this.createPulse(
                        e.clientX + (Math.random() - 0.5) * 100,
                        e.clientY + (Math.random() - 0.5) * 100
                    );
                }, i * 30);
            }
        });
        
        // Случайные импульсы
        setInterval(() => {
            if (Math.random() > 0.7) {
                this.createPulse(
                    Math.random() * this.canvas.width,
                    Math.random() * this.canvas.height
                );
            }
        }, 2000);
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    new WebBackground();
});