import debounce from '../../src/js/modules/debounce.js';

test( 'debounce works as expected', () => {
	let mutate = false;
	const mutator = () => {
		mutate = true;
	};

	const watcher = () => {
		return new Promise( ( resolve ) => {
			setTimeout( () => {
				resolve();
			}, 200 );
		} );
	};

	debounce( () => mutator(), 100 )();

	debounce( () => mutator(), 100 )();
	debounce( () => mutator(), 100 )();

	expect( mutate ).toBe( false );

	return watcher()
		.then( () => {
			expect( mutate ).toBe( true );
		} );
} );
