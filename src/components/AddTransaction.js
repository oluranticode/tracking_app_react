import React, {useState, useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalStore';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const submitHandler = (e) => {
        e.preventDefault();
        setText(" ");
        setAmount(" ");

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    //texthandler function
    const textHandler = (e) => {
        setText(e.target.value);
    }

    //amounthandler function
    const amountHandler = (e) => {
        setAmount(e.target.value);
    }

    
    //useEffect ... save to local
    useEffect(() =>{
        console.log("saveLocalTodos useEffect run");
        saveLocalTodos();
      }, [text, amount])

       // save to local storage
     const saveLocalTodos = () => {
        localStorage.setItem("text", JSON.stringify(text));
        localStorage.setItem("amount", JSON.stringify(amount));
    };


    //useEffect get from local
  useEffect(() =>{
    console.log("getLocalTodos useEffect run");
    getLocalTodos();
    getLocalTodos1();
  }, [])

  // get from Local
  const getLocalTodos = () => {
    if(localStorage.getItem("text") === null ) {
      localStorage.setItem("text", JSON.stringify([]));
    } else {
     let localtodo = JSON.parse(localStorage.getItem("text"));
     console.log(localtodo);
     setText(localtodo);
    }
  };  

  const getLocalTodos1 = () => {
    if(localStorage.getItem("amount") === null ) {
      localStorage.setItem("amount", JSON.stringify([]));
    } else {
     let localtodo = JSON.parse(localStorage.getItem("amount"));
     console.log(localtodo);
     setAmount(localtodo);
    }
  };  


    return (
        <div>
            <h3>Add new Trasaction</h3>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={textHandler} placeholder="Enter text..." />
                    </div>

                    <div className="form-control">
                <label htmlFor="amount">Amount
                 <br /> (negative - expense, positive - income) </label>
                <input type="number" value={amount} onChange={amountHandler} placeholder="Enter amount..." />
                    </div>
                    <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;
