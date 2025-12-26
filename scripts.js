// Menü verschwindet nach 3 Sekunden Inaktivität
let menu = document.getElementById('menu');
let timeout;

document.addEventListener('mousemove', () => {
    menu.classList.remove('hidden');
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        menu.classList.add('hidden');
    }, 3000);
});

