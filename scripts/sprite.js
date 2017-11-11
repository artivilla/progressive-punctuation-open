const fs = require('fs');
const path = require('path');
const punctuations = require('../src');

const sprite = [
	'<svg xmlns="http://www.w3.org/2000/svg">'
];

const defs = [
	'<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs>'
];

function addChildSvg(name) {
	const contents = punctuations[name];
	const svg = [
		'<svg id="' +
			name +
			'" xmlns="http://www.w3.org/2000/svg"' +
			' viewBox="0 0 32 32" width="32" height="32" fill="currentcolor">',
		'  <path d="' + contents + '"></path>',
		'</svg>'
	].join('\n');
	sprite.push(svg);
	defs.push(svg);
}

Object.keys(punctuations).forEach(key => {
	addChildSvg(key);
});

sprite.push('</svg>');
defs.push('</defs></svg>');

fs.writeFileSync(
	path.join(__dirname, '../dist/progressive-punctuation.svg'),
	sprite.join('\n')
);
fs.writeFileSync(
	path.join(__dirname, '../dist/progressive-punctuation-defs.svg'),
	defs.join('\n')
);
