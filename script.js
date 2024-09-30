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
  "waiting in line for free coffee and cookies 🍪",
  "analyzing film scores and film scenes 🎬",
  "playing the flute 🪈, piano 🎹, and ukulele 🎸",
  "attempting to sketch and oil pastel (recently recreated the starry night painting) 🎨",
  "taking aesthetic candid photos of my friends 📸",
  "editing vlogs 🎥",
  "hiking 🏞️ or swimming 🏊‍♀️",
  "obsessing over pixar's 'making of' videos 🍿",
  "reading on a park bench (currently obssessed with pachinko) 📚"
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