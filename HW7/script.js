var imageTags = ["linky", "linky2", "linky3", "linky4", "linky5", "linky6"];
var blankImagePath = "images/linky1.png";
var actualImages = new Array();

var firstNumber = -1;
var secondNumber = -1;

var player = {"firstname":"", "lastname":"", "age":0, "score":0};
    

function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
       
    
    
}

//function to randomize images
function createRandomImageArray()
{
    var actualImagePath = ["images/linky1.png", "images/linky2.png", "images/linky3.png", "images/linky4.png", "images/linky5.png", "images/linky6.png"];
    var count = [0,0];

    while(actualImages.length < 6)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }      
}

//funtion to check if images match!
function flipImage(number)
{
    if (firstNumber >=0)
    {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = actualImages[secondNumber];
    }
    else if (firstNumber < 0);
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src = actualImages[fisrtNumber];
    }

    if (actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >=0)
    {
        setTimeout(imagesDisappear, 1000);
    }
    else if (actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        firstNumber = -1;
        secondNumber = -1;
    }
}

function imagesDisappear()
{
    console.log(firstNumber);
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imagenames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);
   
}

function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    player.firstname = firstName;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "game.html";
}