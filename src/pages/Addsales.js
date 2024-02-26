import React from 'react';
import '../App.css'
function Addsales() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('new Sales entry added sucessfully')
        window.location.href = '/addsales';
    };
    return (

        <div className="card sales-card w-100">
            <h5 className="card-title text-center fw-bold">Add Sale Entry</h5>
            <div className="card-body">
                <form className='sales-form'>
                    <div className="mb-3">
                        <label className="form-label" >Product Name</label>
                        <input type="text" className="form-control custom-input" placeholder='eg.Product A' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quality</label>
                        <input type="number" className="form-control custom-input" placeholder='eg.1 or 2' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Amount</label>
                        <input type="number" className="form-control custom-input" placeholder='Enter amount in dollers($)' />
                    </div>
                    <button className="btn btn-primary w-100 rounded p-2 mt-2" type='submit' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Addsales;
