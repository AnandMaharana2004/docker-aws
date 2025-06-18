# 🌐 Node.js Server Deployment on AWS Using Docker
    This is the main title of your document, providing an overview of the content.

    **Description:**
    A simple demo explaining how to create a Node.js server and deploy it on AWS using a Docker image.

## 📁 Project Overview
    This is a major section heading that outlines what the project entails.

    **Subheadings/Content:**
    * A basic **Node.js + TypeScript** server
    * A **Dockerfile** to containerize your app
    * Instructions to **build** and **run** the Docker container locally

## 🚀 How to Run the Server (Locally using Docker)
    This is a major section heading providing instructions for local execution.

### 🧱 Step 1: Make sure Docker is installed
    This is a subheading detailing the first prerequisite step.

    **Command:**
    ```bash
    docker -v
    ```
    **Expected Output:**
    ```bash
    Docker version 28.1.1, build 4eba377
    ```
    **Notes:**
    * Provides a link for Docker installation if an error occurs: `https://www.docker.com/products/docker-desktop/`

### 🧱 Step 2: Make sure Docker is installed
    This is a subheading for the second step, which involves building the Docker image.

    **Command:**
    ```bash
    docker build -t your-image-name .
    ```
    **Purpose:**
    * Creates a Docker image named `your-image-name` using your Dockerfile.

### 🧱 Step 3: Run the Docker Container
    This is a subheading for the third step, focused on running the Docker container.

    **Command:**
    ```bash
    docker run -p 3000:3000 your-image-name
    ```
    **Purpose:**
    * Maps your local port `3000` to the container’s port `3000`.

### 🧱 Step 3: Test the server
    This is a subheading for the final step, testing the running server.

    **Instructions:**
    * Open your browser, Postman, or any HTTP client and visit: `http://localhost:3000`
    **Expected Outcome:**
    * You should see your server running.