const paths = require('../src');

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
