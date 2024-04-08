/**
 * NOTES:
 * 1. figure out how to murge the randomizing functions properly so that there isnt a repetative amount of code for each workout type. 
 * 2. Make it to where you can cancel the timer 
 * 3. 
 
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
const workoutData = [
  {
    title: "PUSH",
    imageURL: FRESH_PRINCE_URL,
    bulletPoints: ["Push consists of Chest, Triceps, Shoulders", "\nThis is Arnold Schwarzenegger ", "\nHe was Mr. Olypia seven times"],
  },
  {
    title: "PULL",
    imageURL: CURB_POSTER_URL,
    bulletPoints: ["Pull consists of Back, Biceps, Traps", "\nThis is Mike Mentzer", "\nIn 1978, Mentzer won the Mr. Universe in Acapulco with the a perfect 300 score."],
  },
  {
    title: "LEGS",
    imageURL: EAST_LOS_HIGH_POSTER_URL, // Customize image URL for Legs
    bulletPoints: ["Legs consists of Hamstrings, Quads, Glutes", "\nThis is Jay Cutler", "\nHe is a four time Mr. Olypia champion"],
  },
  {
    title: "CARDIO",
    imageURL: Cardio_URL,
    bulletPoints: ["Cardio consists of 15-30-45 minute exercises", "\nCardio is greate for heart health", "\nCardio is a crutial part of your overal fitness"],
  },
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
  for (let i = 0; i < workoutData.length; i++) {
    const workout = workoutData[i]; // Access each workout object
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, workout.title, workout.imageURL);
    addBulletPoints(nextCard, workout.bulletPoints); // Pass bulletPoints array
    cardContainer.appendChild(nextCard);
  }
}
function addBulletPoints(card, bulletPoints) {
  const ul = card.querySelector("ul");
  ul.innerHTML = "";
  bulletPoints.forEach(point => {
    const li = document.createElement("li");
    li.textContent = point;
    ul.appendChild(li);
  });
}
 document.addEventListener("DOMContentLoaded", showCards);      
function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";
    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;
    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";
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
//randomize Push workouts
function getRandomPushExercises() {
  const randomExercises = [];
  const categories = ["chest", "triceps", "shoulders"];
 
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const exercises = pushExercises[category];
   
    const randomIndex = Math.floor(Math.random() * exercises.length);
   
    randomExercises.push(exercises[randomIndex]);
  
    if (randomExercises.length >= 4) {
      break;
    }
  }
  
  return randomExercises.slice(0, 4);
}
// Display Push workouts with alert
function displayPushWorkout() {
  const randomExercises = getRandomPushExercises();
  // Build a string to display all exercises in the alert
  let workoutMessage = "Your Push Workout:\n\n";
  for (let i = 0; i < randomExercises.length; i++) {
    const exercise = randomExercises[i];
    workoutMessage += `- ${exercise.name} (Difficulty: ${exercise.difficulty})\n`;
  }
  alert(workoutMessage);
}
//randomize Pull workouts
function getRandomPullExercises() {
  const randomExercises = [];
  const categories = ["back", "biceps", "traps"];
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const exercises = pullExercises[category];
    const randomIndex = Math.floor(Math.random() * exercises.length);
    randomExercises.push(exercises[randomIndex]);
    if (randomExercises.length >= 4) {
      break;
    }
  }
  return randomExercises.slice(0, 4);
}
// Display Pull workouts with alert
function displayPullWorkout() {
  const randomExercises = getRandomPullExercises();
  let workoutMessage = "Your Pull Workout:\n\n";
  for (let i = 0; i < randomExercises.length; i++) {
    const exercise = randomExercises[i];
    workoutMessage += `- ${exercise.name} (Difficulty: ${exercise.difficulty})\n`;
  }
  alert(workoutMessage);
}
//randomize leg workouts
function getRandomLegExercises() {
  const randomExercises = [];
  const categories = ["quads", "hamstrings", "glutes"];
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const exercises = legExercises[category];
    const randomIndex = Math.floor(Math.random() * exercises.length);
    randomExercises.push(exercises[randomIndex]);
    if (randomExercises.length >= 4) {
      break;
    }
  }
  return randomExercises.slice(0, 4);
}
// Display Leg workouts with alert
function displayLegWorkout() {
  const randomExercises = getRandomLegExercises();
  let workoutMessage = "Your Leg Workout:\n\n";
  for (let i = 0; i < randomExercises.length; i++) {
    const exercise = randomExercises[i];
    workoutMessage += `- ${exercise.name} (Difficulty: ${exercise.difficulty})\n`;
  }
  alert(workoutMessage);
}
//randomize Cardio workouts
function getRandomCardioExercises() {
  const randomExercises = [];
  const durations = ["15-minute", "30-minute", "45-minute"];
  const randomDuration = durations[Math.floor(Math.random() * durations.length)];
  const exercises = cardioExercises[randomDuration];
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * exercises.length);
    randomExercises.push(exercises[randomIndex]);
  }
  return randomExercises;
}
// Display Cardio workouts with alert
function displayCardioWorkout() {
  const randomExercises = getRandomCardioExercises();
  let workoutMessage = "Your Cardio Workout:\n\n";
  for (let i = 0; i < randomExercises.length; i++) {
    const exercise = randomExercises[i];
    workoutMessage += `- ${exercise.name} (for ${randomExercises[0].name.split(" ")[0]}) \n`; // Assuming first exercise defines duration
  }

  alert(workoutMessage);
}



function getCategoryExercises(category) {
  switch (category) {
    case "push":
      return getRandomPushExercises();
    case "pull":
      return getRandomPullExercises();
    case "legs":
      return getRandomLegExercises();
    case "cardio":
      return getRandomCardioExercises();
    default:
      console.error(`Invalid category: ${category}`);
      return []; 
  }
}

function getRandomMixedWorkout() {
  const workoutCategories = ["push", "pull", "legs", "cardio"];
  const randomExercises = [];

  // Ensure at least one exercise from each category is included
  for (const category of workoutCategories) {
    const exercises = getCategoryExercises(category); 
    const randomIndex = Math.floor(Math.random() * exercises.length);
    randomExercises.push(exercises[randomIndex]);
  }


  while (randomExercises.length < 4) {
    const randomIndex = Math.floor(Math.random() * workoutCategories.length);
    const category = workoutCategories[randomIndex];
    const exercises = getCategoryExercises(category);
    const additionalIndex = Math.floor(Math.random() * exercises.length);


    if (!randomExercises.some(ex => ex.name === exercises[additionalIndex].name)) {
      randomExercises.push(exercises[additionalIndex]);
    }
  }

  return randomExercises;
}

function displayRandomMixedWorkout() {
  const randomExercises = getRandomMixedWorkout();

  let workoutMessage = "Your Random Mixed Workout:\n\n";
  for (let i = 0; i < randomExercises.length; i++) {
    const exercise = randomExercises[i];
    workoutMessage += `- ${exercise.name} (Difficulty: ${exercise.difficulty})\n`;
  }

  alert(workoutMessage);
}





                                  
