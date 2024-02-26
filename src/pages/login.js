import React from 'react'
import '../stylesheet/login.css'

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('logined sucessfully')
        window.location.href = '/addsales';
    };

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-12">
                    <div className="card form-card shadow text-center">
                        <div className="card-body px-5">
                            <h5 className="card-title mt-3 fw-bold ">Login</h5>
                            <div className="mb-3">
                                <input className="p-3 mt-4 mb-2 form-control shadow-sm input-bg" type='email' placeholder='Email or Username ' required></input>
                            </div>
                            <div className="mb-3">
                                <input className="p-3 mt-4 mb-2 form-control shadow-sm input-bg" type='password' placeholder='Password' required></input>
                            </div>
                            <div className='d-grid'>
                                <button type="submit" className="login-btn login-btn-blue" onClick={handleSubmit}>Login</button >

                            </div>
                            <div className='my-4'>
                                <hr className='text-muted' />
                                <h6 className='text-muted center'>OR</h6>
                                <hr className='text-muted' />

                            </div>
                            <div className='mt-3 mb-5 d-grid'>
                                <button type='submit' className='login-btn login-btn-white'>
                                    <span className='text-muted'>Don't have an account?</span>
                                    <span className='ms-1 text-info fw-bold'><a href='/register'>Register</a></span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    )
}

export default Login