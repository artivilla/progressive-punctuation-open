
var fs = require('fs');
var path = require('path');
var marks = require('..');

fs.writeFileSync(path.join(__dirname, '../dist/paths.json'), JSON.stringify(marks.paths, null, ''));

