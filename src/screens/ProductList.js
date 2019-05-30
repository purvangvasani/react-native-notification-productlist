import React, { Component } from 'react'
import Products from '../components/Products';
import { ScrollView, RefreshControl } from 'react-native'

class ProductList extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            refreshing: false
        };
    };
      
    renderComponent=()=>{
        return(
            <Products />
        )
    }
  
    _onRefresh = () => {
        this.setState({refreshing: true});
          
        setInterval(() => {
            this.setState({refreshing: false});
            this.renderComponent();
        },1000);
    }
  
    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }>
                {this.renderComponent()}
            </ScrollView>
        )
    }
}
export default ProductList