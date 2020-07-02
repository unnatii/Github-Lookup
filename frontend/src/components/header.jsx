import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom'; 
import logo from '../images/logo3.png'

const Header = () =>{
 return(
   <BrowserRouter>
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <img src={logo} style={{width:"50px"}} alt="Logo" />
  <Link to="/" className="navbar-brand" > Github Lookup!</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/" className="nav-link" >option</Link>
      </li>
      
    </ul>
  </div>
</nav>

</BrowserRouter>
 )
}

export default Header;