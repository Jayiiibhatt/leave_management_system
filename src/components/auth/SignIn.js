import React, { Component } from 'react';
import './auth.css';

class SignIn extends Component {
  render() {
    return (
        <div className="card">
            <h5 className="card-header info-color white-text text-center py-4">
                <strong>Sign in</strong>
            </h5>
            <div className="card-body px-lg-5 pt-0">
                <form className="text-center">
                    <div className="md-form">
                        <input type="email" id="materialLoginFormEmail" className="form-control" />
                        <label htmlFor="materialLoginFormEmail">E-mail</label>
                    </div>
                    <div className="md-form">
                        <input type="password" id="materialLoginFormPassword" className="form-control" />
                        <label htmlFor="materialLoginFormPassword">Password</label>
                    </div>
                    <div className="d-flex justify-content-around">
                        <div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="materialLoginFormRemember" />
                                <label className="form-check-label" htmlFor="materialLoginFormRemember">Remember me</label>
                            </div>
                        </div>
                        <div>
                            <Link to="">Forgot password?</Link>
                        </div>
                    </div>
                    <button className="btn btn-success btn-rounded" type="submit">Sign in</button>    
                    <p>Not a member?
                        <Link to=""> &nbsp;Register</Link>
                    </p>
                </form>        
            </div>
        </div>
    )
  }
}

export default SignIn;
