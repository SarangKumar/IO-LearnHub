# Prerequisites

- MongoDB Atlas (sign up for free)
- Vercel Account (sign up for free)
- NodeJS 12+.
- npm and npx.

---

Let's start step by step

### Step 1

#### Installing nextjs

- Write the following command in your terminal

```bash
npx create-next-app@latest next-mongodb-app
```

- Select the default templates.()

### Step 2
#### Adding MongoDB npm and Connection String

- Create a `.env` file (if that doesn't exist already.) and make sure you add `.env` file name in `.gitignore` file.
- Open `.env` and append
```bash
MONGODB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.tdm0q.mongodb.net/<DBNAME>?retryWrites=true&w=majority
```

- Replace Username, password with the original password that you got while [creating the cluster](/day_11/lessons/mongodb/mongodb_atlas_setup.md) and replace DBNAME with the name of the database that you want to use.

- Now, we need to install the MongoDB npm package. Run the following command in your terminal:

```bash
npm install mongodb
```


### Step 3
#### Starting the server

- Now, we need to start the server. Run the following command in your terminal:

```bash
npm run dev
```
