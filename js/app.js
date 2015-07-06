//Problem: User when clicking on image goes to a dead in - poor UX
//Solution: Create and overlay with the large image - Light Box

//1. Capture the click event on a link to an image
    //1.1 Show the overlay
    //1.2 Update overlay with the image linked in the link
    //1.3 Get child alt attribute and set caption
//2. Add an overlay
    //2.1 An image
    //2.2 A caption
//3. When overlay is clicked hide the overlay

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);

$("#imageGallery a").click(function(event) {
 event.preventDefault();
 var imageLocation = $(this).attr("href");
 $image.attr("src", imageLocation);
 $overlay.show();
  
 var captionText = $(this).children("img").attr("alt");
 $caption.text(captionText);                                  
});


$overlay.click(function() {
   $overlay.hide();
               });
