let monthlyIncome = 85000;

let expenses = [
    {
        category: "Food",
        amount: 8000,
        description: "Food expenses"
    },
    {
        category: "Transport",
        amount: 4000,
        description: "Transport expenses"
    },
    {
        category: "Rent",
        amount: 15000,
        description: "Monthly rent"
    },
    {
        category: "Entertainment",
        amount: 2000,
        description: "Entertainment expenses"
    },
    {
        category: "Utilities",
        amount: 3000,
        description: "Utility bills"
    }
];

let totalExpenses = 0;
let remainingBalance = 0;
let totalSavings = 0;

function calculateTotalExpenses() {
    totalExpenses = 0;

    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount;
    }

    return totalExpenses;
}

function calculateRemainingBalance() {
    remainingBalance = monthlyIncome - totalExpenses;

    return remainingBalance;
}

function calculateSavings() {
    if (remainingBalance > 0) {
        totalSavings = remainingBalance;
    } else {
        totalSavings = 0;
    }

    return totalSavings;
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

function displayExpenses() {
    let expenseList = document.getElementById("expense-list");

    expenseList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        let expense = expenses[i];

        let expenseItem = document.createElement("div");

        expenseItem.innerHTML = `
            <p>
                <strong>${expense.category}</strong>
                - ${expense.description}
                - KSh ${expense.amount.toLocaleString()}
            </p>
        `;

        expenseList.appendChild(expenseItem);
    }
}

function displayBudgetMessage() {
    let message = document.getElementById("budget-message");

    if (remainingBalance > 0) {
        message.textContent =
            "Good job! You are within your budget and have money remaining.";
    } else if (remainingBalance === 0) {
        message.textContent =
            "You have used your entire monthly income.";
    } else {
        message.textContent =
            "Warning: Your expenses have exceeded your monthly income.";
    }
}

function updateSpendWise() {
    calculateTotalExpenses();
    calculateRemainingBalance();
    calculateSavings();
    updateDashboard();
    displayExpenses();
    displayBudgetMessage();
}

document
    .getElementById("expense-form")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        let category = document.getElementById("expense-category").value;
        let amount = Number(
            document.getElementById("expense-amount").value
        );
        let description =
            document.getElementById("expense-description").value;

        if (category === "" || description.trim() === "" || amount <= 0) {
            document.getElementById("budget-message").textContent =
                "Please enter a valid category, description, and amount.";
            return;
        }

        expenses.push({
            category: category,
            amount: amount,
            description: description
        });

        updateSpendWise();

        document.getElementById("expense-form").reset();
    });

updateSpendWise();