// Play sound
function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');   // add animation
  audio.currentTime = 0;          // rewind to start
  audio.play();
}

// Remove the animation
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Keyboard event
window.addEventListener('keydown', e => playSound(e.keyCode));

// Mouse click event
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyCode = key.getAttribute('data-key');
    playSound(keyCode);
  });
  key.addEventListener('transitionend', removeTransition);
});

