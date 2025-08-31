<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Vektor Solutions Landing Page

A modern, responsive landing page for Vektor Solutions built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Elements**: Canvas-based particle animations and hover effects
- **Performance Optimized**: Built with Vite for fast development and production builds
- **TypeScript**: Full type safety and better development experience

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/aleekaay1/veksoldev.git
cd veksoldev
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository: `aleekaay1/veksoldev`
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## 🔧 Configuration

The project includes a `vercel.json` file with optimal settings:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- SPA routing support

## 📁 Project Structure

```
veksoldev/
├── src/
│   ├── components/          # React components
│   │   ├── animations/      # Animation components
│   │   └── ...             # Other components
│   ├── hooks/              # Custom React hooks
│   ├── types.ts            # TypeScript type definitions
│   ├── constants.tsx       # App constants
│   ├── App.tsx             # Main App component
│   ├── index.tsx           # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── vercel.json            # Vercel configuration
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🌐 Environment Variables

**No environment variables required!** This is a static site with no backend dependencies.

## 🔄 Development Workflow

1. Make changes to your code
2. Test locally with `npm run dev`
3. Commit and push to GitHub:
```bash
git add .
git commit -m "Your commit message"
git push
```
4. Vercel will automatically deploy the changes

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

- **Styling**: Modify `src/index.css` and component styles
- **Content**: Update text content in component files
- **Animations**: Customize particle animations in `src/components/Hero.tsx`
- **Colors**: Update Tailwind theme in `tailwind.config.js`

## 📞 Support

For any issues or questions, please open an issue on GitHub or contact the development team.

---

**Deployed at**: [Your Vercel URL will appear here after deployment]
