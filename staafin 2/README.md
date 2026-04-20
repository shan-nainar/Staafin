# Staafin HRMS Website

Modern HR Management System website — built for GitHub Pages deployment.

## 📁 Project Structure

```
staafin/
├── index.html              ← Home page
├── images/
│   └── logo.png            ← Staafin logo (do not rename)
├── css/
│   └── style.css           ← All styles
├── js/
│   └── main.js             ← All JavaScript
└── pages/
    ├── features.html       ← Features page
    ├── pricing.html        ← Pricing page
    ├── about.html          ← About page
    └── contact.html        ← Contact page
```

## 🚀 Deploy to GitHub Pages — Step by Step

### Step 1: Create a GitHub Account
Go to [github.com](https://github.com) and sign up (free).

### Step 2: Create a New Repository
1. Click the **+** button → **New repository**
2. Name it: `staafin-website` (or any name you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3: Upload Your Files
**Option A — Drag & Drop (easiest):**
1. In your new repo, click **Add file → Upload files**
2. Drag in ALL files and folders:
   - `index.html`
   - `images/` folder
   - `css/` folder
   - `js/` folder
   - `pages/` folder
3. Click **Commit changes**

**Option B — GitHub Desktop App:**
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Clone your repo locally
3. Copy all project files into the cloned folder
4. Commit & Push

### Step 4: Enable GitHub Pages
1. Go to your repository → **Settings**
2. Click **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Set branch to **main** and folder to **/ (root)**
5. Click **Save**

### Step 5: Your site is live! 🎉
After ~1 minute, your site will be live at:
```
https://YOUR-USERNAME.github.io/staafin-website/
```

## 🌐 Custom Domain (optional)
1. Buy a domain (e.g. `staafin.com`) from Namecheap or GoDaddy
2. In GitHub Pages settings, enter your custom domain
3. Add a CNAME DNS record pointing to `YOUR-USERNAME.github.io`

## ✏️ Making Changes
- Edit any `.html` file to update content
- Edit `css/style.css` to change colours/fonts
- Logo is at `images/logo.png` — replace to update it

## 📧 Contact Form
The contact form currently shows a success animation but doesn't send emails.
To make it functional, connect it to a service like:
- [Formspree](https://formspree.io) — free tier available
- [EmailJS](https://emailjs.com) — free tier available
