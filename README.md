# Notebook Application

Notebook is a user-friendly note-taking application that allows you to create, update, edit, and delete notes efficiently. The application ensures secure user authentication and authorization, enabling only logged-in users to access the features.

## Key Features
- **Create Notes:** Add new notes with ease.
- **Edit Notes:** Update your existing notes anytime.
- **Delete Notes:** Remove notes you no longer need.
- **User Authentication:** Secure login system using JWT and cookies.
- **Password Security:** Passwords are securely hashed using bcrypt.js.
- **Protected Access:** Only authenticated users can access the application features.

## Technologies Used
- **Node.js:** JavaScript runtime for server-side development.
- **Express:** Web framework for Node.js.
- **MongoDB:** NoSQL database for storing notes and user information.
- **EJS:** Templating engine for rendering the UI.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/MohitCode17/Notebook-App.git
    cd notebook
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables:
    ```
    PORT=your_port
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the application:
    ```bash
    npm start
    ```

## Usage
1. Navigate to `http://localhost:your_port` in your browser.
2. Register a new account or log in with existing credentials.
3. Start creating, updating, editing, and deleting notes.
