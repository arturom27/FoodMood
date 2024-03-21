function calcularCalorias() {
    // Obtener los valores de los campos del formulario
    var gender = document.getElementById('gender').value;
    var age = parseFloat(document.getElementById('age').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var activityLevel = document.getElementById('activity-level').value;
    var goal = document.getElementById('goal').value;

    // Verificar si los campos contienen valores válidos
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    // Calcular el rango de peso saludable (18.5 <= IMC <= 24.9)
    var healthyWeight = 21.7 * Math.pow(height / 100, 2); // Fórmula aproximada para peso saludable según altura

    // Verificar si se necesita mostrar la advertencia
    var mostrarAdvertencia = false;

    // Verificar si el peso está fuera del rango saludable
    if (weight < 0.9 * healthyWeight || weight > 1.1 * healthyWeight) {
        mostrarAdvertencia = true;
    }

    // Verificar si el objetivo es perder o ganar peso rápidamente
    if ((goal === 'lose' && weight < healthyWeight) || (goal === 'gain' && weight > healthyWeight)) {
        // Si el objetivo es perder y el peso actual es menor que el saludable o
        // el objetivo es ganar y el peso actual es mayor que el saludable, mostrar advertencia
        mostrarAdvertencia = true;
    }

    // Si se necesita mostrar la advertencia, mostrarla y salir de la función
    if (mostrarAdvertencia) {
        var modalAdvertencia = document.getElementById('popup-advertencia-modal');
        modalAdvertencia.style.display = 'block';
        return;
    }

    // Si no se necesita mostrar la advertencia, mostrar el modal principal
    var modal = document.getElementById('popup-modal');
    modal.style.display = 'block';


    // Determinar qué imagen mostrar en función del género y el peso
    var imagePrefix = (gender === 'male') ? 'male' : 'female';
    var imageSuffix;

    if (weight < 60) {
        imageSuffix = '_1';  // Agregar sufijo correspondiente para el rango de peso
    } else if (weight >= 60 && weight <= 80) {
        imageSuffix = '_2';  // Agregar sufijo correspondiente para el rango de peso
    } else {
        imageSuffix = '_3';  // Agregar sufijo correspondiente para el rango de peso
    }

    // Construir las URLs de las tres imágenes izquierdas
    var leftImageURL1 = `https://static.thenounproject.com/png/2506063-200.png`;  // Reemplazar con la URL de la imagen correspondiente al peso 1
    var leftImageURL2 = `https://icon-library.com/images/men-icon-png/men-icon-png-27.jpg`;  // Reemplazar con la URL de la imagen correspondiente al peso 2
    var leftImageURL3 = `https://cdn-icons-png.flaticon.com/512/4605/4605456.png`;  // Reemplazar con la URL de la imagen correspondiente al peso 3

    // Fórmula de Harris-Benedict para calcular el gasto energético basal (GEB)
    var geb = (gender === 'male')
        ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
        : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);

    // Factor de actividad según el nivel de actividad
    var activityFactor = {
        'sedentary': 1.2,
        'light': 1.375,
        'moderate': 1.55,
        'active': 1.725,
        'very-active': 1.9
    }[activityLevel];

    // Calorías totales diarias
    var totalCalories = geb * activityFactor;

    // Ajuste de calorías según el objetivo
    var caloriesAdjusted = (goal === 'lose') ? totalCalories * 0.8 :
                           (goal === 'gain') ? totalCalories * 1.2 :
                           totalCalories;

    // Obtener los datos del usuario
    var genderText = (gender === 'male') ? 'Masculino' : 'Femenino';

    // Actualizar el resultado en el modal
    var popupContent = `<div style="display: flex; width: 100%;">`;

    // Sección izquierda: Imagen y Datos del Usuario
    popupContent += `<div class="user-info">`;
    popupContent += `<img src="${(weight < 60) ? leftImageURL1 : (weight >= 60 && weight <= 80) ? leftImageURL2 : leftImageURL3}" alt="Left Image">`;

    // Sección de información del usuario a la derecha de la imagen de la izquierda
    popupContent += `<div class="user-info-details" style="margin-right: 800px;">`;
    popupContent += `<p><strong>Genero:</strong> ${genderText}</p>`;
    popupContent += `<p><strong>Edad:</strong> ${age}</p>`;
    popupContent += `<p><strong>Peso:</strong> ${weight} kg</p>`;
    popupContent += `<p><strong>Altura:</strong> ${height} cm</p>`;
    popupContent += `</div>`;
    popupContent += `</div>`;

    // Sección en el medio: Otra Imagen
    popupContent += `<div class="center-image">`;
    popupContent += `<img src="separator.png" alt="Center Image">`;  // Reemplazar con la URL de la otra imagen
    popupContent += `</div>`;

    // Sección derecha: Gráfica
    popupContent += `<div class="chart-section" style="">`;
    popupContent += `<canvas id="popup-chart"></canvas>`;
    popupContent += `</div>`;

    popupContent += `</div>`;
    popupContent += `<p class="caloric-distribution">Distribucion Calorica&nbsp;<br>De tu cuerpo</p>`;
    popupContent += `<p class="recommended-calories">Calorías diarias recomendadas: ${caloriesAdjusted.toFixed(2)} kcal</p>`;

    var modalContent = document.getElementById('popup-chart-container');
    modalContent.innerHTML = popupContent;

    // Actualizar el gráfico en el modal
    actualizarGrafico(caloriesAdjusted, document.getElementById('popup-chart'));

    // Mostrar el modal y aplicar desenfoque al fondo
    var modal = document.getElementById('popup-modal');
    modal.style.display = 'block';
    document.body.classList.add('blurred'); // Agrega la clase para el desenfoque
}

function cerrarPopup() {
    var modal = document.getElementById('popup-modal');
    document.body.classList.remove('blurred'); // Remueve la clase para quitar el desenfoque
    modal.style.display = 'none'; // Ocultar el modal después de la transición
}

function mostrarAdvertenciaPopup() {
    var modalAdvertencia = document.getElementById('popup-advertencia-modal');
    var modalContent = modalAdvertencia.querySelector('.modal-content1');
    document.body.classList.add('blurred'); // Agrega la clase para el desenfoque
    modalAdvertencia.style.display = 'block';
    setTimeout(function() {
        modalContent.classList.add('show'); // Agrega la clase para mostrar con transición
    }, 50); // Espera un corto período antes de agregar la clase para que la transición se aplique correctamente
}

function cerrarAdvertenciaPopup() {
    var modalAdvertencia = document.getElementById('popup-advertencia-modal');
    modalAdvertencia.classList.remove('show'); // Remueve la clase de mostrar con transición
    setTimeout(function() {
        modalAdvertencia.style.display = 'none'; // Oculta el popup después de la transición
        document.body.classList.remove('blurred'); // Remueve la clase para quitar el desenfoque
    }, 300); // Espera el tiempo de la transición antes de ocultar el popup
}



function actualizarGrafico(calories, canvasElement) {
    var ctx = canvasElement.getContext('2d');
    var chartData = {
        labels: ['Proteínas', 'Carbohidratos', 'Grasas'],
        datasets: [{
            label: 'Distribución Calórica',
            data: [calories * 0.3, calories * 0.4, calories * 0.3],
            backgroundColor: ['#888888', '#36A2EB', '#FFCE56'],
            borderWidth: 1
        }]
    };

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#166a46' // Cambia este valor al color que desees
                }
            }
        }
    };

    // Cambiar el tipo de gráfico a pastel
    var myChart = new Chart(ctx, {
        type: 'doughnut',  // Cambiar a 'doughnut' para un gráfico circular
        data: chartData,
        options: options
    });
}