document.getElementById('name').addEventListener('mouseover', function() {
    for (let i = 0; i < 10; i++) {
        createLaser();
    }
});

function createLaser() {
    const laser = document.createElement('div');
    laser.classList.add('laser');
    
    // Zufällige Richtung
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 1000;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    laser.style.setProperty('--x', `${x}px`);
    laser.style.setProperty('--y', `${y}px`);
    laser.style.left = `${Math.random() * 100}%`;
    laser.style.top = `${Math.random() * 100}%`;
    
    document.getElementById('laser-container').appendChild(laser);

    setTimeout(() => {
        laser.remove();
    }, 500);
}