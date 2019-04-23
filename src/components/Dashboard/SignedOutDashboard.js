import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const SignedOutDashboard = () => {
  return (
    <div className="jumbotron text-center hoverable p-5 m-5">
        <div className="row">
            <div className="col-md-4 offset-md-1 mx-3 my-3">
                <div className="view overlay">
                    <img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" className="img-fluid" alt="Sample for first version of blog listing" />
                    <Link>
                        <div className="mask rgba-white-slight"></div>
                    </Link>
                </div>
            </div>
            <div className="col-md-7 text-md-left ml-3 mt-3">
                <Link href="#!" className="green-text">
                    <h6 className="h6 pb-1">
                        <i className="fas fa-desktop pr-1"></i> Leave Policy
                    </h6>
                </Link>
                <h4 className="h4 mb-4">Here, aprove your leaves.</h4>
                <p className="font-weight-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                <p className="font-weight-normal">by <Link><strong>Jay Bhatt</strong></Link>, 23/04/2019</p>
                <NavLink to="/signin" className="btn btn-success">Sign in</NavLink>
                <NavLink to="/register" className="btn btn-danger">Register</NavLink>
            </div>
        </div>
    </div>
  )
}


export default SignedOutDashboard;
