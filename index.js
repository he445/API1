const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
