# Daiyong Kim - Portfolio Website

A modern, Apple-inspired portfolio website showcasing 10+ years of Android development expertise. Built with React, Vite, and Tailwind CSS for optimal performance and stunning visuals.

## 🚀 Features

- **Modern Design**: Apple-inspired aesthetics with smooth animations
- **Responsive**: Perfect on all devices - mobile, tablet, and desktop
- **Performance Optimized**: Built with Vite for lightning-fast load times
- **Interactive Elements**: Engaging micro-interactions and hover effects
- **Scalable Architecture**: Well-organized component structure for future expansion
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant design patterns

## 🛠 Tech Stack

- **Frontend**: React 18+ with modern hooks
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and optimized builds
- **Animations**: CSS animations with Intersection Observer API

## 📁 Project Structure

```
portfolio-dykim/
├── src/
│   ├── components/
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Badge.jsx
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/         # Page sections
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Experience.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       └── Contact.jsx
│   ├── data/
│   │   └── portfolio.js      # Portfolio data and content
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── utils/
│   │   └── animations.js     # Animation utilities
│   ├── assets/              # Static assets
│   └── styles/             # Global styles and Tailwind config
└── public/                 # Public assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#0ea5e9 to #0369a1)
- **Accent Green**: #34d399
- **Accent Purple**: #a855f7
- **Accent Orange**: #fb923c
- **Gray Scale**: Custom gray palette for text and backgrounds

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI)
- **Font Features**: Optimized for readability with proper kerning

### Components
- **Cards**: Consistent elevation and border radius
- **Buttons**: Multiple variants with hover states
- **Badges**: Color-coded skill and status indicators

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/daiyongkim/portfolio-dykim.git
   cd portfolio-dykim
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Build optimized version
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Design

The portfolio is designed mobile-first with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎯 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Optimized asset loading
- **Lazy Loading**: Intersection Observer for scroll animations
- **Minimal Bundle**: Only essential dependencies included

## 🔧 Customization

### Update Personal Information
Edit `src/data/portfolio.js` to customize:
- Personal details and contact info
- Work experience and achievements
- Skills and technology stack
- Projects and portfolio items

### Modify Design System
Update `tailwind.config.js` for:
- Color palette adjustments
- Typography modifications
- Animation timing and effects

### Add New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/App.jsx`
3. Update navigation in `src/components/layout/Header.jsx`

## 📦 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Netlify
1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Other Platforms
The built files in `dist/` can be deployed to any static hosting service.

## 🧪 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
- ESLint configuration for React best practices
- Consistent component structure and naming
- Proper error boundaries and loading states

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Daiyong Kim**
- Email: daiyong.kim@example.com
- LinkedIn: [linkedin.com/in/daiyongkim](https://linkedin.com/in/daiyongkim)
- GitHub: [github.com/daiyongkim](https://github.com/daiyongkim)

---

Built with ❤️ and lots of coffee ☕
