# 📘 Quotes App ( Prisma + MongoDB)

## 🔧 Project Setup Steps

### 1. **Install Required Packages**
```bash
npm install express cors dotenv         # For backend server
npm install @prisma/client             # Prisma runtime client
npm install prisma --save-dev          # Prisma CLI
```

### 2. **Initialize Prisma**
```bash
npx prisma init
```
- This creates:
  - `prisma/schema.prisma`
  - `.env`

### 3. **Set Up MongoDB Locally**
- Used **MongoDB Compass** as GUI
- Created a new **database** (`quotesDB`)
- In `.env`, added:
```env
DATABASE_URL="mongodb://localhost:27017/quotesDB?directConnection=true"
```

---

## ⚙️ Prisma + MongoDB Setup

### 4. **Define Prisma Model**
In `schema.prisma`:
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Quote {
  id     String @id @default(auto()) @map("_id") @test.ObjectId
  text   String
  author String
}
```

### 5. **Generate Prisma Client**
```bash
npx prisma generate
```
- Generates code in `node_modules/@prisma/client`
- Connects Prisma with MongoDB schema

---

## 🧪 MongoDB Replica Set (Required by Prisma)
> ⚠ MongoDB must run in **replica set mode** to support Prisma transactions

### 6. **Set Up Replica Set**
```bash
mkdir C:\mongodb-data\replica-set
"C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath C:\mongodb-data\replica-set --replSet rs0
```

### 7. **Initialize Replica Set**
```bash
mongosh
rs.initiate()
```


---

## 🖥️ Backend Server Setup (`server.js`)
- Uses **Express.js**, **Prisma**, and **CORS**
- Handles:
  - `GET /api/quotes` → list quotes
  - `POST /api/quotes` → add quote

---

## 🌐 Frontend (HTML)
- Simple UI with:
  - Input form (quote + author)
  - Loading / success / error states
  - Dynamic quote list rendering

---

## ✅ Final Notes

| Item                        | Status         |
|-----------------------------|----------------|
| MongoDB                     | Local Replica  |
| ORM                         | Prisma         |
| Server                      | Express.js     |
| Data view                 | ✅ Prisma Studio |
| Database GUI                | MongoDB Compass |
| Environment Config          | `.env` file    |
| Error Handling              | ✅ UI feedback |
| Status Indicators (UI)      | ✅ Loading, Error, Success |
| Quotes Feature              | ✅ Add + List  |

## Handwritten Notes
![Note](notes.pdf)
