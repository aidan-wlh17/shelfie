import React, {Component} from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventoryList: [],
      selectedProduct: {}

    }
    this.getProducts = this.getProducts.bind(this)
    this.selectedProduct = this.selectedProduct.bind(this)

  }

  getProducts() {
    axios.get('/api/inventory')
    .then(res => {
      this.setState({
        inventoryList: res.data
      })
    })
  }

  componentDidMount() {
    this.getProducts()
  }

  selectedProduct(product) {
    this.setState({
      selectedProduct: product
    })
  }


  render() {
    return (
      <div className="app">

        
        <Header />
        <div className='main-view'>
        <Dashboard inventory={this.state.inventoryList} products={this.getProducts} selectedProduct={this.selectedProduct}/>
        <Form getProducts={this.getProducts} selectedProduct={this.state.selectedProduct}/>
        </div>

      </div>
    )
  }
}
export default App
