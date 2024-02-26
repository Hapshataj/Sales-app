import React from 'react'
import '../stylesheet/login.css'

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Registered sucessfully')
        window.location.href = '/login';
    };
    return (
        <div className="container login-container " style={{ marginTop: '8rem' }}>
            <div className="row">
                <div className="col-12">
                    <div className="card form-card shadow text-center">
                        <div className="card-body px-5">
                            <h5 className="card-title fw-bold mt-3">Register</h5>
                            <div className="mb-3">
                                <input className="p-3 mt-4 mb-2 form-control shadow-sm input-bg" type='text' placeholder='First Name ' required></input>
                            </div>
                            <div className="mb-3">
                                <input className="p-3 mt-4 mb-2 form-control shadow-sm input-bg" type='text' placeholder='Last Name ' required></input>
                            </div>
                            <div className="mb-3">
                                <input className="p-3 mt-4 mb-2 form-control shadow-sm input-bg" type='email' placeholder='Email' required></input>
                            </div>

                            <div className="mb-3">
                                <input className="p-3 mt-4 mb-2 form-control shadow-sm input-bg" type='password' placeholder='Password' required></input>
                            </div>
                            <div className='d-grid'>
                                <button type="submit" className="login-btn login-btn-blue" onClick={handleSubmit}>Register</button >

                            </div>
                            <div className='my-4'>
                                <hr className='text-muted' />
                                <h6 className='text-muted center'>OR</h6>
                                <hr className='text-muted' />

                            </div>
                            <div className='mt-3 mb-5 d-grid'>
                                <button type='submit' className='login-btn login-btn-white'>
                                    <span className='text-muted'>Already have an account?</span>
                                    <span className='ms-1 text-info fw-bold'><a href='/register'>Login</a></span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register