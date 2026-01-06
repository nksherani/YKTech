# Deployment Guide for YK Tech Solutions Website

## Quick Start

Your website is now running! You can view it at: **http://localhost:5173**

## What's Included

✅ **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
✅ **Smooth Animations** - Professional animations using Framer Motion
✅ **Modern UI** - Clean, professional design with Tailwind CSS
✅ **SEO Optimized** - Proper meta tags and semantic HTML
✅ **Contact Form** - Ready-to-use contact form (needs backend integration)
✅ **All Sections Complete**:
   - Hero section with animated background
   - Services showcase (4 main service categories)
   - About section with company info
   - Contact section with form and details
   - Professional footer

## Service Categories Included

### 1. Agentic AI Solutions
- Technologies: OpenAI, Azure AI, MCP, Zapier, n8n
- Target Industries: Insurance, Audit Firms, E-commerce

### 2. Cloud Services & Integration
- Technologies: Azure, AWS, Cloud Migration, DevOps
- Target Industries: Enterprise, Startups, SMBs

### 3. Custom Software Development
- Technologies: .NET, Node.js, Python, React, Next.js
- Target Industries: All Industries

### 4. Microsoft Power Platform
- Technologies: Power Apps, Power Automate, Dynamics 365, Power BI
- Target Industries: Enterprise, Manufacturing, Retail

## Contact Information (Already Configured)

- **Address**: 1208 New Territory Blvd, Sugar Land, Texas 77479, US
- **Phone**: +1 (713) 377-1715
- **Email**: customersuccess@yk-techsolutions.com

## Next Steps

### 1. Test the Website
```bash
# Already running at http://localhost:5173
# Navigate through all sections and test the contact form
```

### 2. Customize Content (Optional)
- Update service descriptions in `src/components/Services.tsx`
- Modify company info in `src/components/About.tsx`
- Adjust hero text in `src/components/Hero.tsx`

### 3. Integrate Contact Form
The contact form currently shows an alert. To make it functional:

**Option A - Email Service (Recommended)**
```bash
npm install emailjs-com
```
Then update `src/components/Contact.tsx` with EmailJS configuration.

**Option B - Backend API**
Create your own API endpoint and update the `handleSubmit` function in `Contact.tsx`.

**Option C - Use Form Service**
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Getform](https://getform.io/)

### 4. Add Real Images (Optional)
Replace placeholder gradients with real images:
- Add images to `/public/images/` directory
- Update components to use real image paths

### 5. Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 3: GitHub Pages
```bash
npm install -D gh-pages
```

Add to package.json:
```json
"homepage": "https://yourusername.github.io/YKTech",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then deploy:
```bash
npm run deploy
```

### Option 4: Custom Server (VPS/Cloud)
1. Build the project: `npm run build`
2. Upload the `dist` folder to your server
3. Configure Nginx or Apache to serve the static files
4. Point your domain to the server

## Domain Configuration

Once deployed, you'll need to:
1. Purchase a domain (e.g., yk-techsolutions.com)
2. Update DNS settings to point to your hosting
3. Configure SSL certificate (most hosting providers offer free SSL)

## Performance Tips

✅ Already optimized with Vite
✅ Code splitting enabled
✅ Lazy loading for components
✅ Optimized animations
✅ Responsive images ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or change port
npm run dev -- --port 3000
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Support

For any questions or issues, contact:
- Email: customersuccess@yk-techsolutions.com
- Phone: +1 (713) 377-1715

## License

© 2025 YK Tech Solutions. All rights reserved.

