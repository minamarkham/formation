const light = {
	1: { fg: 'deeppink', bg: 'yellow', code: '' },
	2: { fg: 'black', bg: 'mediumspringgreen', code: '' },
	3: { fg: 'midnightblue', bg: 'aquamarine', code: '' },
	4: { fg: 'deeppink', bg: 'gainsboro', code: '' },
	5: { fg: 'orangered', bg: 'whitesmoke', code: '' },
	6: { fg: 'indigo', bg: 'lightyellow', code: '' },
};

const dark = {
	1: { fg: 'white', bg: 'indigo', code: '' },
	2: { fg: 'deeppink', bg: 'midnightblue', code: '' },
	3: { fg: 'aquamarine', bg: 'black', code: '' },
	4: { fg: 'lightsteelblue', bg: 'black', code: '' },
};

let themes = { ...light, ...dark };

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	themes = dark;
}

const themeTrigger = document.querySelector('#theme-trigger');

function setTheme() {
	const r = document.querySelector(':root');
	const keys = Object.keys(themes);
	const theme = themes[keys[(keys.length * Math.random()) << 0]];
	r.style.setProperty('--background', theme.bg);
	r.style.setProperty('--foreground', theme.fg);
}

themeTrigger.addEventListener('click', () => {
	setTheme();
});
