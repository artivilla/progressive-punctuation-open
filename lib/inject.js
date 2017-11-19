const inject = require('svg-inject')
const svgs = document.querySelector('img[src$=".svg"]')

for (var i = 0; i < svgs.length; i++) {
  inject(svgs[i], function(err, svg) {
	if (err) throw err
	// do additional things with `svg` here if you like.
  })
}
