let monthlyIncome = 85000;
let foodExpenses = 8000;
let transportExpenses = 4000;
let rentExpenses = 15000;
let entertainmentExpenses = 2000;
let utilitiesExpenses = 3000;

let totalExpenses = 0;
let remainingBalance = 0;
let totalSavings = 0;

function getUserIncome() {
    let incomeInput = prompt("Enter your monthly income in KSh:");

    if (incomeInput !== null && incomeInput.trim() !== "") {
        let income = Number(incomeInput);

        if (!isNaN(income) && income >= 0) {
            monthlyIncome = income;
        }
    }
}

function getUserExpenses() {
    let foodInput = prompt("Enter your food expenses in KSh:");
    let transportInput = prompt("Enter your transport expenses in KSh:");
    let rentInput = prompt("Enter your rent expenses in KSh:");
    let entertainmentInput = prompt("Enter your entertainment expenses in KSh:");
    let utilitiesInput = prompt("Enter your utilities expenses in KSh:");

    if (foodInput !== null && foodInput.trim() !== "") {
        let food = Number(foodInput);

        if (!isNaN(food) && food >= 0) {
            foodExpenses = food;
        }
    }

    if (transportInput !== null && transportInput.trim() !== "") {
        let transport = Number(transportInput);

        if (!isNaN(transport) && transport >= 0) {
            transportExpenses = transport;
        }
    }

    if (rentInput !== null && rentInput.trim() !== "") {
        let rent = Number(rentInput);

        if (!isNaN(rent) && rent >= 0) {
            rentExpenses = rent;
        }
    }

    if (entertainmentInput !== null && entertainmentInput.trim() !== "") {
        let entertainment = Number(entertainmentInput);

        if (!isNaN(entertainment) && entertainment >= 0) {
            entertainmentExpenses = entertainment;
        }
    }

    if (utilitiesInput !== null && utilitiesInput.trim() !== "") {
        let utilities = Number(utilitiesInput);

        if (!isNaN(utilities) && utilities >= 0) {
            utilitiesExpenses = utilities;
        }
    }
}

function calculateTotalExpenses() {
    totalExpenses =
        foodExpenses +
        transportExpenses +
        rentExpenses +
        entertainmentExpenses +
        utilitiesExpenses;

    return totalExpenses;
}

function calculateRemainingBalance() {
    remainingBalance = monthlyIncome - totalExpenses;

    return remainingBalance;
}

function calculateSavings() {
    totalSavings = calculateRemainingBalance();

    if (totalSavings < 0) {
        totalSavings = 0;
    }

    return totalSavings;
}

function displayResults() {
    console.log("===== SpendWise Budget Summary =====");
    console.log("Monthly Income: KSh " + monthlyIncome.toFixed(2));
    console.log("Food Expenses: KSh " + foodExpenses.toFixed(2));
    console.log("Transport Expenses: KSh " + transportExpenses.toFixed(2));
    console.log("Rent Expenses: KSh " + rentExpenses.toFixed(2));
    console.log("Entertainment Expenses: KSh " + entertainmentExpenses.toFixed(2));
    console.log("Utilities Expenses: KSh " + utilitiesExpenses.toFixed(2));
    console.log("Total Expenses: KSh " + totalExpenses.toFixed(2));
    console.log("Remaining Balance: KSh " + remainingBalance.toFixed(2));
    console.log("Total Savings: KSh " + totalSavings.toFixed(2));

    if (remainingBalance > 0) {
        console.log("Status: You are within your budget.");
    } else if (remainingBalance === 0) {
        console.log("Status: You have used your entire income.");
    } else {
        console.log("Status: You have exceeded your income.");
    }
}

function updateDashboard() {
    document.getElementById("total-balance").textContent =
        "KSh " + remainingBalance.toLocaleString();

    document.getElementById("total-income").textContent =
        "KSh " + monthlyIncome.toLocaleString();

    document.getElementById("total-expenses").textContent =
        "KSh " + totalExpenses.toLocaleString();

    document.getElementById("total-savings").textContent =
        "KSh " + totalSavings.toLocaleString();
}

function runSpendWise() {
    getUserIncome();
    getUserExpenses();
    calculateTotalExpenses();
    calculateRemainingBalance();
    calculateSavings();
    displayResults();
    updateDashboard();
}

runSpendWise();