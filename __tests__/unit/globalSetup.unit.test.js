test( 'jest globalSetup is working', () => {
	expect( global.__fipTestDOM__ ).toBeDefined();
} );
