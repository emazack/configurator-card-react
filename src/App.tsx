import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";



function App() {
  
  const [quantity, setQuantity] = useState<number>(1);
  
  
  const increase = (): void => {
    if (quantity < 5) {      
      setQuantity(quantity + 1);
    }
  }

  const decrease = (): void => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const order = (): void => {
    alert(`Your total order is ${10 * quantity} `)
  }





  return (
    <div className="container mt-2" style={{ maxWidth: 400}}>
      <div className="card">
        <div className="card-header">MY AMAZING PRODUCT</div>
        <div className="card-body">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          <br/>
          <div className="btn-group">
            <button onClick={increase} className="btn btn-outline-primary">+</button>
            <button onClick={decrease} className="btn btn-outline-primary">-</button>
          </div>
          <hr/>
          <button className="btn btn-primary" onClick={order}>
            Order {quantity} product{quantity > 1 && <span>s</span>} at € {10 * quantity}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
