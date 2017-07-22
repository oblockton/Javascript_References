$( 'article' ).on( 'click', function( evt ) {
    $( evt.target ).css( 'background', 'red' );
});

/* Listens for 'click' events on target: 'article'.
 performs a function on the event object/ 'evt'.
 within the event object it finds the target property and changes
 the CSS bockground to Red.
*/

 event.keyCode to learn what key was pressed - invaluable if you need to listen for a specific key
event.pageX and event.pageY to know where on the page the click occurred - helpful for analytics tracking
event.type to find what event happened - useful if listening to a target for multiple events
evt.preventDefault(); line instructs the browser not to perform the default action.
