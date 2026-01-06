# YK Tech Solutions Website

A professional, modern website for YK Tech Solutions built with React, Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **React + TypeScript**: Type-safe, component-based architecture
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth, professional animations and transitions
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- **React 19**: Latest version of React
- **Vite**: Lightning-fast build tool
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icon library

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🏃‍♂️ Getting Started

### Installation

1. Clone the repository (if you haven't already):
```bash
git clone <your-repo-url>
cd YKTech
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
YKTech/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Services.tsx     # Services showcase
│   │   ├── About.tsx        # About section
│   │   ├── Contact.tsx      # Contact form and info
│   │   └── Footer.tsx       # Footer
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite config
├── tailwind.config.js      # Tailwind config
└── postcss.config.js       # PostCSS config
```

## 🎨 Customization

### Colors

The primary color scheme is defined in `tailwind.config.js`. You can customize the colors by modifying the `primary` color palette.

### Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **Services**: Edit `src/components/Services.tsx`
- **About**: Edit `src/components/About.tsx`
- **Contact**: Edit `src/components/Contact.tsx`
- **Footer**: Edit `src/components/Footer.tsx`

### Contact Information

Update the contact information in:
- `src/components/Contact.tsx` - Contact form and details
- `src/components/Footer.tsx` - Footer contact info

## 🌐 Sections

### Home
- Eye-catching hero section with animated background
- Call-to-action buttons
- Key statistics

### Services
- **Agentic AI Solutions**: OpenAI, Azure AI, MCP, Zapier, n8n
- **Cloud Services**: Azure, AWS cloud solutions
- **Custom Software Development**: .NET, Node.js, Python, React, Next.js
- **Microsoft Power Platform**: Power Apps, Power Automate, Dynamics 365, Power BI

### About
- Company overview
- Core values
- Team statistics

### Contact
- Contact form
- Location, phone, and email information
- Business hours
- Interactive map-ready (link to Google Maps)

## 📧 Contact Information

- **Address**: 1208 New Territory Blvd, Sugar Land, Texas 77479, US
- **Phone**: +1 (713) 377-1715
- **Email**: customersuccess@yk-techsolutions.com

## 🚢 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to package.json scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

## 📝 License

This project is proprietary and confidential.

## 🤝 Support

For support, email customersuccess@yk-techsolutions.com or call +1 (713) 377-1715.

