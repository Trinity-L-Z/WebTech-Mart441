function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "I'm comfy on my couch") {
        document.getElementById("story").innerHTML = "Your cat is sleeping very snuggly on your lap, but you just realized you left your favorite snack on the counter in the kitchen. What do you do?";
        document.getElementById("choice1").innerHTML = "Get up and pray for forgiveness";
        document.getElementById("choice2").innerHTML = "Stay put and remain unsatisfied for the halftime show";
    } else if (choice == 2 && answer2 == "I'M AT THE STADIUM RARRRWW") {
        document.getElementById("story").innerHTML = "You are impatient for the halftime show to start. How do you pass the time?";
        document.getElementById("choice1").innerHTML = "Go get a hot dog";
        document.getElementById("choice2").innerHTML = "Pick a fight with Benito haters";
    } else if (choice == 1 && answer1 == "Meet others") {
        document.getElementById("story").innerHTML = "Pugster walks over to a group of dogs and says hello.  Pugster is trying to decide who is genuine or not.";
        document.getElementById("choice1").innerHTML = "Evaluate all dogs";
        document.getElementById("choice2").innerHTML = "Stay clear";
    } else if (choice == 2 && answer2 == "Walk alone") {
        document.getElementById("story").innerHTML = "Pugster starts to walk over to the dogs and then decides to go to the water instead.  Now what?'";
        document.getElementById("choice1").innerHTML = "Go for a swim";
        document.getElementById("choice2").innerHTML = "Get a drink";
    } else if (choice == 1 && answer1 == "Go ahead and be brave") {
        document.getElementById("story").innerHTML = "Pugster decides to go in even with hesitation to make new friends.  Will it work?'";
        document.getElementById("choice1").innerHTML = "Yes it will work";
        document.getElementById("choice2").innerHTML = "No it will not work";
    } else if (choice == 2 && answer2 == "Scan the situation") {
        document.getElementById("story").innerHTML = "Pugster decides to just look around for the moment. What should Pugster do now?";
        document.getElementById("choice1").innerHTML = "Watch from afar";
        document.getElementById("choice2").innerHTML = "Get in closer";
    }
} 