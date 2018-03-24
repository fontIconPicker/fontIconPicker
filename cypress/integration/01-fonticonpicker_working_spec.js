/// <reference types="Cypress" />
describe( 'fonticonpicker ui', () => {
	const aFip = '.icons-selector[data-fip-origin="bootstrap-theme"]';
	const aFipButton = '.selector[data-fip-origin="bootstrap-theme"] .selector-button';
	const aFipPopup = '.selector-popup-wrap[data-fip-origin="bootstrap-theme"] .selector-popup';
	beforeEach( () => {
		cy.visit( '/' );
	} );

	it( 'toggles popup on click', () => {

		// Popup should not be visible
		cy.get( aFipPopup ).should( 'not.be.visible' );

		// But the button should be visible
		cy.get( aFipButton ).should( 'be.visible' );

		// Click the button
		cy.get( aFipButton ).click();

		// Now it should be visible
		cy.get( aFipPopup ).should( 'be.visible' );

		// Click the button again
		cy.get( aFipButton ).click();

		// Now it should go invisible again
		cy.get( aFipPopup ).should( 'not.be.visible' );
	} );

	it( 'changes icon on select', () => {
		cy.get( aFip ).find( '.selected-icon' ).then( $selected => {

			// Store the current value
			const currentValue = $selected.html();

			// Open it up
			cy.get( aFipButton ).click();

			// click an icon
			cy.get( aFipPopup ).find( '.fip-box' ).eq( 2 ).click().then( $el => {
				const changedValue = $selected.html();
				expect( changedValue ).not.eq( currentValue );
				expect( changedValue ).eq( $el.html() );
			} );
		} );

	} );

	it( 'changes icon-set on category select', () => {

		// open it up
		cy.get( aFipButton ).click().then( () => {

			// Now store the icons
			cy.get( aFipPopup ).find( '.fip-icons-container' ).then( $container => {
				const currentValue = $container.html();

				// Change the category
				cy.get( aFipPopup ).find( 'select' ).select( '2' ).then( () => {
					const changedValue = $container.html();
					expect( changedValue ).not.eq( currentValue );
				} );

				// Change it back
				cy.get( aFipPopup ).find( 'select' ).select( '0' ).then( () => {
					const changedValue = $container.html();
					expect( changedValue ).eq( currentValue );
				} );
			} );
		} );
	} );

	it( 'changes icon-set on search', () => {

		// open it up
		cy.get( aFipButton ).click().then( () => {

			// store icon set before search
			cy.get( aFipPopup ).find( '.fip-icons-container' ).then( $container => {
				const currentValue = $container.html();

				// Change the search
				cy.get( aFipPopup ).find( '.icons-search-input' )
					.type( 'wand' )
					.then( () => {
						const changedValue = $container.html();
						expect( changedValue ).not.eq( currentValue );
						expect( changedValue ).contains( 'Wand' );
					} )
					.type( '{backspace}{backspace}{backspace}{backspace}' )
					.then( () => {
						const changedValue = $container.html();
						expect( changedValue ).eq( currentValue );
					} )
					.type( 'arrow' )
					.then( () => {
						const changedValue = $container.html();
						expect( changedValue ).not.eq( currentValue );
					} )
					.next( '.fip-icon-cancel' )
					.click()
					.then( () => {
						const changedValue = $container.html();
						expect( changedValue ).eq( currentValue );
					} );
			} );
		} );
	} );

	it( 'changed icon-set on pagination', () => {

		// open it up
		cy.get( aFipButton ).click().then( () => {
			cy.get( aFipPopup ).find( '.selector-pages' ).then( $pager => {
				const currentNav = $pager.html();
				const totalPages = parseInt( currentNav.split( '/' )[1], 10 );

				// has 1 in the pagination
				expect( currentNav ).contains( '1/' );

				// left arrow is not visible
				cy.get( aFipPopup ).find( '.selector-arrow-left' ).should( 'not.be.visible' );

				// right arrow is not visible
				cy.get( aFipPopup ).find( '.selector-arrow-right' ).should( 'not.be.visible' );

				// now find the container then assert
				cy.get( aFipPopup ).find( '.fip-icons-container' ).then( $container => {
					const currentValue = $container.html();

					// Change the page
					cy.get( aFipPopup ).find( '.selector-arrow-right' ).click()
						.then( () => {
							const changedValue = $container.html();
							const changedNav = $pager.html();

							// left arrow is visible now
							cy.get( aFipPopup ).find( '.selector-arrow-left' ).should( 'be.visible' );

							// has 2 in pagination
							expect( changedNav ).contains( '2/' );

							// container has changed
							expect( changedValue ).not.eq( currentValue );
						} );

					// change the page again back to 1
					cy.get( aFipPopup ).find( '.selector-arrow-left' )
						.click()
						.then( () => {
							const changedValue = $container.html();
							const changedNav = $pager.html();

							// left arrow is not visible now
							cy.get( aFipPopup ).find( '.selector-arrow-left' ).should( 'not.be.visible' );

							// has 1 in pagination
							expect( changedNav ).contains( '1/' );

							// container has restored
							expect( changedValue ).eq( currentValue );
						} );
				} );

			} );
		} );
	} );
} );
