document.getElementById("prevBtn").addEventListener("click", function () {
  document.querySelector(".videos").scrollBy({
      left: -300,
      behavior: "smooth"
  });
});

document.getElementById("nextBtn").addEventListener("click", function () {
  document.querySelector(".videos").scrollBy({
      left: 300,
      behavior: "smooth"
  });
});

const articles = document.querySelectorAll(".recipe");
articles.forEach(article => {
  article.addEventListener("click", () => {
      articles.forEach(a => a.classList.remove("active"));
      article.classList.add("active");
      const recipeName = article.dataset.recipe;
      showRecipeDetails(recipeName);
  });
});

function showRecipeDetails(recipeName) {
  const recipePopup = document.getElementById("recipePopup");
  const selectedRecipe = document.getElementById(recipeName + "Ingredients");
  const popupTitle = recipePopup.querySelector("#recipeTitle");
  const popupContent = recipePopup.querySelector("#recipeContent");

  // Oculta todos los detalles de recetas
  document.querySelectorAll(".recipe-details").forEach(detail => {
      detail.style.display = "none";
  });

  // Muestra solo los detalles de la receta seleccionada
  selectedRecipe.style.display = "block";

  // Muestra el popup con transición
  recipePopup.style.opacity = "0";
  recipePopup.style.display = "flex";
  setTimeout(() => {
      recipePopup.style.opacity = "1";
  }, 50);

  // Aplica efecto de desenfoque al fondo
  document.getElementById("blurLayer").style.display = "block";

  // Muestra los detalles de la receta en el popup
  popupTitle.textContent = selectedRecipe.querySelector("h3").textContent;
  popupContent.innerHTML = selectedRecipe.innerHTML;
}

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section.parallax');
  sections.forEach(function(section) {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;
    const sectionDepth = section.getAttribute('data-depth');

    if (scrollPos + windowHeight > sectionTop && scrollPos < sectionBottom) {
      const parallaxPos = (scrollPos - sectionTop) * sectionDepth;
      section.style.backgroundPositionY = `-${parallaxPos}px`;
    }
  });
});

window.addEventListener('scroll', function() {
  const content = document.getElementById('content');
  const scrollPos = window.scrollY;
  const windowHeight = window.innerHeight;

  content.style.opacity = 10 - scrollPos / (windowHeight * 0.8);
});

function toggleContactForm() {
  const contactForm = document.querySelector('.contact-form');
  contactForm.classList.toggle('active');
}

  // Datos para los gráficos
  const labels = [];

  const clientesData = {
    labels: labels,
    datasets: [{
      label: 'Clientes Satisfechos',
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgb(75, 192, 192)',
      data: [
        (50 / 100) * 100, // Convertir a porcentaje
        (25 / 100) * 100,
        (75 / 100) * 100,
        (45 / 100) * 100,
        (80 / 100) * 100,
        (60 / 100) * 100,
      ]
    }]
  };
  
  const proyectosData = {
    labels: ["FoodMood"], // Etiqueta "FoodMood"
    datasets: [{
      label: 'Proyectos Completados',
      data: [1], // Datos sin "undefined"
      backgroundColor: ['rgb(255,255,255)'],
      borderColor: ['rgb(255,255,255)'],
      hoverOffset: 4
    }]
  };
  
  
  const horasData = {
    labels: labels,
    datasets: [{
      label: 'Proyectos',
      backgroundColor: ['rgb(178, 178, 178)', 'rgb(255,255,255)'],
      borderColor: ['rgb(178, 178, 178)', 'rgb(255,255,255)'],
      data: [24, 8], // 60% y 40%
    }]
  };
  

  const config = {
    type: 'doughnut',
    options: {
      plugins: {
        legend: {
          labels: {
            // Establece el color del texto de las etiquetas (labels)
            color: 'white',
            // Añadir un sufijo '%' para mostrar porcentajes
            formatter: function(value) {
              return value + '%';
            }
          }
        }
      },
      scales: {
        y: {
          // Mostrar etiquetas como porcentajes
          ticks: {
            formatter: function(value) {
              return value + '%';
            }
          }
        }
      }
    }
  };
  

  // Crear los gráficos
  var clientesChart = new Chart(
    document.getElementById('clientesChart'),
    Object.assign({}, config, {data: clientesData})
  );

  var proyectosChart = new Chart(
    document.getElementById('proyectosChart'),
    Object.assign({}, config, {data: proyectosData})
  );

  var horasChart = new Chart(
    document.getElementById('horasChart'),
    Object.assign({}, config, {data: horasData})
  );
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
  