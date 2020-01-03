const Product = require('../models/product')

exports.getAddProducts = (req, res, next) => {
    res.render('admin/add-product', {
        docTitle: 'Add Product',
        path: '/admin/add-product',
        productCSS: true,
        formCSS: true,
        activeProduct: true
    })
}

exports.postAddProducts = (req, res, next) => {
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const image = req.body.image
    const product = new Product(title, image, price, description)
    product.save()
    res.redirect('/')
}

exports.getAdminProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            products,
            docTitle: "Admin/products",
            path: '/admin/products'
        })
    })
}