/* global document */
/* global error */

const camelCase = require('camelcase');
const paths = require('../src');

function inject(el, key) {
	const pathdata = paths[key];

	let svg;
	const path = document.createElementNS(
		'http://www.w3.org/2000/svg',
		'path'
	);
	const title = document.createElementNS(
		'http://www.w3.org/2000/svg',
		'title'
	);

	if (el.tagName === 'svg') {
		svg = el.cloneNode(true);
	} else {
		svg = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'svg'
		);
		for (let i = 0; i < el.attributes.length; i++) {
			svg.setAttribute(
				el.attributes[i].name,
				el.attributes[i].value
			);
		}
	}

	svg.setAttribute('viewBox', '0 0 32 32');
	svg.setAttribute('style', 'fill:currentcolor');
	title.innerHTML = key + ' icon';
	path.setAttribute('d', pathdata);

	svg.appendChild(title);
	svg.appendChild(path);

	el.parentNode.replaceChild(svg, el);
}

module.exports = elements => {
	if (!elements.length > 0) {
		elements = [elements];
	}

	if (document) {
		for (let i = 0; i < elements.length; i++) {
			let key = elements[i].getAttribute('data-icon');
			key = camelCase(key);
			if (!paths[key]) {
				error(key);
				return false;
			}
			inject(elements[i], key);
		}
	} else {
		console.error(
			'punctuations.inject() only works in a browser context'
		);
		return false;
	}
};
