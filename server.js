//This section is for all the const that are required for the project to run
const port = 8000;
const express = require('express');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync ('products.json')
const db = lowdb(adapter);
const app = express();
app.use(express.json());


//This is where we GET our products
app.get('/api/products',(req, res) => {
    const products = db.get('products').value()
    console.log(products);
    res.json(products);
});

//This is where we GET the contents of our cart
app.get('/api/cart',(req, res) => {
    const cart = db.get('cart').value()
    console.log(cart);
    res.json(cart);
});





app.listen(port,() => {
    console.log(`Server started on port: ${port}`);
});