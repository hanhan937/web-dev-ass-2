# sudoku-website

A multi-page, mobile-friendly Sudoku website built with **React**, **Vite**, and the **Context API**.

The app includes:
- a home page
- a mocked game selection page
- a functional easy 6x6 Sudoku mode
- a functional normal 9x9 Sudoku mode
- mocked rules, scores, login, and register pages

The game pages include random puzzle generation, fixed/editable cells, invalid move highlighting, a timer, reset/new game controls, and completion detection.

## Deliverables
- Website: [https://yiwen-hu-project3.onrender.com]
- Repo: [https://github.com/yiwenhu789/sudoku-website]
- Collaborators：[ Hanhan Guo; Jiaju Zhang; Yiwen Hu]


## How to Run Locally
1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local Vite URL shown in the terminal, usually `http://localhost:5173`

To create a production build:

```bash
npm run build
```

## Pages
- Home (`/`)
- Selection (`/games`)
- Easy Game 6x6 (`/games/easy`)
- Normal Game 9x9 (`/games/normal`)
- Rules (`/rules/`)
- High Scores (`/scores/`)
- Login (`/login/`)
- Register (`/register/`)

## Project Structure
- `src/main.jsx` — React app entry point
- `src/App.jsx` — top-level app router usage
- `src/router/routes.jsx` — route definitions for all pages
- `src/pages/` — page-level React components
- `src/components/` — shared layout and Sudoku UI components
- `src/context/SudokuContext.jsx` — Context API state management for Sudoku games
- `src/utils/sudoku.js` — puzzle generation, validation, and helper logic
- `css/common.css` — shared base styling
- `src/styles/pages.css` — page-specific and interactive game styling



## Reflection / Writeup

### What were some challenges you faced while making this app?
One of the biggest challenges was turning the Sudoku pages from a mostly visual layout into a working game. Compared with Project 1, this project required much more logic, especially for generating boards, deciding which cells should be editable, checking whether a move is valid, and detecting when the puzzle is complete. Another challenge was organizing the React code in a clean way while using Context API for state management. It also took time to make sure the board looked clear and usable, especially when showing different cell states like selected, fixed, incorrect, and hover.

### Given more time, what additional features, functional or design changes would you make?
If I had more time, I would add a stronger puzzle generation system so that every Sudoku board is guaranteed to have a unique solution. I would also like to add a hint button, note-taking inside cells, and local storage so players can continue their game after refreshing the page. On the design side, I would improve the overall polish of the app with smoother interactions, better feedback, and a more refined visual style. I would also connect the login and high score pages to a backend so user progress and scores could actually be saved.

### What assumptions did you make while working on this assignment?
One assumption I made was that the non-game pages, like login, register, scores, and game selection, could stay mostly mocked since the instructions said those pages did not need much real functionality yet. I also assumed that the most important functional requirements were on the easy and normal Sudoku pages, especially puzzle generation, input validation, reset, timer, and win detection. 

### How long did this assignment take to complete? (may less than a paragraph in length)
This assignment took about 20 hours to complete.

### What bonus points did you accomplish?  Please link to code where relevant and add any required details.
focused on making sure the main required features were finished and working correctly first, and submit as early as possible to get the bonus point.

---

## External Resources / Attributions
- I did not copy any code directly from online sources.
- The layout and styling were implemented from scratch using HTML and CSS (no external CSS frameworks or JavaScript libraries).
- Fonts are system fonts, and any icons/images were created by us or included as static assets.


