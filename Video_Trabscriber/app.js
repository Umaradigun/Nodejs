const express = require('express');
const bodyParser = require('body-parser');
const speechRoutes = require('./routes/speech');
const cors = require('cors');
const { SpeechClient } = require('@google-cloud/speech');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/speech', speechRoutes);

const client = new SpeechClient({
    keyFilename: './Your downloaded google speech .json file'
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
