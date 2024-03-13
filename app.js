const noun1Button = document.getElementById('noun1Button');
const verb1Button = document.getElementById('verb1Button');
const adjective1Button = document.getElementById('adjective1Button');
const noun2Button = document.getElementById('noun2Button');
const placeButton = document.getElementById('placeButton');
const speakButton = document.getElementById('speakButton');
const generateButton = document.getElementById('generateButton');
const resetButton = document.getElementById('resetButton');
const storyOutput = document.getElementById('storyOutput');

// Define word arrays based on See 'N' Say image
const nouns1 = ["The farmer", "A cow", "A pig", "A sheep", "A dog"];
const verbs1 = ["saw", "chased", "milked", "sheared", "guarded"];
const adjectives1 = ["happy", "sleepy", "muddy", "wooly", "loyal"];
const nouns2 = ["cow", "milk", "mud", "wool", "sheep"];
const places = ["field", "barn", "meadow", "pen", "farm"];

let story = "";

// Function to generate a random word from an array
function getRandomWord(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Function to generate the full story
function generateStory() {
  story = `${getRandomWord(nouns1)} ${getRandomWord(verbs1)} ${getRandomWord(adjectives1)} ${getRandomWord(nouns2)} ${getRandomWord(places)}.`;
  storyOutput.textContent = story;
  speakButton.disabled = false;
  resetButton.disabled = false;
}

// Function to speak the story using Text-to-Speech API
function speakStory() {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(story);
    speechSynthesis.speak(utterance);
  }
}

// Event listeners for buttons
generateButton.addEventListener('click', generateStory);
speakButton.addEventListener('click', speakStory);
resetButton.addEventListener('click', function() {
  storyOutput.textContent = '';
  speakButton.disabled = true;
  resetButton.disabled = true;
});
noun1Button.addEventListener('click', function() {
  const word = getRandomWord(nouns1);
  storyOutput.textContent += word + ' ';
});
verb1Button.addEventListener('click', function() {
  const word = getRandomWord(verbs1);
  storyOutput.textContent += word + ' ';
});
adjective1Button.addEventListener('click', function() {
  const word = getRandomWord(adjectives1);
  storyOutput.textContent += word + ' ';
});
noun2Button.addEventListener('click', function() {
  const word = getRandomWord(nouns2);
  storyOutput.textContent += word + ' ';
});
placeButton.addEventListener('click', function() {
  const word = getRandomWord(places);
  storyOutput.textContent += word + ' ';
});
