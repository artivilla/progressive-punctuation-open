var punctuations =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	acclamation: __webpack_require__(3),
	authority: __webpack_require__(4),
	certitude: __webpack_require__(5),
	doubt: __webpack_require__(6),
	elrey: __webpack_require__(7),
	exclamationComma: __webpack_require__(8),
	friendlyPeriod: __webpack_require__(9),
	interrobang: __webpack_require__(10),
	irony: __webpack_require__(11),
	lovePoint: __webpack_require__(12),
	questionComma: __webpack_require__(13),
	rhetoricalQuestion: __webpack_require__(14),
	snarkMark: __webpack_require__(15)
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function preserveCamelCase(str) {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < str.length; i++) {
		const c = str[i];

		if (isLastCharLower && /[a-zA-Z]/.test(c) && c.toUpperCase() === c) {
			str = str.substr(0, i) + '-' + str.substr(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(c) && c.toLowerCase() === c) {
			str = str.substr(0, i - 1) + '-' + str.substr(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = c.toLowerCase() === c;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = c.toUpperCase() === c;
		}
	}

	return str;
}

module.exports = function (str) {
	if (arguments.length > 1) {
		str = Array.from(arguments)
			.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		str = str.trim();
	}

	if (str.length === 0) {
		return '';
	}

	if (str.length === 1) {
		return str.toLowerCase();
	}

	if (/^[a-z0-9]+$/.test(str)) {
		return str;
	}

	const hasUpperCase = str !== str.toLowerCase();

	if (hasUpperCase) {
		str = preserveCamelCase(str);
	}

	return str
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase());
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


const paths = __webpack_require__(0);
const toString = __webpack_require__(16);
const inject = __webpack_require__(18);

module.exports = {
	paths,
	toString,
	inject
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = [
	'M206 160l-114 284 57 21 95-291z m62 14l95 291 57-21-114-284z m-12-127c-19 0-35 16-35 35 0 19 15 35 35 35 18 0 35-15 35-35 0-19-16-35-35-35z'
].join(' ');


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [
	'M256 100c-19 0-35-16-35-35 0-19 16-35 35-35 20 0 36 16 36 35 0 19-16 35-36 35z m92 346c-25 23-57 36-92 36 0 0 0 0 0 0-35 0-67-13-92-36-25-23-38-54-38-87l41 0c0 21 9 42 25 57 10 9 22 16 36 21l9-281 39 0 9 280c13-4 25-11 34-20 17-15 26-36 26-57l41 0c0 33-13 64-38 87z'
].join(' ');


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = [
	'M256 110c-19 0-35-15-35-35 0-18 16-35 35-35 19 0 35 17 35 35 0 20-16 35-35 35z m27 264l3 98-60 0 3-98-55 0 0-38 57 0 5-170 40 0 5 170 57 0 0 38z'
].join(' ');


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = [
	'M256 102c-19 0-35-16-35-35 0-19 16-35 35-35 19 0 35 16 35 35 0 19-16 35-35 35z m6 198l121 117-30 40-2-3c-57-33-123 57-191 14-16-10-27-26-31-48l36-24c0 13 8 25 17 31 34 22 74-11 121-22l-112-113 21-28 1 1c5 0 77 0 57-54-4-11-32-62-32-62l47 0c0 0 21 36 25 47 23 66-14 93-48 104z'
].join(' ');


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = [
	'M256 94c-18 0-33-15-33-33 0-17 15-32 33-32 18 0 33 15 33 32 0 18-15 33-33 33z m0 324c18 0 33 15 33 33 0 17-15 32-33 32-18 0-33-15-33-32 0-18 15-33 33-33z m-23-38l5-124-5-125 46 0-5 125 5 124z'
].join(' ');


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = [
	'M236 203l-10 306 60 0-10-306z m6-200l-24 20c20 13 39 38 42 59-2 0-6-1-9-1-18 0-31 14-31 32 0 19 15 35 34 35 21 0 40-18 40-49 0-39-22-75-52-96z'
].join(' ');


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = [
	'M220 300c0 19 16 35 35 35 19 0 35-16 35-35 0-19-16-35-35-35-19 0-35 16-35 35z m36-123c-35 0-67 12-92 35-25 24-38 55-38 88l41 0c0-22 9-42 25-58 17-15 40-24 64-24 24 0 46 8 63 24 17 16 26 36 26 58l41 0c0-33-14-64-38-88-25-23-57-35-92-35 0 0 0 0 0 0z'
].join(' ');


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = [
	'M252 110c-19 0-35-15-35-35 0-18 16-35 35-35 20 0 36 17 36 35 0 20-16 35-36 35z m29 320l1 42-59 0 1-45c-42-9-76-30-100-61l32-35c18 24 40 42 69 49l7-214 40 0c0 62 115 70 115 166 1 50-39 91-106 98z m-6-187l4 138c36-6 54-30 54-57 0-37-31-57-58-81z'
].join(' ');


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = [
	'M284 68c0 19 16 35 35 35 19 0 35-16 35-35 0-20-16-36-35-36-19 0-35 16-35 36z m15 198c-2-1-5-2-7-4-40-21-68-17-81-4-12 11-13 30-2 46 6 11 27 29 47 46 35 31 90 78 106 130l-56 0c-16-32-52-64-84-92-25-21-46-40-57-57-23-38-19-82 11-110 15-15 37-25 65-25 16 0 33 4 52 11l2-59 47 0 5 154c-16-13-32-26-48-36z'
].join(' ');


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = [
	'M381 466c-48 11-90 4-125-17-35 21-77 28-125 17-76-17-112-70-100-123 21-94 142-75 156-136 2-9-1-23-10-33l42-8c14 18 16 37 12 56-18 78-131 60-145 125-7 32 11 64 59 74 47 11 81-2 111-28 30 26 64 39 111 28 48-10 66-42 59-74-14-65-127-47-145-125-4-20-1-38 12-57l42 9c-9 10-12 23-10 33 14 61 136 42 156 136 12 53-24 106-100 123z m-132-356c-18-4-30-23-26-42 4-18 23-30 42-26 18 4 30 23 26 42-4 18-23 30-42 26z'
].join(' ');


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = [
	'M218 251c0 81 115 87 115 155 0 31-25 59-75 59-48 0-78-21-102-52l-32 34c31 40 78 65 139 65 77 0 125-44 125-99 0-96-123-104-123-167 0-10 5-22 16-30l-39-17c-17 14-24 32-24 52z m25-251l-24 20c20 13 39 38 41 59-1-1-5-1-8-1-18 0-31 14-31 32 0 19 15 35 34 35 21 0 40-18 40-49 0-39-22-75-52-96z'
].join(' ');


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = [
	'M242 351l39-18c-11-7-16-20-16-30 0-63 123-71 123-167 0-55-48-99-125-99-61 0-108 25-139 65l32 35c24-32 54-53 102-53 50 0 75 28 75 60 0 67-115 73-115 154 0 20 7 38 24 53z m14 124c19 0 35-16 35-35 0-19-16-35-35-35-19 0-35 16-35 35 0 19 16 35 35 35z'
].join(' ');


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = [
	'M335 87c-78 8-116 23-116 46 0 16 18 24 46 34 34 12 75 27 75 76 0 71-84 87-157 94l-6 0-5-47 6-1c78-8 116-23 116-46 0-16-17-23-45-33-34-13-76-27-76-77 0-71 89-88 156-94l7-1 6 49z m-79 316c19 0 35 16 35 35 0 19-16 35-35 35-19 0-35-16-35-35 0-19 16-35 35-35z'
].join(' ');


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const camelCase = __webpack_require__(1);
const paths = __webpack_require__(0);
const error = __webpack_require__(17);

module.exports = key => {
	let string = '';
	const d = paths[camelCase(key)] || false;

	if (!d) {
		error(key);
		return false;
	}

	string = [
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="fill:currentcolor">',
		'<title>' + key + ' icon</title>',
		'<path d="' + d + '"/>',
		'</svg>'
	].join(' ');

	return string;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

const paths = __webpack_require__(0);

module.exports = key => {
	let iconList = Object.keys(paths);
	iconList = iconList.join();
	console.error(
		'No icon found for ' +
			key +
			'.\n' +
			'Progressive Punctuation Open includes the following icons: \n' +
			iconList
	);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* global document */
/* global error */

const camelCase = __webpack_require__(1);
const paths = __webpack_require__(0);

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


/***/ })
/******/ ]);