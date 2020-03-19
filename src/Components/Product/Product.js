import React, {Component} from 'react'
import '../../App.css'

class Product extends Component {
    constructor() {
        super()


    }

    render() {
        // console.log(this.props)
        return (
            <div className="product-box">
                <div className="top-box">
                <img src={this.props.product.image_url} className="product-image"/>

                
                <div className='product-info'>
                
                <p>{this.props.product.product_name}</p>
                <p>{this.props.product.price}</p>
                </div>
                </div>

                <div className="product-buttons">
                <button className="delete-edit-btn" onClick={() => this.props.delete(this.props.product.product_id)}>Delete</button>
                <button className="delete-edit-btn" onClick={() => this.props.selectedProduct(this.props.product.product_id)}>Edit</button>
                </div>
                
                
            </div>
        )
    }
}
export default Product