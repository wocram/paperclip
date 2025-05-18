const bgColors = [
  "#f0f8ff", // Alice Blue
  "#fffacd", // Lemon Chiffon
  "#e6ffe6", // Mint Green
  "#ffe6f2", // Pink Blush
  "#e0f7fa", // Light Cyan
  "#fff0f5", // Lavender Blush
  "#fef9e7", // Light Yellow
  "#f9f9f9", // Light Gray
  "#e3f2fd", // Baby Blue
  "#fce4ec"  // Pastel Pink
];

const lines = [
  "Hi there! Need help writing a love letter?",
  "It looks like you're trying to be productive... should we stop that?",
  "Can I crash your browser now?",
  "Did you know I was born in 1997 and still haven't aged?",
  "I'm back, and more annoying than ever!",
  "Looks like you're having too much fun without me!",
  "Press that button again. I dare you.",
  "You can't get rid of me that easily!",
  "Remember me? Of course you do 😈"
];

const clippyImages = [
  "https://media.tenor.com/jtS4RMiJDXUAAAAj/clippy-windows-xp.gif",
  "https://c.tenor.com/4dezf6tJGrsAAAAd/tenor.gif",
  "https://media.tenor.com/7LcaZrg95ZIAAAAj/clippy.gif",
  "https://media.tenor.com/Tmu1IbKTtosAAAAj/clippy.gif",
  "https://media.tenor.com/cceueTeJSjoAAAAj/clippy.gif",
  "https://media.tenor.com/APUoW9dDiPsAAAAj/clippy-head-scratch.gif",
  "https://media.tenor.com/uA5JZjh_ofsAAAAj/clippy.gif"
];

const bubble = document.getElementById("bubble");
const button = document.getElementById("new-line");
const clippy = document.getElementById("clippy");

button.addEventListener("click", () => {
  const randomLine = lines[Math.floor(Math.random() * lines.length)];
  bubble.textContent = randomLine;

  const randomImage = clippyImages[Math.floor(Math.random() * clippyImages.length)];
  clippy.src = randomImage;

  const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  document.body.style.backgroundColor = randomColor;
});