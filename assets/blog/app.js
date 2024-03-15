function mostrarContenidoCompleto(titulo) {
    var contenidoCompleto = obtenerContenidoCompleto(titulo);

    // Inserta el contenido completo en un nuevo div
    var contenidoContainer = document.createElement('div');
    contenidoContainer.innerHTML = contenidoCompleto;

    // Reemplaza el contenido del contenedor principal
    var contenidoArticuloContainer = document.getElementById('contenido-articulo-container');
    console.log(contenidoArticuloContainer);
        contenidoArticuloContainer.appendChild(contenidoContainer);

    // Muestra el overlay con una transición suave en el eje Y
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block'; // Muestra el overlay inicialmente

    // Inicia la animación manualmente
    var initialY = -100; // La posición inicial en Y (puede ajustarse según sea necesario)
    var finalY = 0; // La posición final en Y
    var duration = 500; // Duración de la animación en milisegundos

    var startTime = null;

    function animateOverlay(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        var progress = timestamp - startTime;
        var percentage = Math.min(progress / duration, 1);

        overlay.style.transform = 'translateY(' + (initialY + percentage * (finalY - initialY)) + 'px)';

        if (percentage < 1) {
            requestAnimationFrame(animateOverlay);
        }
    }

    requestAnimationFrame(animateOverlay);
}

function obtenerContenidoCompleto(titulo) {
    // Lógica para obtener el contenido completo de la receta con el título proporcionado
    // Puedes agregar más casos según sea necesario para cada receta

    if (titulo === 'Ensalada de Quinoa') {
        return `
            <h3>${titulo}</h3>
            <img src="https://cdn7.kiwilimon.com/recetaimagen/1505/12060.jpg" alt="${titulo}">
            <p>Una ensalada ligera y nutritiva que combina quinoa, tomates cherry, pepino, aguacate y aderezo de limón. ¡Ideal para una comida fresca y saludable!</p>
            <h4>Ingredientes:</h4>
            <ul>
                <li>1 taza de quinoa cocida</li>
                <li>Tomates cherry</li>
                <li>Pepino</li>
                <li>Aguacate</li>
                <li>Aderezo de limón</li>
            </ul>
            <h4>Instrucciones:</h4>
            <ol>
                <li>Mezcla la quinoa cocida con los tomates cherry, el pepino y el aguacate.</li>
                <li>Añade el aderezo de limón y mezcla bien.</li>
                <li>Sirve y disfruta esta deliciosa ensalada.</li>
            </ol>`;
    } else if (titulo === 'Pollo al Horno con Verduras') {
        return `
            <h3>${titulo}</h3>
            <img src="URL_DE_LA_IMAGEN" alt="${titulo}">
            <p>Descripción del pollo al horno con verduras...</p>
            <h4>Ingredientes:</h4>
            <ul>
                <li>Ingrediente 1</li>
                <li>Ingrediente 2</li>
                <!-- Agrega más ingredientes según sea necesario -->
            </ul>
            <h4>Instrucciones:</h4>
            <ol>
                <li>Paso 1</li>
                <li>Paso 2</li>
                <!-- Agrega más pasos según sea necesario -->
            </ol>`;
    } else if (titulo === 'Sopa de Lentejas') {
        return `
            <h3>${titulo}</h3>
            <img src="URL_DE_LA_IMAGEN" alt="${titulo}">
            <p>Descripción de la sopa de lentejas...</p>
            <h4>Ingredientes:</h4>
            <ul>
                <li>Ingrediente 1</li>
                <li>Ingrediente 2</li>
                <!-- Agrega más ingredientes según sea necesario -->
            </ul>
            <h4>Instrucciones:</h4>
            <ol>
                <li>Paso 1</li>
                <li>Paso 2</li>
                <!-- Agrega más pasos según sea necesario -->
            </ol>`;
    } else if (titulo === 'Tacos de Pescado') {
        return `
            <h3>${titulo}</h3>
            <img src="URL_DE_LA_IMAGEN" alt="${titulo}">
            <p>Descripción de los tacos de pescado...</p>
            <h4>Ingredientes:</h4>
            <ul>
                <li>Ingrediente 1</li>
                <li>Ingrediente 2</li>
                <!-- Agrega más ingredientes según sea necesario -->
            </ul>
            <h4>Instrucciones:</h4>
            <ol>
                <li>Paso 1</li>
                <li>Paso 2</li>
                <!-- Agrega más pasos según sea necesario -->
            </ol>`;
    } else if (titulo === 'Ensalada de Frutas') {
        return `
            <h3>${titulo}</h3>
            <img src="URL_DE_LA_IMAGEN" alt="${titulo}">
            <p>Descripción de la ensalada de frutas...</p>
            <h4>Ingredientes:</h4>
            <ul>
                <li>Ingrediente 1</li>
                <li>Ingrediente 2</li>
                <!-- Agrega más ingredientes según sea necesario -->
            </ul>
            <h4>Instrucciones:</h4>
            <ol>
                <li>Paso 1</li>
                <li>Paso 2</li>
                <!-- Agrega más pasos según sea necesario -->
            </ol>`;
        } else if (titulo === 'Receta Adicional 1') {
            return `
                <h3>${titulo}</h3>
                <img src="URL_DE_LA_IMAGEN" alt="${titulo}">
                <p>Descripción de la ensalada de frutas...</p>
                <h4>Ingredientes:</h4>
                <ul>
                    <li>Ingrediente 1</li>
                    <li>Ingrediente 2</li>
                    <!-- Agrega más ingredientes según sea necesario -->
                </ul>
                <h4>Instrucciones:</h4>
                <ol>
                    <li>Paso 1</li>
                    <li>Paso 2</li>
                    <!-- Agrega más pasos según sea necesario -->
                </ol>`;
    }

    // Puedes agregar más casos según sea necesario para cada receta

    // Ejemplo de caso por defecto si el título no coincide con ninguna receta conocida
    return `<p>No se encontró información para ${titulo}.</p>`;
}

// Puedes agregar más funciones obtenerContenidoCompleto para cada receta según sea necesario

function cerrarOverlay() {
    // Oculta el overlay con una transición suave en el eje Y
    var overlay = document.getElementById('overlay');
    overlay.style.transform = 'translateY(-100%)'; // Aplica la transición para ocultar el overlay

    // Espera a que termine la transición antes de borrar el contenido
    setTimeout(function () {
        overlay.style.display = 'none'; // Oculta el overlay después de la transición
        document.getElementById('contenido-articulo-container').innerHTML = ''; // Borra el contenido de los contenedores
        document.getElementById('videos-container').innerHTML = '';
    }, 500); // Ajusta este valor según la duración de tu transición en milisegundos
}


function cargarMasVideos() {
    console.log('cargarMasVideos function called');
    var videosContainer = document.getElementById('videos-container');
    videosContainer.innerHTML = '<p>Static content for testing</p>';
    document.getElementById('overlay').style.display = 'block';    videosContainer.innerHTML = `
        <div class="videos-row">
            <div class="video-item">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/28LWvM8iP9g" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="video-item">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/28LWvM8iP9g" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="video-item">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/28LWvM8iP9g" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="videos-row">
            <!-- Repite este bloque para más videos -->
            <div class="video-item">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/28LWvM8iP9g" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="video-item">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/28LWvM8iP9g" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="video-item">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/28LWvM8iP9g" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>`;

    // Muestra el overlay
    document.getElementById('overlay').style.display = 'block';
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var recetasAdicionales = [
    { titulo: 'Receta Adicional 1', imagen: 'URL_DE_LA_IMAGEN_1' },
    { titulo: 'Receta Adicional 2', imagen: 'URL_DE_LA_IMAGEN_2' },
    // Agrega más recetas adicionales según sea necesario
];

function cargarMasRecetas() {
    var recetasContainer = document.getElementById('recetas-adicionales');

    // Verifica si ya hay recetas cargadas
    if (recetasContainer.innerHTML.trim() === '') {
        // Itera sobre las recetas adicionales y agrega los contenedores al HTML
        recetasAdicionales.forEach(function(receta) {
            var recetaHTML = `
                <div class="receta-container" onclick="mostrarContenidoCompleto('${receta.titulo}')">
                    <h3>${receta.titulo}</h3>
                </div>
            `;
            recetasContainer.innerHTML += recetaHTML;
        });
    }
}

// Cambia el estado de "verMas"
verMas = true;

function ocultarRecetasAdicionales() {
// Limpia el contenido del contenedor de recetas adicionales
var recetasContainer = document.getElementById('recetas-adicionales');
recetasContainer.innerHTML = '';

// Cambia el estado de "verMas"
verMas = false;

// Actualiza el texto del botón
actualizarTextoBoton();
}

function actualizarTextoBoton() {
// Actualiza el texto del botón según el estado actual
var botonVerMas = document.getElementById('ver-mas-btn');
botonVerMas.textContent = verMas ? 'Ver menos' : 'Ver más';
}

function toggleVerMas() {
if (verMas) {
    // Si está en estado "ver más", carga las recetas adicionales
    cargarMasRecetas();
} else {
    // Si está en estado "ver menos", oculta las recetas adicionales
    ocultarRecetasAdicionales();
}

    // Cambia el estado de "verMas"
    verMas = !verMas;
 
    // Actualiza el texto del botón
    actualizarTextoBoton();

}

function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    document.body.classList.remove('no-overflow'); // Cambia esta línea
}

// Selecciona el elemento closeOverlay y verifica si existe
const closeOverlay = document.getElementById('close-overlay');
if (closeOverlay) {
    // Si el elemento existe, agrega el event listener
    closeOverlay.addEventListener('click', hideOverlay);
} else {
    console.error("El elemento close-overlay no fue encontrado en el DOM.");
}
