# Etch-a-Sketch

A browser-based sketchpad built as part of [The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch) Foundations curriculum.

**[Live Preview](https://then25.github.io/etch-a-sketch/)**

---

## About the Project

This project is the Etch-a-Sketch exercise from The Odin Project's Foundations path. The goal is to build an interactive sketchpad in the browser using only vanilla HTML, CSS, and JavaScript — no frameworks or libraries.

Hovering over cells in the grid colors them in, mimicking the feel of drawing on a classic Etch-a-Sketch toy.

---

## Features

- Dynamic grid generation — defaults to 16×16 and supports user-defined sizes up to 100×100
- Two drawing modes, toggled via button:
  - **Black** — classic pencil-style coloring
  - **Random Color** — each cell gets a unique random RGB color on hover
- Clear grid button to reset the canvas without a page refresh
- Clean responsive layout

---

## What I Learned

- **DOM manipulation** — dynamically creating and appending hundreds of elements with `createElement` and `appendChild`, and querying them later with `querySelectorAll`
- **Event listeners on dynamic elements** — attaching `mouseover` listeners to each grid cell at creation time and reading shared state (`colorMode`) at event time so behavior updates without rebuilding the grid
- **CSS Flexbox with `flex-wrap`** — using percentage-based widths and heights on child elements to fill a fixed parent container at any grid size
- **State management in plain JS** — tracking UI mode with a module-level variable and keeping the button label in sync
- **User input and validation** — using `prompt()` and guarding against out-of-range values before acting on them

---

## Built With

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
