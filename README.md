
# 211kamee.github.io – My Portfolio Site

**Welcome to my personal portfolio website**, built with TypeScript and Next.js, showcasing my projects, skills, and web development work.

##  Repository Structure

```
211kamee.github.io/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Next.js page components
│   └── styles/          # Global and component-level styles
├── .gitignore
├── components.json      # (Optional) component config or listing
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Project metadata & dependencies
├── package-lock.json    # Exact dependency versions
├── postcss.config.mjs   # PostCSS processing setup
├── tsconfig.json        # TypeScript configuration
└── README.md            # You are here!
```

##  Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/211kamee/211kamee.github.io.git
   cd 211kamee.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser to view the site.

##  GSAP Animations & Preloader Component

All GSAP-based animations are contained within and maintained in the **Preloader** component. This component is responsible for initial loading animations that enhance user experience, and it’s the central place where GSAP setup and animation logic live.

If you're looking to modify or extend GSAP animations, start with the code in:

```
src/components/Preloader.jsx (or .tsx)
```

Inside this component, you’ll find:

- **GSAP imports** (e.g., `import { gsap } from "gsap";`)
- **Animation timelines** and sequences
- Hooks or lifecycle methods like `useEffect` to trigger animations

Maintaining all GSAP logic within this component helps to keep animation concerns modular and easy to update.

##  Scripts

Here are the key npm scripts defined in `package.json`:

| Script       | Description                   |
|--------------|-------------------------------|
| `dev`        | Starts the Next.js dev server |
| `build`      | Builds the production version |
| `start`      | Runs the production build     |
| `lint`       | Lints the project             |

Use `npm run <script-name>` to execute any of these.

##  Technologies Used

- **TypeScript** — Strongly typed JavaScript
- **Next.js** — React framework with SSR and static generation
- **PostCSS** — Modern CSS tooling
- **ESLint** — Linting and code quality
- **GSAP** — JavaScript animation platform (within Preloader)

##  Deployment

This project is deployed via GitHub Pages and available at: [kamee.pages.dev](https://kamee.pages.dev)

Any push to `main` will automatically build and deploy updates (assuming a configured workflow or GitHub Pages setup is in place).

##  Contributing

While this is a personal portfolio, I welcome feedback! Feel free to open an issue or pull request if you spot typos, layout glitches, or have animation ideas.

##  License

This repository is open-source under the [MIT License](LICENSE) (if applicable).

---

###  Summary of Key Highlights

- This is a **Next.js + TypeScript** powered portfolio site.
- **GSAP animations** are neatly encapsulated in the **Preloader component** — your go-to for any animation work.
- Features standard scripts: `dev`, `build`, `start`, `lint`.
- Deployed and viewable at **kamee.pages.dev**.
