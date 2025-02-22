// ==================== HALAMAN UTAMA ====================
// 1. Reset scroll position before page refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// 6. Scroll to hero section after the page is fully loaded
window.addEventListener('load', function () {
  const heroSection = document.getElementById('project');
  if (heroSection) {
    window.scrollTo({
      top: heroSection.offsetTop,
      behavior: 'smooth',
    });
  }
});

// resources/js/project.js
document.addEventListener('DOMContentLoaded', function () {
  // Fungsi untuk mengaktifkan animasi dengan delay
  function animateOnScroll(entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('active'); // Tambahkan kelas 'active' dengan delay
        }, index * 100); // Delay 200ms untuk setiap elemen
        observer.unobserve(entry.target); // Hentikan observer setelah animasi dipicu
      }
    });
  }

  // Buat Intersection Observer
  const observer = new IntersectionObserver(animateOnScroll, {
    root: null, // Gunakan viewport sebagai root
    threshold: 0.5, // Trigger saat 50% elemen terlihat
  });

  // Daftarkan elemen yang ingin diamati
  const animateElements = document.querySelectorAll('.animate-left, .animate-right');
  animateElements.forEach((element) => {
    observer.observe(element);
  });

  // Fungsi untuk memperlambat scroll
  function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Fungsi easing untuk efek smooth
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // Event listener untuk link yang memicu scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      smoothScroll(target, 1000); // Durasi scroll dalam milidetik (1000ms = 1 detik)
    });
  });

  // Animasi background dots (opsional)
  const dotBackground = document.getElementById('dotBackground');
  const maxDots = 50;
  let activeDots = 0;

  function createDot() {
    if (activeDots >= maxDots) return;

    const dot = document.createElement('div');
    dot.classList.add('dot');

    const size = Math.random() * 4 + 2;
    const duration = Math.random() * 30 + 20;
    const delay = Math.random() * 30;

    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.animationDuration = `${duration}s`;
    dot.style.animationDelay = `${delay}s`;

    dotBackground.appendChild(dot);
    activeDots++;

    dot.addEventListener('animationend', function () {
      dot.remove();
      activeDots--;
    });
  }

  setInterval(createDot, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
  const instagramIcon = document.getElementById('devchatButton');

  instagramIcon.addEventListener('click', function () {
    window.location.href = 'https://github.com/Phobos489/DevChat';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const instagramIcon = document.getElementById('apotekButton');

  instagramIcon.addEventListener('click', function () {
    window.location.href = 'https://github.com/Phobos489/Apotek';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const instagramIcon = document.getElementById('studentappButton');

  instagramIcon.addEventListener('click', function () {
    window.location.href = 'https://github.com/Phobos489/Flutter-App';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const instagramIcon = document.getElementById('viewmoreButton');

  instagramIcon.addEventListener('click', function () {
    window.location.href = 'https://github.com/Phobos489/';
  });
});