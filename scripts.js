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

    const cardButton = card.querySelector("button");
    cardbutton.style = newBackgroundImage = `url('${NewImageURL}')`;
    carButton.textContent = "";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
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

//    THIS FUNCTION WILL HANDLE THE BUTTON WHEN CLICKING A WORKOUT
function handleButtonClick(button) { 
    const title = button.getAttribute('data-title');

    const workoutRoutine = getWorkoutRoutine(title);

    alert("You have chosen a workout!");
}

// THIS FUNCTION WILL GET WORKOUT ROUTINE BASED ON IMAGE THAT IS CLICKED ON
function getrWOrkoutRoutine(title) { 
    const workoutRoutine = {
        "PUSH": "PUSH WORKOUT",
        "PULL": "PULL WORKOUT",
        "LEGS": "LEG WORKOUT",
        "CARDIO": "CARDIO WORKOUT"
    };

    return workoutROutine[Title];
        
        
    
