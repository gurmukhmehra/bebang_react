import React from 'react';
import {Link} from 'react-router-dom';
import MainLogo from '../assets/images/bebang_logo.png';
const Header=()=>{
    
    return(
        <div>
            <div className="container-fluid bg-green pt-1 pb-1 text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <ul className="top-right mb-0">
                                <li><i className="fa fa-envelope"></i> support@gmail.com</li>
                                <li><i className="fa fa-phone"></i> 0172-123456</li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 top-right-content">
                            <ul className="top-right mb-0">
                                <li><Link to="#"><i className="fa fa-facebook"></i> Facebook</Link></li>
                                <li><Link to="#"><i className="fa fa-instagram"></i> Instagram</Link></li>
                                <li><Link to="#"><i className="fa fa-linkedin"></i> Linkedin</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-1 pb-1 text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <Link to="/"><img src={MainLogo} alt="logo" className="logo"/></Link>
                        </div>
                        <div className="col-sm-6"> 
                            <ul className="main_menu mt-3 text-center">
                                <li><Link to="/">Home</Link></li>                                 
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="">Menu</Link></li>                         
                            </ul>                                            
                        </div>
                        <div className="col-sm-3 d-inline">
                            <ul className="userArea text-center">                                
                                <li>
                                    <Link to="/sign-up" className="btn btn-outline-dark"><i className="fa fa-user-plus"></i> Sign up</Link>
                                </li>                                
                            </ul>                            
                        </div>
                    </div>        
                </div>
            </div>
        </div>
    );
}

export default Header;