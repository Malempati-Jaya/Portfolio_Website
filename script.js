document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Dynamic Title Animation
  const titles = ['Java Developer', 'Python Developer', 'Web Developer', 'Full Stack Developer'];
  let index = 0;
  const dynamicTitle = document.getElementById('dynamic-title');

  if (dynamicTitle) {
    function changeTitle() {
      dynamicTitle.textContent = titles[index];
      index = (index + 1) % titles.length;
    }
    setInterval(changeTitle, 2000);
  }

  // Form Submission (Demo Alert)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = form.querySelector('#name');
      if (nameInput) {
        const name = nameInput.value;
        alert(`Thank you, ${name}! Your message has been sent. Jaya Vardhan will get back to you soon!`);
        form.reset();
      }
    });
  }

  // Dark Mode Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      themeToggle.innerHTML = document.body.classList.contains('light-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
  }

  // Background Switcher
  const backgroundSwitcher = document.querySelector('.background-switcher');
  const hero = document.getElementById('hero');
  const backgrounds = [
    'https://images.unsplash.com/photo-1677442136019-9b8a8f0c8f33?auto=format&fit=crop&w=1350&q=80', // Neural Network
    'https://images.unsplash.com/photo-1516321165247-7b72067740b9?auto=format&fit=crop&w=1350&q=80', // Circuit Board
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1350&q=80', // Data Flow
    'https://images.unsplash.com/photo-1516321310764-8d9c1a08f4ae?auto=format&fit=crop&w=1350&q=80', // Coding Workspace
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1350&q=80'  // Tech Desk
  ];

  if (backgroundSwitcher && hero) {
    // Preload Background Images
    backgrounds.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => console.log(`Loaded: ${src}`);
      img.onerror = () => {
        console.warn(`Failed to load: ${src}`);
        hero.style.background = '#0d1f4a';
      };
    });

    // Set Initial Background
    hero.style.background = `url('${backgrounds[0]}') no-repeat center center/cover, #0d1f4a`;

    // Background Switcher Event
    backgroundSwitcher.addEventListener('change', (e) => {
      const selectedIndex = parseInt(e.target.value);
      hero.style.background = `url('${backgrounds[selectedIndex]}') no-repeat center center/cover, #0d1f4a`;
    });
  }

  // Back-to-Top Button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });
  }

  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  // Dynamic Footer Year
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = `© ${new Date().getFullYear()} Jaya Vardhan. All Rights Reserved.`;
  }
});
