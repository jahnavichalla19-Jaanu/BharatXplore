// ---------- ambient particles ----------
const particlesContainer = document.getElementById('particles');
const PARTICLE_COUNT = 40;
for (let i = 0; i < PARTICLE_COUNT; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.top = Math.random() * 100 + 'vh';
  p.style.animationDuration = (14 + Math.random() * 16) + 's';
  p.style.animationDelay = (Math.random() * -20) + 's';
  p.style.opacity = (0.15 + Math.random() * 0.35).toFixed(2);
  particlesContainer.appendChild(p);
}

// ---------- 3D tilt on the map ----------
const mapWrap = document.getElementById('mapWrap');
const indiaSvg = document.getElementById('indiaSvg');

mapWrap.addEventListener('mousemove', (e) => {
  const rect = mapWrap.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  indiaSvg.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`;
});
mapWrap.addEventListener('mouseleave', () => {
  indiaSvg.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// ---------- trace-in then pulse sequence ----------
const indiaPath = document.getElementById('indiaPath');
indiaPath.classList.add('tracing');
setTimeout(() => {
  indiaPath.classList.remove('tracing');
  indiaPath.classList.add('pulsing');
}, 2650);

// ---------- click to enter ----------
const splash = document.getElementById('splash');

mapWrap.addEventListener('click', () => {
  splash.classList.add('leaving');
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 500);
});