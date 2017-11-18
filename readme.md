# Progressive Punctuation Open

Progressive Punctuation is a movement focused on effective communication, a brainchild of Jeremy Ford's work -- an art director and multidisciplinary designer in New York City. You can learn more about this project at progressivepunctuation.com.

By extension, Progressive Punctuation Open is a set of webfonts represented in his work available in several formats for the open web.

## Getting Started Guide

Download the source, or install via pkg managers:

```
npm install progressive-punctuation-open
yarn add progressive-punctuation-open
```

## Client-side Javascript Usage

Include the client-side JavaScript file.

```
<script src="progressive-punctuation.min.js"></script>
```


Add the data-icon attribute with an icon name to an element.

```
<span class="js-progressive-punctuation" data-icon="heart"></span>
```

Pass a nodelist to the progressive-punctuation.inject() method to replace elements with SVG icons.

```<script>
  var icons = document.querySelectorAll('.js-progressive-punctuation');
  progressive-punctuation.inject(icons);
</script>```

## Node Usage

```
var progressive-punctuation = require('geomicons-open');

var pathData = progressive-punctuation.paths.heart; // Returns the path's d attribute value
var svgString = progressive-punctuation.toString('heart'); // Returns an SVG string
```

## SVG Defs Usage

For a server-side solution, you can use native SVG defs instead of the javascript method above. This method makes zero extra network requests beyond the HTML file that includes it.

Instead of linking to the geomicons.min.js file, copy and paste the contents of the dist/geomicons-defs.svg file in your HTML. This code will not show up in your page.

```
<svg xmnls="http://www.w3.org/2000/svg" width="0" height="0"><defs>...</defs></svg>
```

Use the SVG <use> tag to create an instance of an icon.

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16">
  <use xlink:href="#heart"></use>
</svg>
```

## Copy/Paste

If you're only using one or two icons in your markup, it's probably better to paste the SVG code inline. Copy the icon from the website or open the icon SVG file and copy and paste the SVG code. Be sure to adjust the id attribute to not conflict with other elements.

## Vector Drawing Applications

The SVG files in the dist/icons folder should open in applications such as Adobe Illustrator and Sketch. If you encounter any problems, please create an issue.

## React

A React component for Progressive Punctuation Open is available on NPM.

`npm install react-progressive-punctuation`

## Credits

All icons sets are a courtesy of [Jeremy Ford](https://github.com/jereford).

Installation format guide is served by the [geomicons-open](https://github.com/jxnblk/geomicons-open) setup.



