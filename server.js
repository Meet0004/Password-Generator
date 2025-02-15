const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://192.168.1.4:${PORT}`);
});
