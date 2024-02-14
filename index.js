// Declare a variable for app, represents API, parenthesis after to initialze
const express = require('express');
const app = express();
const PORT = 4600;

// express.json middleware, convert body to json, making it available in post call back
app.use(express.json())

//Route, request is incoming data, response is outgoing data
app.get('/tshirt', (req, res) => {
    // send response to client
    res.status(200).send({
        size: 'large'
    })
});

// post end point
app.post('/tshirt/:id',(req, res) => {
    // ID from request parameters
    const { id } = req.params;
    const { size } = req.body;

    if (!size) {
        res.status(418).send({message: 'We need a size!'})
    }
    res.send({
        tshirt: `with our ${size} and ID of ${id}`,
    });
});

// Fire up API
app.listen(
    // Callback for when API is ready, console log main URL
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
)

// app.listen(4600,"localhost", (req,res) => {
//     console.log('Server Running');
//     });
