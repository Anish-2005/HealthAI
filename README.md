# 🏥 HealthAI - Intelligent Healthcare Platform

![HealthAI Banner](https://img.shields.io/badge/HealthAI-Intelligent%20Healthcare-green?style=for-the-badge&logo=heart&logoColor=white)

**Live Demo:** [https://health-ai-in.vercel.app](https://health-ai-in.vercel.app)

> *A comprehensive healthcare platform powered by AI, offering personalized health insights, emergency support, and virtual consultations. This project represents a complete rework of my first hackathon submission, implementing advanced skills and technologies learned throughout the year.*

## 👨‍💻 About the Developer

**Anish Seth** - Computer Science and Business Systems Student  
*This project showcases the evolution of my development skills from my first hackathon to implementing professional-grade technologies and best practices.*

---

## 🌟 Overview

HealthAI is a modern, responsive healthcare platform that bridges the gap between patients and healthcare providers through intelligent AI-powered features. Built with React.js and modern web technologies, it offers a seamless experience across all devices with comprehensive health management tools.

### 🎯 Key Features

- **🤖 AI Health Advisor** - Personalized health insights powered by advanced AI algorithms
- **🚨 Emergency Support** - Immediate assistance during medical emergencies with one-tap access
- **👩‍⚕️ Virtual Consultations** - Connect with certified doctors through secure video calls
- **📱 Symptom Tracker** - Monitor symptoms over time and receive actionable insights
- **🔐 Secure Authentication** - Firebase-powered authentication with Google sign-in
- **🌙 Dark Mode Support** - Complete theme switching with smooth transitions
- **📊 Health Dashboard** - Comprehensive health analytics and progress tracking

---

## 🛠️ Technology Stack

### Frontend
- **React.js 19.1.0** - Modern component-based UI framework
- **Vite 7.0.0** - Next-generation frontend build tool
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Framer Motion 12.20.1** - Production-ready motion library for React

### UI & Icons
- **Lucide React** - Beautiful & consistent icon set
- **Responsive Design** - Mobile-first approach with smooth animations

### Backend & Authentication
- **Firebase 11.10.0** - Authentication, hosting, and backend services
- **Google Auth** - Secure OAuth2 authentication flow

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes
- **React Router DOM 7.6.3** - Client-side routing

---

## 📁 Project Structure

```
HealthAI/
├── public/                    # Static assets
│   ├── anish.jpg             # Team member photos
│   ├── anubhab.jpg
│   ├── anushka.jpg
│   ├── rajarshi.jpg
│   ├── logo.png.png          # App logo
│   └── vite.svg
├── src/
│   ├── components/           # Reusable components
│   │   ├── Footer.jsx
│   │   ├── LandingFooter.jsx
│   │   ├── LandingNavbar.jsx
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx # Route protection
│   ├── pages/                # Main application pages
│   │   ├── About.jsx         # About page
│   │   ├── Advice.jsx        # AI health advice
│   │   ├── Emergency.jsx     # Emergency support
│   │   ├── Help.jsx          # Help & support
│   │   ├── Home.jsx          # Main dashboard
│   │   ├── Landing.jsx       # Landing page
│   │   ├── Login.jsx         # Authentication
│   │   ├── Partner.jsx       # Partnership info
│   │   ├── Signup.jsx        # User registration
│   │   └── Team.jsx          # Team information
│   ├── assets/               # Static assets
│   ├── App.jsx               # Main app component
│   ├── App.css               # Global styles
│   ├── firebase.js           # Firebase configuration
│   ├── index.css             # Base styles
│   └── main.jsx              # Application entry point
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── vercel.json               # Vercel deployment config
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anish-seth/healthai.git
   cd healthai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173` to view the application.

---

## 📱 Features Deep Dive

### 🏠 Landing Page
- **Hero Section** with animated backgrounds and call-to-action
- **Feature Showcase** with interactive carousels
- **Statistics Display** with animated counters
- **Testimonials** from healthcare professionals and patients
- **Responsive Design** optimized for all devices

### 🔐 Authentication System
- **Email/Password Login** with form validation
- **Google OAuth Integration** for quick sign-up
- **Protected Routes** for secure access to features
- **Persistent Sessions** with localStorage

### 🤖 AI Health Advisor
- **Symptom Input Interface** with natural language processing
- **Personalized Recommendations** based on user input
- **Loading States** with smooth animations
- **Response Display** with formatted health advice

### 🚨 Emergency Support
- **One-Click Emergency** access with clear visual indicators
- **Emergency Contacts** integration
- **Location Services** for emergency response
- **Critical Information** display

### 👥 Team Section
- **Team Member Profiles** with photos and roles
- **Social Media Integration** with direct links
- **Professional Information** display
- **Responsive Grid Layout**

---

## 🎨 Design System

### Color Palette
- **Primary Green:** `#22C55E` - Health and vitality
- **Secondary Green:** `#16A34A` - Trust and growth
- **Background Light:** `#E4F2CE` - Soft, calming presence
- **Text Dark:** `#2E312A` - Professional readability
- **Dark Mode:** `#111827` with green accents

### Typography
- **Headers:** Bold, modern fonts for impact
- **Body Text:** Clean, readable font families
- **Interactive Elements:** Consistent sizing and spacing

### Animations
- **Framer Motion** powered smooth transitions
- **Hover Effects** for interactive elements
- **Page Transitions** for seamless navigation
- **Loading States** with engaging animations

---

## 🔧 Configuration Files

### Vite Configuration
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### ESLint Configuration
- React hooks rules for best practices
- Modern JavaScript linting
- Import/export validation

### Tailwind CSS
- Custom color schemes
- Responsive breakpoints
- Dark mode support
- Custom animations

---

## 🚀 Deployment

### Vercel Deployment
The application is deployed on Vercel with the following configuration:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

### Build Process
```bash
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Code quality check
```

---

## 🧪 Testing & Quality Assurance

### Code Quality
- **ESLint** for code consistency
- **React best practices** implementation
- **Component modularity** for maintainability
- **Responsive design** testing across devices

### Performance Optimizations
- **Vite** for fast development and building
- **Code splitting** with React Router
- **Image optimization** for faster loading
- **CSS optimization** with Tailwind purging

---

## 🔮 Future Enhancements

### Planned Features
- [ ] **Real AI Integration** with healthcare APIs
- [ ] **Video Calling** for virtual consultations
- [ ] **Health Data Tracking** with charts and analytics
- [ ] **Medication Reminders** with notifications
- [ ] **Multi-language Support** for accessibility
- [ ] **Progressive Web App** (PWA) capabilities
- [ ] **Offline Mode** for emergency access
- [ ] **Integration with Wearables** for health monitoring

### Technical Improvements
- [ ] **Unit Testing** with Jest and React Testing Library
- [ ] **E2E Testing** with Cypress
- [ ] **API Integration** with real healthcare services
- [ ] **Database Integration** for user data persistence
- [ ] **Real-time Features** with WebSocket connections

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

**Anish Seth**
- 📧 Email: anish.seth@example.com
- 💼 LinkedIn: [Anish Seth](https://www.linkedin.com/in/anish-seth-202200290/)
- 📸 Instagram: [@anish_seth.ai](https://www.instagram.com/anish_seth.ai/)

---

## 🙏 Acknowledgments

- **Team Members:** Rajarshi Chatterjee, Anushka Adak, Anubhab Das
- **Technologies:** React.js, Firebase, Tailwind CSS, Framer Motion
- **Inspiration:** Modern healthcare platforms and AI-driven solutions
- **Learning Journey:** From first hackathon to professional development

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=flat&logo=Firebase&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

</div>