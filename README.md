# Event Guest List Manager

A dynamic web application for managing event guest lists using JavaScript DOM manipulation. This project demonstrates fundamental web development concepts without relying on frameworks.

## Project Overview

This application allows event organizers to:
- Track guests for an event (up to 10 people)
- Categorize guests by relationship type
- Monitor RSVP status
- Record when guests were added
- Edit guest information as needed
- Access from any device with responsive design

## Features

### Core Functionality
- **Guest Addition**: Add guests with names and categories
- **Guest Removal**: Remove guests with a single click
- **Guest Limit**: Enforces a maximum of 10 guests with user alerts
- **Form Handling**: Prevents page refresh using `event.preventDefault()`

### Enhanced Features
- **RSVP Tracking**: Toggle between "Attending" and "Not Attending" status
- **Guest Categories**: Classify guests as Friend, Family, or Colleague
- **Visual Indicators**: Color-coded categories for easy identification
- **Timestamps**: Records when each guest was added
- **Inline Editing**: Update guest names without removing entries

## Technical Implementation

### DOM Manipulation
- Creates elements dynamically using JavaScript
- Updates the DOM without page reloads
- Manages event listeners for interactive elements

### Event Handling
- Form submission handling
- Click events for buttons
- Custom event management for user interactions

### Styling
- CSS3 for visual presentation
- Color-coding for different guest categories
- Fully responsive design for mobile and desktop
- Interactive button states
- Media queries for optimal display on all devices

## Code Structure

- **HTML (`index.html`)**: Basic structure and form elements
- **CSS (`style.css`)**: Visual styling and responsive design
- **JavaScript (`src.js`)**: Core functionality and DOM manipulation

## How to Use

1. Clone or download the repository
2. Open `index.html` in any modern web browser
3. Enter guest information in the form
4. Use the interface to manage your guest list

## Development Concepts Demonstrated

- Form validation and submission handling
- Dynamic content creation and removal
- Event delegation and handling
- State management without frameworks
- User feedback through visual indicators
- Data categorization and organization

## Future Enhancements

- Local storage integration for persistent data
- Filtering and sorting options
- Guest search functionality
- Export guest list to CSV/PDF
- Additional guest details (dietary preferences, etc.)

## Contributions

Feel free to fork this repository and suggest improvements, such as:
- Adding persistent storage using localStorage
- Creating guest filtering by category
- Implementing a search function for guests
- Adding email invitation functionality
- Enhancing the UI with animations

---

## © 2025 Clive Nyaga Kagotho. All rights reserved.