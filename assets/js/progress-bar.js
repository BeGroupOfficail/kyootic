const section = document.getElementById('valuesSection');
const bars = document.querySelectorAll('.progress-bar');
let animated = false;

function animateBars() {
bars.forEach(bar => {
  bar.style.width = bar.dataset.width + '%';
});
}

function checkScroll() {
if (animated) return;

const rect = section.getBoundingClientRect();
const inView = rect.top < window.innerHeight - 100;

if (inView) {
  animated = true;
  section.classList.add('animate');       // fade-in section
  setTimeout(animateBars, 400);           // bars thodi der baad fill hoon
}
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // page load pe bhi check karo
