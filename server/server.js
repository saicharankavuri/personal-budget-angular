// Budget API
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());


fs.readFile('data.json', 'utf8', (err, file) => {
    data = file;
    return;
})

app.use(cors({
    origin: '*'
}));

app.get('/budget', (req, res) => {
    res.send(data);
});


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});