const mg = document.querySelectorAll('.minigame');
for (let i = 0; i < 3; i++) {
    mg[i].addEventListener('click', () => {
        location.replace((i === 0 ? 'ttt' : i === 1 ? 'rps' : i === 2 ? 'dodgecubes' : void(0)) + '.html');
    });
}

document.querySelectorAll('.select')[1].addEventListener('click', () => {
    location.replace('about.html');
});

document.getElementById('return').addEventListener('click', () => {
    location.replace('index.html');
});