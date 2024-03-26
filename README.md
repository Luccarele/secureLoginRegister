# Secure Login and Register Form
This project prupose a user login form with JWT (JSON Web Token) authentication using JavaScript, MySQL, Node.js and other  related technologies.
---

### How it Work's?
This login form allows users to authenticate themselves by providing their credentials (such as username/email and password). Upon successfull authentication, the user is issued a JSON Web Token (JWT), witch is a secure and compact way of representing claims between two parties.
---

### Technologies used
    - **Backend:**
        - Node.js -> 20.11.1
        - Express.js -> 4.18.3
    
    - **Frontend:**
        - HTML5
        - CSS3
        - JavaScript
        - Ejs

    - **Database:**
        - MySQL -> 8.0.36

    - **Authentication:**
        - JSON Web Tokens (JWT) -> 9.0.2
        - Bcrypt.js -> 2.4.3
    
    #### Development Tools
        - Visual Studio Code
        - Git / GitHub -> 2.34.1
        - Docker -> 25.0.4
---

### How to run the project?
To run the project, follow these steps:

    **make sure about of all tools are installed**
        - Visual Studio Code
        - Docker
        - Node.js
        - Git / GitHub
        - Dbeaver (Optional)

    1°. Step - Access your terminal on Visual Studio Code, and clone the repository, typing:

```
    git clone https://github.com/Luccarele/secureLoginRegister.git

```
    2°. Step - Navigate to the project directory:
```
    cd yourProject

```
    3°. Step - Install dependencies:
```
    npm install

```
    4°. Step - Set up the database:
```
   docker compose up

```
    5°. Step - Start the server:
```
    npm run dev

```
    6°. Step - Open your web browser and navigate to "http://localhost:5000" to access the application.
---

### How to consume the API:

#### Authentication Routes
    - GET : "/" (Login) 
        - Request Body:
            - `user`: User's username.
            - `password`: User's password.
    - GET : "/register" (Register)
        - Request Body:
            -   `username`: User's desired username.
            -   `email`: User's email address.
            -   `password`: User's password.
---
