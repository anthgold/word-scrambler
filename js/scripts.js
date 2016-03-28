$(document).ready(function() {
  // $("#submit").submit(function(event) {
  $("#submit").click(function(event) {
    event.preventDefault();
    var suits = ["spades", "clubs", "hearts", "diamonds"];
    var faces = ["Ace of ", "2 of ", "3 of ", "4 of ", "5 of ", "6 of ", "7 of ", "8 of ", "9 of ", "10 of ", "Jack of ", "Queen of ", "King of "]
    suits.forEach(function(suit) {
	    faces.forEach(function(face) {
 		   //  $("ul#deck").append("<li>" + faces + suits + "</li>")
       $("ul#deck").append("<li>" + face + suit + "</li>")
      });
    });

  });
});
