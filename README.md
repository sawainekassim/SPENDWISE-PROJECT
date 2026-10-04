# SpendWise

## Project Description

SpendWise is a personal budgeting dashboard designed to help users understand and manage their income, expenses, balance, and savings.

This project continues the existing SpendWise dashboard by adding JavaScript functionality to the original HTML and CSS design. The JavaScript allows the application to collect financial information from the user, perform calculations, and display the calculated results in both the browser console and the SpendWise dashboard.

The existing dashboard includes financial information such as total income, total expenses, total savings, spending categories, and recent transactions. JavaScript has been added to make the financial information interactive and data-driven.

## JavaScript Concepts Implemented

The project demonstrates several JavaScript concepts covered in this assignment:

* Variables
* Numbers and strings
* User input
* Type conversion
* Calculations
* Functions
* Conditional statements
* DOM manipulation
* Console output

## Variables

Variables are used to store the financial information needed by SpendWise.

Examples include:

* `monthlyIncome`
* `foodExpenses`
* `transportExpenses`
* `rentExpenses`
* `entertainmentExpenses`
* `utilitiesExpenses`
* `totalExpenses`
* `remainingBalance`
* `totalSavings`

For example:

```javascript
let monthlyIncome = 85000;
let foodExpenses = 8000;
let transportExpenses = 4000;
let totalExpenses = 0;
```

These variables allow the program to store the user's income and expense information and use that information in calculations.

## User Input

SpendWise collects user information using JavaScript's `prompt()` function.

The application asks the user to enter their monthly income and expenses.

For example:

```javascript
let incomeInput = prompt("Enter your monthly income in KSh:");
```

The value collected from the prompt is converted into a number using `Number()`:

```javascript
let income = Number(incomeInput);
```

The application collects information for:

* Monthly income
* Food expenses
* Transport expenses
* Rent expenses
* Entertainment expenses
* Utilities expenses

The input is checked to make sure that it is a valid number and is not negative before it is stored.

## Calculations

SpendWise uses JavaScript arithmetic operators to calculate the user's total expenses.

The total expenses are calculated by adding all the expense categories:

```javascript
totalExpenses =
    foodExpenses +
    transportExpenses +
    rentExpenses +
    entertainmentExpenses +
    utilitiesExpenses;
```

The remaining balance is calculated by subtracting total expenses from monthly income:

```javascript
remainingBalance = monthlyIncome - totalExpenses;
```

The savings value is based on the remaining balance. If the remaining balance is negative, savings are displayed as zero.

## Functions

Functions are used to organize the JavaScript code and make the application easier to manage.

### `getUserIncome()`

This function collects the user's monthly income using a JavaScript prompt and stores the valid value in the `monthlyIncome` variable.

### `getUserExpenses()`

This function collects the user's food, transport, rent, entertainment, and utilities expenses.

### `calculateTotalExpenses()`

This function adds all expense categories together and returns the total expenses.

### `calculateRemainingBalance()`

This function subtracts total expenses from monthly income and returns the remaining balance.

### `calculateSavings()`

This function calculates the amount remaining after expenses and determines the savings value.

### `displayResults()`

This function displays the calculated financial information in the browser console using clearly labeled output.

### `updateDashboard()`

This function uses the DOM to update the existing SpendWise dashboard with the calculated income, expenses, balance, and savings.

### `runSpendWise()`

This function controls the main flow of the application by calling the input, calculation, console output, and dashboard update functions.

## Displaying Results

The calculated results are displayed in the browser console using `console.log()`.

The console displays:

* Monthly income
* Food expenses
* Transport expenses
* Rent expenses
* Entertainment expenses
* Utilities expenses
* Total expenses
* Remaining balance
* Total savings
* Budget status

The results are clearly labeled so that they are easy to understand.

The JavaScript also updates the existing SpendWise dashboard using DOM manipulation.

The dashboard displays the calculated:

* Total Balance
* Total Income
* Total Expenses
* Total Savings

## Testing

The application was tested by entering different income and expense values.

The following situations were tested:

1. Income greater than expenses.
2. Income equal to expenses.
3. Expenses greater than income.
4. Different expense amounts.
5. Zero values.
6. Invalid input.
7. Negative input.

The calculations were checked in the browser console to ensure that total expenses and remaining balance were calculated correctly.

## Project Structure

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run the Project

1. Open the SpendWise project folder.
2. Make sure `index.html`, `style.css`, `script.js`, and `README.md` are included.
3. Open `index.html` in a web browser.
4. Enter the requested income and expense information when the prompts appear.
5. Open the browser Developer Tools.
6. Select the Console tab.
7. Review the SpendWise calculation results.
8. Check the dashboard to see the updated financial values.

## Conclusion

The JavaScript foundation transforms the existing SpendWise dashboard from a primarily visual interface into an application that can collect and process financial data.

The project demonstrates the use of JavaScript variables, data types, user input, calculations, functions, conditional statements, console output, and DOM manipulation while continuing the original SpendWise design.
