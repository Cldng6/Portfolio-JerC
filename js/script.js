// script.js
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    // Animation d'apparition des sections
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
    });

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const trigger = window.innerHeight / 5 * 4; // Déclencheur pour l'animation

            if (sectionTop < trigger) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }
        });
    });
});
