import React from 'react';
import './styles/CreateBill.css';

const CreateBill = ({isVisible, onClose}) => {
    if(!isVisible){
        return null;
    }
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }

    return(
        <div className="create-bill-bg" onClick={handleClose} id='wrapper'>
            <div className='popup'>
                <button className='close-btn' onClick={() => onClose()}>
                    X
                </button>
                <div className='modal'>
                <label className='create-bill-text'>NEW BILL</label>
                    <form className='form'>
                    <input className='form-input' type = 'text' placeholder='Bill Name '/>
                    <input type ="date"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateBill; 