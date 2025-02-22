<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome</title>
  <link rel="icon" type="image/jpg" href="{{ asset('assets/name.png') }}">
  <!-- External CSS Libraries -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Abel&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{{ asset('css/portfolio.css') }}">
  <script src="{{ asset('js/portfolio.js') }}" defer></script>
</head>
<body>
<!-- <div id="dotBackground"></div> -->
<!-- https://www.canva.com/design/DAGfhqPFqTY/vQNjzjGBByTuKde6AaMnHA/edit -->
<video id="videoBackground" autoplay muted>
  <source src="{{ asset('assets/fbk.mp4') }}" type="video/mp4">
  Your browser does not support the video tag.
</video>

<button id="scrollButton" class="scroll-button">
  <i class="fas fa-arrow-up"></i> <!-- Ikon panah ke atas -->
</button>

  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center" id="navbarIcon">
  <img src="{{ asset('assets/name.png') }}" alt="Profile">
</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="ms-auto">
          <i class="fas fa-bars" id="menuIcon"></i> <!-- Ikon menu dari Font Awesome -->
        </div>
      </div>
    </div>
  </nav>

  <!-- Lingkaran animasi -->
  <div id="circleAnimation" class="circle-animation"></div>

  <div id="mobileMenu" class="mobile-menu">
    <i class="fas fa-times" id="closeIcon"></i>
    <ul>
      <li class="menu-text">Menu</li>
      <li><a href="#about">About</a></li>
      <li><a href="#project">Project</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>

  <!-- Hero Section -->
<section id="hero">
  <div class="vertical-line-hero"></div>
  <div class="container d-flex align-items-center">
    <div class="hero-content">
      <p class="lead hero-profession">Rio Syamsuri</p>
      <h1 class="display-4 hero-title">Fullstack Developer</h1>
      <!-- Tambahkan garis di sini -->
      <div class="hero-line animate-hero-line"></div>
      <div class="hero-line2 animate-hero-line2"></div>
      <p class="hero-description">
        I specialize in developing web and mobile applications with a focus on intuitive and user-friendly experiences. Throughout my learning journey, I constantly explore new technologies to expand my knowledge and skills. Every challenge is an opportunity for growth, pushing me to find innovative solutions and create applications that are both useful and high-quality.
      </p>
      <button type="button" class="btn btn-secondary" id="downloadcv">Download CV</button>
      <button type="button" class="btn btn-outline-secondary" id="moreButton">More</button>
    </div>
    <div class="hero-image ms-5">
      <img src="{{ asset('assets/hero.jpg') }}" alt="Profile" class="hero-profile-img animate-hero-image">
    </div>
  </div>
</section>

  <!-- About Section -->
<section id="about" class="py-5">
  <div class="container d-flex align-items-center">
    <div class="about-image me-5">
      <img src="{{ asset('assets/about.jpg') }}" alt="About Image" class="about-profile-img animate-about-image">
    </div>
    <div class="about-content">
      <h2 class="about-title animate animate-title">About Me</h2>
      <!-- Tambahkan garis di sini -->
      <div class="about-line animate-about-line"></div>
      <div class="about-line2 animate-about-line2"></div>
      <p class="text animate animate-text">
        If you want to know me better, let me introduce myself further.
      </p>
      <button type="button" class="btn btn-outline-secondary animate animate-button" onclick="window.location.href='{{ route('about') }}'">Learn More</button>
    </div>
  </div>
</section>

  <!-- Project Section -->
  <section id="project">
    <div class="container">
      <!-- Judul "My Project" -->
      <div class="project-title-container text-center">
        <h2 class="project-title animate animate-title">My Project</h2>
        <!-- Tambahkan garis di sini -->
      <div class="project-line animate-project-line"></div>
      <div class="project-line2 animate-project-line2"></div>
      </div>

      <!-- Container untuk gambar dan konten -->
      <div class="project-content-wrapper">
        <div class="project-images">
          <div class="project-image">
            <img src="{{ asset('assets/apotek.png') }}" alt="Apotek Project" class="project-img apotek-img">
          </div>
          <div class="project-image">
            <img src="{{ asset('assets/devchat3.png') }}" alt="Devhat Project" class="project-img devchat-img">
          </div>
          <div class="project-image">
            <img src="{{ asset('assets/student_app2.png') }}" alt="Student App Project" class="project-img student-img">
          </div>
        </div>
        <div class="project-content">
          <p class="project-description animate animate-text">
            The following are some of the projects I have made. This showcases my skills and expertise in web and mobile development.
          </p>
          <!-- Di dalam section project -->
<button type="button" class="btn btn-outline-secondary animate animate-button" onclick="window.location.href='{{ route('projects') }}'">Show Projects</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-5">
    <div class="container d-flex align-items-center">
      <div class="contact-content me-5">
        <h2 class="contact-title animate animate-title">Contact Me</h2>
      <!-- Tambahkan garis di sini -->
      <div class="contact-line animate-contact-line"></div>
      <div class="contact-line2 animate-contact-line2"></div>
        <p class="contact-text animate animate-text">
          If you have any questions you'd like to ask, don't hesitate to contact me!
        </p>
        <p class="social-text animate animate-text">riosyamsuri@gmail.com</p>
        <div class="social-icons-wrapper">
          <div class="wrapper">
          <div class="social animate-icon" id="instagramIcon">
  <span class="instagram"></span>
</div>
            <div class="social animate-icon" id="xIcon">
              <span class="x"></span>
            </div>
            <div class="social animate-icon" id="facebookIcon">
              <span class="facebook"></span>
            </div>
            <div class="social animate-icon" id="githubIcon">
              <span class="github"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-image">
        <img src="{{ asset('assets/contact.png') }}" alt="Contact Image" class="contact-profile-img animate-contact-image">
      </div>
    </div>
  </section>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" defer></script>
</body>
</html>