const express = require('express');
const { getOutput } = require('./send/main-output');

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/send', async (req, res) => {
    try {
        const response = await getOutput(req.body.text);
        res.json(response);
    } catch (error) {
        console.log('Internal Server Error', error);
    }
});

app.listen(3002, () => {  
  console.log('Server is running on port 3002');
});