import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./components/product/productList";
import Header from "./components/header";

class Main extends Component {
    render() {
        return (
            <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
                <Header />
                <ProductList />
            </div>
        );
    }
}
export default Main;
