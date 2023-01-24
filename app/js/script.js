let bnt = document.querySelector('#button');
bnt.addEventListener('click', () => {
    bnt.style.backgroundColor = getRandomColor()
})

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}