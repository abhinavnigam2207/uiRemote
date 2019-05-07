const express = require('express')
const cors = require('cors')
const app = express()
const mockAllRemotes = require('./mocks/allRemotes.json');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World from Abhinav!');
});

app.get('/allRemotes', (req, res) => {
    res.send(JSON.stringify(mockAllRemotes));
});

app.listen(3001, () => console.log('App listening on port 3001!'))
