import jQuery from 'jquery';
import initFontIconPicker from '../../src/js/modules/initFontIconPicker.js';
let fip;

beforeAll( () => {
	fip = initFontIconPicker( jQuery );
} );

test( 'initialize fontIconPicker', () => {
	expect( fip ).toBeTruthy();
} );

test( 'initialize fontIconPicker only with jQuery', () => {
	const doubleFip = initFontIconPicker( {} );
	expect( doubleFip ).toBeFalsy();
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
