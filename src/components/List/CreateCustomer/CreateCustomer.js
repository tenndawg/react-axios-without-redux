import React from 'react';
import './CreateCustomer.css';

export default function createCustomer({startNewCustomer}) {
   return (
    <div id="CreateCustomerBtn__container">
      <button id="CreateCustomer__btn" onClick={startNewCustomer}> New Customer </button>
    </div>
  )
}


