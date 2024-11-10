// Authentication Script
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "admin@gmail.com" && password === "1234") {
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("loginError").textContent = "Invalid email or password";
    }
  });
  
  // Dashboard Calculations
  function showCalculator(type) {
    const display = document.getElementById("calculatorDisplay");
    display.innerHTML = "";
  
    if (type === "employeeCost") {
      display.innerHTML = `
        <h3>Employee Meal & Wage Cost</h3>
        <input type="number" id="mealCost" placeholder="Meal Cost" />
        <input type="number" id="wageCost" placeholder="Daily Wage Cost" />
        <button onclick="calculateEmployeeCost()">Calculate</button>
        <p id="employeeCostResult"></p>
      `;
    } else if (type === "productionCost") {
      display.innerHTML = `
        <h3>Production Cost</h3>
        <input type="number" id="materialCost" placeholder="Raw Material Cost" />
        <button onclick="calculateProductionCost()">Calculate</button>
        <p id="productionCostResult"></p>
      `;
    } else if (type === "revenue") {
      display.innerHTML = `
        <h3>Revenue Calculation</h3>
        <input type="number" id="sellingPrice" placeholder="Product Selling Price" />
        <input type="number" id="totalCost" placeholder="Total Cost" />
        <button onclick="calculateRevenue()">Calculate</button>
        <p id="revenueResult"></p>
      `;
    }
  }
  
  function calculateEmployeeCost() {
    const mealCost = parseFloat(document.getElementById("mealCost").value) || 0;
    const wageCost = parseFloat(document.getElementById("wageCost").value) || 0;
    document.getElementById("employeeCostResult").textContent = `Total Daily Employee Cost: ${mealCost + wageCost}`;
  }
  
  function calculateProductionCost() {
    const materialCost = parseFloat(document.getElementById("materialCost").value) || 0;
    document.getElementById("productionCostResult").textContent = `Total Production Cost: ${materialCost}`;
  }
  
  function calculateRevenue() {
    const sellingPrice = parseFloat(document.getElementById("sellingPrice").value) || 0;
    const totalCost = parseFloat(document.getElementById("totalCost").value) || 0;
    document.getElementById("revenueResult").textContent = `Total Revenue: ${sellingPrice - totalCost}`;
  }
  