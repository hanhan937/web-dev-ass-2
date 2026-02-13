# sudoku-website


A multi-page, mobile-friendly Sudoku website mock built with **HTML + CSS only** (no JavaScript).  
Deployed with **GitHub Pages**.

## Deliverables
- Website: [https://yiwenhu789.github.io/sudoku-website/]
- Repo: [https://github.com/yiwenhu789/sudoku-website]
- Collaborators：[ Hanhan Guo; Jiaju Zhang; Yiwen Hu]


## How to Run Locally
1. Download or clone this repository
2. Open `index.html` in your browser

## Pages
- Home (`/index.html`)
- Selection (`/selection/`)
- Easy Game 6x6 (`/game-easy/`)
- Hard Game 9x9 (`/game-hard/`)
- Rules (`/rules/`)
- High Scores (`/highscores/`)
- Login (`/login/`)
- Register (`/register/`)

## Project Structure
- `css/common.css` — shared styling used across pages
- Each page is in its own folder with an `index.html` entry file



## Reflection / Writeup

### What was the most challenging piece of this assignment? Did you find it easy or challenging to work with HTML and CSS? How long did this overall assignment take you?
The most challenging part of this assignment was organizing the site structure and getting the relative paths correct across multiple pages. Making sure the navbar links worked consistently from both the root page and nested subpages took extra effort. Another challenge was coordinating as a group while working on shared files, so we had to communicate frequently to avoid merge conflicts or breaking each other’s changes.

Overall, HTML was fairly straightforward, but CSS was more challenging than expected. The hardest parts were building a clean 9×9 grid with clear bold subgrid borders, keeping spacing/alignment consistent, and ensuring the layout still looked good across different screen sizes. The overall assignment took approximately **5 hours per member**.

### What decisions did you make when you made your site mobile friendly?
To make the site mobile-friendly, we used **CSS Grid** and flexible sizing so the layout adapts to smaller screens. We also adjusted the navbar for mobile so it uses space efficiently while staying easy to navigate. Media queries were used to scale text and adjust layout spacing for different screen sizes.

### What did you take into account when you developed the design of your website? Is there anything that you’re particularly proud of?
We focused on a design that is clear, simple, and consistent across all pages. Even though the site is a static mock-up, we wanted it to feel cohesive and easy to navigate. We’re particularly proud of the responsive behavior and the usability of the navigation bar: it stays accessible, highlights the current page, and remains readable on both desktop and mobile using only HTML and CSS.

### Given more time or resources, what additional features would you add to your site in the future?
With more time, we would add full game functionality using JavaScript, including input validation, win detection, and a real timer. We would also support dynamic difficulty selection and allow users to save and resume games. In addition, we would connect login and high score pages to a backend so user progress and scores can be stored and displayed dynamically. Another feature we would add is player statistics (best time, history, average time, streaks).

### How many hours did you spend on this assignment?
Approximately **5 hours per member**.

---

## External Resources / Attributions
- I did not copy any code directly from online sources.
- The layout and styling were implemented from scratch using HTML and CSS (no external CSS frameworks or JavaScript libraries).
- Fonts are system fonts, and any icons/images were created by us or included as static assets.



