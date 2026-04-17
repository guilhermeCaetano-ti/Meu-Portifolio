// ===================================
// Script de Navegação e Scroll Suave
// ===================================

// Elementos do DOM
const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('main section');

// ===================================
// Scroll Suave
// ===================================

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Obter o ID da seção alvo
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Scroll suave
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Remover classe ativa de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adicionar classe ativa ao link clicado
            this.classList.add('active');
        }
    });
});

// ===================================
// Destacar Seção Ativa ao Fazer Scroll
// ===================================

function highlightActiveSection() {
    let currentSection = '';
    
    // Encontrar qual seção está visível
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Se a seção está visível (com margem de 100px para o header fixo)
        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Atualizar links do menu
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===================================
// Event Listeners
// ===================================

// Detectar seção ativa ao fazer scroll
window.addEventListener('scroll', highlightActiveSection);

// Destacar a primeira seção ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    highlightActiveSection();
});
