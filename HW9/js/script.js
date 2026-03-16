var mama = ["mama1.png", "mama2.png", "mama3.png", "mama4.png", "mama5.png"];
var mamaI = 0;
var adj = ["Blurred", "Stretched", "Strange", "Smiling", "Different"];
var adjI = 0;


$(document).ready(function(){
  function imageLoop(){
    $("#mamaImage").fadeOut("slow", function(){
      $("#mamaImage").attr("src", "./img/"+mama[mamaI]);
      $("#mamaImage").fadeIn("slow");
    });

    $("#adj").fadeOut(5000, function(){
      $("#adj").html(adj[adjI]);
      $("#adj").fadeIn(5000);
    });

    $("#mover").animate({right: "0"}, 5000, function(){
      $("#mover").fadeOut(500, function(){
        $("#mover").attr("src", "./img/daisy.png");
        $("#mover").fadeIn(500, function(){
          $("#mover").animate({right: null, left: 0}, 5000, function(){
            $("#mover").fadeOut(500, function(){
              $("#mover").attr("src", "./img/rose.png");
              $("#mover").fadeIn(500);
            });
          });
        });
      });
    });

    mamaI = mamaI + 1;
    if(mamaI > 4){
      mamaI = 0;
    };

    adjI = adjI + 1;
    if(adjI > 5){
      adjI = 0;
    };
  };

  imageLoop();
  setInterval(imageLoop, 4400);
});