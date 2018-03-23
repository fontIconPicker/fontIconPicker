// Unit test some aspects of FontIconPicker class
import jQuery from 'jquery';
import defaultOptions from '../../src/js/modules/defaults.js';
import { FontIconPicker } from '../../src/js/modules/FontIconPicker.js';

const fipObj = {
	selectCategorized: null,
	selectUncategorized: null,
	inputCategorized: null,
	inputUncategorized: null,
	emptyInput: null
};

// prepare the DOM for testing
beforeAll( () => {
	const body = jQuery( 'body' );

	// Append a select with category
	const selectCategorized = jQuery( global.__fipTestDOM__.selectCategorized )
		.attr( 'id', 'fip-test-select-categorized' )
		.appendTo( body );

	// Init fip
	fipObj.selectCategorized = new FontIconPicker( selectCategorized, {} );

	// Empty Input without any options
	const emptyInput = jQuery( global.__fipTestDOM__.input )
		.attr( 'id', 'fip-empty-input' )
		.appendTo( body );
	fipObj.emptyInput = new FontIconPicker( emptyInput, {} ); // Init with empty input
} );

test( 'FontIconPicker inherits default options', () => {

	// Adjust the iconsPerPage to match with emptyIcon
	const clonedOptions = defaultOptions.clone();
	clonedOptions.iconsPerPage--;
	for ( const key in defaultOptions ) {
		expect( fipObj.emptyInput.settings ).toHaveProperty( key, defaultOptions[ key ] );
	}
} );
