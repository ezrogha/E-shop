const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            products,
            docTitle: "Shop",
            path: '/products'
        })
    })
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/', {
            products,
            docTitle: "Shop",
            path: '/'
        })
    })
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        docTitle: 'Shopping Cart',
        path: '/cart'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        docTitle: 'My Orders',
        path: '/orders'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        docTitle: 'Checkout',
        path: 'checkout'
    })
}
