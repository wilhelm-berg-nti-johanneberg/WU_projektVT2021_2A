// Javascript fil som laddas in på alla CDICE sidor
// "--" betyder att det är en underrubrik

// Color Mode

const root = document.documentElement;
const profileImage = document.getElementById('profile_img');
const bigProfileImage = document.getElementById('big_profile_img');
const colorThemeImage = document.getElementById('color_theme_img');

function changeColorModeToDark() {
    root.style.setProperty('--primary-color', '#201c29');
    root.style.setProperty('--secondary-color', '#100e17');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--card-border', '#312d3c');
    root.style.setProperty('--misc-color', '#2b98f0');
    root.style.setProperty('--extra-color', '#201c29');
    profileImage.src = 'img/Profile_icon_light.png';
    bigProfileImage.src = 'img/Profile_icon_light.png';
    colorThemeImage.src = 'img/visning_icon2.png';
    localStorage.setItem('selectedTheme', 'darkMode');
};

function changeColorModeToLight() {
    root.style.setProperty('--primary-color', '#ffffff');
    root.style.setProperty('--secondary-color', '#dee1e6');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--card-border', '#cccccc');
    root.style.setProperty('--misc-color', '#2b98f0');
    root.style.setProperty('--extra-color', '#ffffff');
    profileImage.src = 'img/profile_icon_dark.png';
    bigProfileImage.src = 'img/profile_icon_dark.png';
    colorThemeImage.src = 'img/visning_icon.png';
    localStorage.setItem('selectedTheme', 'lightMode');
};

function changeColorModeToAurora() {
    root.style.setProperty('--primary-color', 'linear-gradient(-45deg, #6bde76, #49bc95, #41a29b, #66b9ca)');
    root.style.setProperty('--secondary-color', '#100e17');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--card-border', '#312d3c');
    root.style.setProperty('--misc-color', '#000000');
    root.style.setProperty('--extra-color', '#201c29');
    profileImage.src = 'img/Profile_icon_light.png';
    bigProfileImage.src = 'img/Profile_icon_light.png';
    colorThemeImage.src = 'img/visning_icon2.png';
    localStorage.setItem('selectedTheme', 'auroraMode');
};

function closeMenu() {
    document.getElementById('new_user_menu_background').style.display = 'none';
    document.getElementById('index_site_wrapper').style.display = 'grid';
    localStorage.setItem('theme', 'true');
};

function openMenu() {
    document.getElementById('new_user_menu_background').style.display = 'flex';
    document.getElementById('index_site_wrapper').style.display = 'none';
};

if (localStorage.getItem('theme')) {
    if (localStorage.getItem('selectedTheme') == 'darkMode') {
        changeColorModeToDark();
    } else if (localStorage.getItem('selectedTheme') == 'lightMode') {
        changeColorModeToLight();
    } else {
        changeColorModeToAurora();
    }
    closeMenu();
} else {
    openMenu();
};

root.querySelector('#cmn_button_01').addEventListener('click', changeColorModeToDark);
root.querySelector('#cmn_button_02').addEventListener('click', changeColorModeToLight);
root.querySelector('#cmn_button_03').addEventListener('click', changeColorModeToAurora);

root.querySelector('#cmn_done').addEventListener('click', closeMenu);
root.querySelector('#color_theme_button').addEventListener('click', openMenu);

// Account Related

// --General
const indexWrapperBrightness = document.getElementById('index_site_wrapper').style;

// --Sign Up
const closeButton = document.querySelector('#close_sign_up');
const openButtonMain = document.querySelector('#sign_up_main_button');
const displayStyle = document.getElementById('sign_up');

function closeSignUpMenu() {
    displayStyle.style.display = 'none';
    indexWrapperBrightness.removeProperty('filter');
};

function openSignUpMenu() {
    displayStyle.style.display = 'block';
    indexWrapperBrightness.filter = 'brightness(0.2)';
};

closeButton.addEventListener('click', closeSignUpMenu);
openButtonMain.addEventListener('click', openSignUpMenu);

// --Sign In [SnIn = Sign In]
const closeButtonSnIn = document.querySelector('#close_sign_in');
const openButtonNavSnIn = document.querySelector('#sign_in_menu');
const displayStyleSnIn = document.getElementById('sign_in');
const openButtonProfileSnIn = document.querySelector('#profile_button');

function closeSignInMenu() {
    displayStyleSnIn.style.display = 'none';
    indexWrapperBrightness.removeProperty('filter');
};

function openSignInMenu() {
    displayStyleSnIn.style.display = 'block';
    indexWrapperBrightness.filter = 'brightness(0.2)';
};

closeButtonSnIn.addEventListener('click', closeSignInMenu);
openButtonNavSnIn.addEventListener('click', openSignInMenu);
openButtonProfileSnIn.addEventListener('click', openSignInMenu);

// --Switch menu [SnIn = Sign In ; SnUp = Sign Up]
const switchSnUptoSnIn = document.querySelector('#sign_up_sign_in_button');
const switchSnIntoSnUp = document.querySelector('#sign_in_sign_up_button');

function switchMenu() {
    closeSignUpMenu();
    openSignInMenu();
};

function switchMenuSnIn() {
    closeSignInMenu();
    openSignUpMenu();
};

switchSnUptoSnIn.addEventListener('click', switchMenu);
switchSnIntoSnUp.addEventListener('click', switchMenuSnIn);

// Burger Menu

const menuBurgerBtn = document.querySelector('.burger_menu_btn');
let burgerBtnOpen = false;

menuBurgerBtn.addEventListener('click', () => {
    if (!burgerBtnOpen) {
        menuBurgerBtn.classList.add('burger_menu_open');
        burgerBtnOpen = true;
    } else {
        menuBurgerBtn.classList.remove('burger_menu_open');
        burgerBtnOpen = false;
    }
});