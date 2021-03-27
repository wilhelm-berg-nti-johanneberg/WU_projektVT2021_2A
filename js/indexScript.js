// Article open or closed

const arOpenbtn = document.querySelector('#ar_1');
let arOpen = false;
const arOpenbtn2 = document.querySelector('#ar_2');
let arOpen2 = false;
const arOpenbtn3 = document.querySelector('#ar_3');
let arOpen3 = false;

arOpenbtn.addEventListener('click', () => {
    if (!arOpen) {
        document.getElementById('ar_1_p').style.display = 'block';
        arOpen = true;
    } else {
        document.getElementById('ar_1_p').style.display = 'none';
        arOpen = false;
    }
});

arOpenbtn2.addEventListener('click', () => {
    if (!arOpen2) {
        document.getElementById('ar_2_p').style.display = 'block';
        arOpen2 = true;
    } else {
        document.getElementById('ar_2_p').style.display = 'none';
        arOpen2 = false;
    }
});

arOpenbtn3.addEventListener('click', () => {
    if (!arOpen3) {
        document.getElementById('ar_3_p').style.display = 'block';
        arOpen3 = true;
    } else {
        document.getElementById('ar_3_p').style.display = 'none';
        arOpen3 = false;
    }
});



