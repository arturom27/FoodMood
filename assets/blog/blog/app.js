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

document.getElementById("recipePopup").addEventListener("click", (event) => {
    if (event.target.classList.contains("close-btn")) {
        hideRecipePopup();
    }
});

function hideRecipePopup() {
    const recipePopup = document.getElementById("recipePopup");
    recipePopup.style.opacity = "0";
    setTimeout(() => {
        recipePopup.style.display = "none";
        document.getElementById("blurLayer").style.display = "none";
    }, 300);
}

var ctx = document.getElementById("quinoaChart").getContext("2d");
var data = {
    labels: ["Proteínas", "Grasas", "Carbohidratos"],
    datasets: [{
        label: "Valores Nutricionales",
        data: [20, 30, 50],
        backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1
    }]
};

var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var nutritionalChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options
});

var ctx = document.getElementById("polloChart").getContext("2d");
var data = {
    labels: ["Proteínas", "Grasas", "Carbohidratos"],
    datasets: [{
        label: "Valores Nutricionales",
        data: [20, 30, 50],
        backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1
    }]
};

var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var nutritionalChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options
});

var ctx = document.getElementById("lentejasChart").getContext("2d");
var data = {
    labels: ["Proteínas", "Grasas", "Carbohidratos"],
    datasets: [{
        label: "Valores Nutricionales",
        data: [20, 30, 50],
        backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1
    }]
};

var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var nutritionalChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options
});

var ctx = document.getElementById("pescadoChart").getContext("2d");
var data = {
    labels: ["Proteínas", "Grasas", "Carbohidratos"],
    datasets: [{
        label: "Valores Nutricionales",
        data: [20, 30, 50],
        backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1
    }]
};

var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var nutritionalChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options
});

var ctx = document.getElementById("frutasChart").getContext("2d");
var data = {
    labels: ["Proteínas", "Grasas", "Carbohidratos"],
    datasets: [{
        label: "Valores Nutricionales",
        data: [20, 30, 50],
        backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1
    }]
};

var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var nutritionalChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options
});

window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(function () {
        loader.style.display = "none";
    }, 1000);
});

var loaderPhrases = [
    "¡Preparando deliciosas recetas para ti!",
    "Descubriendo los sabores del mundo...",
    "Ingredientes frescos y nutritivos.",
    "¡Experiencias gastronómicas únicas!"
];

function changeLoaderText() {
    var loaderText = document.getElementById("loader-text");
    var randomIndex = Math.floor(Math.random() * loaderPhrases.length);

    loaderText.textContent = loaderPhrases[randomIndex];
}

setInterval(changeLoaderText, 4000);

window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(function () {
        loader.style.display = 'none';
    }, 1000);
});

particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
        opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: true, speed: 1, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 1, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 600 } }
    },
    interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'bubble' }, onclick: { enable: true, mode: 'repulse' }, resize: true }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 }, repulse: { distance: 400, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } },
    retina_detect: true
});
