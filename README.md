# 📋 Task Tracker

##  Description

A fullstack task management application that lets you:

-  Create, edit, delete tasks
-  Toggle task completion with a fancy switch
-  Filter/search tasks by name
-  Instant feedback with toast notifications and animations

---

##  Tech Stack

- **Frontend**: React 18 · TypeScript · Tailwind CSS · Axios · Framer Motion · React Icons · React Hot Toast  
- **Backend**: Node.js · Express · TypeScript · Prisma ORM  
- **Database**: SQLite (default) or PostgreSQL (optional)

---

##  Project Structure

```
task-tracker/
├── backend/    # Express API + Prisma
├── frontend/   # React + Tailwind UI
└── README.md
```

---

##  How to Run

###  Backend Setup (Node + Express + Prisma)

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
DATABASE_URL="file:./dev.db"
```

Run database migrations:

```bash
npx prisma migrate dev --name init
```

Start the backend server:

```bash
npm run dev
```

 API will be running at: [http://localhost:4000/api/tasks](http://localhost:4000/api/tasks)

---

###  Frontend Setup (React + Tailwind)

```bash
cd frontend
npm install
npm start
```

 Open the app in your browser at: [http://localhost:3000](http://localhost:3000)

---

## Features

-  Add tasks with a name + description
-  Edit existing tasks inline
-  Delete tasks with confirmation
-  Toggle “Done” or “In Progress” via switch
-  Toast notifications for feedback
-  Framer Motion for animations
-  Real-time task filtering

---

##  Error Handling

- Task name is required
- Backend errors (404, 500) are caught and displayed via toast

---

##  Time Spent

Approx. **4 hours** (setup + feature enhancement + styling)

---