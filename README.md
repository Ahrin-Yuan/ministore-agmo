# Minimal MiniStore

🔗 **Live Demo:** [ministore-agmo.vercel.app](https://ministore-agmo.vercel.app)

**MiniStore** is a simple, responsive storefront web application built with **React.js** and **plain CSS**.  
It showcases modern frontend development practices including **modular component architecture**, **React Router navigation**, and **mimicked API integration** from a local `products.json` file, designed with accessibility and responsiveness in mind.


---

## Project Overview
### Architecture Overview

| Key Design Aspects | Description |
|--------------------|-------------|
| **Architecture** | Component-based React app using hooks for state and effects. |
| **Routing** | React Router ie. (`Routes`, `Route`, `Link`, `Outlet`, `Navigate`, `useParams`). |
| **Styling** | Plain CSS (no frameworks). |
| **Data Source** | Local `products.json` simulating API calls with delay. |
| **Data Persistence** | `localStorage` for cart and theme (light/dark). |
| **Accessibility** | Semantic HTML, ARIA roles, focus styles, and logical tab order. |
| **Responsiveness** | Optimized for screens 360px and wider. |

### Features

| Feature | Description |
|----------|--------------|
|  **Browse Products** | View a grid of product cards (emoji, title, price). |
|  **Search & Filter** | Filter by text, category, and price range. |
|  **Product Detail Page** | Shows full details (description, category, emoji, price). |
|  **Cart Management** | Add/remove items, update quantity, and calculate subtotal. |
|  **Persistence** | Cart and theme stored in browser `localStorage`. |
|  **Theming** | Light/Dark mode toggle saved between sessions. |
|  **Routing** | `/` (Home) and `/product/:id` (ProductDetail) routes with React Router. |
|  **Accessibility** | ARIA roles, focus styles, and logical tab navigation. |
|  **Responsiveness** | Works seamlessly across mobile and desktop. |

---

## Setup & run commands
### MiniStore - Tech Stack

- **React** 19.1.1
- **React DOM** 19.1.1
- **React Router** 7.9.4
- **Vite** 

### Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

### Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/Ahrin-Yuan/ministore-agmo.git
cd ministore-agmo
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Run the Development Server

```bash
npm run dev
```

The application will start at [http://localhost:5173](http://localhost:5173) (Vite's default port).

**To use a custom port:**

```bash
npm run dev -- --port 8080
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the app for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |

### Deployment

#### Deploying to Vercel

1. **Push to GitHub**
   - Ensure your repository is pushed to GitHub (public or private)

2. **Import to Vercel**
   - Sign in to [Vercel](https://vercel.com)
   - Click **Import Project** and select your GitHub repository

3. **Zero-Configuration Setup**
   - **Framework Preset:** When you push new code to your linked Git repository, *Vercel automatically detects your framework*, builds and deploys the changes to a new, live version of your website.

4. **Set Environment Variable**
   - Add the following environment variable in Vercel:
     ```
     VITE_BASE_PATH = ./
     ```
   - This ensures the app serves correctly from the root domain.

5. **Deploy**
   - Click **Deploy** and Vercel will automatically build and deploy your app.
   - Future pushes to your connected branch will trigger automatic deployments.

#### Deployment Notes

In `vite.config.js`, I've defined:
```
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/task-tracker-webby/',
});
```
##### Purpose: Allow app to build correctly across different hosting environments
- **When running locally or on GitHub Pages**: The `vite.config.js` includes a `base` path configuration that defaults to `/task-tracker-webby/` (subdirectory deployments).
- **When deploying on Vercel**: Set `VITE_BASE_PATH` =  value `(./)` in Environment Variable. 
    - `/task-tracker-webby/` is overrided by `(./)` for root-level deployments (like Vercel). 
    - Vercel uses the environment variable `(./)` you set, ensuring correct relative asset paths.

-> This flexible setup allows deployment to both root domains and subdirectories without code changes.


### Troubleshooting

#### Missing Scripts Error

If you encounter missing script errors, verify your `package.json` contains:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

#### Port Already in Use

If port 5173 is occupied, Vite will automatically try the next available port, or you can specify a custom port, for example:

```bash
npm run dev -- --port 8888
```


---


## Assumptions & Trade-offs

| Aspect | Assumption / Decision | Trade-off / Limitation |
|--------|-----------------------|------------------------|
| **Data Fetching** | Assumed a static product list is enough, so used local `products.json` with simulated delay. | No real API calls; can’t demonstrate async error handling or server updates. |
| **Data Persistence** | Assumed users shop from one device, so used `localStorage` for cart and theme as temporary solution to save/load data from Browser Storage. | No cross-device sync; not embodying offline-first architecture. |
| **Styling** | Used plain CSS for simplicity and control. | Slower to style compared to utility-first frameworks. |
| **Testing** | Skipped test setup to focus on working features. | No automated test coverage despite having testable logic. |
| **Accessibility** | Used emojis as substitute for images; applied `role="img"` and ARIA attributes for screen readers. | Limited support for screen readers versus real images with alt text. |
| **Performance** | Optimized for clarity, not speed. | Lacks lazy-loading or code-splitting optimizations. |


---

## What I’d Do With More Time

| Area | Improvement |
|------|--------------|
| **TypeScript Implementation** | Convert React.js to Typescript. Add type safety with interfaces for product, cart, and API response. |
| **Testing** | Implement unit and component tests (using Jest + React Testing Library) for filter logic, cart operations, and rendering of product cards/details. |
| **Performance** | Enable image and component lazy-loading, optimize bundle size, and improve Core Web Vitals for faster initial load. |
| **Modularity** | Further break down components into smaller, reusable pieces and extract logic into custom hooks. |
| **Theming** | Improvise light/dark themes and add custom theme options. |
| **Offline-first** | Introduce a Service Worker to cache static assets (HTML, CSS, JS, and products.json) so the app remains functional even when offline. |
| **Internationalization (i18n)** | Add language support (e.g., English + one additional language toggle). |

---

## Time Spent & Priorities

| Category | Details |
|-----------|----------|
| **Total Time Spent** | ~Est 10-15 hours (one full day). |
| **Main Priorities** | Clean architecture, responsive UI, working functional logic, building intuitive UI interfaces and persistent state. |
| **Focus Areas** | User experience, accessibility, and modular React components. |

---

## AI Assistance Transparency

| Tool Used | Purpose |
|------------|----------|
| **ChatGPT, Copilot, Claude** | Used for guidance, optimization, and feedback. Helped improve modularity, readability, and code organization. Improve my coding intuition and consider building intuitive layout based from user's experience. |

All structural architecture, integration decisions, and code implementation were **done manually** by me. AI assistance served as a **supporting tool** for improving workflow efficiency, enhance code readability and maintaining clean architecture.



## Author

- Ahrin @ Irene
