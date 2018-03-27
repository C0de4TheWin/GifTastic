
    //create an array of movies
var movies = ["Terminator 2", "Goodfellas", "The Dark Night", "Step Brothers"];
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    movies + "&api_key=Z2cyZ5palPTFMbQLQeF52yTe5T2FpnDi&limit=10";
//this will assign data/attr to the buttons and bring in the info via Giphy API


//create the on click function for when a button is pressed
//$("button").on("click", function() {

function renderButtons() {
    $("#buttons").empty();
    var movies = $(this).attr("buttons");
    var data = $(this).attr("data-name");
    
    }


//Ajaxx will update part of the page without reloading
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
        
        //create a loop so the code is executed repeatedly when a movie is searched it is added via append with its own button

        for (var i = 0; i < movies.length; i++) {
            var a = $("<button>"); //creates button for each movie in array
            a.addClass("movie");
            a.attr("data-name", movies[i]);
            a.text(movies[i]);
            $("#buttons").append(a);
        }
      })  //attempting to add buttons each search.

      //I think my issue might be having to recreate my button IDs in HTML
      //button data-movies might not be right?
      $("#buttons").on("click", function(event) {
        event.preventDefault();
        var movie = $("#movieAdd").val().trim();
        movies.push(movie); });
    
        
    
