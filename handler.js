//Created an add function that gets id from product and adds it to cart
function add(req, res){
    const productId = req.params.id;
    const product = db.get('products').find({id: productId}).value();
    const result = db.get('cart').push(product).write();
    
    res.json(result);
}

exports.add = add
