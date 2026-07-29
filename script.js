window.onload = function () {

    let bmi = parseFloat(localStorage.getItem("bmi"));

    if (!bmi) {
        bmi = 24.2;
    }

    document.getElementById("bmiValue").innerHTML =
        bmi.toFixed(1);

    let status = "";
    let causes = "";
    let foods = "";
    let avoid = "";

    if (bmi < 18.5) {

        status = "Underweight";

        causes = `
        <li>Not eating enough calories</li>
        <li>Fast metabolism</li>
        <li>Nutritional deficiencies</li>
        <li>Medical conditions</li>
        `;

        foods = `
        <li>Milk</li>
        <li>Eggs</li>
        <li>Bananas</li>
        <li>Rice</li>
        <li>Chicken</li>
        <li>Nuts and Almonds</li>
        `;

        avoid = `
        <li>Skipping meals</li>
        <li>Low calorie diets</li>
        `;

    } else if (bmi < 25) {

        status = "Normal Weight";

        causes = `
        <li>Healthy body weight</li>
        <li>Balanced lifestyle</li>
        `;

        foods = `
        <li>Vegetables</li>
        <li>Fruits</li>
        <li>Whole grains</li>
        <li>Fish</li>
        <li>Lean protein</li>
        `;

        avoid = `
        <li>Excess sugar</li>
        <li>Too much junk food</li>
        `;

    } else if (bmi < 30) {

        status = "Overweight";

        causes = `
        <li>Lack of exercise</li>
        <li>Excess calorie intake</li>
        <li>Sugary drinks</li>
        <li>Poor sleep habits</li>
        `;

        foods = `
        <li>Green vegetables</li>
        <li>Fruits</li>
        <li>Oats</li>
        <li>Lean protein</li>
        <li>Drink more water</li>
        `;

        avoid = `
        <li>Fast food</li>
        <li>Soft drinks</li>
        <li>Fried foods</li>
        <li>Excess sugar</li>
        `;

    } else {

        status = "Obese";

        causes = `
        <li>Physical inactivity</li>
        <li>High calorie intake</li>
        <li>Poor eating habits</li>
        <li>Genetic factors</li>
        `;

        foods = `
        <li>Vegetables</li>
        <li>Salads</li>
        <li>Whole grains</li>
        <li>Low fat dairy</li>
        <li>Lean protein</li>
        `;

        avoid = `
        <li>Fried foods</li>
        <li>Sugary drinks</li>
        <li>Processed foods</li>
        <li>Excess oil</li>
        `;
    }

    document.getElementById("status").innerHTML = status;
    document.getElementById("causes").innerHTML = causes;
    document.getElementById("foods").innerHTML = foods;
    document.getElementById("avoid").innerHTML = avoid;
}

function calculateBMI() {

    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight) {
        alert("Enter valid height and weight");
        return;
    }

    let bmi = weight / ((height / 100) * (height / 100));

    localStorage.setItem("bmi", bmi.toFixed(1));

    window.location.href = "result.html";
}
function showFood() {

    document.getElementById("foods").innerHTML = `
        <ul>
            <li>Green Vegetables</li>
            <li>Fruits</li>
            <li>Oats</li>
            <li>Lean Protein</li>
        </ul>
    `;
}
function calculateBMI() {

    let height =
    parseFloat(document.getElementById("height").value);

    let weight =
    parseFloat(document.getElementById("weight").value);

    let bmi =
    weight / ((height / 100) * (height / 100));

    localStorage.setItem("bmi", bmi);

    window.location.href = "result.html";
}
if (bmi < 18.5) {

    status = "Underweight";

    causes = `
    <ul>
        <li>Insufficient calorie intake</li>
        <li>Skipping meals frequently</li>
        <li>High metabolism</li>
        <li>Nutritional deficiencies</li>
    </ul>`;

    foods = `
    <ul>
        <li>Milk and dairy products</li>
        <li>Eggs</li>
        <li>Bananas</li>
        <li>Rice and potatoes</li>
        <li>Nuts and peanut butter</li>
        <li>Chicken and fish</li>
    </ul>`;

    avoid = `
    <ul>
        <li>Skipping meals</li>
        <li>Very low-calorie diets</li>
        <li>Excess junk food instead of nutritious food</li>
    </ul>`;
}
else if (bmi < 25) {

    status = "Normal Weight";

    causes = `
    <ul>
        <li>Your weight is within the healthy range</li>
        <li>Balanced nutrition and activity level</li>
    </ul>`;

    foods = `
    <ul>
        <li>Fresh fruits</li>
        <li>Vegetables</li>
        <li>Whole grains</li>
        <li>Lean protein</li>
        <li>Fish and nuts</li>
        <li>Plenty of water</li>
    </ul>`;

    avoid = `
    <ul>
        <li>Excess sugary drinks</li>
        <li>Too much fast food</li>
        <li>Overeating processed foods</li>
    </ul>`;
}
else if (bmi < 30) {

    status = "Overweight";

    causes = `
    <ul>
        <li>Excess calorie intake</li>
        <li>Lack of physical activity</li>
        <li>Sugary beverages</li>
        <li>Poor sleep habits</li>
    </ul>`;

    foods = `
    <ul>
        <li>Green vegetables</li>
        <li>Oats and whole grains</li>
        <li>Fruits</li>
        <li>Lean protein</li>
        <li>Low-fat dairy products</li>
    </ul>`;

    avoid = `
    <ul>
        <li>Fast food</li>
        <li>Soft drinks</li>
        <li>Fried foods</li>
        <li>High-sugar snacks</li>
    </ul>`;
}
else {

    status = "Obese";

    causes = `
    <ul>
        <li>Long-term excess calorie consumption</li>
        <li>Low physical activity</li>
        <li>Frequent consumption of processed foods</li>
        <li>Unhealthy lifestyle habits</li>
    </ul>`;

    foods = `
    <ul>
        <li>Leafy green vegetables</li>
        <li>Salads</li>
        <li>Whole grains</li>
        <li>Beans and legumes</li>
        <li>Lean protein sources</li>
        <li>Water and low-calorie drinks</li>
    </ul>`;

    avoid = `
    <ul>
        <li>Fried foods</li>
        <li>Sugary drinks</li>
        <li>Bakery items</li>
        <li>Processed snacks</li>
        <li>High-fat fast food</li>
    </ul>`;
}
function analyzeBMI(weight, height) {
  let bmi = weight / (height * height);
  let category = "";
  let cause = [];

  if (bmi < 18.5) {
    category = "Underweight";
    cause = [
      "Poor diet or low calorie intake",
      "High metabolism",
      "Stress or anxiety",
      "Medical conditions",
      "Lack of proper nutrition"
    ];
  } 
  else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
    cause = [
      "Balanced diet",
      "Regular physical activity",
      "Healthy lifestyle",
      "Proper sleep schedule"
    ];
  } 
  else {
    category = "Overweight";
    cause = [
      "High calorie food intake",
      "Lack of physical activity",
      "Fast food habits",
      "Stress eating",
      "Hormonal imbalance"
    ];
  }

  return {
    bmi: bmi.toFixed(2),
    category: category,
    causes: cause
  };
}
function showMeter() {

    let weight = document.getElementById("weight").value;
    let needle = document.getElementById("needle");
    let status = document.getElementById("status");

    let angle = 0;

    // Weight categories
    if (weight < 50) {
        angle = 30;
        status.innerText = "Status: Low Weight";
    } 
    else if (weight >= 50 && weight <= 75) {
        angle = 90;
        status.innerText = "Status: Normal Weight";
    } 
    else if (weight > 75) {
        angle = 150;
        status.innerText = "Status: Overweight";
    } 
    else {
        status.innerText = "Enter valid weight";
    }

    // Move needle
    needle.style.transform = "rotate(" + angle + "deg)";
}

function showMeter() {

    console.log("Button clicked"); // check if function runs

    let weight = document.getElementById("weight");
    let needle = document.getElementById("needle");
    let status = document.getElementById("status");

    // CHECK ELEMENTS
    if (!weight || !needle || !status) {
        console.log("ERROR: Missing HTML elements (id issue)");
        return;
    }

    let w = parseFloat(weight.value);

    if (isNaN(w)) {
        status.innerText = "Enter valid weight";
        return;
    }

    let angle = 0;

    if (w < 50) {
        angle = 30;
        status.innerText = "Low Weight";
    } 
    else if (w <= 75) {
        angle = 90;
        status.innerText = "Normal Weight";
    } 
    else {
        angle = 150;
        status.innerText = "Overweight";
    }

    console.log("Weight:", w, "Angle:", angle);

    // Move needle
    needle.style.transform = `rotate(${angle}deg)`;
}
function calculateBMI() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let bmi = weight / ((height/100) * (height/100));

    // store data for result page
    localStorage.setItem("bmi", bmi.toFixed(2));

    // go to result page
    window.location.href = "result.html";
}
window.onload = function () {

    let bmi = localStorage.getItem("bmi");

    let bmiValue = document.getElementById("bmiValue");
    let status = document.getElementById("status");

    bmiValue.innerText = "BMI: " + bmi;

    let value = parseFloat(bmi);

    let causes = document.getElementById("causes");
    let foods = document.getElementById("foods");
    let avoid = document.getElementById("avoid");

    if (value < 18.5) {
        status.innerText = "Low Weight";

        causes.innerText = "Poor diet, fast metabolism";
        foods.innerText = "Protein foods, nuts, milk";
        avoid.innerText = "Junk food, skipping meals";
    }
    else if (value < 25) {
        status.innerText = "Normal Weight";

        causes.innerText = "Balanced lifestyle";
        foods.innerText = "Fruits, vegetables, protein";
        avoid.innerText = "Excess sugar, junk food";
    }
    else {
        status.innerText = "Overweight";

        causes.innerText = "Overeating, inactivity";
        foods.innerText = "Fiber foods, water, fruits";
        avoid.innerText = "Fried food, sugar drinks";
    }
};
window.onload = function () {

    let bmi = localStorage.getItem("bmi");

    let bmiValue = document.getElementById("bmiValue");
    let status = document.getElementById("status");

    if (!bmi) {
        bmiValue.innerText = "No BMI Found";
        return;
    }

    bmiValue.innerText = "BMI: " + bmi;

    let value = parseFloat(bmi);

    // STATUS
    if (value < 18.5) {
        status.innerText = "Low Weight";
    } else if (value < 25) {
        status.innerText = "Normal Weight";
    } else {
        status.innerText = "Overweight";
    }

    // ✅ FIX: wait for canvas properly
    let canvas = document.getElementById("weightChart");

    if (!canvas) {
        console.log("Canvas not found");
        return;
    }

    let ctx = canvas.getContext("2d");

    // IMPORTANT: destroy old chart if exists
    if (window.myChart) {
        window.myChart.destroy();
    }

    // ✅ REAL CHART DATA
    window.myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Low", "Normal", "Overweight"],
            datasets: [{
                data: [18.5, 25, 40],
                backgroundColor: [
                    "yellow",
                    "green",
                    "red"
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

};
let labels = ["Underweight", "Normal", "Overweight", "Obese"];
let data = [0, 0, 0, 0];

if (bmi < 18.5) {
    data = [1, 0, 0, 0];
}
else if (bmi < 25) {
    data = [0, 1, 0, 0];
}
else if (bmi < 30) {
    data = [0, 0, 1, 0];
}
else {
    data = [0, 0, 0, 1];
}

if (window.bmiChart) {
    window.bmiChart.destroy();
}

window.bmiChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: ["#4da6ff", "#2ecc71", "#f39c12", "#e74c3c"]
        }]
    },
    options: {
        cutout: "70%",
        plugins: {
            legend: {
                display: true
            }
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {

    let weight = parseFloat(localStorage.getItem("weight"));

    if (!weight) return;

    let canvas = document.getElementById("weightChart");
    if (!canvas) return;

    let ctx = canvas.getContext("2d");

    let status = "";

    // CATEGORY
    if (weight < 50) {
        status = "Low Weight";
    } 
    else if (weight <= 75) {
        status = "Normal Weight";
    } 
    else {
        status = "Overweight";
    }

    document.getElementById("status").innerText = status;

    // IMPORTANT: REAL VISUAL DATA
    let data = [
        weight < 50 ? weight : 0,
        weight >= 50 && weight <= 75 ? weight : 0,
        weight > 75 ? weight : 0
    ];

    if (window.weightChart) {
        window.weightChart.destroy();
    }

    window.weightChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Low", "Normal", "Overweight"],
            datasets: [{
                label: "Your Weight",
                data: data,
                backgroundColor: ["#4da6ff", "#2ecc71", "#e74c3c"]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

});
let bmi = weight / ((height / 100) * (height / 100));

localStorage.setItem("bmi", bmi.toFixed(2));
localStorage.setItem("weight", weight);

window.location.href = "result.html";
document.addEventListener("DOMContentLoaded", function () {

    let bmi = parseFloat(localStorage.getItem("bmi"));
    let weight = parseFloat(localStorage.getItem("weight"));

    if (!bmi || !weight) return;

    let bmiValue = document.getElementById("bmiValue");
    let status = document.getElementById("status");
    let needle = document.getElementById("needle");

    bmiValue.innerText = `BMI: ${bmi.toFixed(1)} | Weight: ${weight} kg`;

    let category = "";
    let angle = 0;

    // 🔥 COMBINED BMI + WEIGHT LOGIC
    if (bmi < 18.5 || weight < 50) {
        category = "Low Weight";
        angle = -60;
    } 
    else if (bmi >= 18.5 && bmi < 25 && weight >= 50 && weight <= 75) {
        category = "Normal Weight";
        angle = 0;
    } 
    else if (bmi >= 25 && bmi < 30 || weight > 75) {
        category = "Overweight";
        angle = 60;
    } 
    else {
        category = "Obese";
        angle = 90;
    }

    status.innerText = category;

    // move needle
    if (needle) {
        needle.style.transform = `rotate(${angle}deg)`;
    }

});

function startWater() {
  alert("Water reminder started!");

  setInterval(() => {
    const msg = document.createElement("div");
    msg.innerText = "💧 Drink Water!";
    msg.style.position = "fixed";
    msg.style.bottom = "20px";
    msg.style.right = "20px";
    msg.style.background = "blue";
    msg.style.color = "white";
    msg.style.padding = "10px";

    document.body.appendChild(msg);

    setTimeout(() => msg.remove(), 3000);

  }, 10000);
}


let lang = "en";
let timer;

// 🌐 LANGUAGE TEXT
const t = {
  en: { title:"BMI App", water:"Drink Water!", history:"History" },
  ta: { title:"BMI செயலி", water:"தண்ணீர் குடிக்கவும்!", history:"வரலாறு" },
  hi: { title:"बीएमआई ऐप", water:"पानी पिएं!", history:"इतिहास" }
};

// 💾 SAVE + HISTORY
function saveData() {

  let name = document.getElementById("name").value;
  let h = document.getElementById("height").value;
  let w = document.getElementById("weight").value;

  let history = JSON.parse(localStorage.getItem("data")) || [];

  history.push({ name, h, w });

  localStorage.setItem("data", JSON.stringify(history));

  alert("Saved!");
}

// 📊 SHOW HISTORY
function showHistory() {

  let history = JSON.parse(localStorage.getItem("data")) || [];

  let out = "<h3>" + t[lang].history + "</h3>";

  history.forEach((x, i) => {
    out += (i+1) + ". " + x.name + " | " + x.h + " | " + x.w + "<br>";
  });

  document.getElementById("result").innerHTML = out;
}

// 💧 WATER REMINDER
function water() {

  alert("Started!");

  clearInterval(timer);

  timer = setInterval(() => {
    alert(t[lang].water);
  }, 10000);
}

// 🌐 LANGUAGE CHANGE
function changeLang() {

  lang = document.getElementById("lang").value;

  document.getElementById("title").innerText = t[lang].title;
}