const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => console.log(`Server on in port ${port}`));
