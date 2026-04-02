 $(document).ready(function () {
            $("button").click(function () {
                $("#musicInformation").load("data/musicInfo.json", function(responseText){
                    var genres = JSON.parse(responseText);
                    $("#musicInformation").html("Name: " + genres.name 
                + "<br>Origin Decade:" + genres.origin_decade + "<br>Parent:" + genres.parent + "<br>Subgenres:" +
                genres.subgenres[0] + "<br>" + genres.subgenres[1] + "<br>" + genres.subgenres[2] + "<br>" + genres.subgenres[3] + genres.subgenres[4]);
                });
            });
        });