// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            document.body.style.overflow = 'auto';
            
            // Remove loading screen from DOM after animation
            setTimeout(() => {
                if (loadingScreen.parentNode) {
                    loadingScreen.remove();
                }
            }, 500);
        }, 1500); // Show loading for 1.5 seconds minimum
    });
    
    // Hide body overflow during loading
    document.body.style.overflow = 'hidden';
    
    // Typing Effect
    const typingText = document.getElementById('typing-text');
    const phrases = [
        'Desenvolvedor Full Stack',
        'Especialista em Java & Spring',
        'Expert em Angular & React',
        'Entusiasta de DevOps & Cloud',
        'Criador de Soluções Inovadoras'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before starting new phrase
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // Start typing effect after loading screen
    setTimeout(typeEffect, 2000);
    
    // Counter Animation
    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-count'));
        const current = parseInt(counter.textContent);
        const increment = target / 50; // Adjust speed
        
        if (current < target) {
            counter.textContent = Math.ceil(current + increment);
            setTimeout(() => animateCounter(counter), 50);
        } else {
            if (target === 100) {
                counter.textContent = target + '%';
            } else {
                counter.textContent = target + '+';
            }
            counter.classList.add('animate');
            setTimeout(() => counter.classList.remove('animate'), 500);
        }
    }
    
    // Interactive Particles
    function createInteractiveParticles() {
        const container = document.createElement('div');
        container.className = 'interactive-particles';
        document.body.appendChild(container);
        
        setInterval(() => {
            const particle = document.createElement('div');
            particle.className = 'particle-interactive';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            container.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, 6000);
        }, 300);
    }
    
    // Parallax Effect
    function handleParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    // Wave effect for skill bars
    function addWaveEffectToSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            bar.style.setProperty('--wave-delay', `${index * 0.2}s`);
        });
    }
    
    // Initialize interactive particles
    createInteractiveParticles();
    
    // Initialize wave effects
    addWaveEffectToSkills();
    
    // Mouse Trail Effect
    function createMouseTrail() {
        let mouseX = 0;
        let mouseY = 0;
        let trails = [];
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Create trail element
            const trail = document.createElement('div');
            trail.className = 'mouse-trail';
            trail.style.left = mouseX + 'px';
            trail.style.top = mouseY + 'px';
            document.body.appendChild(trail);
            
            trails.push(trail);
            
            // Remove trail after animation
            setTimeout(() => {
                if (trail.parentNode) {
                    trail.remove();
                }
                trails = trails.filter(t => t !== trail);
            }, 1000);
            
            // Limit number of trails
            if (trails.length > 20) {
                const oldTrail = trails.shift();
                if (oldTrail.parentNode) {
                    oldTrail.remove();
                }
            }
        });
    }
    
    // Initialize mouse trail
    createMouseTrail();
    
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function setActiveNavLink() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Animate skill bars when skills section is visible
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
                
                // Animate projects when projects section is visible
                if (entry.target.classList.contains('projects')) {
                    entry.target.classList.add('projects-visible');
                }
                
                // Animate counters when about section is visible
                if (entry.target.classList.contains('about')) {
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        if (!counter.classList.contains('counted')) {
                            counter.classList.add('counted');
                            counter.textContent = '0';
                            setTimeout(() => animateCounter(counter), 300);
                        }
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections and animated elements
    document.querySelectorAll('section, .animate-on-scroll').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // Skill bars animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const level = bar.getAttribute('data-level');
                bar.style.setProperty('--skill-width', level + '%');
                bar.style.width = level + '%';
            }, index * 100);
        });
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Create mailto link
        const mailtoLink = `mailto:juninhosiqueira5678@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('Mensagem enviada! Seu cliente de email será aberto.', 'success');
        
        // Reset form
        contactForm.reset();
    });
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 350px;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // Note: Typing effect removed to preserve HTML formatting
    // The hero title will use CSS animations instead
    
    // Initialize hero title animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Add fade-in animation class
        heroTitle.classList.add('fade-in-up');
    }
    
    // Parallax effect for hero section and other elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Enhanced parallax for multiple elements
        handleParallax();
    });
    
    // Add hover effects to cards
    function addCardHoverEffects() {
        const cards = document.querySelectorAll('.info-card, .timeline-content, .skill-category, .contact-item, .project-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                if (!this.classList.contains('project-card')) {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                    this.style.transition = 'all 0.3s ease';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                if (!this.classList.contains('project-card')) {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '';
                }
            });
        });
    }
    
    // Add project card interactions
    function addProjectInteractions() {
        const projectCards = document.querySelectorAll('.project-card');
        const modal = document.getElementById('projectModal');
        const modalClose = document.querySelector('.modal-close');
        
        // Project data
        const projectData = {
            'microcervejaria': {
                image: 'delivery.png',
                title: 'APP Delivery - Sistema de Delivery de Cervejaria',
                icon: 'fas fa-beer',
                tech: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'shadcn/ui', 'JWT'],
                description: `
                    <p>Plataforma completa de delivery desenvolvida especificamente para cervejarias. O sistema oferece uma experiência moderna e intuitiva tanto para clientes quanto para administradores, com foco na qualidade do produto e experiência do usuário.</p>
                    <p>Desenvolvido com Next.js 14, TypeScript e Prisma ORM, o sistema integra gestão de pedidos, autenticação de usuários e sistema completo de recuperação de senha via email.</p>
                `,
                features: [
                    'Cadastro e autenticação de usuários com JWT',
                    'Catálogo de produtos (chopes/cervejas) responsivo',
                    'Carrinho de compras intuitivo e moderno',
                    'Cálculo automático de frete por região específica',
                    'Entregas para Itajubá (grátis), Piranguinho e Maria da Fé (R$ 80)',
                    'Sistema de pedidos com 2 dias úteis de antecedência',
                    'Status de pedidos (Aguardando, Confirmado, Entregue)',
                    'Histórico completo de pedidos do usuário',
                    'Sistema de recuperação de senha via email',
                    'Templates de email responsivos e profissionais',
                    'Gestão completa de perfil do usuário',
                    'Validação robusta com Zod e React Hook Form'
                ],
                challenges: `
                    <p><strong>Desafio:</strong> Desenvolver um sistema de delivery com regras específicas de negócio (entregas por região, dias úteis, antecedência) mantendo uma UX fluida e intuitiva.</p>
                    <p><strong>Solução:</strong> Implementei um sistema de validação em tempo real que verifica disponibilidade de entrega, calcula frete automaticamente e guia o usuário através de um fluxo otimizado de pedidos.</p>
                `,
                results: `
                    <p>✅ <strong>Interface moderna com Next.js 14 e App Router</strong></p>
                    <p>✅ <strong>Sistema de autenticação JWT 100% seguro</strong></p>
                    <p>✅ <strong>Validação completa com TypeScript e Zod</strong></p>
                    <p>✅ <strong>Emails transacionais profissionais integrados</strong></p>
                    <p>✅ <strong>Deploy em produção com Railway + Vercel</strong></p>
                `,
                demoLink: '#',
                githubLink: 'private'
            },
            'agroindustrial': {
                image: 'barbeiro.png',
                title: 'Dom da Navalha - Sistema de Agendamento',
                icon: 'fas fa-cut',
                tech: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'NextAuth.js', 'Radix UI'],
                description: `
                    <p>Sistema web completo desenvolvido para modernizar o agendamento e gestão de barbearias. Com uma interface elegante e funcionalidades avançadas, oferece uma experiência excepcional tanto para clientes quanto para administradores.</p>
                    <p>Construído com Next.js 14, TypeScript e Prisma ORM, o sistema possui tema personalizado "navalha" e é totalmente responsivo, funcionando perfeitamente em desktop e mobile.</p>
                `,
                features: [
                    'Homepage interativa com visualização de serviços e barbeiros',
                    'Sistema de agendamento inteligente com validação de conflitos',
                    'Seleção automática - clique no serviço e seja redirecionado',
                    'Validação de tempo para horários compatíveis',
                    'Integração WhatsApp para contato direto',
                    'Dashboard administrativo completo com métricas',
                    'Gestão de barbeiros com CRUD completo e fotos',
                    'Controle de serviços, preços e duração',
                    'Gestão de produtos com estoque integrado',
                    'Sistema de contas a pagar',
                    'Relatórios detalhados de performance',
                    'Sistema de roles (ADMIN, BARBER, CLIENT)',
                    'Agenda pessoal para barbeiros',
                    'Histórico e cancelamento de agendamentos'
                ],
                challenges: `
                    <p><strong>Desafio:</strong> Criar um sistema que evitasse conflitos de agendamento e oferecesse uma experiência fluida tanto para clientes quanto para barbeiros, com diferentes níveis de acesso.</p>
                    <p><strong>Solução:</strong> Desenvolvi um algoritmo inteligente de validação de horários que considera duração dos serviços, disponibilidade dos barbeiros e implementei um sistema de roles robusto com NextAuth.js.</p>
                `,
                results: `
                    <p>✅ <strong>Interface moderna com tema personalizado "navalha"</strong></p>
                    <p>✅ <strong>Sistema de autenticação com 3 níveis de acesso</strong></p>
                    <p>✅ <strong>Validação inteligente anti-conflitos de horário</strong></p>
                    <p>✅ <strong>Dashboard administrativo completo e responsivo</strong></p>
                    <p>✅ <strong>Integração WhatsApp para casos especiais</strong></p>
                `,
                demoLink: '#',
                githubLink: 'private'
            },
            'mobile-app': {
                image: 'ativos.png',
                title: 'AtivoTrack - Sistema de Gestão de Ativos PWA',
                icon: 'fas fa-qrcode',
                tech: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL', 'PWA', 'Tailwind CSS', 'QR Scanner'],
                description: `
                    <p>Sistema PWA (Progressive Web App) moderno para gestão e rastreamento de ativos empresariais. Desenvolvido para funcionar tanto no desktop quanto no mobile, oferece uma experiência nativa com capacidades offline e sincronização automática.</p>
                    <p>Facilita o controle de ativos através de QR Codes, permitindo rastreamento em tempo real de movimentações entre estabelecimentos e clientes, com suporte para múltiplas filiais.</p>
                `,
                features: [
                    'Sistema de autenticação com 3 níveis (SUPERADMIN, ADMIN, MOTORISTA)',
                    'Gestão completa de ativos com QR Code automático',
                    'Scanner QR integrado para mobile e desktop',
                    'Suporte para 5 estabelecimentos (Itajubá, São Lourenço, Varginha, etc.)',
                    'Operações de campo: entrega, recolhimento e manutenção',
                    'Histórico completo de movimentações em tempo real',
                    'Gestão de clientes por estabelecimento',
                    'Dashboard com estatísticas e gráficos em tempo real',
                    'PWA com funcionalidade offline e sincronização automática',
                    'Instalação como app nativo no mobile',
                    'Relatórios por período e métricas por estabelecimento',
                    'Notificações push integradas',
                    'Scanner QR otimizado para operações de campo',
                    'Exportação de dados e relatórios detalhados'
                ],
                challenges: `
                    <p><strong>Desafio:</strong> Criar um sistema que funcionasse offline em campo, com sincronização automática e scanner QR eficiente, suportando múltiplos estabelecimentos com controles de acesso específicos.</p>
                    <p><strong>Solução:</strong> Desenvolvi uma PWA robusta com Service Workers para cache inteligente, API Camera otimizada para QR scanning e arquitetura multi-tenant para gestão de estabelecimentos independentes.</p>
                `,
                results: `
                    <p>✅ <strong>PWA com instalação nativa e funcionalidade offline</strong></p>
                    <p>✅ <strong>Scanner QR otimizado para mobile e desktop</strong></p>
                    <p>✅ <strong>Sistema multi-estabelecimento com 5 filiais</strong></p>
                    <p>✅ <strong>Sincronização automática e controle em tempo real</strong></p>
                    <p>✅ <strong>3 níveis de acesso com operações específicas</strong></p>
                `,
                demoLink: '#',
                githubLink: 'private'
            },
            'dashboard': {
                image: 'ControleBarril.png',
                title: 'APP Barril Light - Gestão de Barris e Chopes',
                icon: 'fas fa-wine-bottle',
                tech: ['Next.js', 'React', 'Tailwind CSS', 'Prisma ORM', 'PWA', 'next-pwa', 'TypeScript'],
                description: `
                    <p>Sistema moderno para controle de barris, tipos de chopes, clientes e usuários, pensado para funcionar perfeitamente em qualquer dispositivo — web, tablet ou celular (PWA). Ideal para bares, distribuidoras e eventos que precisam de agilidade e organização.</p>
                    <p>Desenvolvido com Next.js e App Router, oferece interface 100% responsiva e otimizada para mobile, com capacidade de instalação como PWA para uso offline.</p>
                `,
                features: [
                    'Cadastro, edição e exclusão de usuários com modais visuais',
                    'Gerenciamento completo de clientes (CRUD, busca, edição rápida)',
                    'Controle de barris com status, capacidade e QR Code',
                    'Cadastro de tipos de chopes com controle de validade',
                    'Interface 100% responsiva otimizada para mobile',
                    'Instalação como PWA - uso como app nativo',
                    'Tabelas adaptadas para telas pequenas (scroll horizontal)',
                    'Botões touch-friendly para dispositivos móveis',
                    'Feedback visual com toasts e diálogos de confirmação',
                    'Sidebar e navegação intuitiva',
                    'Funcionalidade offline com sincronização',
                    'Componentes customizados (UI, Dialog, Alert)',
                    'Sistema otimizado para bares e distribuidoras',
                    'Gestão rápida para eventos e operações de campo'
                ],
                challenges: `
                    <p><strong>Desafio:</strong> Criar um sistema que funcionasse perfeitamente tanto em desktop quanto em dispositivos móveis, com interface adaptada para operações rápidas em ambientes como bares e eventos.</p>
                    <p><strong>Solução:</strong> Desenvolvi uma PWA com interface responsiva, componentes touch-friendly, tabelas otimizadas para mobile e capacidade offline, garantindo agilidade nas operações de campo.</p>
                `,
                results: `
                    <p>✅ <strong>PWA instalável como app nativo</strong></p>
                    <p>✅ <strong>Interface 100% responsiva para todos os dispositivos</strong></p>
                    <p>✅ <strong>Operações rápidas otimizadas para bares e eventos</strong></p>
                    <p>✅ <strong>Controle completo de barris com QR Code</strong></p>
                    <p>✅ <strong>Funcionalidade offline para uso em campo</strong></p>
                `,
                demoLink: '#',
                githubLink: 'private'
            },
            'cloud-architecture': {
                image: 'pedidos.png',
                title: 'Sistema de Gestão de Pedidos Musagro',
                icon: 'fas fa-shopping-cart',
                tech: ['Next.js 14', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS', 'Shadcn/UI', 'Tanstack Query'],
                description: `
                    <p>Sistema completo de gestão de pedidos desenvolvido para otimizar o processo de vendas e controle de pedidos da Musagro. Uma aplicação web robusta que integra gestão de clientes, produtos, equipamentos e módulo especializado para chopp.</p>
                    <p>Construído com Next.js 14, TypeScript e Prisma ORM, oferece interface moderna, responsiva e funcionalidades avançadas como preços personalizados por cliente e controle de acesso por perfis.</p>
                `,
                features: [
                    'Gestão completa de pedidos com múltiplos produtos',
                    'Controle de status (Aguardando, Confirmado, Faturado, Entregue)',
                    'Gestão de clientes com segmentação e preços personalizados',
                    'Controle de produtos com estoque e preços diferenciados',
                    'Gestão de equipamentos via QR Code',
                    'Módulo Chopp separado com banco independente',
                    'Relatórios financeiros e pedidos vencidos',
                    'Sistema de usuários (Admin, Vendedor, Produção)',
                    'Autenticação JWT com refresh tokens',
                    'Notificações por email automáticas (Resend + Gmail)',
                    'Interface responsiva otimizada para mobile',
                    'Integração com Google AI (Genkit)',
                    'Cálculo automático de totais e prazos',
                    'Histórico completo de alterações por pedido'
                ],
                challenges: `
                    <p><strong>Desafio:</strong> Desenvolver um sistema que atendesse diferentes segmentos de clientes com preços personalizados, controle rigoroso de estoque e integração com módulo especializado de chopp.</p>
                    <p><strong>Solução:</strong> Implementei uma arquitetura modular com dois bancos PostgreSQL, sistema de preços dinâmicos por segmento, autenticação robusta e interface adaptativa que funciona tanto em desktop quanto mobile.</p>
                `,
                results: `
                    <p>✅ <strong>Sistema modular com banco duplo (Principal + Chopp)</strong></p>
                    <p>✅ <strong>Preços personalizados por segmento de cliente</strong></p>
                    <p>✅ <strong>Interface responsiva com cards adaptativos</strong></p>
                    <p>✅ <strong>Integração email dual (Resend + Gmail backup)</strong></p>
                    <p>✅ <strong>Sistema de roles com 3 perfis de acesso</strong></p>
                `,
                demoLink: '#',
                githubLink: 'private'
            },
            'langchain-automation': {
                image: 'API.png',
                title: 'API Cervejaria - Sistema Backend Completo',
                icon: 'fas fa-server',
                tech: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'Hibernate', 'MySQL', 'Maven', 'Bean Validation'],
                description: `
                    <p>API REST robusta para gerenciamento completo de cervejaria, incluindo controle de produção, pedidos, clientes e estoque. Desenvolvida com Java 17 e Spring Boot 3, oferece arquitetura modular separando módulos de pedidos e produção.</p>
                    <p>Sistema backend enterprise com tratamento global de exceções, soft delete, validações avançadas e suporte a diferentes roles de usuário (ADMIN, GERENTE, VENDEDOR).</p>
                `,
                features: [
                    'API REST completa com endpoints padronizados',
                    'Módulo de Pedidos: clientes, produtos, usuários e pedidos',
                    'Módulo de Produção: tanques, lotes, insumos e fornecedores',
                    'Sistema de roles (ADMIN, GERENTE, VENDEDOR)',
                    'Soft Delete em todas as entidades principais',
                    'Tratamento global de exceções com respostas padronizadas',
                    'Validação avançada (CPF/CNPJ, email único, campos obrigatórios)',
                    'Controle de estoque integrado',
                    'Gestão de processo produtivo completo',
                    'Sistema de filtragem e envase',
                    'Gestão específica para chopp',
                    'DTOs para transferência segura de dados',
                    'Arquitetura em camadas (Controller, Service, Repository)',
                    'Documentação completa de endpoints'
                ],
                challenges: `
                    <p><strong>Desafio:</strong> Criar uma API robusta que atendesse tanto o módulo de pedidos quanto o complexo processo produtivo de cervejaria, com diferentes níveis de acesso e validações específicas do setor.</p>
                    <p><strong>Solução:</strong> Desenvolvi uma arquitetura modular em Spring Boot com separação clara de responsabilidades, implementei soft delete para auditoria, e criei um sistema de validações customizadas para regras específicas da cervejaria.</p>
                `,
                results: `
                    <p>✅ <strong>API REST completa com padrões enterprise</strong></p>
                    <p>✅ <strong>Arquitetura modular (Pedidos + Produção)</strong></p>
                    <p>✅ <strong>Sistema de roles com 3 níveis de acesso</strong></p>
                    <p>✅ <strong>Soft Delete para auditoria completa</strong></p>
                    <p>✅ <strong>Validações customizadas para setor cervejeiro</strong></p>
                `,
                demoLink: '#',
                githubLink: 'private'
            }
        };
        
        // Open modal function
        function openModal(projectId) {
            const project = projectData[projectId];
            if (!project) return;
            
            // Update modal content
            document.getElementById('modalTitle').textContent = project.title;
            // Show image in modal if available, otherwise show icon
            const modalIconContainer = document.getElementById('modalIcon');
            if (project.image) {
                modalIconContainer.innerHTML = `<img src="public/${project.image}" alt="${project.title}" />`;
            } else {
                modalIconContainer.innerHTML = `<i class="${project.icon}"></i>`;
            }
            
            // Tech stack
            const techStackContainer = document.getElementById('modalTechStack');
            techStackContainer.innerHTML = project.tech.map(tech => 
                `<span class="tech-tag">${tech}</span>`
            ).join('');
            
            // Description
            document.getElementById('modalDescription').innerHTML = project.description;
            
            // Features
            const featuresContainer = document.getElementById('modalFeatures');
            featuresContainer.innerHTML = project.features.map(feature => 
                `<li>${feature}</li>`
            ).join('');
            
            // Challenges
            document.getElementById('modalChallenges').innerHTML = project.challenges;
            
            // Results
            document.getElementById('modalResults').innerHTML = project.results;
            
            // Links
            const demoLink = document.getElementById('modalDemoLink');
            const githubLink = document.getElementById('modalGithubLink');
            
            demoLink.href = project.demoLink !== '#' ? project.demoLink : '#';
            if (project.demoLink === '#') {
                demoLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    showNotification('Demo em breve! Link será adicionado quando o projeto estiver publicado.', 'info');
                });
            }
            
            if (project.githubLink === 'private') {
                githubLink.href = '#';
                githubLink.innerHTML = '<i class="fas fa-lock"></i> Projeto Privado';
                githubLink.classList.remove('btn-secondary');
                githubLink.classList.add('btn-warning');
                githubLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    showNotification('🔒 Projeto privado - Este projeto não está disponível publicamente no GitHub pois está sendo monetizado. Entre em contato para mais informações.', 'info');
                });
            } else {
                githubLink.href = project.githubLink !== '#' ? project.githubLink : '#';
                githubLink.innerHTML = '<i class="fab fa-github"></i> Ver Código';
                githubLink.classList.remove('btn-warning');
                githubLink.classList.add('btn-secondary');
                if (project.githubLink === '#') {
                    githubLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        showNotification('Repositório em breve! Código será disponibilizado após aprovação.', 'info');
                    });
                }
            }
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close modal function
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Add event listeners
        projectCards.forEach(card => {
            const projectId = card.getAttribute('data-project');
            const detailsBtn = card.querySelector('.project-details-btn');
            
            // Click on details button
            if (detailsBtn) {
                detailsBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    openModal(projectId);
                });
            }
            
            // Click on card (excluding other buttons)
            card.addEventListener('click', function(e) {
                if (!e.target.closest('.project-link:not(.project-details-btn)')) {
                    openModal(projectId);
                }
            });
            
            // Other project links
            const projectLinks = card.querySelectorAll('.project-link:not(.project-details-btn)');
            projectLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const icon = this.querySelector('i');
                    const project = projectData[projectId];
                    
                    if (icon.classList.contains('fa-external-link-alt')) {
                        if (project && project.demoLink !== '#') {
                            window.open(project.demoLink, '_blank');
                        } else {
                            showNotification('Demo em breve! Link será adicionado quando o projeto estiver publicado.', 'info');
                        }
                    } else if (icon.classList.contains('fa-github')) {
                        if (project && project.githubLink === 'private') {
                            showNotification('🔒 Projeto privado - Este projeto não está disponível publicamente no GitHub pois está sendo monetizado. Entre em contato para mais informações.', 'info');
                        } else if (project && project.githubLink !== '#') {
                            window.open(project.githubLink, '_blank');
                        } else {
                            showNotification('Repositório em breve! Código será disponibilizado após aprovação.', 'info');
                        }
                    }
                });
            });
            
            // Enhanced hover effects
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(-8px)';
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
            
            // Tilt effect on mouse move
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });
        });
        
        // Modal close events
        modalClose.addEventListener('click', closeModal);
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // ESC key to close modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
    
    // Initialize hover effects
    addCardHoverEffects();
    
    // Initialize project interactions
    addProjectInteractions();
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate elements with stagger effect
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    });
    
    // Initialize all animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in-up').forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 1000);
    
    // Performance optimization: Throttle scroll events
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply throttling to scroll events
    const throttledScroll = throttle(() => {
        setActiveNavLink();
    }, 100);
    
    window.addEventListener('scroll', throttledScroll);
    
    // Add subtle animations to social links
    document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Initialize everything when DOM is ready
    console.log('🚀 Portfólio carregado com sucesso!');
    console.log('📧 Maurício Siqueira Jr - Desenvolvedor Full Stack');
});