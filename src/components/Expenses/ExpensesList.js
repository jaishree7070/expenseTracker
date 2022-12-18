import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = (props) => {
  if (props.updatedExpenses.length === 0)
    return <h2 className='expenses-list__fallback'>No result found</h2>
  return (
    <ul className='expenses-list'>
      {props.updatedExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
