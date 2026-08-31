# Student Directory

A simple webpage for **HerTechTrail Academy** that displays information about
its students. This project was built as a mid-cohort exercise to practice
core JavaScript data structures (arrays and objects) and a basic Git/GitHub
workflow.

## Description

The project stores 22 students as objects inside a single array. Each
student object holds the same five properties: `name`, `course`, `level`,
`location`, and `shortBio`. The page (`index.html` + `script.js`) loops
through the array and displays every student as a card, and also prints
each student's details to the browser console along with the total number
of students in the directory.

## Files

- `index.html` — the page structure
- `style.css` — styling for the student cards
- `script.js` — the student data (array of objects) and the logic that
  prints to the console and renders the cards on the page

## How to Run

1. Clone or download this repository.
2. Open `index.html` in any web browser (double-click the file, or use an
   extension like VS Code's "Live Server").
3. Open the browser's DevTools console (F12 or right-click → Inspect →
   Console) to see each student's details printed out, along with the
   total student count.

## What This Project Demonstrates

- Creating an array of objects
- Storing related data (name, course, level, location, bio) inside a
  single object
- Accessing object properties (e.g. `student.name`, `student.course`)
- Looping over an array with `forEach` to read and display data
- Printing array length and object details to the console
- Rendering data from JavaScript onto a webpage
- Using Git for version control and GitHub for hosting the project
