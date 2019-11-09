import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Aside from '../Aside';
import Posts from '../Posts';
import Main from '../Main';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="Container">
        <Aside />
        <Main title="Big Title">
          <Posts />
        </Main>
      </div>
      <Footer />
    </div>
  );
}

export default App;