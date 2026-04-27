# Sethum Senarathna — Portfolio

A personal portfolio website built with **HTML**, **Tailwind CSS (CDN)**, and **Vanilla JavaScript**.

---

## 📁 Folder Structure

```
sethum-portfolio/
│
├── index.html              ← Main portfolio file (open this in browser)
│
├── assets/
│   ├── css/
│   │   └── style.css       ← Custom CSS (animations, cursor, reveals)
│   │
│   ├── js/
│   │   └── main.js         ← JavaScript (cursor, scroll reveal, skill bars)
│   │
│   └── images/
│       └── profile.jpg     ← ADD YOUR PHOTO HERE (rename to profile.jpg)
│
└── README.md               ← This file
```

---

## 🚀 How to Open in VS Code

1. Open **VS Code**
2. Click **File → Open Folder**
3. Select the `sethum-portfolio` folder
4. Right-click `index.html` → **"Open with Live Server"**
   - If you don't have Live Server, install it:
     - Go to Extensions (Ctrl+Shift+X)
     - Search: **Live Server** by Ritwick Dey
     - Click Install
     - Then right-click `index.html` → Open with Live Server

---

## 🖼️ Adding Your Photo

1. Save your photo as `profile.jpg`
2. Put it in `assets/images/profile.jpg`
3. In `index.html`, find the photo placeholder section and replace:

```html
<!-- FIND THIS (around line 130): -->
<div class="about-img-placeholder">
  <div class="icon">👨‍💻</div>
  ...
</div>

<!-- REPLACE WITH: -->
<img src="assets/images/profile.jpg" alt="Sethum Senarathna"
     style="width:100%;height:100%;object-fit:cover;object-position:top;">
```

---

## 📬 Making the Contact Form Work

Use **Formspree** (free, no backend needed):

1. Go to [https://formspree.io](https://formspree.io) → Sign up free
2. Create a new form → copy your form endpoint, e.g.:
   `https://formspree.io/f/xyzabcde`
3. In `index.html`, find the `<form>` tag and add:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
```

4. In `assets/js/main.js`, replace the `setTimeout` block with a real fetch:

```js
fetch(form.action, {
  method: 'POST',
  body: new FormData(form),
  headers: { 'Accept': 'application/json' }
}).then(res => {
  if (res.ok) {
    btn.textContent = 'Message Sent ✓';
    // ...
  }
});
```

---

## 🌐 How to Publish (Free — GitHub Pages)

### Step 1 — Create a GitHub account
Go to [https://github.com](https://github.com) and sign up.

### Step 2 — Create a new repository
- Click **"New"** repository
- Name it: `sethum-portfolio` (or `your-username.github.io` for a custom domain URL)
- Set it to **Public**
- Click **Create repository**

### Step 3 — Upload your files
**Option A — Drag & Drop (easiest):**
1. Open your repository on GitHub
2. Click **"uploading an existing file"**
3. Drag your entire `sethum-portfolio` folder contents
4. Click **Commit changes**

**Option B — Using Git in VS Code terminal:**
```bash
# Open terminal in VS Code (Ctrl + `)
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sethum-portfolio.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → scroll down to **Pages**
3. Under **Source**, select **main** branch → **/root** folder
4. Click **Save**
5. Wait 1–2 minutes → your site will be live at:
   `https://YOUR_USERNAME.github.io/sethum-portfolio/`

---

## 🔧 Things to Customize in index.html

| What to change | Search for this in index.html |
|---|---|
| Your LinkedIn URL | `linkedin.com` |
| Your GitHub URL | `github.com` |
| Resume download link | `href="#"` near "Download CV" |
| Project live links | `href="#"` inside project cards |
| Profile photo | photo placeholder section |
| Phone number | `+94 77 889 0805` |

---

## 🛠️ Tech Stack

- HTML5
- Tailwind CSS (via CDN — no install needed)
- Vanilla JavaScript
- Google Fonts (Clash Display + Cabinet Grotesk)

---

Built with ❤️ by Sethum Senarathna
