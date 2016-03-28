$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#sentence").val();
    var arrayOfStrings = userInput.split(" ");
    var newArray =[];

    arrayOfStrings.forEach(function(string) {
      if (string.length >= 3) {
        newArray.push(string.toUpperCase());
      }
    });
    var newString = newArray.reverse().join(" ");
    alert(newString);
  });
});
