const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Hello GoStack'});
});

app.get('/igor', (req, res) => {
    return res.json({ message: 'sou o Igor'});
});


app.listen(3333, () => {
    console.log('🚀 Back-end started');
});