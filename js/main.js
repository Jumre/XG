function toggleNav() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');

  // Toggle sidebar visibility
  sidebar.classList.toggle('closed');

  // Adjust main content margin
  main.style.marginLeft = sidebar.classList.contains('closed') ? '0' : '220px';

  // Save sidebar state to localStorage
  localStorage.setItem('sidebarClosed', sidebar.classList.contains('closed'));
}

// Restore sidebar state on page load
window.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  const isClosed = localStorage.getItem('sidebarClosed') === 'true';

  if (isClosed) {
    sidebar.classList.add('closed');
    main.style.marginLeft = '0';
  } else {
    sidebar.classList.remove('closed');
    main.style.marginLeft = '220px';
  }
});
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);
