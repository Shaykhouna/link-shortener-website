# 📦 Link Shortener Website using TinyURL API

This is a simple web-based URL shortener built with JavaScript (VITE + REACT) and the **TinyURL API**. It allows users to input a long URL and returns a shortened version using TinyURL's API.

This is a live demo of this project: [click here](https://link-shortener-website-indol.vercel.app/)

---

## 🚀 Features

- Shortens any valid URL
- Uses the TinyURL API (https://tinyurl.com/app/dev)
- Fast and easy to use
- Can be deployed anywhere (Netlify, Vercel, etc.)

---

## 🔧 Setup Instructions

### 1. Clone the Project

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2. Create a TinyURL Account and Token

1. Go to [https://tinyurl.com/app/dev](https://tinyurl.com/app/dev)
2. Create a free account (if you don't have one)
3. Generate an **API token**
4. Copy your token and **keep it safe**!

---

### 3. Add Your Token

You have **two options** to use your token **without exposing it**:

#### ✅ Option A: In Development (Safe with `.env`)

Create a `.env` file in your project root:

```
VITE_TINYURL_API_TOKEN=your_token_here
VITE_DOMAIN=your_domain.com_here
```

Then access it in your code like this (React + Vite example):

```js
const token = import.meta.env.VITE_TINYURL_API_TOKEN; //already done in the code
```

> ⚠️ Don't forget to add `.env` to your `.gitignore`!

#### ✅ Option B: In Production (Safe Deployment)
Use secret storage from platforms like:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **Render/Heroku**: Config Vars

> ⚠️ please use the same variable name as previously meentiionned in Option A!

---

### 4. Run the App

If using Vite + React:

```bash
npm install
npx vite
```

---

## 🔗 How It Works

The app sends a POST request like this:

```js
const response = await fetch('https://api.tinyurl.com/create', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'accept': 'application/json',
  },
  body: JSON.stringify({
    url: 'https://example.com',
    domain: 'your-domain.com'
  })
});
```

The API returns a response like:

```json
{
  "data": {
    "tiny_url": "https://your-domain.com/abcd1234"
  }
}
```

---

## 🔐 Keeping Your Token Safe

Never hard-code the API token into your frontend code or push it to GitHub. Use:

- `.env` files (local only)
- Environment variables (for deployment)
- Serverless backend (optional but safest — hides token from client)

---

## 📄 License

01Talent © 2025 Cheikh DIALLO
