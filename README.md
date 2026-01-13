# Local-web
Local website hosting

```md
# Portfolio Website

## Overview
This is a responsive, multi-page personal portfolio website built using vanilla HTML, CSS, and JavaScript.  
It showcases personal information, projects, and includes a fully functional contact form that sends messages directly to email using Formspree — no backend required.

The site is lightweight, accessible, and designed to be deployed on GitHub Pages.

---

## Features
- Multi-page layout (Home, About, Projects, Contact)
- Responsive navigation with mobile menu toggle
- CSS Grid and Flexbox layouts
- Custom CSS variables for consistent theming
- Contact form with real email delivery (Formspree)
- Client-side form validation
- JavaScript interactivity
- GitHub Pages compatible

---

## Project Structure
```
portfolio-site/
├── index.html
├── about.html
├── projects.html
├── contact.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
```

---

## Getting Started

### Clone the Repository
```
git clone https://github.com/YOUR_USERNAME/portfolio-site.git
cd portfolio-site
```

### Run Locally
Open `index.html` in your browser to view the site locally.

> Note: The contact form requires a live deployment (such as GitHub Pages) to send emails.

---

## Contact Form Setup (Formspree)

1. Go to https://formspree.io and create an account
2. Create a new form and copy your Form ID
3. In `contact.html`, update the form action:

```
https://formspree.io/f/meeeqlja
```

Once configured, form submissions will be sent directly to your email.

---

## Deployment (GitHub Pages)

1. Push the project to GitHub
2. Go to Repository Settings → Pages
3. Select the `main` branch and `/ (root)` folder
4. Save the settings

Your site will be available at:
```
https://github.com/Chidubemrichard/Local-web
```

---

## Technologies Used
- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript (ES6)
- Formspree
- GitHub Pages

---

## Future Improvements
- Dark mode with persistence
- Project filtering and search
- Enhanced animations and transitions
- Toast notifications for form feedback
- Migration to React or a static site generator

---

## License
This project is a personal portfolio project and is not licensed for redistribution.
```
