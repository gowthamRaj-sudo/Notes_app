This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.










# Notes App (Frontend Assessment)

##  Tech Stack
- **Next.js** (Frontend Framework)
- **Zustand** (State Management)
- **Axios** (HTTP Client)
- **Docker** (Containerized Setup)

## 📂 Folder Structure
```
/pages
    index.jsx        # Notes Home Page
  signin.jsx       # Login Page
  signup.jsx       # Register Page
/components
  NoteCard.jsx     # Reusable Note Display
  Input.jsx        # Input Field Wrapper
/store
  useStore.js      # Zustand Global Store
/services
  api.js           # Axios Setup (Mocked API)
/styles
  global.css       # Global CSS Styling
/utils
  auth.js          # Utility for auth-related helpers
.env
  # Environment variables
```

##  Setup Instructions
```bash
git clone <your-repo>
cd notes-app
npm install
docker build -t notes-app .
docker run -p 3000:3000 notes-app
```

## Features
- User Registration / Login
- Notes: Create, Read, Update, Delete
- Zustand for state
- Auth protected routes
- Dockerized setup

## Design Decisions
- Used Zustand for simplicity and lightweight state
- Axios for API abstraction (using localStorage as mock DB)


---