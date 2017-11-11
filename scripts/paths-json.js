const fs = require('fs');
const path = require('path');
const punctuations = require('..');

fs.writeFileSync(
	path.join(__dirname, '../dist/paths.json'),
	JSON.stringify(punctuations, null, '')
);
