/**
* Implementation of debounce function
*
* {@link https://medium.com/a-developers-perspective/throttling-and-debouncing-in-javascript-b01cad5c8edf}
* @param {Function} func callback function
* @param {int} delay delay in milliseconds
*/
const debounce = ( func, delay ) => {
	let inDebounce;
	return function() {
		const context = this;
		const args = arguments;
		clearTimeout( inDebounce );
		inDebounce = setTimeout( () => func.apply( context, args ), delay );
	};
};

export default debounce;
