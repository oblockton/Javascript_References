/*
Example issue:
*/

$( 'article' ).on( 'click', function() {
    $( 'body' ).addClass( 'selected' );
});

$( 'body' ).append( '<article> <h1>Appended Article</h1> <p>Content for the new article </p> </article>' );
//target/$('article') has not been created yet. jQuery adds the class to no DOM elements.

//Solution:

$( '.container' ).on( 'click', 'article', function() { … });
//this code tells jQuery to watch the .container element for clicks, and then if there are any, check if the click event's target
// is an article element.


// Using delegation for multiple event listeners. Code below needs event listeners on all 'li' elements.
<ul id="rooms">
    <li>Room 1</li>
    <li>Room 2</li>
            .
            .
            .
    <li>Room 999</li>
    <li>Room 1000</li>
</ul>
//Solutions
$( '#rooms li' ).on( 'click', function() {
    //code
});
// sets up an event listener for each li element of ul#rooms

$('#rooms').on('click', 'li', function(){
  //code
})
// code sets event listener on only #rooms, then checks whether the element clicked is a li of ul#rooms
