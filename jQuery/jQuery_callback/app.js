/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!

*/

function replacePic() {
  var article1 = $('.article-item').first();
  var image = article1.children('img');
  image.attr("src", "http://i209.photobucket.com/albums/bb141/ryan1945/srt1008_041600.jpg")
}

$(replacePic);
