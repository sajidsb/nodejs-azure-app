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

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});