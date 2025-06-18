# 🌐 Node.js Server Deployment on AWS Using Docker

Hey developers! 👋  
This is a simple demo of how to create a Node.js server and deploy it on AWS using a Docker image.

---

## 📁 Project Overview

This project includes:

- A basic **Node.js + TypeScript** server  
- A **Dockerfile** to containerize the app  
- Instructions to **build** and **run** the Docker container locally

---

## 🚀 Running the Server Locally Using Docker

### ✅ Step 1: Check if Docker is Installed

Open your terminal or CMD and run:

```bash
docker -v
```

You should see something like:

```
Docker version 28.1.1, build 4eba377
```

If you get an error, install Docker from:  
👉 https://www.docker.com/products/docker-desktop/

---

### ⚙️ Step 2: Build the Docker Image

Navigate to your project folder and run:

```bash
docker build -t your-image-name .
```

> This creates a Docker image named `your-image-name` using the Dockerfile.

---

### ▶️ Step 3: Run the Docker Container

Start the container by running:

```bash
docker run -p 3000:3000 your-image-name
```

> This maps your local port `3000` to the container’s port `3000`.

---

### 🌍 Step 4: Test the Server

Open your browser, Postman, or any HTTP tool and visit:

```
http://localhost:3000
```

If everything is working, you should see your server running 🎉

---
