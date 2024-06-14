const themes = ['dark', 'light', 'custom'];
let currentThemeIndex = 0;


function switchTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    switchTheme(themes[currentThemeIndex]);
}

document.getElementById('theme-ball').addEventListener('click', cycleTheme);
switchTheme(themes[currentThemeIndex]);

