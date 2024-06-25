var f = b = o = x = next = false;
const bs = [document.getElementById('friend'), document.getElementById('bot')];
bs.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (next == false) {
            e.target === bs[0] ? f = true : b = true;
            document.getElementsByTagName('h1')[0].innerHTML = 'Alright. Which side do you prefer?';
            bs[0].innerHTML = `<img src="ttto.svg" style="pointer-events: none;">`;
            bs[1].innerHTML = `<img src="tttx.svg" style="pointer-events: none;">`;
            next = true;
        } else {
            e.target === bs[0] ? o = true : x = true;
            document.getElementById('opponent').innerHTML = (f == true ? 'Friend' : 'Bot');
            document.getElementById('overlay').remove();
        }
    });
});

const c = document.getElementById('ttt');
const ctx = c.getContext('2d');
const cr = c.getBoundingClientRect();
var ux, uy, bx, by;

ctx.strokeStyle = 'white';
ctx.beginPath();
ctx.moveTo(c.width / 3, 0);
ctx.lineTo(c.width / 3, c.height);
ctx.moveTo((c.width / 3) * 2, 0);
ctx.lineTo((c.width / 3) * 2, c.height);
ctx.moveTo(0, c.height / 3);
ctx.lineTo(c.width, c.height / 3);
ctx.moveTo(0, (c.height / 3) * 2);
ctx.lineTo(c.width, (c.height / 3) * 2);
ctx.stroke();

function getX() {
    return ux < c.width / 3 ? 10 : ux < (c.width / 3) * 2 ? (c.width / 3) + 10 : ux < c.width ? ((c.width / 3) * 2) + 10 : void(0);
}

function getY() {
    return uy < c.height / 3 ? 10 : uy < (c.height / 3) * 2 ? (c.height / 3) + 10 : uy < c.height ? ((c.height / 3) * 2) + 10 : void(0);
}

let interval = setInterval(() => {
    if ((f == true || b == true) && (o == true || x == true)) {
        console.log('hi')
        clearInterval(interval);
        c.addEventListener('click', (e) => {
            ux = e.clientX - cr.left;
            uy = e.clientY - cr.top;
        });
    }
}, 1);

let yot = [document.getElementById('you'), document.getElementById('opponent')];
setInterval(() => {
    yot.forEach((el) => {
        el.addEventListener('keydown', (e) => {
            if (e.key !== 'Backspace' && el.innerHTML.length > 9) {
                e.preventDefault();
            }
        });
    });
}, 1);

var winPatterns = {
    "win1": [`10,10`, `${(c.width / 3) + 10},10`, `${((c.width / 3) * 2) + 10},10`],
    "win2": [`10,${(c.height / 3) + 10}`, `${(c.width / 3) + 10},${(c.height / 3) + 10}`, `${((c.width / 3) * 2) + 10},${(c.height / 3) + 10}`],
    "win3": [`10,${((c.height / 3) * 2)}`, `${(c.width / 3) + 10},${((c.height / 3) * 2) + 10}`, `${((c.width / 3) * 2) + 10},${((c.height / 3) * 2) + 10}`],
    "win4": [`10,10`, `10,${(c.height / 3) + 10}`, `10,${((c.height / 3) * 2) + 10}`],
    "win5": [`${(c.width / 3) + 10},10`, `${(c.width / 3) + 10},${(c.height / 3) + 10}`, `${(c.width / 3) + 10},${((c.height / 3) * 2) + 10}`],
    "win6": [`${((c.width / 3) * 2) + 10},10`, `${((c.width / 3) * 2) + 10},${(c.height / 3) + 10}`, `${((c.width / 3) * 2) + 10},${((c.height / 3) * 2) + 10}`],
    "win7": [`10,10`, `${(c.width / 3) + 10},${(c.height / 3) + 10}`, `${((c.width / 3) * 2) + 10},${((c.height / 3) * 2) + 10}`],
    "win8": [`${((c.width / 3) * 2) + 10},10`, `${(c.width / 3) + 10},${(c.height / 3) + 10}`, `10,${((c.height / 3) * 2) + 10}`]
};

var turn = [true, false][((Math.random() * Math.random()).toString().slice(-1) / 2).toString().includes('.') ? 2 : 1];
function updateState(x, y) {
    Object.values(winPatterns).forEach((ar) => {
        if (ar.includes(`${x},${y}`)) {
            ar.splice(ar.indexOf(`${x},${y}`), 1, (turn == true ? (o == true ? 'o' : 'x') : (o == true ? 'x' : 'o')));
            ctx.drawImage((o ? document.getElementById('o') : document.getElementById('x')), getX(), getY(), (c.width / 3) - 20, (c.height / 3) - 20);
        }
    });
}