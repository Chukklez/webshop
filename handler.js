//Created an add function that gets id from product and adds it to cart
function add(req, res){
    const productId = req.params.id;
    const product = db.get('products')
    .find({id: productId})
    .value();
    const cart = db.get('cart')
    .find({id: productId})
    .value();

    const result = {
        Success: true
    }
    //If the product isn't in products then return Product doesn't exist
    if(!product){
        result.Success = false;
        result.message = `Product doesn't exist!`
    }
    //If the product is in the cart then return that the product is already in the cart
    if (cart){
        result.Success = false;
        result.message = `Product already in cart!`
    }
    //If the product is in products but not in cart then add the product to the cart
    if (product && !cart) {
        result.Success = true;
        result.message = `Added Product!`
        db.get('cart')
        .push(product)
        .write();
    }
    
    res.json(result);
}

//Created a function that removes a prodct from the cart then returns the new cart
function remove(req, res){
    const productId = req.params.id;
    const cart = db.get('cart')
    .remove({id: productId})
    .write();
    const result = db.get('cart')
    .value();

    res.json(result);
}

//exports my functions
exports.add = add
exports.remove = remove
