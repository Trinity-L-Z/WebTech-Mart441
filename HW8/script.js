var myViewFinder = new Array();

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
    
    var myViewFinder = new GayIcons();

    var myViewFinder = new GayIcons();

    myViewFinderArray.push(myViewFinder);

    myViewFinderArray.push(myViewFinder);

}

function accessInformation() {

    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);

    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
}