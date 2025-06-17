# Counter App

A simple and elegant React counter application built with Vite and styled with Tailwind CSS.

## 🌟 Features

- **Increment Counter**: Add 1 to the current count
- **Decrement Counter**: Subtract 1 from the current count (prevents negative values)
- **Reset Counter**: Reset the count back to 0
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, gradient background with smooth animations and hover effects

## 🚀 Demo

The app displays a counter with three action buttons:
- **+** (Green): Increases the count by 1
- **Reset** (Gray): Resets the count to 0
- **−** (Red): Decreases the count by 1 (minimum value is 0)

## 🛠️ Technologies Used

- **React 19.1.0** - Frontend framework
- **Vite 6.3.5** - Build tool and development server
- **Tailwind CSS 4.1.10** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd counter-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 📁 Project Structure

```
counter-app/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles (Tailwind imports)
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## 🎨 Styling

The app uses Tailwind CSS for styling with:
- Gradient background from blue to indigo
- Rounded corners and shadows for modern card design
- Responsive button layout (stacked on mobile, row on desktop)
- Smooth transitions and hover effects
- Color-coded buttons for intuitive user interaction

## 🔧 Configuration

The project is configured with:
- **Vite** for fast development and building
- **Tailwind CSS** via the new Vite plugin
- **ESLint** with React-specific rules
- **React Strict Mode** for additional development checks
