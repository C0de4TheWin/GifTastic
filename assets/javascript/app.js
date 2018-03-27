
    //create an array of movies
var movies = ["Terminator 2", "Goodfellas", "The Dark Night", "Step Brothers"];
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    movies + "&api_key=Z2cyZ5palPTFMbQLQeF52yTe5T2FpnDi&limit=10";
//this will assign data/attr to the buttons and bring in the info via Giphy API

//create the on click function for when a button is pressed
$("button").on("click", function() {


function renderButtons() {
     
    var movies = $(this).attr("buttons");
    var data = $(this).attr("data-name");
    
    }
})

//Ajaxx will update part of the page without reloading
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
        
        for (var i = 0; i < movies.length; i++) {
            var a = $("<button>");
            a.addClass("movie");
            a.attr("data-name", movies[i]);
            a.text(movies[i]);
            $("#buttons").append(a);
        }
      })

      



   //         var results = response.data;

   //         for (var i = 0; i < results.length; i++) {
   //             var gifDiv = $("<div class='item'>");

   //            var rating = results[i].rating;

  //              var p = $("<p>").text("Rating: " + rating);

  //              var personImage = $("<img>");
   //             personImage.attr("src", results[i].images.fixed_height.url);

   //             gifDiv.prepend(p);
   //             gifDiv.prepend(personImage);

   //             $("#gifSpot").prepend(gifDiv);
    
