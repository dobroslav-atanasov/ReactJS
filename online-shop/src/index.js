import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './ProductList'
import data from './data/data'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<ProductList product={data[0]} />, document.getElementById('root'));