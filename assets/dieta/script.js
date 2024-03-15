$(document).ready(function() {
    $("#questionnaire").css("display", "block");

    $("#nextToPreferences").click(function() {
        if (validateQuestionnaire()) {
            $("#questionnaire").css("animation", "fadeOut 1s forwards");
            setTimeout(function() {
                $("#questionnaire").css("display", "none");
                $("#preferences").css("display", "block");
                $("#preferences").css("animation", "fadeIn 1s forwards");
            }, 1000);
        }
    });

    $("#nextToDietPlan").click(function() {
        if (validatePreferences()) {
            generateDietPlan();
            $("#preferences").css("animation", "fadeOut 1s forwards");
            setTimeout(function() {
                $("#preferences").css("display", "none");
                $("#dietPlan").css("display", "block");
                $("#dietPlan").css("animation", "fadeIn 1s forwards");
            }, 1000);
        }
    });
});

function validateQuestionnaire() {
    const weight = $("#weight").val();
    const height = $("#height").val();
    const age = $("#age").val();
    const gender = $("#gender").val();
    const activityLevel = $("#activity-level").val();
    const goal = $("#goal").val();

    if (weight === "" || height === "" || age === "" || gender === "" || activityLevel === "" || goal === "") {
        alert("Por favor, complete todos los campos del cuestionario.");
        return false;
    }

    return true;
}

function validatePreferences() {
    const likes = $("input[name='likes']:checked").length;
    if (likes === 0) {
        alert("Por favor, selecciona al menos un alimento que te guste.");
        return false;
    }
    return true;
}

function generateDietPlan() {
    const weight = parseFloat($("#weight").val());
    const height = parseFloat($("#height").val());
    const age = parseInt($("#age").val());
    const gender = $("#gender").val();
    const likes = $("input[name='likes']:checked").map(function() {
        return $(this).val();
    }).get();
    const allergies = $("#allergies").val();
    const activityLevel = $("#activity-level").val();
    const goal = $("#goal").val();
    const daysInMonth = 31;

    // Calcular total de calorías diarias recomendadas
    let basalMetabolicRate;
    if (gender === "male") {
        basalMetabolicRate = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        basalMetabolicRate = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityMultiplier;
    switch (activityLevel) {
        case "sedentary":
            activityMultiplier = 1.2;
            break;
        case "lightly-active":
            activityMultiplier = 1.375;
            break;
        case "moderately-active":
            activityMultiplier = 1.55;
            break;
        case "very-active":
            activityMultiplier = 1.725;
            break;
        case "extra-active":
            activityMultiplier = 1.9;
            break;
        default:
            activityMultiplier = 1.2;
    }

    let totalCalories;
    switch (goal) {
        case "lose-weight":
            totalCalories = Math.round(basalMetabolicRate * activityMultiplier * 0.8);
            break;
        case "maintain-weight":
            totalCalories = Math.round(basalMetabolicRate * activityMultiplier);
            break;
        case "gain-weight":
            totalCalories = Math.round(basalMetabolicRate * activityMultiplier * 1.2);
            break;
        default:
            totalCalories = Math.round(basalMetabolicRate * activityMultiplier);
    }

    // Dividir las calorías diarias entre las comidas principales
    const caloriesPerMeal = Math.round(totalCalories / 4);

    // Definir alimentos para cada tipo de comida
    const breakfastFoods = ["avena", "huevos", "frutas", "yogur"];
    const lunchFoods = ["pollo", "pescado", "carne magra", "vegetales", "arroz", "quinoa"];
    const snackFoods = ["frutos secos", "batido de proteínas", "frutas", "yogur"];
    const dinnerFoods = ["pescado", "carne magra", "tofu", "verduras al vapor", "ensalada"];

    // Crear el plan de dieta para 31 días
    let dietPlanContent = `
        <h2>Calendario de Comidas</h2>
        <table>
            <tr>
                <th>Día</th>
                <th>Desayuno</th>
                <th>Almuerzo</th>
                <th>Merienda</th>
                <th>Cena</th>
            </tr>
    `;

    for (let day = 1; day <= daysInMonth; day++) {
        const breakfast = getRandomFoods(breakfastFoods, caloriesPerMeal * 0.25);
        const lunch = getRandomFoods(lunchFoods, caloriesPerMeal * 0.35);
        const snack = getRandomFoods(snackFoods, caloriesPerMeal * 0.15);
        const dinner = getRandomFoods(dinnerFoods, caloriesPerMeal * 0.25);

        dietPlanContent += `
            <tr>
                <td>${day}</td>
                <td>${breakfast.join(", ")}</td>
                <td>${lunch.join(", ")}</td>
                <td>${snack.join(", ")}</td>
                <td>${dinner.join(", ")}</td>
            </tr>
        `;
    }

    dietPlanContent += `</table>`;
    $("#dietPlanContent").html(dietPlanContent);
}

// Función para obtener una selección aleatoria de alimentos
function getRandomFoods(foodArray, targetCalories) {
    const foods = [];
    let totalCalories = 0;

    while (totalCalories < targetCalories) {
        const randomFood = foodArray[Math.floor(Math.random() * foodArray.length)];
        const foodCalories = Math.floor(Math.random() * 200) + 100; // Calorías aleatorias entre 100 y 300
        if (totalCalories + foodCalories <= targetCalories) {
            foods.push(randomFood);
            totalCalories += foodCalories;
        }
    }

    return foods;
}


function restart() {
    $("#dietPlan").css("animation", "fadeOut 1s forwards");
    setTimeout(function() {
        $("#dietPlan").css("display", "none");
        $("#questionnaire").css("display", "block");
        $("#questionnaire").css("animation", "fadeIn 1s forwards");
    }, 1000);
}
