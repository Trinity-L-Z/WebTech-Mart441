var myGayIconsArray = new Array();

class GayIcons {

    constructor(title, imagePath, description, creator, year)
    {
        this.title = title;
        this.imagePath = imagePath;
        this.description = description;
        this.author = creator;
        this.year = year;

    }

toString() {
    return "Title" + this.title;
}

get theTitle() {
    return this.title;
}

}


new GayIcons();


function initializeArray() {
    
    var myGayIcons = new GayIcons();

    var myGayIcons = new GayIcons();

    myViewFinderArray.push(myGayIcons);

    myViewFinderArray.push(myGayIcons);

}

function accessInformation() {

    var randomNumber = Math.floor(Math.random() * myGayIconsArray.length);

    document.getElementById("title").innerHTML = myGayIconsArray[randomNumber].toString();
}