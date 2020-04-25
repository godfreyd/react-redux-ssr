import 'babel-polyfill';
import express from 'express';
import render from './helpers/render';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore();

    // Some logic to initialize
    // and load data into the store

    res.send(render(req, store));
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})