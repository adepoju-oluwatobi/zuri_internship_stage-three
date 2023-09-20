const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());

const users = [
    { email: "user@example.com", password: "1Password" },
    { email: "admin@gmail.com", password: "admin" },
  ];
  
  // Route for user login
  app.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    // Find the user by username and check the password
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
  
    if (user) {
      // Simulated successful login
      res.json({ message: "Login successful", user: user });
    } else {
      res.status(401).json({ error: "Incorrect email or Password!" });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
