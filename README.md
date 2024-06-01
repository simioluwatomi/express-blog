# Express Blog

Welcome to the Express Blog project!

## What is the project about?

This project is a simple blog built using Express.js, a web application framework for Node.js. It allows users to view blog posts, navigate through different categories, and view individual blog post details.

## How to set up the project locally

### Prerequisites
- Git
- Node.js and npm (Node Package Manager)

### Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/simioluwatomi/express-blog.git
    cd express-blog
    ```

2. **Install Node.js and npm:**

    - **Windows:**
        Download the Node.js installer from the [official Node.js website](https://nodejs.org/) and run it. The installer includes npm.

    - **macOS:**
        You can install Node.js using Homebrew. First, install Homebrew if you haven't already:
        ```bash
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        ```
        Then install Node.js:
        ```bash
        brew install node
        ```

    - **Linux:**
        You can install Node.js via a package manager. For example, on Debian-based distributions:
        ```bash
        sudo apt update
        sudo apt install nodejs npm
        ```

3. **Install the project dependencies:**
    ```bash
    npm install
    ```

4. **Start the application:**
    ```bash
    npm start
    ```

5. **Access the application:**
    Open your web browser and navigate to `http://localhost:3000` to view the blog.

### Note
This setup ensures that you have Node.js and npm installed on your computer. If you prefer using a containerized environment, consider using Docker, which abstracts the need for installing Node.js locally.
