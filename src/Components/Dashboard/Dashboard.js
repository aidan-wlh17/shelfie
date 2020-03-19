import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()


        this.deleteProduct = this.deleteProduct.bind(this)
    }
    
    deleteProduct(id) {
        
        axios.delete(`/api/product/${id}`)
        .then(() => {
            this.props.products()
        })
    }

    render() {
        // console.log(this.props)
        const inventory = this.props.inventory.map(element => {
            return (
                <Product 
                    product={element}
                    delete={this.deleteProduct}
                    key={element.id}
                    selectedProduct={this.props.selectedProduct}
                />
            )
        })
        return (
            <div className="inventory-list">
                {inventory}
            </div>
        )
    }
}
export default Dashboard