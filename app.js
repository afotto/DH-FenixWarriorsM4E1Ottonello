const express = require('express')
const app = express()
const port = 3000
const path = require('path');
console.log('alberto probando')
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/homem.html'));
});

app.listen(port, () => {
    console.log('Example app listening on port '+ port);
});
