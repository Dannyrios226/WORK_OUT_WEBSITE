/**
 * NOTES/future improvements:
 * 1. figure out how to murge the randomizing functions properly so that there isnt a repetative amount of code for each workout type. 
 * 2. Implement a rest timer
 * 3. Make it to where the celeb workouts are more detailed for example The rocks monday workout or tuesday workout or full body workrout etc etc 
 * 4. add set counter to track workout
 * 5. add high intensity low volume workout option and low intensity high volume option
 * 6. add workut suggestions aka like easy workout athletic workout calisthenics 
 * 7. add recovery workouts like stretch 
 * 8. add a yoga plan (short yoga workouts maybe 15min-30min-1hr workouts)
 * 9. add a more filters into search like intensity   
 * 10. add an option for workouts that you can do at home 
 * 11. add info on workouts and what to do for them maybe a link to a short youtube video explaining what to do 
 * 12. fix alert only showing a limited amount of Lines 


 
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
const PUSH_URL = "https://m.media-amazon.com/images/I/71d3CdMuJSL._AC_SY879_.jpg";
const PULL_URL = "https://m.media-amazon.com/images/I/71A2z2zdGSL._AC_SY879_.jpg";
const LEGS_URL = "https://m.media-amazon.com/images/I/71bU71azUZL._AC_SY879_.jpg";
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
    imageURL: PUSH_URL,
    bulletPoints: ["Push consists of Chest, Triceps, Shoulders", "\nThis is Arnold Schwarzenegger ", "\nHe was Mr. Olypia seven times"],
  },
  {
    title: "PULL",
    imageURL: PULL_URL,
    bulletPoints: ["Pull consists of Back, Biceps, Traps", "\nThis is Mike Mentzer", "\nIn 1978, Mentzer won the Mr. Universe in Acapulco with the a perfect 300 score."],
  },
  {
    title: "LEGS",
    imageURL: LEGS_URL, // Customize image URL for Legs
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
        { name: "Incline Dumbbell Press", difficulty: "Intermediate" },
        { name: "Incline Barbell Press", difficulty: "Intermediate" },
        { name: "assisted Dips", difficulty: "beginner" },
        // { name: "Incline Dumbbell Flyes", difficulty: "Intermediate" },
        // { name: "Chest Press Machine", difficulty: "beginner" },
        // { name: "Cable Crossover", difficulty: "beginner" },
        // { name: "Incline bench Press", difficulty: "Intermediate" },
        // { name: "Incline Cable Press", difficulty: "Intermediate" },
        // { name: "Decline Cable Press", difficulty: "Intermediate" },
       
    ],
    triceps: [
        { name: "Tricep Dips", difficulty: "Intermediate" },
        { name: "Tricep Extension", difficulty: "Intermediate" },
        { name: "Skull Crushers", difficulty: "Intermediate" },
        { name: "Overhead Tricep Extentions", difficulty: "beginner" },
        { name: "Seated Tricep Dips", difficulty: "beginner" },
        { name: "Close-Grip Bench Press", difficulty: "Intermediate" },
     // { name: "Decline Skull Crushers", difficulty: "Intermediate" },
     // { name: "Lying Tricep Extensions", difficulty: "Intermediate" },
     // { name: "Rope Pushdowns", difficulty: "Intermediate" },
     // { name: "Bar Pushdowns", difficulty: "beginner" },
     // { name: "Tricep Kick Backs", difficulty: "Intermediate" },
     // { name: "Diamond Push Ups", difficulty: "Intermediate" },
     
       
    ],
    shoulders: [
        { name: "Overhead Press", difficulty: "Intermediate" },
        { name: "Lateral Raises", difficulty: "Beginner" },
        { name: "Front Raises", difficulty: "Beginner" },
        { name: "Reverse Fly", difficulty: "Intermediate" },
        { name: "External Rotations With Band", difficulty: "Beginner" },
        { name: "External Rotations With Cable", difficulty: "Intermediate" },
        //{ name: "Arnold Press", difficulty: "Intermediate" },
        // { name: "Military Press", difficulty: "Intermediate" },
        // { name: "Face Pulls", difficulty: "Intermediate" },
        // { name: "LandminePress", difficulty: "intermediate" },
        // { name: "Plank With Shoulder Tap", difficulty: "Beginner" },
        // { name: "Shoulder Press Machine", difficulty: "Beginner" },
    ]
};
const pullExercises = {
    back: [
        { name: "Pull-up", difficulty: "Intermediate" },
        { name: "Deadlift", difficulty: "Intermediate" },
        { name: "Barbell Row", difficulty: "Intermediate" },
        { name: "Dumbell Rows", difficulty: "Intermediate" },
        { name: "Cable Rows", difficulty: "beginner" },
        { name: "Lat Pull Down", difficulty: "beginner" },
     
    ],
    biceps: [
        { name: "Bicep Curl", difficulty: "Beginner" },
        { name: "Hammer Curl", difficulty: "Beginner" },
        { name: "Preacher Curl", difficulty: "Intermediate" },
        { name: "Rope Pulls", difficulty: "Beginner" },
        { name: "Ez-Bar Curl", difficulty: "Beginner" },
        { name: "Chin-Ups", difficulty: "Intermediate" },
 
    ],
    traps: [
        { name: "Dumbbell Shrugs", difficulty: "Beginner" },
        { name: "Barbell Shrugs", difficulty: "Intermediate" },
        { name: "Up right rows", difficulty: "Intermediate" },
        { name: "Upright Cable Rows", difficulty: "Beginner" },
        { name: "Seated Shrugs With Machine", difficulty: "Beginner" },
        { name: "Upright Barbell Rows", difficulty: "Intermediate" },
  
    ]
};
const legExercises = {
    quads: [
        { name: "Squats", difficulty: "Intermediate" },
        { name: "Leg Press", difficulty: "Intermediate" },
        { name: "Lunges", difficulty: "beginner" },
        { name: "Goblet Squats", difficulty: "Intermediate" },
        { name: "Pause Squats", difficulty: "Intermediate" },
        { name: "Leg extentions", difficulty: "beginner" },
      
    ],
    hamstrings: [
        { name: "KettleBell Swings", difficulty: "Intermediate" },
        { name: "Leg Curls", difficulty: "Intermediate" },
        { name: "Split Squats", difficulty: "Intermediate" },
        { name: "Sumo Deadlifts", difficulty: "Intermediate" },
        { name: "lying Leg Press", difficulty: "beginner" },
        { name: "Seated Leg Curls", difficulty: "beginner" },
    ],
    glutes: [
        { name: "Barbell Hip Thrusts", difficulty: "Intermediate" },
        { name: "Glute Bridge", difficulty: "Beginner" },
        { name: "Hip Extention", difficulty: "Beginner" },
      { name: "Dumbbell Hip Thrusts", difficulty: "Intermediate" },
        { name: "Single Leg Squats", difficulty: "Beginner" },
        { name: "Step ups", difficulty: "Beginner" },
    ]
};
const cardioExercises = {
    "15-minute": [
        { name: "Jump Rope", difficulty: "Beginner" },
        { name: "High Knees", difficulty: "Beginner" },
        { name: "Burpees", difficulty: "Intermediate" },
     { name: "Jumping Jacks", difficulty: "Beginner" },
        { name: "Tabata Sprints", difficulty: "Intermediate" },
        { name: "Stair Running", difficulty: "Intermediate" },
     
    ],
    "30-minute": [
        { name: "jogging", difficulty: "Intermediate" },
        { name: "rowing", difficulty: "beginner" },
        { name: "Elliptical", difficulty: "Intermediate" },
      { name: "Mountain Climbers", difficulty: "Intermediate" },
        { name: "Butt Kicks", difficulty: "Intermediate" },
        { name: "Elliptical", difficulty: "Intermediate" },
      
    ],
    "45-minute": [
        { name: "Swimming", difficulty: "Intermediate" },
        { name: "biking", difficulty: "Intermediate" },
        { name: "walking", difficulty: "beginer" },
        { name: "Hiking", difficulty: "Intermediate" },
        { name: "BasketBall", difficulty: "Intermediate" },
        { name: "Boxing", difficulty: "Intermediate" },
    ]
};

const celebrityWorkoutData = {
  "Chris Hemsworth": [
    { name: "Bench Press", sets: "4", reps: "8-12"},
    { name: "Incline Dumbbell Press", sets: "3", reps: "10-15"},
    { name: "Tricep Pushdowns", sets: "3", reps: "12-15"},
    { name: "Running", set:"1", reps: "30 minutes"},
   
  ],
   "Halle Berry": [
    { name: "Squats", sets: "3", reps: "15-20"},
    { name: "Push-Ups", sets: "3", reps: "10-15"},
    { name: "Lunges", sets: "3", reps: "10 per leg"},
    { name: "Running", sets:"1", reps: "30 minutes"},
   
  ],
  "Dwayne 'The Rock' Johnson": [
    { name: "Barbell Squats", sets: "5", reps: "5-8"},
    { name: "Leg Press", sets: "3", reps: "10-12"},
    { name: "Pull ups", sets: "1", reps: "Until Failure"},
    { name: "Stair Sprints", sets:"5", reps:"30 seconds work, 30 seconds rest"},
   
  ],
 "Serena Williams": [
    { name: "Medicine Ball Slams", sets: "3", reps: "10"},
    { name: "Box Jumps", sets: "3", reps: "5"},
    { name: "Explosive Push-Ups", sets: "3", reps: "Until Failure"},
    { name: "Sprints", sets: "6", reps: "100 meters"},
   
  ],
 "J-Lo": [
    { name: "Bicep Curls", sets: "1", reps: "8-10"},
    { name: "Lunges", sets: "1", reps: "8-10"},
    { name: "Push Ups", sets: "1", reps: "8-10"},
    { name: "Kettle Bell Swings", set:"1", reps: "8-10"},
    { name: "Sitting Hip Thrusts", set:"1", reps: "8-10"},
  
  ],
 "Beyonce": [
    { name: "Explosive Push Ups", sets: "1", reps: "8-10"},
    { name: "Sprints", sets: "8-10", reps: "30 seconds"},
    { name: "Kettlebell Squats and Press", sets: "1", reps: "8-10"},
    { name: "Ab Crunches", set:"1", reps: "8-10"},
   
  ],
 "Vanessa Hudgens": [
    { name: "Plank Walk Outs", sets: "2-3", reps: "8-10"},
    { name: "Band Squats", sets: "2-3", reps: "8-10"},
    { name: "High Knees", sets: "2-3", reps: "8-10"},
    { name: "Weighted Deadlifts", set:"2-3", reps: "8-10"},
    { name: "Back Squats", set:"2-3", reps: "8-10"},
   
  ],
 "Cindy Crawford": [
    { name: "Weighted Squats", sets: "3", reps: "8-10"},
    { name: "Weighted Lunges", sets: "3", reps: "8-10"},
    { name: "Weighted Rows", sets: "3", reps: "12-15"},
    { name: "Sprinting", set:"3", reps: "5 minutes"},
     { name: "Plank", set:"3", reps: "1 minute"},
   
  ],
 "Rebel Wilson": [
    { name: "reverse lunges", sets: "3-4", reps: "8-10"},
    { name: "One-legged Dead Lifts", sets: "3-4", reps: "8-10"},
    { name: "Push-ups", sets: "3-4", reps: "8-10"},
    { name: "Rows", set:"3-4", reps: "8-10"},
    { name: "Kettle Bell Swings", set:"3-4", reps: "8-10"},
   
  ],
 "Blake Lively": [
    { name: "Bench Press", sets: "4", reps: "8-10"},
    { name: "Incline Dumbbell Press", sets: "3", reps: "8-10"},
    { name: "Tricep Pushdowns", sets: "3", reps: "8-10"},
    { name: "Running", set:"1", reps: "8-10"},
   
  ],
 "Ariana Grande": [
    { name: "Glute Bridge Skull Crushers", sets: "3", reps: "25"},
    { name: "Standing Rope Tricep Extensions", sets: "3", reps: "25"},
    { name: "Dumbell T-raises", sets: "3", reps: "25"},
    { name: "Standing Cable Reverse Flys", set:"3", reps: "25"},
   
  ],
 "Khloe Kardashian": [
    { name: "Overhead Crunch Rotations", sets: "4", reps: "20"},
    { name: "4x4 Walks", sets: "4", reps: "20"},
    { name: "Renegade Row Mountain Clibers", sets: "4", reps: "20"},
    { name: "Dumbell Presses", set:"4", reps: "20"},
    { name: "Reverse Lunge Press", set:"4", reps: "20"},
   
  ],
 "Michael B. Jordan": [
    { name: "Crunches", sets: "3-5", reps: "25"},
    { name: "Leg Raises", sets: "3-5", reps: "25"},
    { name: "Reverse Crunches", sets: "3-5", reps: "25"},
    { name: "Toe Touches", set:"3-5", reps: "25"},
      { name: "Press and Push-ups Super Set", sets: "5", reps: "10"},
    { name: "Fly and Push-up Super Set", sets: "5", reps: "10"},
    { name: "Dumbell Curls", sets: "4", reps: "15"},
    { name: "Hammer Curls", set:"3", reps: "12"},
      { name: "Kickback and Dip Superset", set:"3", reps: "12"},
   
  ],
 "Chris Hemsworth": [
    { name: "Bench Press", sets: "4", reps: "8-12"},
    { name: "Incline Dumbbell Press", sets: "3", reps: "10-15"},
    { name: "Tricep Pushdowns", sets: "3", reps: "12-15"},
    { name: "Running", set:"1", reps: "30 minutes"},
   
  ],
 "Chris Hemsworth": [
    { name: "Bench Press", sets: "4", reps: "8-12"},
    { name: "Incline Dumbbell Press", sets: "3", reps: "10-15"},
    { name: "Tricep Pushdowns", sets: "3", reps: "12-15"},
    { name: "Running", set:"1", reps: "30 minutes"},
   
  ],
 "Chris Hemsworth": [
    { name: "Bench Press", sets: "4", reps: "8-12"},
    { name: "Incline Dumbbell Press", sets: "3", reps: "10-15"},
    { name: "Tricep Pushdowns", sets: "3", reps: "12-15"},
    { name: "Running", set:"1", reps: "30 minutes"},
   
  ],
 "Chris Hemsworth": [
    { name: "Bench Press", sets: "4", reps: "8-12"},
    { name: "Incline Dumbbell Press", sets: "3", reps: "10-15"},
    { name: "Tricep Pushdowns", sets: "3", reps: "12-15"},
    { name: "Running", set:"1", reps: "30 minutes"},
   
  ],
 "Chris Hemsworth": [
    { name: "Bench Press", sets: "4", reps: "8-12"},
    { name: "Incline Dumbbell Press", sets: "3", reps: "10-15"},
    { name: "Tricep Pushdowns", sets: "3", reps: "12-15"},
    { name: "Running", set:"1", reps: "30 minutes"},
   
  ],
 "Chris Hemsworth": [
    { name: "Bench Press", sets: "4", reps: "8-12"},
    { name: "Incline Dumbbell Press", sets: "3", reps: "10-15"},
    { name: "Tricep Pushdowns", sets: "3", reps: "12-15"},
    { name: "Running", set:"1", reps: "30 minutes"},
   
  ],
 "Chris Hemsworth": [
    { name: "Bench Press", sets: "4", reps: "8-12"},
    { name: "Incline Dumbbell Press", sets: "3", reps: "10-15"},
    { name: "Tricep Pushdowns", sets: "3", reps: "12-15"},
    { name: "Running", set:"1", reps: "30 minutes"},
   
  ]
};




//====================================================================

// END OF DATA


//====================================================================

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

function getRandomCelebrity() {
  const celebrityNames = Object.keys(celebrityWorkoutData);
  const randomIndex = Math.floor(Math.random() * celebrityNames.length);
  return celebrityNames[randomIndex];
}

function displayRandomCelebrityWorkout() {
  const celebrity = getRandomCelebrity();
  const celebrityWorkout = celebrityWorkoutData[celebrity];
  
  let workoutMessage = `**${celebrity}'s Workout:**\n\n`;

  for (const exercise of celebrityWorkout) {
    workoutMessage += `- ${exercise.name} (Sets: ${exercise.sets}, Reps: ${exercise.reps})\n`;
  }

  alert(workoutMessage);
}

function searchExercises(searchTerm) {
  searchTerm = searchTerm.toLowerCase(); // Ensure case-insensitive search
  let exerciseMessage = "";

  switch (searchTerm) {
    case "push":
    case "PUSH":
      exerciseMessage = buildExerciseMessage(pushExercises);
      break;
    case "pull":
    case "PULL":
      exerciseMessage = buildExerciseMessage(pullExercises);
      break;
    case "legs":
    case "LEGS":
      exerciseMessage = buildExerciseMessage(legExercises);
      break;
    case "cardio":
    case "CARDIO":
      exerciseMessage = buildExerciseMessage(cardioExercises);
      break;
    default:
      exerciseMessage = "Invalid search term. Please enter 'push', 'pull', 'legs', or 'cardio'.";
  }

  alert(exerciseMessage);
}
    
function buildExerciseMessage(exerciseData) {
  let message = "";
  for (const category in exerciseData) {
    message += `\n**${category.toUpperCase()} Exercises:**\n`;
    for (const exercise of exerciseData[category]) {
      message += `- ${exercise.name} (Difficulty: ${exercise.difficulty})\n`;
    }
  }
  return message;
}
                                  
