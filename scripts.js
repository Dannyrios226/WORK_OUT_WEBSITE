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
    bulletPoints: ["Push consists of Chest, Triceps, Shoulders","\nThis is Arnold Schwarzenegger ","\nHe was Mr. Olympia seven times"],
  },
  {
    title: "PULL",
    imageURL: PULL_URL,
    bulletPoints: ["Pull consists of Back, Biceps, Traps","\nThis is Mike Mentzer","\nIn 1978, Mentzer won the Mr. Universe in Acapulco with a perfect 300 score."],
  },
  {
    title: "LEGS",
    imageURL: LEGS_URL, // Customize image URL for Legs
    bulletPoints: ["Legs consists of Hamstrings, Quads, Glutes","\nThis is Jay Cutler","\nHe is a four-time Mr. Olympia champion"],
  },
  {
    title: "CARDIO",
    imageURL: Cardio_URL,
    bulletPoints: [`Cardio consists of 15-30-45 minute exercises`,`\nCardio is great for heart health`,`\nCardio is a crucial part of your overall fitness`],
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

	@@ -481,7 +481,7 @@ function displayCardioWorkout() {
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
function quoteAlert() {
    console.log("Button Clicked!")
    alert("To anyone and Everyone who reads this, You are special and you are the main character in the amazing movie you call life. Have a wonderful day and keep on shining");
}
     
