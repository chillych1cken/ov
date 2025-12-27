// Menü-Animation (z.B. beim Scrollen)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = '#1a252f';
    } else {
        nav.style.background = 'transparent';
    }
});
// Seitliches Menü ein-/ausrutschen
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
});

