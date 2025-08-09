# 🚀 Netlify Deployment Guide for Motherly Care Children's Home

## 📋 Prerequisites

1. **GitHub Repository**: Your code should be in a GitHub repository
2. **Netlify Account**: Sign up at [netlify.com](https://netlify.com)
3. **Domain**: `motherlycarechildrenshome.org` (you'll need to configure this)

## 🔧 Deployment Steps

### 1. Connect to Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "New site from Git"
3. Choose GitHub and authorize Netlify
4. Select your repository: `MCCH-WEBSITE-1`

### 2. Configure Build Settings

Netlify will auto-detect these settings from `netlify.toml`:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `18`

### 3. Deploy

1. Click "Deploy site"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be available at: `https://random-name.netlify.app`

## 🌐 Custom Domain Setup

### 1. Add Custom Domain

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter: `motherlycarechildrenshome.org`
4. Click **Verify**

### 2. DNS Configuration

You'll need to configure DNS with your domain provider:

#### Option A: Netlify DNS (Recommended)
1. In Netlify, go to **Domain management**
2. Click **Add DNS zone**
3. Follow the instructions to point your domain to Netlify

#### Option B: External DNS
Add these DNS records with your domain provider:

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: motherlycarechildrenshome.org
```

### 3. SSL Certificate

1. Netlify will automatically provision an SSL certificate
2. This may take up to 24 hours
3. Your site will be available at `https://motherlycarechildrenshome.org`

## 📁 Files Created for Deployment

### Core Configuration
- `netlify.toml` - Main Netlify configuration
- `public/_redirects` - URL redirects and SPA routing
- `public/_headers` - Security and caching headers

### SEO & Performance
- `public/robots.txt` - Search engine crawling instructions
- `public/sitemap.xml` - Site structure for search engines
- `public/site.webmanifest` - PWA capabilities
- `public/browserconfig.xml` - Windows tile configuration

## 🔒 Security Features

The deployment includes:

- **Security Headers**: XSS protection, content type options
- **CSP**: Content Security Policy for enhanced security
- **HTTPS**: Automatic SSL certificate
- **Caching**: Optimized caching for static assets

## 📊 Performance Optimizations

- **Asset Caching**: 1-year cache for static files
- **Image Optimization**: Optimized caching for gallery images
- **Preconnect**: Faster font loading
- **Compression**: Automatic gzip compression

## 🔄 Continuous Deployment

Once connected:
- **Automatic deploys** on every push to `main` branch
- **Preview deploys** for pull requests
- **Branch deploys** for feature branches

## 📱 PWA Features

Your site includes Progressive Web App features:
- Installable on mobile devices
- Offline capabilities (basic)
- App-like experience

## 🐛 Troubleshooting

### Build Failures
1. Check Node.js version (should be 18+)
2. Ensure all dependencies are in `package.json`
3. Check build logs in Netlify dashboard

### Domain Issues
1. DNS propagation can take up to 48 hours
2. Ensure DNS records are correct
3. Check domain verification status

### Performance Issues
1. Check image sizes in `/gallery/`
2. Optimize images if needed
3. Monitor Core Web Vitals in Google Search Console

## 📈 Post-Deployment

### 1. Google Search Console
1. Add your domain to Google Search Console
2. Submit the sitemap: `https://motherlycarechildrenshome.org/sitemap.xml`
3. Monitor search performance

### 2. Analytics
Consider adding:
- Google Analytics 4
- Google Tag Manager
- Facebook Pixel (for donations)

### 3. Monitoring
- Set up uptime monitoring
- Configure error tracking
- Monitor Core Web Vitals

## 🎯 Success Checklist

- [ ] Site deploys successfully
- [ ] Custom domain works
- [ ] SSL certificate is active
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Contact forms work
- [ ] SEO meta tags are correct
- [ ] Sitemap is accessible
- [ ] Robots.txt is working
- [ ] Social sharing works

## 📞 Support

If you encounter issues:
1. Check Netlify documentation
2. Review build logs
3. Contact Netlify support
4. Check GitHub issues for similar problems

---

**Your site will be live at: https://motherlycarechildrenshome.org** 🎉
