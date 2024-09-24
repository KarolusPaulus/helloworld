const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    let response = '';
    for (let i = 0; i < 30; i++) {
      response += 'Hello World! :DD<br>';
    }
    res.send(response);
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});