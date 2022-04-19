import React, { useContext, useState, useRef } from 'react'
import { AppContext } from '../../context/AppContext'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { v4 as uuidv4 } from 'uuid'

const AddExpense = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const ref = useRef();
    const closeModal = () => ref.current.close();

    const onSubmit = (event) => {
        event.preventDefault();
        
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });;

        closeModal();
    };

  return (
    <div>
        <Popup
            trigger={<button className="add__expense-button"> + </button>}
            modal
            nested
            ref={ref}
        >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Add Expense </div>
        <div className="content">
          {' '}
          <form onSubmit={onSubmit}>
                    <div className='expense__input'>
                        <label for='name'>Name</label>
                        <input required type="text" className='add__expense__input' id='name' value={name} onChange={(event) => setName(event.target.value)} 
                        ></input>
                    </div>
                    <div className='expense__input flex-grow: 9'>
                        <label for="cost">Amount</label>
                        <input required type="text" className='add__expense__input' id='cost' value={cost} onChange={(event) => setCost(event.target.value)} 
                        ></input>
                    </div>
                    <div className='expense__button'>
                        <button type='submit' className='btn btn-primary'>
                            Add
                        </button>
                    </div>
            </form>
        </div>
      </div>
    )}
  </Popup>
    </div>
  );
};

export default AddExpense