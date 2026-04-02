$(document).ready(function () {
            $("button").click(function () {
                $("#musicInformation").load("data/musicInfo.json", function(responseText){
                    var genre = JSON.parse(responseText);
                    $("#musicInformation").html("Name: " + genre.name 
                + "<br>Origin Decade: " + genre.origin_decade + "<br>Parent:" + genre.parent + "<br>Subgenres:<br>" )
                
                /* + genre.subgenres[0] + "<br>" + genre.subgenres[1] + "<br>" + genre.subgenres[2] + "<br>" + genre.subgenres[3] + "<br>" + genre.subgenres[4]); */
                });
            });
        });