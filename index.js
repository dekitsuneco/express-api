// Import modules:
const express = require('express');

const app = express();

// Init middleware:
app.use(express.json());

// Define routes:
app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large',
    });
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) { 
        res.status(418).send({ msg: 'Not Found' });
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
})

// Start the server:
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));