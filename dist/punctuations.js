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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	acclamation: __webpack_require__(2),
	authority: __webpack_require__(3),
	certitude: __webpack_require__(4),
	doubt: __webpack_require__(5),
	elrey: __webpack_require__(6),
	exclamationComma: __webpack_require__(7),
	friendlyPeriod: __webpack_require__(8),
	interrobang: __webpack_require__(9),
	irony: __webpack_require__(10),
	lovePoint: __webpack_require__(11),
	questionComma: __webpack_require__(12),
	rhetoricalQuestion: __webpack_require__(13),
	snarkMark: __webpack_require__(14)
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


const paths = __webpack_require__(0);
const toString = __webpack_require__(15);
const inject = __webpack_require__(18);

module.exports = {
	paths,
	toString,
	inject
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = [
	'M206 160l-114 284 57 21 95-291z m62 14l95 291 57-21-114-284z m-12-127c-19 0-35 16-35 35 0 19 15 35 35 35 18 0 35-15 35-35 0-19-16-35-35-35z'
].join(' ');


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = [
	'M256 100c-19 0-35-16-35-35 0-19 16-35 35-35 20 0 36 16 36 35 0 19-16 35-36 35z m92 346c-25 23-57 36-92 36 0 0 0 0 0 0-35 0-67-13-92-36-25-23-38-54-38-87l41 0c0 21 9 42 25 57 10 9 22 16 36 21l9-281 39 0 9 280c13-4 25-11 34-20 17-15 26-36 26-57l41 0c0 33-13 64-38 87z'
].join(' ');


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [
	'M256 110c-19 0-35-15-35-35 0-18 16-35 35-35 19 0 35 17 35 35 0 20-16 35-35 35z m27 264l3 98-60 0 3-98-55 0 0-38 57 0 5-170 40 0 5 170 57 0 0 38z'
].join(' ');


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = [
	'M256 102c-19 0-35-16-35-35 0-19 16-35 35-35 19 0 35 16 35 35 0 19-16 35-35 35z m6 198l121 117-30 40-2-3c-57-33-123 57-191 14-16-10-27-26-31-48l36-24c0 13 8 25 17 31 34 22 74-11 121-22l-112-113 21-28 1 1c5 0 77 0 57-54-4-11-32-62-32-62l47 0c0 0 21 36 25 47 23 66-14 93-48 104z'
].join(' ');


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = [
	'M256 94c-18 0-33-15-33-33 0-17 15-32 33-32 18 0 33 15 33 32 0 18-15 33-33 33z m0 324c18 0 33 15 33 33 0 17-15 32-33 32-18 0-33-15-33-32 0-18 15-33 33-33z m-23-38l5-124-5-125 46 0-5 125 5 124z'
].join(' ');


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = [
	'M236 203l-10 306 60 0-10-306z m6-200l-24 20c20 13 39 38 42 59-2 0-6-1-9-1-18 0-31 14-31 32 0 19 15 35 34 35 21 0 40-18 40-49 0-39-22-75-52-96z'
].join(' ');


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = [
	'M220 300c0 19 16 35 35 35 19 0 35-16 35-35 0-19-16-35-35-35-19 0-35 16-35 35z m36-123c-35 0-67 12-92 35-25 24-38 55-38 88l41 0c0-22 9-42 25-58 17-15 40-24 64-24 24 0 46 8 63 24 17 16 26 36 26 58l41 0c0-33-14-64-38-88-25-23-57-35-92-35 0 0 0 0 0 0z'
].join(' ');


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = [
	'M252 110c-19 0-35-15-35-35 0-18 16-35 35-35 20 0 36 17 36 35 0 20-16 35-36 35z m29 320l1 42-59 0 1-45c-42-9-76-30-100-61l32-35c18 24 40 42 69 49l7-214 40 0c0 62 115 70 115 166 1 50-39 91-106 98z m-6-187l4 138c36-6 54-30 54-57 0-37-31-57-58-81z'
].join(' ');


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = [
	'M284 68c0 19 16 35 35 35 19 0 35-16 35-35 0-20-16-36-35-36-19 0-35 16-35 36z m15 198c-2-1-5-2-7-4-40-21-68-17-81-4-12 11-13 30-2 46 6 11 27 29 47 46 35 31 90 78 106 130l-56 0c-16-32-52-64-84-92-25-21-46-40-57-57-23-38-19-82 11-110 15-15 37-25 65-25 16 0 33 4 52 11l2-59 47 0 5 154c-16-13-32-26-48-36z'
].join(' ');


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = [
	'M381 466c-48 11-90 4-125-17-35 21-77 28-125 17-76-17-112-70-100-123 21-94 142-75 156-136 2-9-1-23-10-33l42-8c14 18 16 37 12 56-18 78-131 60-145 125-7 32 11 64 59 74 47 11 81-2 111-28 30 26 64 39 111 28 48-10 66-42 59-74-14-65-127-47-145-125-4-20-1-38 12-57l42 9c-9 10-12 23-10 33 14 61 136 42 156 136 12 53-24 106-100 123z m-132-356c-18-4-30-23-26-42 4-18 23-30 42-26 18 4 30 23 26 42-4 18-23 30-42 26z'
].join(' ');


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = [
	'M218 251c0 81 115 87 115 155 0 31-25 59-75 59-48 0-78-21-102-52l-32 34c31 40 78 65 139 65 77 0 125-44 125-99 0-96-123-104-123-167 0-10 5-22 16-30l-39-17c-17 14-24 32-24 52z m25-251l-24 20c20 13 39 38 41 59-1-1-5-1-8-1-18 0-31 14-31 32 0 19 15 35 34 35 21 0 40-18 40-49 0-39-22-75-52-96z'
].join(' ');


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = [
	'M242 351l39-18c-11-7-16-20-16-30 0-63 123-71 123-167 0-55-48-99-125-99-61 0-108 25-139 65l32 35c24-32 54-53 102-53 50 0 75 28 75 60 0 67-115 73-115 154 0 20 7 38 24 53z m14 124c19 0 35-16 35-35 0-19-16-35-35-35-19 0-35 16-35 35 0 19 16 35 35 35z'
].join(' ');


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = [
	'M335 87c-78 8-116 23-116 46 0 16 18 24 46 34 34 12 75 27 75 76 0 71-84 87-157 94l-6 0-5-47 6-1c78-8 116-23 116-46 0-16-17-23-45-33-34-13-76-27-76-77 0-71 89-88 156-94l7-1 6 49z m-79 316c19 0 35 16 35 35 0 19-16 35-35 35-19 0-35-16-35-35 0-19 16-35 35-35z'
].join(' ');


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const camelCase = __webpack_require__(16);
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
/* 16 */
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

const inject = __webpack_require__(19)
const svgs = document.querySelector('img[src$=".svg"]')

for (var i = 0; i < svgs.length; i++) {
  inject(svgs[i], function(err, svg) {
	if (err) throw err
	// do additional things with `svg` here if you like.
  })
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(20)
var xhr   = __webpack_require__(22)
var noop  = function noop(){}

module.exports = inject


function inject(element, callback) {
  callback = typeof callback === 'function' ? callback : noop

  var url = element.getAttribute('src')
  if (!url) return

  var attributes = slice(element.attributes).map(function(attr) {
    return [attr.name, attr.value]
  })

  xhr({
    uri: url
  }, function(err, res, body) {
    if (err) return callback(err)

    if (!res.responseXML) {
      return callback(new Error(
        'Invalid SVG file: ' + url
      ))
    }

    var svg = res.responseXML.querySelector('svg')
    for (var i = 0; i < attributes.length; i++) {
      svg.setAttribute(attributes[i][0], attributes[i][1])
    }

    if (element.parentNode) {
      element.parentNode.replaceChild(svg, element)
    }

    callback(null, svg)
  })
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, exports) {


/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} slice
 * @param {Number} sliceEnd
 * @api public
 */

module.exports = function (args, slice, sliceEnd) {
  var ret = [];
  var len = args.length;

  if (0 === len) return ret;

  var start = slice < 0
    ? Math.max(0, slice + len)
    : slice || 0;

  if (sliceEnd !== undefined) {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  while (len-- > start) {
    ret[len - start] = args[len];
  }

  return ret;
}



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var window = __webpack_require__(23)
var once = __webpack_require__(25)
var parseHeaders = __webpack_require__(26)

var messages = {
    "0": "Internal XMLHttpRequest Error",
    "4": "4xx Client Error",
    "5": "5xx Server Error"
}

var XHR = window.XMLHttpRequest || noop
var XDR = "withCredentials" in (new XHR()) ? XHR : window.XDomainRequest

module.exports = createXHR

function createXHR(options, callback) {
    if (typeof options === "string") {
        options = { uri: options }
    }

    options = options || {}
    callback = once(callback)

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new XDR()
        }else{
            xhr = new XHR()
        }
    }

    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var key
    var load = options.response ? loadResponse : loadXhr

    if ("json" in options) {
        isJson = true
        headers["Accept"] = "application/json"
        if (method !== "GET" && method !== "HEAD") {
            headers["Content-Type"] = "application/json"
            body = JSON.stringify(options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = load
    xhr.onerror = error
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    // hate IE
    xhr.ontimeout = noop
    xhr.open(method, uri, !sync)
                                    //backward compatibility
    if (options.withCredentials || (options.cors && options.withCredentials !== false)) {
        xhr.withCredentials = true
    }

    // Cannot set timeout with sync request
    if (!sync) {
        xhr.timeout = "timeout" in options ? options.timeout : 5000
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }
    
    if ("beforeSend" in options && 
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    xhr.send(body)

    return xhr

    function readystatechange() {
        if (xhr.readyState === 4) {
            load()
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = null

        if (xhr.response) {
            body = xhr.response
        } else if (xhr.responseType === 'text' || !xhr.responseType) {
            body = xhr.responseText || xhr.responseXML
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function getStatusCode() {
        return xhr.status === 1223 ? 204 : xhr.status
    }

    // if we're getting a none-ok statusCode, build & return an error
    function errorFromStatusCode(status, body) {
        var error = null
        if (status === 0 || (status >= 400 && status < 600)) {
            var message = (typeof body === "string" ? body : false) ||
                messages[String(status).charAt(0)]
            error = new Error(message)
            error.statusCode = status
        }

        return error
    }

    // will load the data & process the response in a special response object
    function loadResponse() {
        var status = getStatusCode()
        var body = getBody()
        var error = errorFromStatusCode(status, body)
        var response = {
            body: body,
            statusCode: status,
            statusText: xhr.statusText,
            raw: xhr
        }
        if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
            response.headers = parseHeaders(xhr.getAllResponseHeaders())
        } else {
            response.headers = {}
        }

        callback(error, response, response.body)
    }

    // will load the data and add some response properties to the source xhr
    // and then respond with that
    function loadXhr() {
        var status = getStatusCode()
        var error = errorFromStatusCode(status)

        xhr.status = xhr.statusCode = status
        xhr.body = getBody()
        xhr.headers = parseHeaders(xhr.getAllResponseHeaders())

        callback(error, xhr, xhr.body)
    }

    function error(evt) {
        callback(evt, xhr)
    }
}


function noop() {}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = once

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })
})

function once (fn) {
  var called = false
  return function () {
    if (called) return
    called = true
    return fn.apply(this, arguments)
  }
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(27)
  , forEach = __webpack_require__(28)
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  forEach(
      trim(headers).split('\n')
    , function (row) {
        var index = row.indexOf(':')
          , key = trim(row.slice(0, index)).toLowerCase()
          , value = trim(row.slice(index + 1))

        if (typeof(result[key]) === 'undefined') {
          result[key] = value
        } else if (isArray(result[key])) {
          result[key].push(value)
        } else {
          result[key] = [ result[key], value ]
        }
      }
  )

  return result
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(29)

module.exports = forEach

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this
    }
    
    if (toString.call(list) === '[object Array]')
        forEachArray(list, iterator, context)
    else if (typeof list === 'string')
        forEachString(list, iterator, context)
    else
        forEachObject(list, iterator, context)
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            iterator.call(context, array[i], i, array)
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string)
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            iterator.call(context, object[k], k, object)
        }
    }
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};


/***/ })
/******/ ]);