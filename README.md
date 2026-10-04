# SpendWise

SpendWise is a personal budgeting application designed to help users track their income, manage expenses, and understand their remaining monthly balance.

This project continues the existing SpendWise dashboard by adding interactive JavaScript functionality. The Week 6 improvements make the dashboard more dynamic by using conditionals, arrays, loops, DOM manipulation, and event listeners.

## Week 6 Improvements

The following improvements were made to SpendWise:

* Added an interactive expense form.
* Added an array to store multiple expense records.
* Added loops to process expense records.
* Added conditional statements to evaluate the user's budget.
* Added DOM manipulation to update the dashboard dynamically.
* Added event listeners to respond to user form submissions.
* Added validation for expense information.
* Added dynamic display of newly added expenses.
* Added automatic recalculation of total expenses, remaining balance, and savings.

## Decision Making with Conditionals

Conditional statements are used to evaluate the user's financial situation.

If the remaining balance is greater than zero, SpendWise tells the user that they are within their budget.

If the remaining balance is exactly zero, SpendWise informs the user that they have used their entire income.

If the remaining balance is negative, SpendWise warns the user that their expenses have exceeded their income.

The project also uses conditionals to validate information entered into the expense form.

## Arrays

SpendWise uses an array called `expenses` to store multiple expense records.

Each expense is stored as an object containing:

* Category
* Amount
* Description

For example:

```javascript
let expenses = [
    {
        category: "Food",
        amount: 8000,
        description: "Food expenses"
    }
];
```

When the user adds a new expense, the `push()` method adds the new record to the array.

This makes the application easier to manage because multiple expenses can be stored in one collection instead of using separate variables for every expense.

## Loops

A `for` loop is used to process the expense records stored in the array.

The loop goes through every expense and adds its amount to calculate the total expenses.

Loops are also used to display all stored expenses dynamically on the webpage.

This allows SpendWise to process any number of expense records efficiently.

## DOM Manipulation

SpendWise uses JavaScript DOM manipulation to update information directly on the webpage.

The application updates:

* Total balance
* Total income
* Total expenses
* Total savings
* Expense records
* Budget feedback messages

For example, JavaScript updates the total expenses using:

```javascript
document.getElementById("total-expenses").textContent =
    "KSh " + totalExpenses.toLocaleString();
```

The application also creates new HTML elements dynamically to display expenses entered by the user.

## User Interactions and Events

The application uses an event listener to respond when the user submits the expense form.

When the form is submitted:

1. JavaScript prevents the page from refreshing.
2. The category, amount, and description are collected.
3. The input is validated.
4. The expense is added to the expenses array.
5. The total expenses are recalculated.
6. The remaining balance is recalculated.
7. The dashboard is updated.
8. The new expense is displayed on the webpage.
9. The form is cleared for the next entry.

This creates a clear connection between user actions, JavaScript logic, stored data, and the dashboard.

## Challenges Encountered

One challenge was changing the project from using individual expense variables to using an array of expense objects.

This was resolved by creating an `expenses` array where each expense contains its category, amount, and description. A loop can then process all records in the array.

Another challenge was making the dashboard update automatically when a new expense is entered.

This was resolved by using DOM manipulation. After an expense is added, the application recalculates the budget and updates the relevant dashboard elements.

Input validation was also necessary because users may submit empty or invalid amounts. Conditional statements were used to check the input before adding an expense to the array.

## Technologies Used

* HTML
* CSS
* JavaScript
* JavaScript DOM Manipulation
* JavaScript Arrays
* JavaScript Loops
* JavaScript Conditional Statements
* JavaScript Event Listeners

## Project Structure

```text
SpendWise/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Testing

The following functionality was tested:

* Adding a valid expense.
* Adding different expense categories.
* Preventing invalid or empty expense entries.
* Updating total expenses.
* Updating the remaining balance.
* Updating savings.
* Displaying newly added expenses.
* Showing different budget messages depending on the remaining balance.
* Processing multiple expenses using an array and loop.

## Conclusion

The Week 6 version of SpendWise demonstrates how JavaScript can make a budgeting dashboard interactive.

The project now uses conditionals for decision making, arrays for storing expense records, loops for processing data, DOM manipulation for updating the webpage, and event listeners for handling user interactions.
