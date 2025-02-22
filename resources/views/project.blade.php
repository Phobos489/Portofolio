<!-- resources/views/project.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects</title>
    <link rel="icon" type="image/jpg" href="{{ asset('assets/name.png') }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Abel&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/project.css') }}">
    <script src="{{ asset('js/project.js') }}" defer></script>
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
<section id="project" class="py-5">
  <div class="container d-flex align-items-center">
    <div class="project-content">
      <h2 class="project-title animate-left">My Project</h2>
      <div class="project-line animate-left"></div>
      <div class="project-line2 animate-right"></div>
      <p class="project-text animate-left">
        Welcome to my project portfolio. Here, you can explore the various projects I have worked on, showcasing my skills and expertise in web and mobile development.
      </p>
    </div>
    <div class="project-image me-5">
      <img src="{{ asset('assets/project.png') }}" alt="About Image" class="project-profile-img">
    </div>
  </div>
</section>

<!-- Highlight Section -->
<section id="highlight" class="py-5">
  <div class="container d-flex flex-column">
    <div class="highlight-content">
      <div class="highlight-line animate-left"></div>
      <div class="highlight-line2 animate-right"></div>
      <h2 class="highlight-title animate-left">Highlight</h2>
    </div>
    <div class="highlight-wrapper d-flex">
      <div class="highlight-images"> <!-- Tambahkan kelas animate-left -->
        <div class="highlight-image">
          <img src="{{ asset('assets/devchat1.png') }}" alt="DevChat Project" class="highlight-img">
        </div>
        <div class="highlight-image">
          <img src="{{ asset('assets/devchat2.png') }}" alt="DevChat Project" class="highlight-img2">
        </div>
        <div class="highlight-image">
          <img src="{{ asset('assets/devchat3.png') }}" alt="DevChat Project" class="highlight-img3">
        </div>
        <div class="highlight-image">
          <img src="{{ asset('assets/devchat4.png') }}" alt="DevChat Project" class="highlight-img4">
        </div>
      </div>
      <div class="highlight-text"> <!-- Tambahkan kelas animate-right -->
        <h3 class="highlight-subtitle animate-left">DevChat Project</h3>
        <p class="highlight-description animate-left">
          DevChat is a real-time chat application designed for developers to collaborate and communicate seamlessly. This application is created using the Flutter framework, connected to a database that integrates Restful API using Express JS.
        </p>
        <div class="animate-left">
          <button type="button" class="btn btn-secondary" disabled>Flutter</button>
          <button type="button" class="btn btn-secondary" disabled>Bootstrap</button>
          <button type="button" class="btn btn-secondary" disabled>Express JS</button>
          <button type="button" class="btn btn-secondary" disabled>MySQL</button>
        </div>
        <button type="button" class="btn btn-outline-secondary" id="devchatButton">View Code</button>
      </div>
    </div>
  </div>
</section>

<!-- resources/views/project.blade.php -->
<section id="list" class="py-5">
  <div class="container d-flex flex-column">
    <div class="list-content">
      <div class="list-line animate-left"></div>
      <div class="list-line2 animate-right"></div>
      <h2 class="list-title animate-left">Projects</h2>
    </div>
    <div class="list-wrapper d-flex">
      <!-- Tumpukan gambar di sebelah kiri -->
      <div class="list-images">
        <div class="list-image">
          <img src="{{ asset('assets/apotek.png') }}" alt="Apotek Project" class="list-img animate-left">
        </div>
      </div>
      <!-- Tambahkan teks di sebelah kanan gambar apotek -->
      <div class="list-text">
        <h3 class="list-subtitle animate-right">Apotek Project</h3>
        <p class="list-description animate-right">
        The Apotek Project is a web-based application designed to manage basic pharmacy operations. Built with Laravel and Bootstrap, this project demonstrates my ability to create efficient and user-friendly systems for small businesses.
        </p>
        <div class="animate-right">
          <button type="button" class="btn btn-secondary" disabled>Laravel</button>
          <button type="button" class="btn btn-secondary" disabled>Bootstrap</button>
          <button type="button" class="btn btn-secondary" disabled>MySQL</button>
        </div>
        <button type="button" class="btn btn-outline-secondary" id="apotekButton">View Code</button>
      </div>
    </div>
    <!-- Tambahkan teks di sebelah kiri gambar student_app -->
    <div class="list-wrapper d-flex">
      <div class="list-text-left">
        <h3 class="list-subtitle animate-left">Student App Project</h3>
        <p class="list-description animate-left">
          The Student App Project is a mobile application designed to help students manage their academic schedules, assignments, and grades. Built with Flutter and Firebase, this app provides a seamless experience for students to stay organized and productive.
        </p>
        <div class="animate-left">
          <button type="button" class="btn btn-secondary" disabled>Flutter</button>
          <button type="button" class="btn btn-secondary" disabled>Bootstrap</button>
          <button type="button" class="btn btn-secondary" disabled>PHP</button>
          <button type="button" class="btn btn-secondary" disabled>MySQL</button>
        </div>
        <button type="button" class="btn btn-outline-secondary" id="studentappButton">View Code</button>
      </div>
      <div class="list-images">
        <div class="list-image">
          <img src="{{ asset('assets/student_app.jpg') }}" alt="Student App Project" class="list2-img animate-right">
        </div>
      </div>
    </div>
    <!-- Tambahkan tombol di tengah bawah -->
    <div class="text-center mt-5">
      <button type="button" class="btn btn-outline-secondary" id="viewmoreButton">View More Projects</button>
    </div>
  </div>
</section>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" defer></script>
</body>
</html>