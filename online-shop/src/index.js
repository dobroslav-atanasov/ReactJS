import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './ProductList'
import data from './data/data'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<ProductList products={data} />, document.getElementById('root'));