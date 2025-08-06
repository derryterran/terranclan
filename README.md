# TerraClan - Derry Liandana Portfolio

A modern, responsive portfolio website built with React.js for Derry Liandana, showcasing his experience as a Principal Engineer, Software Architect, and Integration Expert.

## Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive UI**: Smooth animations and transitions
- **Dynamic Content**: React-based components for easy updates
- **Accessibility**: Built with web accessibility in mind
- **Performance Optimized**: Fast loading and rendering

## Technologies Used

- React.js
- CSS3 with modern features
- Font Awesome icons
- Intersection Observer API for scroll animations
- Local Storage for theme persistence

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/terranclan.git
   cd terranclan
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Building for Production

To create a production build:

```
npm run build
```

This will create an optimized build in the `build` folder that can be deployed to any static hosting service.

## Project Structure

```
terranclan/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Competencies.js
│   │   ├── Experience.js
│   │   ├── TechStack.js
│   │   ├── Education.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Loader.js
│   │   ├── ScrollToTop.js
│   │   └── ThemeToggle.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Customization

To customize the portfolio for your own use:

1. Update personal information in each component
2. Modify the color scheme in App.css
3. Replace content in components with your own details
4. Add or remove sections as needed

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for the icons
- Google Fonts for the typography
- React.js community for the amazing tools and libraries