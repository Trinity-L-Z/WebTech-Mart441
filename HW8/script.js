var myGayIconsArray = new Array();

class GayIcons {

    constructor(title, imagePath, description, creator, year)
    {
        this.title = title;
        this.imagePath = imagePath;
        this.description = description;
        this.creator = creator;
        this.year = year;

    }

get theTitle() {
    return this.title;
}

get theimagePath() {
    return this.imagePath;
}

get theDescription() {
    return this.description;
}

get theCreator() {
    return this.creator;
}

get theYear() {
    return this.year;
}

}

new GayIcons();


function initializeArray() {
    
    var myGayIcons = new GayIcons("Pride in the 1980s", "images/pride85.jpg.webp", "The Lesbians and Gays Support the Miners group.", "Photo coutesy of the Peace New Archive/University of Bradford, Special Collections", "1985" );
    myGayIconsArray.push(myGayIcons);

    var myGayIcons1 = new GayIcons("Stop Anita Bryant", "images/anitabryant.png", "Anita Bryant—a singer and former beauty pageant contestant—was an outspoken opponent of LGBTQ rights in the United States. She openly supported repealing protections against sexual orientation discrimination in multiple states. The photo depicts people protesting at a Stop Anita Bryant Demonstration at Hollywood High School in 1977.", "Photograph by Pat Rocco", "1977");
    myGayIconsArray.push(myGayIcons1);

    var myGayIcons2 = new GayIcons("Marsha P. Johnson", "images/MPJ.jpg.webp", "Marsha P. Johnson was an African American transgender-rights activist, whose work in the 1960s and 1970s had a huge impact on the LGBT community. In June 1969, when Marsha was 23 years old, police raided a gay bar in New York called The Stonewall Inn. The police forced over 200 people out of the bar and onto the streets, and then used excessive violence against them. Marsha, who was living and working in New York at the time, was one of the key figures who stood up to the police during the raids.", "Photographer unknown", "Year unknown");
    myGayIconsArray.push(myGayIcons2);

    var myGayIcons3 = new GayIcons("Lesbiana de Latino America", "images/latinalesbians.png", "Queer Latina activists began organizing in response to the Chicano movement and the White-focused women’s movement in the 1970s. Many organizations came together as a way to address the political underpining of being a double minority, namely being queer/gay and being Latinx. The Latina Lesbians organized in Los Angeles in 1970s. A notable group called Lesbianas Unidas formed in 1984 and helped define a sense of shared identity, engaged in political conversations to address racism, sexism, and homophobia, and created commmunity for its members. Groups like this existed in other parts of to the US and led the intersectional dialogs within the Civil Rights movement.", "Image from the ONE Archives at the USC Libraries, taken at the Los Angeles Christopher Street West pride parade", "1981");
    myGayIconsArray.push(myGayIcons3);

    var myGayIcons4 = new GayIcons("Audre Lorde", "images/audrelorde.png", "A pioneer of intersectionality, poet Audre Lorde insisted on recognition of herself as black, feminist, and lesbian.", "Photograph by Stephen Stewart", "1984");
    myGayIconsArray.push(myGayIcons4);

}

function accessInformation() {

    var randomNumber = Math.floor(Math.random() * myGayIconsArray.length);

    document.getElementById("title").innerHTML = myGayIconsArray[randomNumber].theTitle;
    document.getElementById("imagePath").src = myGayIconsArray[randomNumber].theimagePath;
    document.getElementById("description").innerHTML = myGayIconsArray[randomNumber].theDescription;
    document.getElementById("creator").innerHTML = myGayIconsArray[randomNumber].theCreator;
    document.getElementById("year").innerHTML = myGayIconsArray[randomNumber].theYear;
}