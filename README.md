# 🎥 SnapCast – Record. Upload. Share.

Welcome to **ScreenSpark**, a powerful, full-stack video recording and sharing platform inspired by Loom, crafted with passion, precision, and cutting-edge tech. Built with **Next.js**, **Bunny.net**, and **Xata**, this app lets users capture screens, manage videos, and share them in one seamless experience.

## 🤖 About the Project

As someone deeply into **beautiful design and functional full-stack development**, this project was built to sharpen my skills across frontend, backend, and cloud integrations. It includes:

- 🔐 Auth with Google & Better-Auth
- 📹 In-browser screen recording
- ⬆️ Secure video uploads to Bunny.net
- 🧐 AI-generated transcripts
- 🔍 Search bar for easy video discovery
- 🌐 Sharable video URLs
- 🔒 Public/private toggles
- 📊 Metadata access & analytics
- 🌟 Modular, scalable codebase with stunning Tailwind UI

Whether you're here to build upon it or explore how things work under the hood, this project is made to be both **developer-friendly and user-centric**.

---

## ⚙️ Tech Stack

| Tech             | Purpose                                                                 |
| ---------------- | ----------------------------------------------------------------------- |
| **Next.js**      | Full-stack React framework with SSR and API routes                      |
| **Tailwind CSS** | Utility-first CSS for lightning-fast, modern UI design                  |
| **TypeScript**   | Strong typing & enhanced developer experience                           |
| **Xata**         | Serverless Postgres DB with real-time branching & built-in search       |
| **Bunny.net**    | Secure, fast video CDN with token protection and analytics              |
| **Drizzle ORM**  | Lightweight, type-safe ORM for SQL                                      |
| **Better Auth**  | Simple, secure auth with multi-tenant & social login support            |
| **Arcjet**       | Developer-first security layer for bot protection, rate limiting & more |

---

## ✨ Features

- 🔐 **Authentication**: Google login with Better Auth for secure sign-in
- 🎥 **Screen Recording**: In-browser screen capture with one click
- ⬆️ **Video Uploading**: Upload directly to Bunny.net with privacy toggles
- 💜 **AI Transcripts**: Enhance accessibility and SEO with auto-generated transcripts
- 🛡️ **Arcjet Security**: Real-time threat protection and rate limiting
- 🔍 **Search Functionality**: Quickly locate videos with full-text search
- 📊 **Metadata Access**: View video ID, URL, and other data for quick sharing
- 🌐 **Sharable Links**: Send public/private video URLs easily
- 📱 **Responsive UI**: Optimized for mobile, tablet, and desktop
- 🧱 **Reusable Components**: Clean modular structure to scale features easily

---

## 🚀 Getting Started

Follow the steps below to run the project on your local machine.

### 🔧 Prerequisites

Make sure you have:

- Node.js
- npm
- Git

### 📦 Installation

```bash
git clone https://github.com/Code-name-HeaLer/SnapCast
cd snapcast
npm install
```

### 🔐 Environment Variables

Create a `.env` file in the root and add:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Xata
XATA_API_KEY=
DATABASE_URL_POSTGRES=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Better Auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# Bunny.net
BUNNY_STORAGE_ACCESS_KEY=
BUNNY_LIBRARY_ID=
BUNNY_STREAM_ACCESS_KEY=

# Arcjet
ARCJET_API_KEY=
```

> ⚠️ Replace values with credentials from [Better-Auth](https://betterauth.dev), [Google Cloud Console](https://console.cloud.google.com), [Xata.io](https://xata.io), [Bunny.net](https://bunny.net), and [Arcjet](https://arcjet.com)

### 🏁 Run Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧠 My Workflow Highlights

- Component-first UI development with Tailwind
- Clean and minimal code structure using file-based routing (Next.js)
- Used Drizzle ORM to avoid raw SQL and benefit from type-safe queries
- Implemented token security for Bunny CDN uploads
- Added Arcjet for seamless protection without hurting DX
- Custom error handling for better debugging experience

---

## 📸 Sneak Peek

> _Coming soon: I’ll upload a demo video and screenshots of the platform in action._

---

## 🤝 Contributions

This project is personal but open to feedback! Want to contribute or collaborate? Reach out to me via [LinkedIn](https://www.linkedin.com/in/swagat-nanda/) or [GitHub](https://github.com/Code-name-HeaLer/).

---

## 📄 License

MIT License – Free to use, modify, or share. Just show some love ✨
