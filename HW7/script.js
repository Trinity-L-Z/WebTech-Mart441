var imageTags = ["linky1", "linky2", "linky3", "linky4", "linky5", "linky6"];
//variable for the cover image
var blankImagePath = "images/coverlinky.png";
var actualImages = new Array();

var firstNumber = -1;
var secondNumber = -1;

var player = {"firstname":"", "lastname":"", "age":0, "score":0};
    
//function to make cover image appear initially
function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src = blankImagePath;
    }
       
    
    
}

//function to randomize images
function createRandomImageArray()
{
    var actualImagePath = ["images/linky1.png", "images/linky2.png", "images/linky3.png"];
    var count = [0,0,0];

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

//funtion to flip images and check if images match!
function flipImage(number)
{
    if (firstNumber >=0)
    {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = actualImages[secondNumber];
    }
    else if (firstNumber < 0)
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src = actualImages[firstNumber];
    }
        console.log(firstNumber + ";" + secondNumber)

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


//function to make images restart if they don't match
function imagesDisappear()
{
    //console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    //console.log(player.firstname);
   var str = "Name: " + player.firstname + " " + player.lastname + "<br>" + "Age: " + player.age + "<br>" + "Score: " + player.score;

   if(document.getElementById("endInformation") != null)
   {
    document.getElementById("endInformation").innerHTML = str;
   }

}

function addToPlayer()
{
    
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;

    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;

    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "game.html";
}