const {getProducts, insertCustomers, getOrderedItems, getProductOfId, insertOrderedItems} = require("./index");

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
    res.send("EXPRESS IS RUNNING")
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

app.post('/addOrderedItems', async (req, res) => {
    const {productId, orderedQuantity} = req.body;
    let orderedItems = await insertOrderedItems(productId, orderedQuantity)
    res.send(orderedItems);
})

app.get('/getOrderedItems', async (req, res) => {
    let orders = await getOrderedItems()
    res.send(orders)
})
app.get('/product/:productId', async (req, res)=>{
    let productOfId = await getProductOfId(req.params.productId);
    res.send(productOfId.recordset);
})

app.listen(PORT, () => console.log(`Hello world app listening on port ${PORT}!`))