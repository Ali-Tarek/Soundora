# Soundora

A modern, full-stack music streaming web app inspired by Spotify. Built with Next.js, Supabase, and TypeScript, Soundora lets you upload, play, and like your favorite tracks in a beautiful, responsive interface.

---

## Demo

https://github.com/user-attachments/assets/5458792a-7f44-45a6-8f2d-e8271f454a9a

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)

---

## Features

- 🎵 **Play music**: Stream uploaded tracks instantly
- ⬆️ **Upload tracks**: Add your own MP3s with cover images
- ❤️ **Like/favorite songs**: Save tracks to your favorites
- 🔍 **Search**: Find songs by title or author
- 👤 **User authentication**: Secure sign up, login, and session management
- 📱 **Responsive UI**: Works on desktop and mobile
- 🗂️ **Personal library**: View and manage your uploaded songs
- ⚡ **Fast and modern**: Built with Next.js App Router and Supabase

---

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Supabase (for database and storage)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ali-Tarek/Soundora.git
   cd soundora
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Configure environment variables:**

   - Copy `.env.example` to `.env.local` and fill in your Supabase credentials.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. Open `http://localhost:3000` in your browser.

---

## Usage

- **Play a song:** Click on any track to start streaming.
- **Upload a song:** Click the "+" button in "Your Library" (requires login).
- **Like a song:** Click the heart icon next to a track.
- **Search:** Use the search bar to find tracks by title or author.

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Supabase](https://supabase.com/) (Auth, Database, Storage)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)

---

## Folder Structure

```
soundora/
  actions/        # Server actions for data fetching
  app/            # Next.js app directory (pages, layouts, routes)
  components/     # Reusable React components
  hooks/          # Custom React hooks
  providers/      # Context and providers
  public/         # Static assets
  supabase/       # Supabase config and migrations
  types.ts        # TypeScript types
```

---
