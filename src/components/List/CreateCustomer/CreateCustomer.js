import React from 'react';
import './CreateCustomer.css';

export default function CreateCustomer({startNewCustomer}) {
  create() {
    const { first, last, email, phone } = this.state;
    var customer = {
      first,
      last,
      email,
      phone,
      status: 'New Customer',
      log: ''
    }
  
    this.props.createCustomer( customer );
  }
   return (
    <div id="CreateCustomerBtn__container">
      <button id="CreateCustomer__btn" onClick={startNewCustomer}> New Customer </button>
    </div>
  )
}


