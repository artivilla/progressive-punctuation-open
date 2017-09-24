
var fs = require('fs');
var path = require('path');
var punctuationmarks = require('..');

var css = [
  '/*! Progressive Punctuation Open */\n'
];

css.push([
  '.punctuation::before {',
  '  content: "";',
  '  display: inline-block;',
  '  background-size: 1em;',
  '  width: 1em;',
  '  height: 1em;',
  '}\n',
].join('\n'));

function addChildSvg(name) {
  var contents = punctuation.paths[name];
  var svg = [
    '<svg xmlns=\'http://www.w3.org/2000/svg\' ',
    'viewBox=\'0 0 32 32\' width=\'16\' height=\'16\' fill=\'black\'>',
    '<path d=\'' + contents + '\'></path>',
    '</svg>'
  ].join('');
  var style = [
    '.punctuation-' + name + '::before {',
    '  background-image: url("data:image/svg+xml;utf8,' +
      svg +
      '");',
    '}\n'
  ].join('\n');
  css.push(style);
}

Object.keys(ppunctuations.paths).forEach(function(key) {
  addChildSvg(key);
});


fs.writeFileSync(path.join(__dirname, '../dist/punctuations.css'), css.join('\n'));

