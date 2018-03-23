import options from '../../src/js/modules/defaults.js';

test( 'options type is Object', () => {
	expect( options ).toBeInstanceOf( Object );
} );

test( 'options has all default properties', () => {
	const defaultOptions = [ 'theme', 'source', 'emptyIcon', 'emptyIconValue',
		'autoClose', 'iconsPerPage', 'hasSearch', 'searchSource', 'appendTo',
		'useAttribute', 'attributeName', 'convertToHex', 'allCategoryText',
		'unCategorizedText', 'iconGenerator', 'windowDebounceDelay',
		'searchPlaceholder'	];
	for ( const prop of defaultOptions ) {
		expect( options[ prop ] ).toBeDefined();
	}
} );
