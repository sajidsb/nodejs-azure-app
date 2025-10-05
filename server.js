const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Azure App Service!</h1>
    <p>Deployed via GitHub Actions 🚀</p>
    <p>Environment: ${process.env.NODE_ENV || 'development'}</p>
  `);
});

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Azure App Service!</h1>
    <p>Deployed via GitHub Actions 🚀</p>
    <p>CI/CD is working perfectly! ✅</p>
    <p>Environment: ${process.env.NODE_ENV || 'development'}</p>
  `);
});