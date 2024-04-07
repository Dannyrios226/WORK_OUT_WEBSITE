/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const FRESH_PRINCE_URL = "https://m.media-amazon.com/images/I/71d3CdMuJSL._AC_SY879_.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/I/71A2z2zdGSL._AC_SY879_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://m.media-amazon.com/images/I/71bU71azUZL._AC_SY879_.jpg";
const Cardio_URL = "https://m.media-amazon.com/images/I/61jnhf7QjbL._AC_SL1135_.jpg"
// This is an array of strings (TV show titles)
let titles = [
    "PUSH",
    "PULL",
    "LEGS",
    "CARDIO" 
];

const pushExercises = {
    chest: [
        { name: "Push-up", difficulty: "Beginner" },
        { name: "Bench Press", difficulty: "Intermediate" },
        { name: "Dumbbell Flyes", difficulty: "Intermediate" },
       
    ],
    triceps: [
        { name: "Tricep Dips", difficulty: "Intermediate" },
        { name: "Tricep Extension", difficulty: "Intermediate" },
        { name: "Skull Crushers", difficulty: "Intermediate" },
       
    ],
    shoulders: [
        { name: "Overhead Press", difficulty: "Intermediate" },
        { name: "Lateral Raises", difficulty: "Beginner" },
        { name: "Front Raises", difficulty: "Beginner" },
  
    ]
};

const pullExercises = {
    back: [
        { name: "Pull-up", difficulty: "Intermediate" },
        { name: "Deadlift", difficulty: "Intermediate" },
        { name: "Barbell Row", difficulty: "Intermediate" },
     
    ],
    biceps: [
        { name: "Bicep Curl", difficulty: "Beginner" },
        { name: "Hammer Curl", difficulty: "Beginner" },
        { name: "Preacher Curl", difficulty: "Intermediate" },
 
    ],
    traps: [
        { name: "Dumbbell Shrugs", difficulty: "Beginner" },
        { name: "Barbell Shrugs", difficulty: "Intermediate" },
        { name: "Up right rows", difficulty: "Intermediate" },
  
    ]
};

const legExercises = {
    quads: [
        { name: "Squats", difficulty: "Intermediate" },
        { name: "Leg Press", difficulty: "Intermediate" },
        { name: "Lunges", difficulty: "Intermediate" },
      
    ],
    hamstrings: [
        { name: "KettleBell Swings", difficulty: "Intermediate" },
        { name: "Leg Curls", difficulty: "Intermediate" },
        { name: "Split Squats", difficulty: "Intermediate" },
     
    ],
    glutes: [
        { name: "Hip Thrusts", difficulty: "Intermediate" },
        { name: "Glute Bridge", difficulty: "Beginner" },
        { name: "Hip Extention", difficulty: "Beginner" },
    ]
};

const cardioExercises = {
    "15-minute": [
        { name: "Jump Rope", difficulty: "Beginner" },
        { name: "High Knees", difficulty: "Beginner" },
        { name: "Burpees", difficulty: "Intermediate" },
     
    ],
    "30-minute": [
        { name: "jogging", difficulty: "Intermediate" },
        { name: "rowing", difficulty: "Intermediate" },
        { name: "Elliptical", difficulty: "Intermediate" },
      
    ],
    "45-minute": [
        { name: "Swimming", difficulty: "Intermediate" },
        { name: "biking", difficulty: "Intermediate" },
        { name: "walking", difficulty: "beginer" },
        
    ]
};


// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
   for (let i = 0; i < titles.length; i++) {
        let title = titles[i];

       if (title === "PUSH") {
            imageURL = FRESH_PRINCE_URL;
        } else if (title === "PULL") {
            imageURL = CURB_POSTER_URL;
        } else if (title === "LEGS") {
            imageURL = EAST_LOS_HIGH_POSTER_URL;
        } else if (title === "CARDIO") {
            imageURL = Cardio_URL;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";
    
    const cardContent = card.querySelector(".card-content");
    cardContent.innerHTML = ""; 

    const bulletPoints = document.createElement("ul");

    if (newTitle === "PUSH") {
        bulletPoints.innerHTML = `
            <li> A Push workout involves the Chest, Triceps, and Shoulders</li> 
            <li>Triceps workout: Tricep Dips, Tricep Extension, Skull Crushers</li>
            <li>Shoulders workout: Overhead Press, Lateral Raises, Front Raises</li>
        `;
    } else if (newTitle === "PULL") {
        bulletPoints.innerHTML = `
            <li>Back workout: Pull-up, Deadlift, Barbell Row</li>
            <li>Biceps workout: Bicep Curl, Hammer Curl, Preacher Curl</li>
            <li>Traps workout: Dumbbell Shrugs, Barbell Shrugs, Up right rows</li>
        `;
    } else if (newTitle === "LEGS") {
        bulletPoints.innerHTML = `
            <li>Quads workout: Squats, Leg Press, Lunges</li>
            <li>Hamstrings workout: KettleBell Swings, Leg Curls, Split Squats</li>
            <li>Glutes workout: Hip Thrusts, Glute Bridge, Hip Extention</li>
        `;
    } else if (newTitle === "CARDIO") {
        bulletPoints.innerHTML = `
            <li>15-minute cardio: Jump Rope, High Knees, Burpees</li>
            <li>30-minute cardio: jogging, rowing, Elliptical</li>
            <li>45-minute cardio: Swimming, biking, walking</li>
        `;
    }

    cardContent.appendChild(bulletPoints);

    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}


// //Write One minute timer button code 
// function oneMinuteRest(){
    
// }

// //write two minute timer button code
// function fourMinuteRest(){
    
// }

// //write four minute timer button code
// function fourMinuteRest(){
    
// }

// //write five minute timer button code
// function FiverMinuteRest(){
// }
