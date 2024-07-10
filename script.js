// studying
const study = [
  "finance 📊",
  "graphic design 🎨",
  "film & animation 🎬",
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
  "making my 2000th spotify playlist 🎶",
  "late night reading (currently obssessed with the cheat sheet) 📚",
  "analyzing film scenes and film scores 🎬",
  "learning a k-pop dance 🕺",
  "waiting in line for free coffee and cookies 🍪",
  "relearning the flute 🪈 and ukulele 🎸",
  "attempting oil pastel (recently recreated the starry night painting) 🎨",
  "posing as the group photographer 📸",
  "hiking 🏞️",
  "editing vlogs 🎥",
  "obsessing over pixar 'making of' behind-the-scenes videos",
  "cafe hopping for matcha variations 🍵"
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