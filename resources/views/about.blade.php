<!-- resources/views/project.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects</title>
    <link rel="icon" type="image/jpg" href="{{ asset('assets/name.png') }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Abel&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/about.css') }}">
    <script src="{{ asset('js/about.js') }}" defer></script>
</head>
<body>
<div id="dotBackground"></div>

<!-- Navigation Bar -->
<!-- resources/views/project.blade.php -->
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center" href="{{ url('/') }}">
      <img src="{{ asset('assets/name.png') }}" alt="Profile">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>

<!-- Project Section -->
<section id="about" class="py-5">
  <div class="container d-flex align-items-center">
    <div class="about-content">
      <h2 class="about-title">About Me</h2>
      <div class="about-line"></div>
      <div class="about-line2"></div>
      <p class="about-text">
      If you're really that curious about me, then allow me to share a brief introduction about myself.
      </p>
    </div>
    <div class="about-image me-5">
      <img src="{{ asset('assets/about.jpg') }}" alt="About Image" class="about-profile-img">
    </div>
  </div>
</section>

<!-- Desc Section -->
<section id="desc" class="py-5">
  <div class="container d-flex flex-column">
    <div class="desc-content">
      <div class="desc-line"></div>
      <div class="desc-line2"></div>
      <h2 class="desc-title">Who Am I?</h2>
    </div>
    <div class="desc-wrapper d-flex">
      <div class="desc-images">
        <div class="desc-image">
          <img src="{{ asset('assets/about2.jpg') }}" alt="Photo 1" class="desc-img">
        </div>
        <div class="desc-image">
          <img src="{{ asset('assets/about.jpg') }}" alt="Photo 2" class="desc-img2">
        </div>
        <div class="desc-image">
          <img src="{{ asset('assets/hero.jpg') }}" alt="Photo 2" class="desc-img3">
        </div>
      </div>
      <div class="desc-text">
        <h3 class="desc-subtitle">Rio Syamsuri</h3>
        <p class="desc-description">
          Hey there! I'm Rio Syamsuri, a passionate mobile and web developer. Currently, I'm pursuing my studies at Universitas Binaniaga Indonesia, majoring in Informatics Engineering. My journey into the world of programming began with a simple curiosity—how do people create such amazing applications and websites? That curiosity soon turned into a deep passion, driving me to learn and explore more about software development. Through continuous learning and hands-on experience, I strive to improve my skills and build innovative digital solutions that can make a real impact.
        </p>
        <!-- Tambahkan tombol Spotify di sini -->
        <button class="spotify-button">
          <i class="fab fa-spotify"></i>
          <span>Currently Offline</span>
        </button>
      </div>
    </div>
  </div>
</section>

    <!-- Skill Section -->
<section id="skill" class="py-5">
  <div class="container d-flex flex-column align-items-center">
    <!-- Judul Skill -->
    <div class="skill-content text-center">
      <h2 class="skill-title">Skill & Expertise</h2>
      <p class="skill-description">
        Explore some skills I'm proficient in to deliver high-quality solutions.
      </p>
    </div>
    <!-- Daftar Skill -->
    <div class="skill-grid">
      <!-- Skill 1 -->
      <div class="skill-item">
        <i class="bi bi-code-square skill-icon"></i>
        <h3 class="skill-name">Web Development</h3>
      </div>
      <!-- Skill 2 -->
      <div class="skill-item">
        <i class="bi bi-phone skill-icon"></i>
        <h3 class="skill-name">Mobile Development</h3>
      </div>
      <!-- Skill 3 -->
      <div class="skill-item">
        <i class="bi bi-database skill-icon"></i>
        <h3 class="skill-name">Database Management</h3>
      </div>
      <!-- Skill 4 -->
      <div class="skill-item">
        <i class="bi bi-brush skill-icon"></i>
        <h3 class="skill-name">UI/UX Design</h3>
      </div>
    </div>
    <!-- Daftar Skill -->
    <div class="expert-grid">
      <!-- Skill 1 -->
      <div class="expert-item">
        <h3 class="expert-name">Language & Framework</h3>
        <p class="expert-detail">
        HTML | CSS | Python | Javascript | Typescript | PHP | Go | Dart | Node.js | SQL | Angular | Express.js | Laravel | Flutter | Ionic | RPG Maker
      </p>
      </div>
      <!-- Skill 2 -->
      <div class="expert-item">
        <h3 class="expert-name">Tools</h3>
        <p class="expert-detail">
        VS Code | Android Studio | Git | GitHub | Postman | phpMyAdmin | Firebase
      </p>
      </div>
    </div>
  </div>
</section>

    <!-- Quotes Section -->
    <section id="quotes" class="py-5">
  <div class="container d-flex flex-column align-items-center">
    <div class="quotes-content text-center">
      <h2 class="quotes-title">"Performance upgrade is a waste without tactical understandings."</h2>
    </div>
  </div>
</section>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" defer></script>
</body>
</html>