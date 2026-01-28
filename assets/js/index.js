// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  const icon = isDark ? 'sun' : 'moon';
  const toggleBtn = document.getElementById('themeToggle');

  if (toggleBtn) {
    toggleBtn.innerHTML = `<i class="fas fa-${icon}"></i>`;
  }

  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const storedTheme = localStorage.getItem('theme');
  const toggleBtn = document.getElementById('themeToggle');

  if (storedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (toggleBtn) {
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  initCarousel();
});

// Mobile menu
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const burger = document.querySelector('.hamburger');

  if (nav) nav.classList.toggle('active');
  if (burger) burger.classList.toggle('active');
}

function closeMenu() {
  const nav = document.getElementById('navLinks');
  const burger = document.querySelector('.hamburger');

  if (nav) nav.classList.remove('active');
  if (burger) burger.classList.remove('active');
}

/* PROJECT CAROUSEL */
let currentProject = 0;
let cardsPerView = 3;
let autoSlide;
let totalProjects = 5;
let carousel;
let dotsContainer;

function initCarousel() {
  carousel = document.getElementById('projectCarousel');
  dotsContainer = document.getElementById('carouselDots');
  const container = document.getElementById('carouselContainer');

  if (!carousel || !dotsContainer || !container) return;

  totalProjects = carousel.children.length;
  updateCardsPerView();
  createDots();
  updateCarousel();

  autoSlide = setInterval(nextProject, 5000);

  container.addEventListener('mouseenter', () => clearInterval(autoSlide));
  container.addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextProject, 5000);
  });

  window.addEventListener('resize', () => {
    updateCardsPerView();
    createDots();
    updateCarousel();
  });
}

function updateCardsPerView() {
  const width = window.innerWidth;
  if (width > 1024) {
    cardsPerView = 3;
  } else if (width > 768) {
    cardsPerView = 2;
  } else {
    cardsPerView = 1;
  }
}

function createDots() {
  if (!dotsContainer || !carousel) return;

  dotsContainer.innerHTML = '';
  const numDots = Math.ceil(totalProjects / cardsPerView);

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToProject(i);
    dotsContainer.appendChild(dot);
  }

  currentProject = Math.min(currentProject, numDots - 1);
}

function nextProject() {
  const maxIndex = Math.ceil(totalProjects / cardsPerView) - 1;
  currentProject = currentProject >= maxIndex ? 0 : currentProject + 1;
  updateCarousel();
}

function previousProject() {
  const maxIndex = Math.ceil(totalProjects / cardsPerView) - 1;
  currentProject = currentProject <= 0 ? maxIndex : currentProject - 1;
  updateCarousel();
}

function goToProject(index) {
  currentProject = index;
  updateCarousel();
}

function updateCarousel() {
  if (!carousel) return;
  const card = carousel.children[0];
  if (!card) return;

  const cardWidth = card.offsetWidth;
  const gap = 30;
  const offset = currentProject * (cardWidth * cardsPerView + gap * cardsPerView);

  carousel.style.transform = `translateX(-${offset}px)`;

  if (!dotsContainer) return;
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentProject);
  });
}

/* ACCORDION */
function toggleAccordion(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector('i:last-child');
  const isActive = content.classList.contains('active');

  document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.accordion-header i:last-child').forEach(i => {
    i.style.transform = 'rotate(0deg)';
  });

  if (!isActive) {
    content.classList.add('active');
    icon.style.transform = 'rotate(180deg)';
  }
}

/* DOWNLOAD RESUME */
function downloadResume(e) {
  e.preventDefault();
  const link = document.createElement('a');
  link.href = 'data:text/plain;charset=utf-8,Your Resume Content Here';
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* FORM SUBMISSION */
function handleSubmit(e) {
  e.preventDefault();
  alert("Thank you for your message! I'll get back to you soon.");
  e.target.reset();
}
