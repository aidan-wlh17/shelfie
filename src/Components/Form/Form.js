import React, {Component} from 'react'
import axios from 'axios'
import '../../App.css'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: 0,
            imageUrl: '',

            productId: null
        }
    }

    componentDidUpdate(prevProps) {
      if(prevProps.selectedProduct !== this.props.selectedProduct) {
        this.setState({
          name: this.props.selectedProduct.product_name,
          price: this.props.selectedProduct.price,
          imageUrl: this.props.selectedProduct.imageUrl
        })
      }
    }

    handleName(event) {
        this.setState({name: event.target.value})
      }
    
      handlePrice(event) {
        this.setState({price: event.target.value})
      }
    
      handleImage(event) {
        this.setState({imageUrl: event.target.value})
      }
    
      handleCancel() {
        this.setState({
          name: '',
          price: 0,
          imageUrl: ''
        })
      }

      updateProduct(id) {
        axios.put(`/api/product/${id}`, {})
      }

      createProduct() {
        axios.post('/api/product', {product_name: this.state.name, price: this.state.price, imageUrl: this.state.imageUrl})
        .then(() => {
          this.props.getProducts()
          this.handleCancel()
        })
      }

    render() {
        return (
            <div className="input">
                <img src="https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg" className="placeholder-img"/>
                <p>Image URL:</p>
                <input className="input-box" onChange={(e) => this.handleImage(e)}/>
                <p>Product Name:</p>
                <input className="input-box" onChange={(e) => this.handleName(e)}/>
                <p>Price:</p>
                <input placeholder="0" className="input-box" onChange={(e) => this.handlePrice(e)}/>
                

                <section className="form-buttonbox">
                  <button className="form-button" onClick={() => this.handleCancel()}>Cancel</button>
                  <button className="form-button" onClick={() => this.createProduct()}>Add to Inventory</button>
                </section>
            </div>
        )
    }
}
export default Form