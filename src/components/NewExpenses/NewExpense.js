import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [modal, setModal] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setModal(false);
  };

  const AddSaveExpenseData = () => {
    setModal(true);
  };

  const hide = () => {
    setModal(false);
  };

  return (
    <div className='new-expense'>
      {modal ? <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onHide={hide} />
        : <button onClick={AddSaveExpenseData}>Add new ExpenseData</button>}
    </div>
  );

};
export default NewExpense;