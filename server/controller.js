module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({errorMessage: 'Something went wrong'})
                console.log(err)
            })

    
    },
    createProduct: (req, res) => {
        const db = req.app.get('db')
        const {product_name, price, imageUrl} = req.body

        db.create_product([product_name, price, imageUrl])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Something went wrong'})
            console.log(err)
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(+id)
            .then(result => {
                res.status(200).send(result)
            })
            .catch(err => {
                res.status(500).send({errorMessage: 'Something went wrong'})
                console.log(err)
            })
            
    },
    editProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {product_name, price, imageUrl} = req.body
        db.edit_product([product_name, price, imageUrl, id])
        .then(result => {
            res.status(200).send(result)
        })
    }
}