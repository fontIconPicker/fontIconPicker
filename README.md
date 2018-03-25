jQuery fontIconPicker `v3.1.1` [![Build Status](https://travis-ci.org/fontIconPicker/fontIconPicker.svg?branch=master)](https://travis-ci.org/fontIconPicker/fontIconPicker) [![Maintainability](https://api.codeclimate.com/v1/badges/701cba42caf2db204315/maintainability)](https://codeclimate.com/github/fontIconPicker/fontIconPicker/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/701cba42caf2db204315/test_coverage)](https://codeclimate.com/github/fontIconPicker/fontIconPicker/test_coverage) [![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://dashboard.cypress.io/#/projects/agegn4/runs)
==============================

jQuery fontIconPicker is a small (`4.05KB` gzipped) jQuery plugin which allows you to include an elegant icon picker with categories, search and pagination inside your administration forms. The list of icons can be loaded manually using a `SELECT` field, an `Array` or `Object` of icons or directly from a Fontello `config.json` or IcoMoon `selection.json` file. Go to the [official plugin page](https://fonticonpicker.github.io) for examples and documentation.

**fontIconPicker _v3.x_** supports jQuery `1.12.4` through `3.3.0`.

> Originally developed at [micc83/fontIconPicker](https://github.com/micc83/fontIconPicker) and now moved into separate [organization](https://github.com/fontIconPicker) for better collaboration.

![fontIconPickers](github-img.png)

## Installation

### With NPM/YARN

fontIconPicker has been released over NPM. So you can either use NPM to install or download a [release](https://github.com/fontIconPicker/fontIconPicker/releases).

```bash
npm install jquery@1.12.4 @fonticonpicker/fonticonpicker --save
```

Now use with webpack or browserify.

```js
const jQuery = require( 'jquery' );
const fip = require( '@fonticonpicker/fonticonpicker' )( jQuery );

jQuery( '.selector' ).fontIconPicker( {
	// Options
} );
```

### Global `script` / CDN support

You can put fontIconPicker dependencies directly in your `html` with `<script>`
and `<link>` tags. Go to [fontIconPicker Releases](https://github.com/fontIconPicker/fontIconPicker/releases) and download the
`fontIconPicker.zip` file from latest Assets. It will contain all scripts and
styles built for production use.

You can also use CDN from [unpkg.com](https://unpkg.com/#/).

```html
<!-- styles -->
<!-- base | always include -->
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@fonticonpicker/fonticonpicker/dist/css/base/jquery.fonticonpicker.min.css">

<!-- default grey-theme -->
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@fonticonpicker/fonticonpicker/dist/css/themes/grey-theme/jquery.fonticonpicker.grey.min.css">

<!-- optional themes | no need to include default theme -->
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@fonticonpicker/fonticonpicker/dist/css/themes/bootstrap-theme/jquery.fonticonpicker.bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@fonticonpicker/fonticonpicker/dist/css/themes/dark-grey-theme/jquery.fonticonpicker.darkgrey.min.css">
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@fonticonpicker/fonticonpicker/dist/css/themes/inverted-theme/jquery.fonticonpicker.inverted.min.css">

<!-- scripts -->
<script type="text/javascript" src="https://unpkg.com/@fonticonpicker/fonticonpicker/dist/js/jquery.fonticonpicker.min.js"></script>
```

### Using ES6 Module

If you wish to use `ES6` module, then you have to initialize manually.

```js
import jQuery from 'jquery';
import initFontIconPicker from '@fonticonpicker/fonticonpicker';

// Initiate the jQuery plugin
initFontIconPicker( jQuery );

jQuery( '.selector' ).fontIconPicker( {
	// Options
} );
```

Right now, the only feasible way to properly initiate `fontIconPicker` through
rollupjs is to pass jQuery directly in the `initFontIconPicker` function. If
you know a better way, feel free to suggest.

## How it works
Just include a copy of jQuery, the fontIconPickers script, the fontIconPickers theme and your Font Icons. Now you can trigger it on a `SELECT` or `INPUT[type="text"]` element.

### Include the JavaScript
 ```html
 <!-- jQuery -->
<script type="text/javascript" src="jquery-1.12.4.min.js"></script>

<!-- fontIconPicker JS -->
<script type="text/javascript" src="js/jquery.fonticonpicker.min.js"></script>
```

### Include the CSS
```html
<!-- fontIconPicker core CSS -->
<link rel="stylesheet" type="text/css" href="css/base/jquery.fonticonpicker.min.css" />

<!-- required default theme -->
<link rel="stylesheet" type="text/css" href="css/themes/grey-theme/jquery.fonticonpicker.grey.min.css" />

<!-- optional themes -->
<link rel="stylesheet" type="text/css" href="css/themes/dark-grey-theme/jquery.fonticonpicker.darkgrey.min.css" />
<link rel="stylesheet" type="text/css" href="css/themes/bootstrap-theme/jquery.fonticonpicker.bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/themes/inverted-theme/jquery.fonticonpicker.inverted.min.css" />
```

### Include Font Icons
```html
<!-- Font -->
<link rel="stylesheet" type="text/css" href="fontello-7275ca86/css/fontello.css" />
<link rel="stylesheet" type="text/css" href="icomoon/icomoon.css" />
```

### Initialize with jQuery
Finally call the fontIconPicker on a `SELECT` or `INPUT[type="text"]` element.

```html
<!-- SELECT element -->
<select id="myselect" name="myselect" class="myselect">
	<option value="">No icon</option>
	<option>icon-user</option>
	<option>icon-search</option>
	<option>icon-right-dir</option>
	<option>icon-star</option>
	<option>icon-cancel</option>
	<option>icon-help-circled</option>
	<option>icon-info-circled</option>
	<option>icon-eye</option>
	<option>icon-tag</option>
	<option>icon-bookmark</option>
	<option>icon-heart</option>
	<option>icon-thumbs-down-alt</option>
	<option>icon-upload-cloud</option>
	<option>icon-phone-squared</option>
	<option>icon-cog</option>
	<option>icon-wrench</option>
	<option>icon-volume-down</option>
	<option>icon-down-dir</option>
	<option>icon-up-dir</option>
	<option>icon-left-dir</option>
	<option>icon-thumbs-up-alt</option>
</select>
<!-- JavaScript -->
<script type="text/javascript">
	// Make sure to fire only when the DOM is ready
	jQuery(document).ready(function($) {
		$('#myselect').fontIconPicker(); // Load with default options
	});
</script>
```

```html
<!-- INPUT element -->
<input type="text" name="mytext" id="mytext" />
<script type="text/javascript">
	jQuery(document).ready(function($) {
		$('#mytext').fontIconPicker({
			source:    ['icon-heart', 'icon-search', 'icon-user', 'icon-tag', 'icon-help'],
			emptyIcon: false,
			hasSearch: false
		});
	});
</script>
```

## Plugin Options
Here's fontIconPicker options:
```js
var $picker = $('.picker').fontIconPicker({
	theme              : 'fip-grey',              // The CSS theme to use with this fontIconPicker. You can set different themes on multiple elements on the same page
	source             : false,                   // Icons source (array|false|object)
	emptyIcon          : true,                    // Empty icon should be shown?
	emptyIconValue     : '',                      // The value of the empty icon, change if you select has something else, say "none"
	autoClose          : true,                    // Whether or not to close the FIP automatically when clicked outside
	iconsPerPage       : 20,                      // Number of icons per page
	hasSearch          : true,                    // Is search enabled?
	searchSource       : false,                   // Give a manual search values. If using attributes then for proper search feature we also need to pass icon names under the same order of source
	appendTo           : 'self',                  // Where to append the selector popup. You can pass string selectors or jQuery objects
	useAttribute       : false,                   // Whether to use attribute selector for printing icons
	attributeName      : 'data-icon',             // HTML Attribute name
	convertToHex       : true,                    // Whether or not to convert to hexadecimal for attribute value. If true then please pass decimal integer value to the source (or as value="" attribute of the select field)
	allCategoryText    : 'From all categories',   // The text for the select all category option
	unCategorizedText  : 'Uncategorized',         // The text for the select uncategorized option
	iconGenerator      : null,                    // Icon Generator function. Passes, item, flipBoxTitle and index
	windowDebounceDelay: 150,                     // Debounce delay while fixing position on windowResize
	searchPlaceholder  : 'Search Icons'           // Placeholder for the search input
});
```

## Plugin APIs
fontIconPicker provides three public APIs to manipulating the icon picker.

### setIcon( `String` newIcon )

Use this method to set an icon programmatically.

```js
$picker.setIcon( 'fa fa-arrow-down' );
```

### setIcons( `Array|Object` newIcons, `Array|Object` iconSearch )
 Use this method to dynamically change icons on the fly. `newIcons` and `iconSearch` (optional) have same datatypes as `source` and `searchSource` options.

```js
$picker.setIcons(['icon-one', 'icon-two']);
$picker.setIcons(['icon-one', 'icon-two'], ['Icon one will be searched by this', 'Icon two will be searched by this']);
```

### setPage( `String|Number` pageNum )

Use this method to programmatically set pagination in the fip popup. This
persists between open and close state until user has changed pagination manually.

```js
$picker.setPage( 2 );
$picker.setPage( 'first' );
$picker.setPage( 'last' );
```

Method accepts numbers and only two special strings.

* Number corresponds to the page number starting from 1.
* `first` will set the pagination to first page.
* `last` will set the pagination to last page.

### destroyPicker()
Use this to remove the icon picker and restore the original element.

```js
$picker.destroyPicker();
```

### refreshPicker( `Object|Boolean` newOptions )
Refresh the icon picker from DOM or passed options. Useful when DOM has been changed or reinitializing after calling the destroy method or changing the options values.

```js
$picker.refreshPicker({
	theme: 'fip-bootstrap',
	hasSearch: false
});
```

### repositionPicker()

Reposition picker dropdown in the window. Use this if DOM has changed and dropdown
is open. Or if your picker is inside a scrolling container.

```js
var picker = $('.myselect').fontIconPicker();
$('.mycontainer').on( 'scroll', function() {
	picker.repositionPicker();
} );
```

Options and APIs are discussed in details with live examples at the
[project page](https://fonticonpicker.github.io).

### Important notes for local demo

Only when loading demo locally: In firefox fontIconPicker icons won't be shown correctly because of CORS. For the same reason "Load icons from Fontello JSON config file" won't work on Chrome or IE 10. If you need to do some local testing you can disable strict_origin_policy at your risk.

Use the bundled [**Browser**sync](https://browsersync.io/) server to run the demo instead. See [Setup](#setup) to learn how.

## Browser Compatibility

jQuery iconPicker has been successfully tested on: Firefox (edge), Safari (edge), Chrome (edge), IE8+ and Opera (edge).

## jQuery Compatibility

`jQuery` >= 1.12.4 has been set as `peerDependencies` in the `package.json`. We have
tested with `1.x` and `3.x` branch. jQuery Migrate doesn't produce any error when
using with `3.x`.

## Development Environment

If you want to contribute keep a few things in mind.

* Any code shouldn't produce any error with ESLint and Stylelint. We check for errors
during build and if it does produce any error, then it will be rejected.
* All new JS code should have unit or integration test implemented with jest.

### Setup

First make sure Node >= v8 is installed. Then clone the repository

```bash
git clone git@github.com:fontIconPicker/fontIconPicker.git
```

and run

```bash
cd fontIconPicker
npm install
npm install -g npx
```

Which will install all dependencies. You do not need to install `jquery` as it
is defined in `devDependencies`.

Now edit the files in `src` as needed and while you do, run

```bash
npx gulp serve
```

This will serve the changes live in your browser. Access it through `http://localhost:3000`.

### Coding Standards

* All additional modules should go inside `src/js/modules` with unit tests in
 `__tests__/unit`.
* Write JS in [ES6](http://es6-features.org/#Constants). [This](https://es6.io) is
 a great place to learn. It will be compiled with babel on the go.
* Do not write CSS files directly. Write [SCSS](https://sass-lang.com/). It will
 be compiled when `npx gulp serve` is running.
* If you are writing a theme, include in the first box of `demo/index.html`.
* If you are writing an option or API, include in a separate box of `demo/index.html`.
* All new JS features should have unit/integration and/or e2e tests. We use [cypress](https://cypress.io) for e2e tests and [jest](https://facebook.github.io/jest/) for unit/integration tests.

### Automated git hooks

When you run `npm install` for the first time, [husky](https://github.com/typicode/husky) setups a few git hooks. It specifically
does two things.

1. Checks for proper [commit message](http://marionebl.github.io/commitlint/#/concepts-commit-conventions).
2. Runs linting of `js` and `scss` files to avoid any error before push.

### Continuous Integration (CI)

Additionally we run test suits for each push on [travis ci](https://travis-ci.org/fontIconPicker/fontIconPicker).

Make sure it passes by running

```bash
npm run test
```

locally on your machine. It lints all files and runs [`jest`](https://facebook.github.io/jest/) tests.

### Running tests locally

fontIconPicker has two sets of tests.

#### Unit & Integration test with [jest](https://facebook.github.io/jest/)

```bash
npx jest
```

#### End2End test with [cypress](https://www.cypress.io/)

```bash
npx cypress open
```

Then run the tests from the app. Or

```bash
npx cypress run
```

To run the tests in the terminal from a headless browser. You do not need to
worry about setting up test environment as it is taken care of automatically
by [cypress](https://www.cypress.io/).

### Available Gulp Commands

* `default` - Builds all scripts/styles and put them in `dist` folder.
* `build` - Same as default.
* `lint` - Lint all CSS and JS files.
	* `lint:script` - Lint all JS files.
	* `lint:style` - Lint all SCSS files.
* `fonts` - Copy font files to `dist` directory.
* `serve` - Build the files, init browsersync and watch files to create dev env.

Run these commands with [`npx`](https://www.npmjs.com/package/npx).

## Credits

jQuery fontIconPicker has been made by [Alessandro Benoit](http://codeb.it) & [swashata](https://github.com/swashata). You
can use the [issue tracker](https://github.com/fontIconPicker/fontIconPicker/issues) for reporting bugs or feature requests.

> Special thanks to miniMAC for the idea, Zeno Rocha for jQuery plugin boilerplate, Dave Gandy & KeyaMoon for the beautiful sets of icons and Elliot Condon for the amazing Advanced Custom Field WordPress plugin.
