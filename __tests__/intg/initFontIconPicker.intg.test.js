import jQuery from 'jquery';
import initFontIconPicker from '../../src/js/modules/initFontIconPicker.js';
let fip, testSelect, testFip;

beforeAll( () => {
	fip = initFontIconPicker( jQuery );
} );

beforeEach( () => {
	testSelect = jQuery( '<select><option value="">none</option><option value="fa fa-arrow"></option>' );
	testFip = testSelect.fontIconPicker();
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
	expect( typeof testFip.setIcon ).toBe( 'function' );
	expect( typeof testFip.setIcons ).toBe( 'function' );
	expect( typeof testFip.destroyPicker ).toBe( 'function' );
	expect( typeof testFip.refreshPicker ).toBe( 'function' );
	expect( typeof testFip.repositionPicker ).toBe( 'function' );
	expect( typeof testFip.setPage ).toBe( 'function' );
} );

test( 'API setIcons work', () => {
	const setIcons = testSelect.data( 'fontIconPicker' ).setIcons = jest.fn();
	testFip.setIcons( {}, false );
	expect( setIcons ).toHaveBeenCalledTimes( 1 );
} );

test( 'API setIcon work', () => {
	const setIcon = testSelect.data( 'fontIconPicker' ).setIcon = jest.fn();
	testFip.setIcon( '' );
	expect( setIcon ).toHaveBeenCalledTimes( 1 );
} );

test( 'API setPage work', () => {
	const setPage = testSelect.data( 'fontIconPicker' ).setPage = jest.fn();
	testFip.setPage( 2 );
	expect( setPage ).toHaveBeenLastCalledWith( 2 );
} );

test( 'API destroyPicker work', () => {
	const destroy = testSelect.data( 'fontIconPicker' ).destroy = jest.fn();
	testFip.destroyPicker();
	expect( destroy ).toHaveBeenCalledTimes( 1 );
	expect( testSelect.data( 'fontIconPicker' ) ).toBeUndefined();
} );

test( 'API refreshPicker work', () => {
	const destroy = testSelect.data( 'fontIconPicker' ).destroy = jest.fn();
	testFip.refreshPicker();
	expect( destroy ).toHaveBeenCalledTimes( 1 );
	expect( testSelect.data( 'fontIconPicker' ) ).toBeDefined();
} );

test( 'API repositionPicker work', () => {
	const resetPosition = testSelect.data( 'fontIconPicker' ).resetPosition = jest.fn();
	testFip.repositionPicker();
	expect( resetPosition ).toHaveBeenCalledTimes( 1 );
} );
