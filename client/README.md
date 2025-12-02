# Resume Builder

Full-stack Resume Builder — a Vite + React client and a Node/Express server. This repository contains a browser-based resume builder UI (client) and a backend API that powers saving, image uploads, and AI features (server).

**Contents**
- **client/**: Vite React application with templates, forms, and a live preview.
- **server/**: Express server with routes for AI, resumes, and user authentication.

**Quick Links**
- Client env example: `client/.env` (`VITE_BASE_URL` points to the server)
- Server entry: `server/server.js`
- Deployment config: `client/vercel.json` and `server/vercel.json`

## Prerequisites
- Node.js 16+ (LTS recommended)
- npm or yarn

## Local setup

1. Clone the repo

```bash
git clone https://github.com/kumarshashibhushan/resume-builder.git
cd resume-builder
```

2. Start the server

```bash
cd server
npm install
# If you have nodemon and want hot reload:
# npx nodemon server.js
# Otherwise:
node server.js
```

The server commonly listens on port `3000` (check `server/server.js`).

3. Start the client

```bash
cd ../client
npm install
npm run dev
```

The client is a Vite app (default dev port is `5173`). The client uses `VITE_BASE_URL` in `client/.env` to point at the API (the provided `.env` sets `VITE_BASE_URL="http://localhost:3000"`).

## Environment variables
- Client: `client/.env`
  - `VITE_BASE_URL` — base URL for API requests (example: `http://localhost:3000`).
- Server: create a `.env` in `server/` (not included in repo). Common vars the server expects (check `server/configs` and `server/server.js`):
  - `PORT` — server port (default 3000)
  - Database connection string (e.g., `MONGO_URI`) if configured
  - API keys for image hosting or AI providers (see `server/configs/ai.js` and `server/configs/imageKit.js`)

## Project structure (high level)
- `client/` — React + Vite frontend
  - `src/components/` — UI components and templates
  - `src/pages/` — application routes and pages
  - `src/app/` — Redux store and slices
- `server/` — Express backend
  - `controllers/` — route handlers (AI, resumes, users)
  - `routes/` — API route definitions
  - `configs/` — third-party integrations and DB setup
  - `middlewares/` — auth and other middlewares
  - `Models/` — Mongoose models (`Resume.js`, `User.js`)

## Available scripts (typical)
- Client (from `client/`):
  - `npm run dev` — start Vite dev server
  - `npm run build` — build production assets
  - `npm run preview` — preview production build
- Server (from `server/`):
  - `node server.js` — start server
  - If using dev dependency `nodemon`: `npx nodemon server.js`

## Deploying
- Both the client and server include `vercel.json` files — you can deploy each as separate Vercel projects (client as static frontend, server as serverless functions or a Node server depending on your Vercel setup).
- For production, set environment variables in your hosting provider (Vercel, Render, Heroku, etc.).

## Notes & tips
- If the client cannot reach the API, ensure `VITE_BASE_URL` matches the server address and that CORS is enabled on the server.
- Review `server/configs/ai.js` and `server/configs/imageKit.js` for required API keys and quota considerations before enabling AI or image uploads in production.

## Contributing
- Fork the repo, create a feature branch, and open a pull request. Keep changes focused.

## License
- This repository does not include a license file. Add one if you plan to make the project public.

---
If you'd like, I can also:
- add a `CONTRIBUTING.md` with development workflow
- create a `.env.example` for the server with suggested keys
- add quick run scripts to the root `package.json` to start both client and server with one command
