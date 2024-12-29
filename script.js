// studying
const study = [
  "finance 📊",
  "graphic design 🎨",
  "animation & film 🎬",
  "statistics & machine learning 🤖"
];

const changeText = document.querySelector("#change-text");
let currStudy = 0;

changeText.addEventListener("click", function() {
  if (currStudy === study.length) {
    currStudy = 0;
  }
  // in order
  changeText.textContent = study[currStudy];
  currStudy++;
  
  // random order
  // changeText.textContent = study[Math.floor(Math.random() * study.length)];
});

// interests
const interests = [
  "taking aerobic dance classes with my mom 🕺",
  "making my 2000th spotify playlist 🎶",
  "watching a movie at the princeton garden theatre 🍿",
  "waiting in line for free coffee and cookies 🍪",
  "analyzing film scores and scenes 🎬",
  "playing the flute 🪈, piano 🎹, and ukulele 🎸",
  "trying new art mediums (recently recreated the starry night painting with oil pastel) 🎨",
  "taking candid photos of my friends 📸",
  "editing vlogs 🎥",
  "hiking 🏞️ and swimming 🏊‍♀️",
  "reading on a park bench (currently obssessed with A Crane Among Wolves) 📚"
];

const changeInterest = document.querySelector("#change-interest");
let currInterest = 0;

changeInterest.addEventListener("click", function() {
  if (currInterest === interests.length) {
    currInterest = 0;
  }
  // in order
  changeInterest.textContent = interests[currInterest];
  currInterest++;
  
  // random order
  // changeInterest.textContent = interests[Math.floor(Math.random() * interests.length)];

});