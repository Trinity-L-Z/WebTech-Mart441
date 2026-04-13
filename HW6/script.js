var imageTags = ["link1", "link2", "link3", "link", "link5", "link6"];
var blankImagePath = "images/link1.png";
var actualImages = new Array();
    
function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
       
    
    
}

function createRandomImageArray()
{
    var actualImagePath = ["images/link1.png", "images/link2.png", "images/link3.png", "images/link4.png", "images/link5.png", "images/link6.png"];
    var count = [0,0];

    while(actualImages.length < 7)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
    
  
    
    
        
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
}