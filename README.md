# 🚀 Deeptanshu Sanghani - Portfolio

> A modern, interactive portfolio showcasing my journey as a Full-Stack Developer and Backend Engineer

Why 3D animations? I was bored and it looks cooler!

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ About

This portfolio represents my professional journey in software development, featuring my work experience at Ontario Public Services and Intellect Design Arena, along with my technical skills in full-stack development, cloud architecture, and data engineering.

## 🎯 Key Features

- **🎹 Interactive 3D Keyboard**: Custom Spline-powered keyboard showcasing 25+ technical skills with hover interactions
- **💼 Work Experience Showcase**: Carousel-style presentation of professional experience with detailed responsibilities
- **🎨 Smooth Animations**: GSAP and Framer Motion powered scroll-triggered animations and transitions
- **🌌 Space Theme**: Particle effects creating an immersive cosmic environment
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **🌓 Dark/Light Mode**: Seamless theme switching with system preference detection
- **⚡ Performance Optimized**: Built with Next.js 14 for optimal loading and SEO

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **UI Components**: Aceternity UI, Lucide Icons, React Icons

### Animations & 3D
- **GSAP**: Scroll-triggered animations and timeline control
- **Framer Motion**: Component animations and transitions
- **Spline**: Interactive 3D keyboard model

### Tools & Libraries
- **Form Handling**: React Hook Form, Zod validation
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DeeptanshuSanghani1/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

````
portfolio/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── sections/    # Page sections (Hero, Skills, Experience, Contact)
│   │   ├── ui/          # Reusable UI components
│   │   └── header/      # Navigation components
│   ├── data/            # Configuration and content data
│   │   ├── config.ts    # Site configuration
│   │   ├── constants.ts # Skills definitions
│   │   └── experience.tsx # Work experience data
│   └── lib/             # Utility functions
└── public/
    ├── assets/          # Images and media
    └── resume/          # Resume PDF
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/config.ts`:
```typescript
const config = {
  author: "Your Name",
  email: "your.email@example.com",
  // ... other settings
}
```

### Modify Skills

Update `src/data/constants.ts` to add/remove skills and ensure your Spline keyboard object names match the enum values.

### Update Experience

Edit `src/data/experience.tsx` to add your work experience with technologies and responsibilities.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📫 Contact

- **Email**: deeptanshusanghani@gmail.com
- **LinkedIn**: [linkedin.com/in/deeptanshusanghani](https://www.linkedin.com/in/deeptanshusanghani/)
- **GitHub**: [github.com/DeeptanshuSanghani1](https://github.com/DeeptanshuSanghani1)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
