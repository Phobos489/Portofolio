// ==================== HALAMAN UTAMA ====================
// 1. Reset scroll position before page refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// 6. Scroll to hero section after the page is fully loaded
window.addEventListener('load', function () {
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    window.scrollTo({
      top: heroSection.offsetTop,
      behavior: 'smooth',
    });
  }
});

// Dapatkan tombol scroll
const scrollButton = document.getElementById('scrollButton');

// Fungsi untuk menampilkan atau menyembunyikan tombol
function toggleScrollButton() {
  if (window.scrollY > 200) { // Jika scroll lebih dari 200px
    scrollButton.classList.add('visible'); // Tampilkan tombol
  } else {
    scrollButton.classList.remove('visible'); // Sembunyikan tombol
  }
}

// Event listener untuk scroll
window.addEventListener('scroll', toggleScrollButton);

// Fungsi untuk scroll ke atas saat tombol diklik
scrollButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0, // Scroll ke bagian paling atas
    behavior: 'smooth' // Efek scroll halus
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('videoBackground');
  const navbarIcon = document.getElementById('navbarIcon');

  // Fungsi untuk menghentikan video pada detik ke-0.9
  function pauseVideoAt09() {
    if (video.currentTime >= 0.9) {
      video.pause();
      video.removeEventListener('timeupdate', pauseVideoAt09); // Hapus event listener setelah video dihentikan
    }
  }

  // Tambahkan event listener untuk memantau waktu video
  video.addEventListener('timeupdate', pauseVideoAt09);

  // Fungsi untuk melanjutkan video saat ikon navbar diklik
  navbarIcon.addEventListener('click', function () {
    if (video.paused) {
      video.play();
    }
  });
});

// ==================== DOT BACKGROUND ANIMATION ====================
document.addEventListener('DOMContentLoaded', function () {
  const dotBackground = document.getElementById('dotBackground');
  const maxDots = 50; // Batas maksimum jumlah titik yang aktif
  let activeDots = 0; // Jumlah titik yang sedang aktif

  function createDot() {
    if (activeDots >= maxDots) {
      return; // Jangan buat titik baru jika sudah mencapai batas
    }

    const dot = document.createElement('div');
    dot.classList.add('dot');

    // Atur ukuran dan kecepatan animasi secara acak
    const size = Math.random() * 4 + 2; // Ukuran antara 2px dan 7px
    const duration = Math.random() * 30 + 20; // Durasi antara 20s dan 50s
    const delay = Math.random() * 30; // Delay antara 0s dan 30s

    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${Math.random() * 100}vw`; // Posisi horizontal acak
    dot.style.animationDuration = `${duration}s`;
    dot.style.animationDelay = `${delay}s`;

    dotBackground.appendChild(dot);
    activeDots++; // Tambahkan ke jumlah titik aktif

    // Hapus titik setelah animasi selesai
    dot.addEventListener('animationend', function () {
      dot.remove();
      activeDots--; // Kurangi jumlah titik aktif
    });
  }

  // Buat titik baru setiap 1000ms (1 detik)
  setInterval(createDot, 1000);
});

// ==================== NAVBAR ====================
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const circleAnimation = document.getElementById('circleAnimation');
const mobileMenu = document.getElementById('mobileMenu');

// Fungsi untuk mendapatkan posisi ikon menu
function getMenuIconPosition() {
  const rect = menuIcon.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}

// Fungsi untuk membuka menu dengan animasi
function openMenu() {
  const { x, y } = getMenuIconPosition();

  // Atur posisi lingkaran animasi
  circleAnimation.style.left = `${x}px`;
  circleAnimation.style.top = `${y}px`;

  // Aktifkan animasi lingkaran
  circleAnimation.classList.add('active');

  // Setelah animasi selesai, tampilkan menu
  setTimeout(() => {
    mobileMenu.classList.add('active');

    // Trigger animasi fadeIn untuk tulisan "Menu"
    const menuText = document.querySelector('#mobileMenu ul li.menu-text');
    if (menuText) {
      menuText.style.opacity = '1';
      menuText.style.animation = 'fadeIn 0.5s ease-out forwards';
    }

    // Trigger animasi slideIn untuk setiap elemen li
    const menuItems = document.querySelectorAll('#mobileMenu ul li:not(.menu-text)');
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, index * 100); // Delay animasi untuk setiap item
    });
  }, 600); // Sesuaikan dengan durasi animasi lingkaran
}

// Fungsi untuk menutup menu dengan animasi
function closeMenu() {
  const menuItems = document.querySelectorAll('#mobileMenu ul li:not(.menu-text)');

  // Animasi slideOut untuk setiap elemen li
  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-30px)';
    }, index * 50); // Delay animasi untuk setiap item
  });

  // Trigger animasi fadeOut untuk tulisan "Menu"
  const menuText = document.querySelector('#mobileMenu ul li.menu-text');
  if (menuText) {
    menuText.style.opacity = '0';
    menuText.style.animation = 'fadeOut 0.5s ease-out forwards';
  }

  // Setelah animasi selesai, tutup menu dan reset animasi lingkaran
  setTimeout(() => {
    mobileMenu.classList.remove('active');
    circleAnimation.classList.remove('active');
  }, menuItems.length * 50 + 600); // Sesuaikan dengan durasi animasi
}

// Event listener untuk membuka menu saat ikon menu diklik
menuIcon.addEventListener('click', function () {
  if (mobileMenu.classList.contains('active')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Event listener untuk menutup menu saat ikon silang diklik
closeIcon.addEventListener('click', closeMenu);

// Menutup menu saat salah satu link di menu diklik
document.querySelectorAll('#mobileMenu ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah perilaku default link

    // Tutup menu dengan animasi
    closeMenu();

    // Dapatkan target section dari href link
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Delay scroll selama 1200ms (1.2 detik)
      setTimeout(() => {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth', // Scroll dengan efek smooth
        });

        // Trigger animasi berdasarkan target section
        if (targetId === 'about') {
          animateAboutSection();
        } else if (targetId === 'project') {
          animateProjectSection();
        } else if (targetId === 'contact') {
          animateContactSection();
        }
      }, 1200); // Delay 1200ms
    }
  });
});

// Menutup menu saat mengklik di luar area menu
document.addEventListener('click', function (event) {
  if (
    !mobileMenu.contains(event.target) &&
    !menuIcon.contains(event.target) &&
    !circleAnimation.contains(event.target)
  ) {
    closeMenu();
  }
});

// ==================== HERO ====================
// 2. Smooth scrolling for anchor navigation
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default behavior
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

// Fungsi untuk memicu animasi gambar di hero section
function animateHeroImage() {
  const heroImage = document.querySelector('.animate-hero-image');
  if (heroImage) {
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'translateY(0)';
  }
}

// Trigger animasi saat halaman dimuat
window.addEventListener('load', function () {
  animateHeroImage();
});

// Intersection Observer untuk memicu animasi saat elemen masuk ke viewport
const heroSection = document.getElementById('hero');
if (heroSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateHeroImage();
          observer.unobserve(heroSection); // Hentikan observer setelah animasi dipicu
        }
      });
    },
    { threshold: 0.5 } // Trigger saat 50% elemen terlihat
  );

  observer.observe(heroSection);
}

// Dapatkan tombol "More" dan bagian About
const moreButton = document.getElementById('moreButton');

// Tambahkan event listener ke tombol "More"
moreButton.addEventListener('click', function (e) {
  e.preventDefault(); // Mencegah perilaku default

  // Delay scroll selama 1200ms (1.2 detik) untuk memastikan animasi tidak terganggu
  setTimeout(() => {
    window.scrollTo({
      top: aboutSection.offsetTop,
      behavior: 'smooth', // Scroll dengan efek smooth
    });

    // Trigger animasi untuk About Section
    animateAboutSection();
  }, 100); // Delay 1200ms
});

// ==================== ABOUT ====================
function animateAboutSection() {
  const aboutTitle = document.querySelector('#about .animate-title');
  const aboutText1 = document.querySelector('#about .animate-text');
  const aboutButton = document.querySelector('#about .animate-button');
  const aboutImage = document.querySelector('#about .animate-about-image');
  const aboutLine = document.querySelector('#about .animate-about-line');
  const aboutLine2 = document.querySelector('#about .animate-about-line2');

  // Reset animasi dengan menghapus kelas 'visible'
  aboutTitle.classList.remove('visible');
  aboutText1.classList.remove('visible');
  aboutButton.classList.remove('visible');
  aboutImage.classList.remove('visible');
  aboutLine.classList.remove('visible');
  aboutLine2.classList.remove('visible');

  // Trigger reflow untuk memastikan animasi di-reset
  void aboutTitle.offsetWidth;
  void aboutText1.offsetWidth;
  void aboutButton.offsetWidth;
  void aboutImage.offsetWidth;
  void aboutLine.offsetWidth;
  void aboutLine2.offsetWidth;

  // Animasi untuk judul
  setTimeout(() => {
    aboutTitle.style.visibility = 'visible';
    aboutTitle.classList.add('visible');
  }, 700); // Judul muncul pertama

  // Animasi untuk teks pertama
  setTimeout(() => {
    aboutText1.style.visibility = 'visible';
    aboutText1.classList.add('visible');
  }, 1000); // Teks muncul setelah 300ms

  // Animasi untuk tombol
  setTimeout(() => {
    aboutButton.style.visibility = 'visible';
    aboutButton.classList.add('visible');
  }, 1100); // Tombol muncul setelah 600ms

  // Animasi untuk gambar
  setTimeout(() => {
    aboutImage.style.visibility = 'visible';
    aboutImage.classList.add('visible');
  }, 700); // Gambar muncul setelah 700ms

  setTimeout(() => {
    aboutLine.style.visibility = 'visible';
    aboutLine.classList.add('visible');
  }, 800); // Gambar muncul setelah 700ms
  
  setTimeout(() => {
    aboutLine2.style.visibility = 'visible';
    aboutLine2.classList.add('visible');
  }, 900); // Gambar muncul setelah 700ms
}

// Intersection Observer untuk About Section
const aboutSection = document.getElementById('about');
if (aboutSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            animateAboutSection();
          }, 100); // No delay before animation starts
          observer.unobserve(aboutSection); // Stop observing after animation is triggered
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  observer.observe(aboutSection);
}

// ==================== PROJECT ANIMATION TRIGGER ====================
function animateProjectSection() {
  const projectTitle = document.querySelector('#project .animate-title');
  const projectText = document.querySelector('#project .animate-text');
  const projectButton = document.querySelector('#project .animate-button');
  const projectLine = document.querySelector('#project .animate-project-line');
  const projectLine2 = document.querySelector('#project .animate-project-line2');

  // Reset animasi dengan menghapus kelas 'visible'
  projectTitle.classList.remove('visible');
  projectText.classList.remove('visible');
  projectButton.classList.remove('visible');
  projectLine.classList.remove('visible');
  projectLine2.classList.remove('visible');

  // Trigger reflow untuk memastikan animasi di-reset
  void projectTitle.offsetWidth;
  void projectText.offsetWidth;
  void projectButton.offsetWidth;
  void projectLine.offsetWidth;
  void projectLine2.offsetWidth;

  // Animasi untuk judul
  setTimeout(() => {
    projectTitle.style.visibility = 'visible';
    projectTitle.classList.add('visible');
  }, 700); // Judul muncul pertama

  // Animasi untuk teks pertama
  setTimeout(() => {
    projectText.style.visibility = 'visible';
    projectText.classList.add('visible');
  }, 1200); // Teks muncul setelah 300ms

  // Animasi untuk tombol
  setTimeout(() => {
    projectButton.style.visibility = 'visible';
    projectButton.classList.add('visible');
  }, 1500); // Tombol muncul setelah 600ms

  setTimeout(() => {
    projectLine.style.visibility = 'visible';
    projectLine.classList.add('visible');
  }, 800); // Gambar muncul setelah 700ms
  
  setTimeout(() => {
    projectLine2.style.visibility = 'visible';
    projectLine2.classList.add('visible');
  }, 900); // Gambar muncul setelah 700ms
}

// Intersection Observer untuk Project Section
const projectSection = document.getElementById('project');
if (projectSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            animateProjectSection();
          }, 0); // No delay before animation starts
          observer.unobserve(projectSection); // Stop observing after animation is triggered
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  observer.observe(projectSection);
}

// ==================== CONTACT ====================
function animateContactSection() {
  const contactTitle = document.querySelector('#contact .animate-title');
  const contactText = document.querySelector('#contact .animate-text');
  const contactImage = document.querySelector('#contact .animate-contact-image');
  const contactEmail = document.querySelector('#contact .social-text.animate-text');
  const contactLine = document.querySelector('#contact .animate-contact-line');
  const contactLine2 = document.querySelector('#contact .animate-contact-line2');

  // Reset animasi dengan menghapus kelas 'visible'
  contactTitle.classList.remove('visible');
  contactText.classList.remove('visible');
  contactImage.classList.remove('visible');
  contactEmail.classList.remove('visible');
  contactLine.classList.remove('visible');
  contactLine2.classList.remove('visible');

  // Trigger reflow untuk memastikan animasi di-reset
  void contactTitle.offsetWidth;
  void contactText.offsetWidth;
  void contactImage.offsetWidth;
  void contactEmail.offsetWidth;
  void contactLine.offsetWidth;
  void contactLine2.offsetWidth;

  // Animasi untuk judul
  setTimeout(() => {
    contactTitle.style.visibility = 'visible';
    contactTitle.classList.add('visible');
  }, 700); // Judul muncul pertama

  // Animasi untuk teks
  setTimeout(() => {
    contactText.style.visibility = 'visible';
    contactText.classList.add('visible');
  }, 1000); // Teks muncul setelah 300ms

  // Animasi untuk email
  setTimeout(() => {
    contactEmail.style.visibility = 'visible';
    contactEmail.classList.add('visible');
  }, 1100); // Email muncul setelah 600ms

  // Animasi untuk gambar
  setTimeout(() => {
    contactImage.style.visibility = 'visible';
    contactImage.classList.add('visible');
  }, 700); // Gambar muncul setelah 700ms

  // Animasi untuk gambar
  setTimeout(() => {
    contactLine.style.visibility = 'visible';
    contactLine.classList.add('visible');
  }, 800); // Gambar muncul setelah 700ms

  // Animasi untuk gambar
  setTimeout(() => {
    contactLine2.style.visibility = 'visible';
    contactLine2.classList.add('visible');
  }, 900); // Gambar muncul setelah 700ms
}

// Fungsi untuk memicu animasi ikon di Contact Section
function animateContactIcons() {
  const contactIcons = document.querySelectorAll('#contact .animate-icon');

  // Reset animasi dengan menghapus kelas 'visible'
  contactIcons.forEach(icon => icon.classList.remove('visible'));

  // Trigger reflow untuk memastikan animasi di-reset
  void contactIcons[0].offsetWidth;

  // Tambahkan kelas 'visible' dengan delay untuk setiap ikon
  contactIcons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add('visible');
    }, index * 100); // Delay 200ms untuk setiap ikon
  });
}

// Intersection Observer untuk Contact Section
const contactSection = document.getElementById('contact');
if (contactSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Memicu animasi ikon setiap kali masuk ke viewport
          animateContactIcons();
        } else {
          // Reset animasi saat elemen keluar dari viewport
          const contactIcons = document.querySelectorAll('#contact .animate-icon');
          contactIcons.forEach(icon => icon.classList.remove('visible'));
        }
      });
    },
    { threshold: 0.5 } // Trigger saat 50% elemen terlihat
  );

  observer.observe(contactSection);
}

document.addEventListener('DOMContentLoaded', function () {
  const instagramIcon = document.getElementById('downloadcv');

  instagramIcon.addEventListener('click', function () {
    window.location.href = 'https://drive.google.com/file/d/1st8kfgOgkf-HIOrTa4VyFFDLIgadQej-/view?usp=drive_link';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const instagramIcon = document.getElementById('instagramIcon');

  instagramIcon.addEventListener('click', function () {
    window.location.href = 'https://www.instagram.com/phobos489?igsh=MXQ2NWkxbWxwdGp3OA==';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const instagramIcon = document.getElementById('xIcon');

  instagramIcon.addEventListener('click', function () {
    window.location.href = 'https://x.com/phobos489?t=ka_EUxjPDpLbkXG7dZFG0g&s=09';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const instagramIcon = document.getElementById('facebookIcon');

  instagramIcon.addEventListener('click', function () {
    window.location.href = 'https://www.facebook.com/rioo489';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const instagramIcon = document.getElementById('githubIcon');

  instagramIcon.addEventListener('click', function () {
    window.location.href = 'https://github.com/Phobos489';
  });
});