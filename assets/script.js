document.addEventListener("DOMContentLoaded", function () {
  var delta = 5; // Ajusta este valor según tu preferencia
  var scrollThreshold = 10; // Ajusta este valor según tu preferencia
  var navbar = document.querySelector('.navbar');
  var logoImg = document.querySelector('.logo img');
  var menuBtn = document.querySelector('.menu-btn');

  function hideNavbar() {
    navbar.style.top = `-${navbar.offsetHeight}px`;
    logoImg.style.opacity = "0";
    menuBtn.style.opacity = "0";
  }

  function showNavbar() {
    navbar.style.top = "0";
    logoImg.style.opacity = "1";
    menuBtn.style.opacity = "1";
  }

  var isNavbarHidden = false;

  window.addEventListener("scroll", function () {
    var currentScrollTop = window.scrollY;

    if (currentScrollTop > scrollThreshold && !isNavbarHidden) {
      hideNavbar();
      isNavbarHidden = true;
    } else if (currentScrollTop <= scrollThreshold && isNavbarHidden) {
      showNavbar();
      isNavbarHidden = false;
    }
  });

  var wrapper = document.querySelector('.wrapper');
  var overlay = document.getElementById('overlay');
  var body = document.body;

  // Función para mostrar/ocultar el menú
  function toggleMenu() {
      wrapper.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('menu-open');

      // Si el menú está abierto, oculta el desbordamiento del cuerpo
      if (body.classList.contains('menu-open')) {
          body.style.overflow = 'hidden';
      } else {
          // Si el menú está cerrado, restaura el desbordamiento del cuerpo
          body.style.overflow = 'auto';
      }
  }

  // Asigna la función toggleMenu al hacer clic en el botón del menú
  document.getElementById('active').addEventListener('change', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
});
