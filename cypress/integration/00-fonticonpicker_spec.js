/// <reference types="Cypress" />

describe( 'fonticonpicker', () => {
	it( 'server is running', () => {
		cy.visit( '/' );
	} );

	it( 'plugin is loaded', () => {
		cy.get( '#dark-grey-theme' ).should( 'not.be.visible' );
		cy.get( '.icons-selector[data-fip-origin="dark-grey-theme"]' ).should( 'be.visible' );
	} );
} );
