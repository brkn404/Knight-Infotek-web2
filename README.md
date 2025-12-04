# Knight InfoTek Website

Official website for **Knight InfoTek LLC** - The premier US reseller for Knight Global Enterprises.

## 🌐 Website

**Live URL:** https://www.knightinfotek.com

## 🚀 Overview

This is a modern, responsive website built with React, TypeScript, and Vite. It showcases Knight InfoTek's portfolio of behavioral trust infrastructure solutions:

- **Cha-Ching Analytics (CCA)** - Autonomous Compliance Infrastructure
- **BlockchainDNA (BDNA)** - Universal Identity & Provenance
- **ZeroKnight30 (ZK30)** - Advanced Threat Prevention
- **ChainGuardian** - Pre-Block Content Safety

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.1.9
- **Language:** TypeScript 5.6.3
- **Styling:** Tailwind CSS 4.1.14
- **UI Components:** Radix UI
- **Routing:** Wouter 3.3.5
- **Animations:** Framer Motion 12.23.24
- **State Management:** TanStack Query 5.60.5

## 📁 Project Structure

```
Knight_InfoTek/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # Radix UI component library
│   │   │   ├── navbar.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── products.tsx
│   │   │   ├── about.tsx
│   │   │   ├── contact.tsx
│   │   │   └── footer.tsx
│   │   ├── pages/         # Page components
│   │   │   ├── home.tsx
│   │   │   ├── blockchain-dna.tsx
│   │   │   ├── cha-ching-analytics.tsx
│   │   │   ├── zero-knight-30.tsx
│   │   │   └── chain-guardian.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configurations
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # Entry point
│   ├── public/            # Static assets
│   └── index.html        # HTML template
├── attached_assets/       # Images and media files
├── server/               # Backend Express server (optional)
├── shared/               # Shared types and schemas
└── package.json          # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The development server runs on port 5000 by default:

```bash
npm run dev:client
```

Visit `http://localhost:5000` to view the website.

## 📚 Documentation

- **DEPLOYMENT-WORKFLOW.md** - Complete deployment guide and update workflows
- **BLOG-UPDATE-WORKFLOW.md** - How to update blog posts
- **README-DEPLOYMENT.md** - Quick deployment reference
- **QUICK-DEPLOY.md** - Quick VPS deployment steps
- **BLOG-UPDATE-GUIDE.md** - Blog management guide

## 📝 Available Scripts

- `npm run dev` - Start development server (backend + frontend)
- `npm run dev:client` - Start frontend development server only
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type check with TypeScript

## 🎨 Design System

The website uses a dark cyber-enterprise theme with:

- **Primary Color:** Electric Cyan (#00D9FF)
- **Background:** Deep Navy (#0F172A)
- **Typography:** 
  - Display: Rajdhani (headings)
  - Body: Inter (content)

### Key Features

- Fully responsive design
- Dark mode optimized
- Smooth animations with Framer Motion
- Accessible UI components (Radix UI)
- SEO optimized meta tags
- Modern glassmorphism effects

## 📄 Pages

1. **Home** (`/`) - Landing page with hero, products overview, about, and contact
2. **BlockchainDNA** (`/blockchain-dna`) - Platform specification and architecture
3. **Cha-Ching Analytics** (`/cha-ching-analytics`) - Compliance infrastructure details
4. **ZeroKnight30** (`/zero-knight-30`) - Threat prevention platform
5. **ChainGuardian** (`/chain-guardian`) - Content safety for miners and pools

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific configurations:

```env
NODE_ENV=production
VITE_API_URL=https://api.knightinfotek.com
```

### Vite Configuration

The Vite config (`vite.config.ts`) includes:
- React plugin
- Tailwind CSS integration
- Path aliases (`@/`, `@shared/`, `@assets/`)
- Replit plugins (development only)

## 🚢 Deployment

### Production Build

```bash
npm run build
```

The build output will be in `dist/public/`.

### Deployment Options

1. **Static Hosting** (Vercel, Netlify, Cloudflare Pages)
   - Deploy the `dist/public/` directory
   - Configure redirects for SPA routing

2. **Node.js Server**
   - Use the Express server in `server/`
   - Run `npm run build` then `npm start`

3. **CDN/Cloud Storage**
   - Upload `dist/public/` to S3, CloudFront, etc.
   - Configure proper MIME types and caching

## 📱 SEO & Meta Tags

The website includes comprehensive SEO optimization:

- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs
- Meta descriptions and keywords
- Structured data ready

## 🔗 Links & Navigation

All internal links use Wouter for client-side routing. External links open in new tabs where appropriate.

## 📧 Contact Information

Update contact details in:
- `client/src/components/contact.tsx`
- `client/src/components/footer.tsx`

## 🎯 Future Enhancements

- [ ] Contact form backend integration
- [ ] Blog/news section
- [ ] Partner portal login
- [ ] Case studies and testimonials
- [ ] Interactive product demos
- [ ] Multi-language support

## 📄 License

Copyright © 2025 Knight InfoTek LLC. All rights reserved.

---

**Built with ❤️ for Knight Global Enterprises**

