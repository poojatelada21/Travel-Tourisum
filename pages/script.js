const images = [
  'https://i.imgur.com/t8sWiJZ.jpeg',
  'https://i.imgur.com/40uUoqm.jpeg',
  'https://i.imgur.com/Bd3A67X.jpeg'
];

let current = 0;
const slider = document.getElementById('slider');

function changeBackground() {
  slider.style.backgroundImage = url('${images[current]}');
  current = (current + 1) % images.length;
}

// Start the slider
changeBackground();
setInterval(changeBackground, 5000); //