// studying
const study = [
  "graphic design 🎨",
  "film & animation 🎬",
  "product design ⚡️",
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
  "sketching and people watching at the park 🌳",
  "watching a movie at a local theatre 🍿",
  "taking aerobic dance classes with my mom 🕺",
  "waiting in line for coffee (love a shaken espresso) ☕️",
  "watching \"when a director...\" videos and film analyses on youtube 🎬",
  "playing the flute 🪈, piano 🎹, or ukulele 🎸",
  "trying new art mediums (just recreated the starry night painting with oil pastel) 🎨",
  "taking candids of my friends 📸",
  "editing vlogs 🎥",
  "playing tennis 🎾, hiking 🏞️, or swimming 🏊‍♀️",
  "making my 2000th spotify playlist 🎶",
  "downloading a new meme 🙉",
  "reading on a park bench (just read The Vegetarian, now reading Human Acts) 📚"
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