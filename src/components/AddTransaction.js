import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    text: '',
    amount: 0,
  });
  const { text, amount } = formData;
  const onChange = (e) => {
    // console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setFormData({ text: '', amount: '' });
  };

  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            placeholder='Enter text...'
            value={text}
            name='text'
            onChange={onChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            name='amount'
            placeholder='Enter amount...'
            value={amount}
            onChange={onChange}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </Fragment>
  );
};

export default AddTransaction;
