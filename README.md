# Abhishek Kumar | Frontend Portfolio

A premium, performance-driven personal portfolio built with **React.js**, **Vite**, and **Vanilla CSS**. This project features a modular, component-based architecture with custom animations and a refined aesthetic.

## 🚀 Key Features

- **Component-Based Architecture**: Fully modularized into reusable React components for maintainability.
- **Premium Animations**:
  - **Text Splitting**: Character-by-character reveal animations for hero text and section titles.
  - **Scroll Reveal**: Sections fluidly animate into view using intersection observers.
  - **Custom Cursor**: A sophisticated ring-and-dot cursor that follows mouse movements.
- **Project Slider**: Interactive carousel for showcasing selected work with smooth transitions.
- **AI Chatbot Integration**: Floating action button and dedicated links to an AI-powered assistant.
- **Environment Variable Support**: Securely manage contact details and external links via `.env`.
- **Responsive Design**: Fully optimized for and tested on all device sizes.

## 🛠️ Technology Stack

- **Framework**: [React.js](https://reactjs.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (CSS3)
- **State Management**: React Hooks (useState, useEffect, useMemo)
- **Deployment**: Vercel

## 📦 Project Structure

```text
/src
  /components     # Reusable UI components (Nav, Hero, Projects, etc.)
  /data           # Centralized portfolio data (portfolioData.js)
  /hooks          # Custom React hooks (useReveal, useCursor)
  index.css       # Global styles and animation keyframes
  main.jsx        # Entry point
```

## ⚙️ Getting Started

### 1. Installation

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory and add your details:

```env
VITE_USER_EMAIL=your@email.com
VITE_USER_PHONE=your-phone
VITE_USER_LINKEDIN=your-linkedin-handle
VITE_USER_GITHUB=your-github-handle
VITE_CHAT_LINK=your-chatbot-url
```

### 3. Development

```bash
npm run dev
```

## 📄 License

© 2026 Abhishek Kumar. Created with ❤️ for a professional frontend showcase.
