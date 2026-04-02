$(document).ready(function () {

    var i = 0;

            $("button").click(function () {
                $("#musicInformation").load("data/musicInfo.json", function(responseText){

                    console.log(responseText)
                    var genre = JSON.parse(responseText);
                    console.log(genre.genres);
                    $("#musicInformation").html("Name: " + genre.genres[i].name 
                + "<br>Origin Decade: " + genre.genres[i].origin_decade + "<br>Parent: " + genre.genres[i].parent + "<br>Subgenres:<br>" + genre.genres[i].subgenres[0] + "<br>" + genre.genres[i].subgenres[1] + "<br>" + genre.genres[i].subgenres[2] + "<br>" + genre.genres[i].subgenres[3] + "<br>" + genre.genres[i].subgenres[4]);
                });
      i += 1;           
            });
        });