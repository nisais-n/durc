const express = require('express');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
  const apiUrl = `https://api.openweathermap.org${req.url}`;
  req.pipe(request(apiUrl)).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
