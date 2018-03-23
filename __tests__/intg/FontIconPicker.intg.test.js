// Unit test some aspects of FontIconPicker class
import jQuery from 'jquery';
import defaultOptions from '../../src/js/modules/defaults.js';
import { FontIconPicker } from '../../src/js/modules/FontIconPicker.js';

const fipObj = {
	selectCategorized: null,
	selectUncategorized: null,
	inputCategorized: null,
	inputCategorizedNoSearch: null,
	inputUncategorized: null,
	emptyInput: null,
	eventInput: null
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

	// Append a select without category
	const selectUncategorized = jQuery( global.__fipTestDOM__.selectUncategorized )
		.attr( 'id', 'fip-test-select-uncategorized' )
		.appendTo( body );

	// Init fip
	fipObj.selectUncategorized = new FontIconPicker( selectUncategorized, {} );

	// Append an input with category
	const inputCategorized = jQuery( global.__fipTestDOM__.input )
		.attr( 'id', 'fip-test-input-categorized' )
		.appendTo( body );

	// Init fip
	fipObj.inputCategorized = new FontIconPicker( inputCategorized, {
		source: global.__fipTestVar__.attributeValues.icons,
		searchSource: global.__fipTestVar__.attributeValues.search,
		useAttribute: true,
		attributeName: global.__fipTestVar__.attributeValues.attribute
	} );

	// Append an input with category without searchSource
	const inputCategorizedNoSearch = jQuery( global.__fipTestDOM__.input )
		.attr( 'id', 'fip-test-input-categorized-nosearch' )
		.appendTo( body );

	// Init fip
	fipObj.inputCategorizedNoSearch = new FontIconPicker( inputCategorizedNoSearch, {
		source: global.__fipTestVar__.classValues.icons,
		useAttribute: false
	} );


	// Append an input without category
	const inputUncategorized = jQuery( global.__fipTestDOM__.input )
		.attr( 'id', 'fip-test-input-categorized-nosearch' )
		.appendTo( body );

	// Init fip
	fipObj.inputUncategorized = new FontIconPicker( inputUncategorized, {
		source: global.__fipTestVar__.classValues.icons.Others,
		useAttribute: false
	} );

	// Empty Input without any options
	const emptyInput = jQuery( global.__fipTestDOM__.input )
		.attr( 'id', 'fip-empty-input' )
		.appendTo( body );
	fipObj.emptyInput = new FontIconPicker( emptyInput, {} ); // Init with empty input

	// For event testing
	const eventInput = jQuery( global.__fipTestDOM__.input )
		.attr( 'id', 'fip-empty-input' )
		.appendTo( body );
	fipObj.eventInput = new FontIconPicker( eventInput, {
		source: global.__fipTestVar__.classValues.icons,
		useAttribute: false
	} );
} );

test( 'inherit default options', () => {

	// Adjust the iconsPerPage to match with emptyIcon
	const clonedOptions = { ...defaultOptions };
	clonedOptions.iconsPerPage--;
	for ( const key in clonedOptions ) {
		expect( fipObj.emptyInput.settings ).toHaveProperty( key, clonedOptions[ key ] );
	}
} );

test( 'populate categorized source from select', () => {
	const fip = fipObj.selectCategorized;
	const domElement = fip.element;

	// Check if categorized
	expect( fip.isCategorized ).toBe( true );

	// Check if all option got into source & search
	let optionItems = [],
		searchItems = [];
	domElement.find( 'option' ).map( function() {
		if ( '' != this.value ) {
			optionItems.push( this.value );
			searchItems.push( this.textContent );
		}
	} );
	expect( fip.settings.source )
		.toHaveLength( optionItems.length );
	expect( fip.settings.source )
		.toEqual( expect.arrayContaining( optionItems ) );

	expect( fip.searchValues )
		.toHaveLength( searchItems.length );
	expect( fip.searchValues )
		.toEqual( expect.arrayContaining( searchItems ) );

	// Check categories
	const popUpCategorySelector = fip.selectCategory.find( 'option' );
	expect( popUpCategorySelector.eq( 0 ).html() ).toBe( defaultOptions.allCategoryText );
	domElement.find( 'optgroup' ).map( ( i, el ) => {

		// The first one has label for all categories
		expect( popUpCategorySelector.eq( i + 1 ).text() ).toBe( jQuery( el ).attr( 'label' ) );
	} );
} );

test( 'populate uncategorized source from select', () => {
	const fip = fipObj.selectUncategorized;
	const domElement = fip.element;

	// Check if categorized
	expect( fip.isCategorized ).toBe( false );

	// Check if all option got into source & search
	let optionItems = [],
		searchItems = [];
	domElement.find( 'option' ).map( function() {
		if ( '' != this.value ) {
			optionItems.push( this.value );
			searchItems.push( this.textContent );
		}
	} );
	expect( fip.settings.source )
		.toHaveLength( optionItems.length );
	expect( fip.settings.source )
		.toEqual( expect.arrayContaining( optionItems ) );

	expect( fip.searchValues )
		.toHaveLength( searchItems.length );
	expect( fip.searchValues )
		.toEqual( expect.arrayContaining( searchItems ) );
} );

test( 'populate categorized input with custom search', () => {
	const fip = fipObj.inputCategorized;
	const domElement = fip.element;
	const iconsTruth = global.__fipTestVar__.attributeValues.icons;
	const searchTruth = global.__fipTestVar__.attributeValues.search;
	let categories = [],
		flattenedIcons = [],
		flattenedSearch = [];
	for ( const cat in iconsTruth ) {
		categories.push( cat );
		flattenedIcons = [ ...flattenedIcons, ...iconsTruth[ cat ].map( v => v.toString() ) ];
		flattenedSearch = [ ...flattenedSearch, ...searchTruth[ cat ].map( v => v.toString() ) ];
	}

	// check if categorized
	expect( fip.isCategorized ).toBe( true );

	// Check sources
	expect( fip.settings.source ).toHaveLength( flattenedIcons.length );
	expect( fip.settings.source )
		.toEqual( expect.arrayContaining( flattenedIcons ) );

	// Check search sources
	expect( fip.searchValues )
		.toHaveLength( flattenedSearch.length );
	expect( fip.searchValues )
		.toEqual( expect.arrayContaining( flattenedSearch ) );

	// Check categories
	const popUpCategorySelector = fip.selectCategory.find( 'option' );
	expect( popUpCategorySelector.eq( 0 ).html() ).toBe( defaultOptions.allCategoryText );
	categories.map( ( value, i ) => {

		// The first one has label for all categories
		expect( popUpCategorySelector.eq( i + 1 ).text() ).toBe( value );
	} );
} );

test( 'populate categorized input without custom search', () => {
	const fip = fipObj.inputCategorizedNoSearch;
	const domElement = fip.element;
	const iconsTruth = global.__fipTestVar__.classValues.icons;

	let flattenedIcons = [],
		categories = [];
	for ( const cat in iconsTruth ) {
		categories.push( cat );
		flattenedIcons = [ ...flattenedIcons, ...iconsTruth[ cat ] ];
	}

	// check if categorized
	expect( fip.isCategorized ).toBe( true );

	// Check sources
	expect( fip.settings.source ).toHaveLength( flattenedIcons.length );
	expect( fip.settings.source )
		.toEqual( expect.arrayContaining( flattenedIcons ) );

	// Check search sources which should be same as icon sources
	expect( fip.searchValues )
		.toHaveLength( flattenedIcons.length );
	expect( fip.searchValues )
		.toEqual( expect.arrayContaining( flattenedIcons ) );

	// Check categories
	const popUpCategorySelector = fip.selectCategory.find( 'option' );
	expect( popUpCategorySelector.eq( 0 ).html() ).toBe( defaultOptions.allCategoryText );
	categories.map( ( value, i ) => {

		// The first one has label for all categories
		expect( popUpCategorySelector.eq( i + 1 ).text() ).toBe( value );
	} );
} );

test( 'populate uncategorized input without custom search', () => {
	const fip = fipObj.inputUncategorized;
	const domElement = fip.element;
	const iconsTruth = global.__fipTestVar__.classValues.icons.Others;

	let flattenedIcons = []
	for ( const icon of iconsTruth ) {
		flattenedIcons.push( icon );
	}

	// check if categorized
	expect( fip.isCategorized ).toBe( false );

	// Check sources
	expect( fip.settings.source ).toHaveLength( flattenedIcons.length );
	expect( fip.settings.source )
		.toEqual( expect.arrayContaining( flattenedIcons ) );

	// Check search sources which should be same as icon sources
	expect( fip.searchValues )
		.toHaveLength( flattenedIcons.length );
	expect( fip.searchValues )
		.toEqual( expect.arrayContaining( flattenedIcons ) );
} );

test( 'setIcons sets new icons', () => {
	const fip = fipObj.emptyInput;
	fip.setIcons( global.__fipTestVar__.attributeValues.icons, global.__fipTestVar__.attributeValues.search );

	const iconsTruth = global.__fipTestVar__.attributeValues.icons;
	const searchTruth = global.__fipTestVar__.attributeValues.search;
	let categories = [],
		flattenedIcons = [],
		flattenedSearch = [];
	for ( const cat in iconsTruth ) {
		categories.push( cat );
		flattenedIcons = [ ...flattenedIcons, ...iconsTruth[ cat ].map( v => v.toString() ) ];
		flattenedSearch = [ ...flattenedSearch, ...searchTruth[ cat ].map( v => v.toString() ) ];
	}

	// check if categorized
	expect( fip.isCategorized ).toBe( true );

	// Check sources
	expect( fip.settings.source ).toHaveLength( flattenedIcons.length );
	expect( fip.settings.source )
		.toEqual( expect.arrayContaining( flattenedIcons ) );

	// Check search sources
	expect( fip.searchValues )
		.toHaveLength( flattenedSearch.length );
	expect( fip.searchValues )
		.toEqual( expect.arrayContaining( flattenedSearch ) );

	// Check categories
	const popUpCategorySelector = fip.selectCategory.find( 'option' );
	expect( popUpCategorySelector.eq( 0 ).html() ).toBe( defaultOptions.allCategoryText );
	categories.map( ( value, i ) => {

		// The first one has label for all categories
		expect( popUpCategorySelector.eq( i + 1 ).text() ).toBe( value );
	} );
} );

test( 'setIcon sets selected icon', () => {
	const fip = fipObj.inputCategorizedNoSearch;
	const domElement = fip.element;

	// Setting the .current-icon will only work if it is in the container w/ pagination
	const selectedIcon = 'icon-th-large';
	fip.setIcon( selectedIcon );

	expect( domElement.val() ).toBe( selectedIcon );
	expect( fip.iconPicker.find( '.selected-icon' ).html() ).toBe( fip._iconGenerator( selectedIcon ) );
	expect( fip.iconContainer.find( '.current-icon' ).data( 'fip-value' ) ).toBe( selectedIcon );
} );

test( 'init sets namespaced events', () => {
	const fip = fipObj.eventInput;
	const namespace = fip.eventNameSpace.replace( '.', '' );

	// Window event
	const windowEvent = jQuery._data( window, 'events' )
		.resize
		.filter( ( e ) => namespace === e.namespace );
	expect( windowEvent.length ).toBeTruthy();

	// html event
	const htmlEvent = jQuery._data( jQuery( 'html' ).get( 0 ), 'events' )
		.click
		.filter( ( e ) => namespace === e.namespace );
	expect( htmlEvent.length ).toBeTruthy();
} );

test( 'destroy removes namespaced events and element', () => {
	const fip = fipObj.eventInput;
	const namespace = fip.eventNameSpace.replace( '.', '' );
	fip.destroy();

	// Window event
	const windowEvent = jQuery._data( window, 'events' )
		.resize
		.filter( ( e ) => namespace === e.namespace );
	expect( windowEvent.length ).toBeFalsy();

	// html event
	const htmlEvent = jQuery._data( jQuery( 'html' ).get( 0 ), 'events' )
		.click
		.filter( ( e ) => namespace === e.namespace );
	expect( htmlEvent.length ).toBeFalsy();

	// Element
	expect( jQuery.contains( document, fip.iconPicker[0] ) ).toBeFalsy();
} );
