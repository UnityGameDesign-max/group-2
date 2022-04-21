const {getProducts, insertCustomers, getCustomers} = require("./index");

const express = require('express');
const PORT = 3000
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(".././CLIENT/src/SignUp.html")
})

app.get('/products', async (req, res) => {
    let products = await getProducts();
    res.send(products)
})


app.post('/addCustomers', async (req, res) => {
    const {name, lastName, contacts, email, address, password} = req.body;
    let allCustomers = await insertCustomers(name, lastName, contacts, email, address, password);
    res.json(allCustomers)
})

app.listen(PORT, () => console.log(`Hello world app listening on port ${PORT}!`))