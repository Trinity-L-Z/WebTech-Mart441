let step = 0;
let score = 0;

function makeChoice(choice) {
     let story = document.getElementById("story");
    let image = document.getElementById("sceneImage");
    let choicesDiv = document.getElementById("choices");

    if (step === 0) {
        if (choice === 1) {
            step = 1;
            score += 1;
            story.innerHTML = "The signal leads you to a glowing cabin deep in the woods.";
            image.src = "images/cabin.jpg";
        } else if (choice === 2) {
            step = 2;
            story.innerHTML = "You wander aimlessly and hear something following you...";
            image.src = "images/shadow.jpg";
        } else {
            step = 3;
            score += 2;
            story.innerHTML = "From the treetop, you spot a cabin and a road.";
            image.src = "images/tree.jpg";
        }

        choicesDiv.innerHTML =
            '<button onclick="makeChoice(4)">Enter the cabin</button>' +
            '<button onclick="makeChoice(5)">Follow the road</button>' +
            '<button onclick="makeChoice(6)">Hide and wait</button>';
    }

    else {
        let ending = "Your journey ends here. Final score: " + score;
        story.innerHTML = ending;

        if (choice === 4) {
            image.src = "images/ending_good.jpg";
            story.innerHTML += "<br>You found safety inside.";
        } else if (choice === 5) {
            image.src = "images/ending_neutral.jpg";
            story.innerHTML += "<br>The road leads to an uncertain future.";
        } else {
            image.src = "images/ending_bad.jpg";
            story.innerHTML += "<br>The forest consumes the silence.";
        }

        choicesDiv.innerHTML = "";
    }
}