let div;
let mousePosition;
let move = [0,0];
let isDown = false;
let i = 1;
let divId;
let divsId = ['cn_save'];


createFigure01 = () => {
    div = document.createElement('div');
    divId = 'figure01_' + i;
    div.setAttribute('class', 'figure01');
    div.setAttribute('id', divId);
    div.style.height = 50 + 'px';
    div.style.width = 50 + 'px';
    div.style.borderWidth = 1 + 'px';
    div.style.borderStyle = 'solid';
    div.style.borderColor = 'var(--card-border)';
    div.style.position = 'absolute';
    divsId.push(divId);
    document.getElementById('chart').appendChild(div);
    i += 1;
};

function divEventCheck(entry) {
    document.getElementById('entry').addEventListener('mousedown', (e) => {
        isDown = true;
        move = [document.getElementById('entry').offsetLeft - e.clientX, document.getElementById('entry').offsetTop - e.clientY];
    }, true);
    document.addEventListener('mouseup', () => {
        isDown = false;
    }, true);
    document.addEventListener('mousemove', (event) => {
        event.preventDefault();
        if (isDown) {
            mousePosition = {
                x : event.clientX,
                y : event.clientY
            }
            document.getElementById('entry').style.left = (mousePosition.x + move[0]) + 'px';
            document.getElementById('entry').style.top = (mousePosition.y + move[1]) + 'px';
        }
    }, true);
};

document.getElementById('chart').addEventListener('mousedown', divsId.forEach(divEventCheck()));

document.getElementById('cn_figure_01').addEventListener('click', createFigure01);