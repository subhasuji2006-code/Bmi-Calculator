document.addEventListener("DOMContentLoaded", function () {

    let bmi = localStorage.getItem("bmi");

    let bmiValue = document.getElementById("bmiValue");
    let status = document.getElementById("status");
    let canvas = document.getElementById("weightChart");

    if (!bmiValue || !status || !canvas) {
        console.log("Missing HTML elements");
        return;
    }

    if (!bmi) {
        bmiValue.innerText = "No BMI Found";
        return;
    }

    bmi = parseFloat(bmi);

    bmiValue.innerText = "BMI: " + bmi.toFixed(1);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } 
    else if (bmi < 25) {
        category = "Normal Weight";
    } 
    else if (bmi < 30) {
        category = "Overweight";
    } 
    else {
        category = "Obese";
    }

    status.innerText = category;

    // FIX: prevent blank chart / multiple charts
    if (window.bmiChart) {
        window.bmiChart.destroy();
    }

    let ctx = canvas.getContext("2d");

    window.bmiChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Underweight", "Normal", "Overweight", "Obese"],
            datasets: [{
                data: [18.5, 24.9, 29.9, 35],
                backgroundColor: [
                    "#4da6ff",
                    "#2ecc71",
                    "#f39c12",
                    "#e74c3c"
                ],
                borderWidth: 0
            }]
        },
        options: {
            cutout: "70%",
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

});

window.onload = function () {

    let bmi = parseFloat(localStorage.getItem("bmi"));

    if (!bmi) bmi = 24.2;

    document.getElementById("bmiValue").innerHTML = bmi.toFixed(1);

    let status = "";
    let causes = "";
    let foods = "";
    let avoid = "";

    // BMI CATEGORY
    if (bmi < 18.5) {
        status = "Underweight";

        causes = ["Low calorie intake", "Poor diet", "Fast metabolism"];
        foods = ["Milk", "Eggs", "Banana", "Nuts"];
        avoid = ["Skipping meals", "Junk food"];

    } else if (bmi < 25) {
        status = "Normal Weight";

        causes = ["Balanced lifestyle"];
        foods = ["Vegetables", "Fruits", "Protein", "Water"];
        avoid = ["Excess sugar", "Fast food"];

    } else if (bmi < 30) {
        status = "Overweight";

        causes = ["Overeating", "Lack of exercise"];
        foods = ["Green vegetables", "Oats", "Protein"];
        avoid = ["Soft drinks", "Fried food"];

    } else {
        status = "Obese";

        causes = ["High calorie intake", "Inactive lifestyle"];
        foods = ["Salads", "Vegetables", "Whole grains"];
        avoid = ["Fast food", "Sugar", "Oil"];
    }

    // SHOW TEXT
    document.getElementById("status").innerHTML = status;

    document.getElementById("causes").innerHTML =
        "<ul><li>" + causes.join("</li><li>") + "</li></ul>";

    document.getElementById("foods").innerHTML =
        "<ul><li>" + foods.join("</li><li>") + "</li></ul>";

    document.getElementById("avoid").innerHTML =
        "<ul><li>" + avoid.join("</li><li>") + "</li></ul>";

    // =========================
    // GAUGE CHART (WORKING FIX)
    // =========================
}

let under = 18.5;
let normal = 24.9;
let overweight = 29.9;
let obese = 35;

let data = [];

if (bmi < 18.5) {
    data = [bmi, 18.5, 24, 30];
}
else if (bmi < 25) {
    data = [18.5, bmi, 25, 30];
}
else if (bmi < 30) {
    data = [18.5, 24.9, bmi, 35];
}
else {
    data = [18.5, 24.9, 29.9, bmi];
}

if (window.bmiChart) {
    window.bmiChart.destroy();
}

window.bmiChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["Underweight", "Normal", "Overweight", "Obese"],
        datasets: [{
            data: data,
            backgroundColor: ["#4da6ff", "#2ecc71", "#f39c12", "#e74c3c"]
        }]
    },
    options: {
        cutout: "70%"
    }
});
document.addEventListener("DOMContentLoaded", function () {

    let bmi = parseFloat(localStorage.getItem("bmi"));

    if (!bmi) return;

    document.getElementById("bmiValue").innerText = "BMI: " + bmi.toFixed(1);

    let status = "";

    let angle = 0;

    // BMI to angle mapping (IMPORTANT)
    if (bmi < 18.5) {
        status = "Underweight";
        angle = -60;
    } 
    else if (bmi < 25) {
        status = "Normal Weight";
        angle = 0;
    } 
    else if (bmi < 30) {
        status = "Overweight";
        angle = 60;
    } 
    else {
        status = "Obese";
        angle = 90;
    }

    document.getElementById("status").innerText = status;

    let needle = document.getElementById("needle");

    if (needle) {
        needle.style.transform = `rotate(${angle}deg)`;
    }

});
document.addEventListener("DOMContentLoaded", function () {

    let weight = parseFloat(localStorage.getItem("weight"));

    if (!weight) return;

    let canvas = document.getElementById("weightChart");

    if (!canvas) return;

    let ctx = canvas.getContext("2d");

    let status = "";
    let chartData = [];

    // WEIGHT CATEGORY LOGIC
    if (weight < 50) {
        status = "Low Weight";
        chartData = [1, 0, 0];
    } 
    else if (weight <= 75) {
        status = "Normal Weight";
        chartData = [0, 1, 0];
    } 
    else {
        status = "Overweight";
        chartData = [0, 0, 1];
    }

    document.getElementById("status").innerText = status;

    // destroy old chart if exists
    if (window.weightChart) {
        window.weightChart.destroy();
    }

    // BAR CHART (WEIGHT BASED)
    window.weightChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Low", "Normal", "Overweight"],
            datasets: [{
                label: "Weight Status",
                data: chartData,
                backgroundColor: ["blue", "green", "red"]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1
                }
            }
        }
    });

});
document.addEventListener("DOMContentLoaded", function () {

    let bmi = parseFloat(localStorage.getItem("bmi"));
    let weight = parseFloat(localStorage.getItem("weight"));

    let bmiValue = document.getElementById("bmiValue");
    let status = document.getElementById("status");
    let canvas = document.getElementById("weightChart");

    if (!bmi || !weight || !canvas) return;

    bmiValue.innerText = `BMI: ${bmi.toFixed(1)} | Weight: ${weight} kg`;

    let category = "";

    // SMART COMBINED LOGIC
    if (bmi < 18.5 && weight < 50) {
        category = "Low Weight (Underweight)";
    } 
    else if (bmi >= 18.5 && bmi < 25 && weight >= 50 && weight <= 75) {
        category = "Healthy (Normal)";
    } 
    else if (bmi >= 25 && bmi < 30) {
        category = "Overweight (Warning)";
    } 
    else {
        category = "Obese (High Risk)";
    }

    status.innerText = category;

    // SMART DATA SCORE (combined visualization)
    let data = [];

    if (category.includes("Low")) {
        data = [80, 20, 10];
    } 
    else if (category.includes("Healthy")) {
        data = [20, 90, 20];
    } 
    else if (category.includes("Overweight")) {
        data = [10, 40, 90];
    } 
    else {
        data = [5, 20, 100];
    }

    if (window.smartChart) {
        window.smartChart.destroy();
    }

    let ctx = canvas.getContext("2d");

    window.smartChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Low Risk", "Healthy Zone", "High Risk"],
            datasets: [{
                label: "Health Score",
                data: data,
                backgroundColor: ["#4da6ff", "#2ecc71", "#e74c3c"]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

});

let waterInterval;
let lang = "en";

// 💪 BMI + SAVE HISTORY
function calculateBMI() {

    let name = document.getElementById("name").value;
    let h = parseFloat(document.getElementById("height").value);
    let w = parseFloat(document.getElementById("weight").value);

    if (!h || !w) {
        alert("Enter valid values");
        return;
    }

    let bmi = w / ((h / 100) * (h / 100));

    let category;

    if (bmi < 18.5) category = t("under");
    else if (bmi < 25) category = t("normal");
    else if (bmi < 30) category = t("over");
    else category = t("obese");

    // SAVE HISTORY
    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.push({
        name: name,
        bmi: bmi.toFixed(2),
        category: category
    });

    localStorage.setItem("history", JSON.stringify(history));

    showResult(bmi, category);
}


// 📊 SHOW RESULT
function showResult(bmi, category) {

    document.getElementById("result").innerHTML =
        "BMI: " + bmi.toFixed(2) + "<br>" +
        "Category: " + category;
}


// 📊 HISTORY FIXED
function showHistory() {

    let history = JSON.parse(localStorage.getItem("history")) || [];

    if (history.length === 0) {
        document.getElementById("result").innerHTML = "No history yet";
        return;
    }

    let text = "<h3>" + t("history") + "</h3>";

    history.forEach((item, i) => {
        text += (i + 1) + ". " +
            item.name + " | BMI: " +
            item.bmi + " | " +
            item.category + "<br>";
    });

    document.getElementById("result").innerHTML = text;
}


// 💧 WATER REMINDER FIXED
function startWaterReminder() {

    alert("💧 Water reminder started!");

    if (waterInterval) clearInterval(waterInterval);

    waterInterval = setInterval(() => {
        alert("💧 " + t("water"));
    }, 60000); // 1 minute (not 5 sec → avoids browser blocking)
}


// 🌐 LANGUAGE FIXED
function changeLanguage() {
    lang = document.getElementById("lang").value;
    updateLanguageUI();
}

function updateLanguageUI() {

    let title = document.getElementById("title");

    if (lang === "ta") title.innerText = "💪 BMI & கலோரி அப்";
    else if (lang === "hi") title.innerText = "💪 बीएमआई ऐप";
    else title.innerText = "💪 BMI & Calorie Analyzer";

}


// 🌍 TEXT TRANSLATION
function t(key) {

    const texts = {
        en: {
            under: "Underweight",
            normal: "Normal",
            over: "Overweight",
            obese: "Obese",
            water: "Drink Water Now!",
            history: "History"
        },
        ta: {
            under: "குறைந்த எடை",
            normal: "சாதாரணம்",
            over: "அதிக எடை",
            obese: "அதிக உடல் எடை",
            water: "தண்ணீர் குடிக்கவும்!",
            history: "வரலாறு"
        },
        hi: {
            under: "कम वजन",
            normal: "सामान्य",
            over: "अधिक वजन",
            obese: "मोटापा",
            water: "पानी पिएं!",
            history: "इतिहास"
        }
    };

    return texts[lang][key];
}

