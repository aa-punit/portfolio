# GitHub Pages Deployment Guide

## Quick Setup Steps:

### 1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `portfolio-website` (or your desired name)
   - Description: "My Portfolio"
   - **Keep it Public**
   - Do NOT initialize with README, .gitignore, or license

### 2. **Push Code to GitHub**
```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Add remote (replace username and repo name)
git remote add origin https://github.com/aa-punit/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. **Enable GitHub Pages in Repository Settings**
   - Go to your repository on GitHub
   - Settings → Pages (left sidebar)
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main" (or your branch) and "/root" folder
   - Click Save
   - Wait 2-5 minutes for deployment

### 4. **Verify Deployment**
   - Your site will be available at: `https://aa-punit.github.io/portfolio-website/`
   - Check "Deployments" tab in GitHub for status

## Troubleshooting:

**If site shows 404:**
- ✅ Verify index.html is in the root directory (it is)
- ✅ Check that repository is PUBLIC
- ✅ Ensure GitHub Pages is enabled
- ✅ Wait a few minutes - deployment takes time

**If assets don't load:**
- Your relative paths `assets/css/style.css` are correct for project pages
- Make sure all files are committed and pushed

**If custom domain issues:**
- You don't need a custom domain for basic deployment
- The default GitHub Pages URL works fine

## Current Status:
✅ Project is now a git repository
✅ .gitignore created
✅ File structure is correct
✅ Ready to push to GitHub!
