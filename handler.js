//Created an add function that gets id from product and adds it to cart
function add(req, res){
    const productId = req.params.id;
    const product = db.get('products')
    .find({id: productId})
    .value();

    const result = db.get('cart')
    .push(product)
    .write();
    
    res.json(result);
}

//Created a function that removes a prodct from the cart then returns the new cart
function remove(req, res){
    const productId = req.params.id;
    const cart = db.get('cart')
    .remove({id: productId})
    .write()

    res.json(cart);
}

//exports my functions
exports.add = add
exports.remove = remove
