# SpendWise Dashboard

## Project Overview

SpendWise is a responsive personal finance dashboard designed to help users view and organize their financial information in a clean and modern interface.

This project was created as the Week 4 dashboard shell for the SpendWise capstone project. The focus of this assignment is the visual structure and responsive layout of the application. The dashboard currently uses static financial information and does not include JavaScript functionality.

## Features

* Responsive dashboard layout
* Sidebar navigation menu
* Dashboard header with account information
* Financial summary cards
* Six spending category cards
* Recent transactions section
* Responsive mobile layout
* Hover and keyboard focus interactions on category cards
* CSS custom properties for the application theme
* Dark theme support using the user's system preference

## Dashboard Sections

### Sidebar

The sidebar contains the main navigation options:

* Dashboard
* Expenses
* Reports
* Budgets
* Transactions
* Settings

### Header

The dashboard header displays:

* Welcome message
* Dashboard title
* Total account balance
* User profile information

### Financial Summary

The summary section displays three static financial figures:

* Total Income
* Total Expenses
* Total Savings

### Spending Categories

The dashboard contains six financial category cards:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Savings
6. Utilities

Each card displays a category name, amount, percentage, description, and progress indicator.

### Recent Transactions

The recent activity section displays example transactions including:

* Lunch
* Bus Fare
* Electricity Bill
* Movie Ticket

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* CSS Flexbox
* CSS Custom Properties
* CSS Media Queries
* Google Fonts

## CSS Layout

CSS Grid is used for the overall dashboard structure and category card layouts.

Flexbox is used for:

* Sidebar navigation
* Header content
* Profile information
* Financial summary cards
* Category card content
* Transaction rows

No absolute positioning is used for the page layout.

## Responsive Design

The dashboard is responsive and adapts to different screen sizes.

Below 768px:

* The sidebar and main content change to a single-column layout.
* Navigation items wrap for smaller screens.
* Category cards display in a single column.
* Header content adapts to the smaller screen.

The responsive layout can be tested using the browser's DevTools Device Toolbar.

## Theme

The project uses CSS custom properties defined in the `:root` selector for the main color palette.

The theme includes variables for:

* Brand color
* Accent color
* Surface color
* Background color
* Primary text
* Secondary text
* Borders

A dark theme is also included using the `prefers-color-scheme: dark` media query.

## Card Micro-interactions

The spending category cards include subtle hover and keyboard focus interactions.

The interactions use:

* `transform`
* `box-shadow`
* `outline`

The transition duration is 200ms, which is within the required 250ms maximum.

## Project Structure

```text
SpendWise/
├── index.html
├── style.css
└── README.md
```

## Future Improvements

Future versions of SpendWise can include:

* JavaScript expense tracking
* Add and delete expenses
* Local storage
* Budget calculations
* Expense filtering
* Financial charts
* User authentication
* Database integration

## Author

SpendWise Dashboard — Week 4 Capstone Project
