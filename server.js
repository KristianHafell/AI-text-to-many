const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/search', async (req, res) => {
    try {
        res.json(`<p>Output:</p><p>${req.body.text}</p>`);
    } catch (error) {
        console.log('Internal Server Error', error);
    }
});

app.listen(3002, () => {  
  console.log('Server is running on port 3002');
});