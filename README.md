# Lucy Pets 🐾

A vibrant, fully responsive React-based landing page built from a premium Figma design for the modern pet care facility. This application features dynamic brand styling, an engaging multi-section layout (Services, Groomers, Shop, and more), interactive CSS-masked elements, and highly organized React component architecture.

## 🚀 Live Demo

[Host this project on Vercel and paste your live deployment URL here!]

## ✨ Features

- **Pixel-Perfect Responsive UI:** Built utilizing Bootstrap flex grids alongside extensive custom CSS overrides for stunning multi-device visual consistency.
- **Custom Brand Aesthetics:** Custom curved footers, unique image framing with CSS dashes and clipping paths, and perfectly blended maps!
- **Handcrafted Iconography:** Integrates custom SVG icons (like the unique `PawHeartIcon`) utilizing advanced `mask-image` masking to accurately render vector shapes using dynamic CSS color variables.
- **Dynamic Groomer Styling:** Automatically applies specific styles depending on staff roles (such as the distinctive purple outline for the founder card).
- **Single Page Application:** Extremely fast single-page scrolling structure built out of modular React elements.

## 📁 Repository Structure

- `/public`: Contains the source assets including `nav-logo.png`, `footer-logo.png`, `about-collage.png`, and the custom `paw.png` mask image.
- `/src/components`: Breaking the page down into functional layers:
  - `Navbar.js` & `Footer.js` — Core navigation wrapping.
  - `Hero.js` — The vibrant header splash layer with full layout images.
  - `About.js`, `Services.js`, `Groomers.js`, `Testimonials.js`, `FoodToys.js` — Sectional feature blocks.
- `/src/App.css` — Global typography, custom curves (`clip-path: ellipse`), image masking wrappers, responsive overrides, and all branding magic.

## 🔨 Running Locally

1. Clone this repository locally.
2. In the repository folder, install the necessary dependencies:
```bash
npm install
```
3. Boot up the local development server:
```bash
npm start
```
4. Access the site in your browser seamlessly over `http://localhost:3000`.

## 🌐 Deploying to Vercel

This application has been meticulously stripped of unneeded boilerplate templates making it extremely lightweight and perfectly optimized for effortless CI/CD.
1. Commit the full project and push it to a new GitHub repository.
2. Log into [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your GitHub repository.
4. Keep all automatic defaults (`Create React App`) and click **Deploy**.
5. Within 60 seconds, your site is fully live globally!

## 🖌️ Authors

Design faithfully converted and engineered by your friendly AI assistant.
