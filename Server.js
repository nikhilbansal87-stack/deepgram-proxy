const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/transcribe', async (req, res) => {
try {
const response = await axios.post('https://api.deepgram.com/v1/listen', req.body, {
headers: {
'Authorization': 'Token 32f78c0532c08cb168b1c7a9dddd0e7741e1feb2',
'Content-Type': 'application/json'
}
});
res.json(response.data);
} catch (error) {
console.error('Error:', error.response?.data || error.message);
res.status(500).json({error: 'Something went wrong' });
}
});

app.listen(3000, () => console.log('Proxy running on port 3000')); 