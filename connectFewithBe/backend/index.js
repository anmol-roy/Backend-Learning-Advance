const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
// Enable CORS so frontend can access backend
app.use(cors());

app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, title: 'Why did the scarecrow win an award?', content: 'Because he was outstanding in his field!' },
    { id: 2, title: 'Why don’t scientists trust atoms?', content: 'Because they make up everything!' },
    { id: 3, title: 'Why did the bicycle fall over?', content: 'Because it was two-tired!' },
  ];
  res.json(jokes);
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
