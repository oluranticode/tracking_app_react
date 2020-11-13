import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalStore';

const Transaction = ({ transaction }) => {
    const {  deleteTransaction } = useContext(GlobalContext);

    // delete function
    const deleteHandler = () => {
        deleteTransaction(transaction.id);
    }

    const sign = transaction.amount < 0 ? "-" : "+"
    return (
               <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
         <button onClick={deleteHandler} className="delete-btn">x</button>
        </li>
  )
}

export default Transaction;