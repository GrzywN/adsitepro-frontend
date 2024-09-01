# An recruitment task for adsite.pro company.

## Task

Get ready for an exciting adventure! :)

**Technologies:**

- Backend: Laravel (PHP)
- Frontend: Vue.js + Tailwind CSS

**Assumptions:**

You are to create a simple TO-DO application for task creation. In the application, the user will be able to create task categories and then add tasks to them. When creating a task, the user should be able to assign a person to it from the available application users and specify how many minutes it will take to complete the task. Each person has a 9600-minute limit, which resets on the 1st day of the month.

**Finally, the application should allow:**

- Managing users
- Adding task categories and tasks

The rest is up to your creativity.

We will primarily evaluate the quality of the code, and to a lesser extent, the appearance of the application.

## Run Locally

Clone the project

```bash
  git clone https://github.com/GrzywN/adsitepro-frontend.git
```

Go to the project directory

```bash
  cd adsitepro-frontend
```

Copy environmental config

```bash
  cp .env.example .env
```

Install dependencies

```bash
  npm install
```

Run the development server

```bash
  npm run dev
```

Your app should now be running on [localhost:5173](http://localhost:5173).

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
