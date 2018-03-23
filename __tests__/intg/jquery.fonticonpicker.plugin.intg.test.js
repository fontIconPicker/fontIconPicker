const jQuery = require( 'jquery' );
const fip = require( '../../dist/js/jquery.fonticonpicker.min.js' )( jQuery );

test( 'initialize fontIconPicker', () => {
	expect( fip ).toBeTruthy();
} );

test( 'attach fontIconPicker to jQuery.fn', () => {
	expect( jQuery.fn.fontIconPicker ).toBeDefined();
	expect( typeof jQuery.fn.fontIconPicker ).toBe( 'function' );
} );

test( 'fontIconPicker has APIs', () => {
	const testSelect = jQuery( '<select><option value="">none</option><option value="fa fa-arrow"></option>' );
	const testFip = testSelect.fontIconPicker();

	expect( typeof testFip.setIcon ).toBe( 'function' );
	expect( typeof testFip.setIcons ).toBe( 'function' );
	expect( typeof testFip.destroyPicker ).toBe( 'function' );
	expect( typeof testFip.refreshPicker ).toBe( 'function' );
	expect( typeof testFip.repositionPicker ).toBe( 'function' );
} );
