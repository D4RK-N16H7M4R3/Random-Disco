function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    const discoLight = document.querySelector('.disco-light');
    discoLight.style.backgroundColor = getRandomColor();
    discoLight.style.boxShadow = `0 0 50px ${getRandomColor()}`;
}

setInterval(changeColor, 1000);
