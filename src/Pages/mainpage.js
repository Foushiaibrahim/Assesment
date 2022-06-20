import React, { Component } from 'react';
import Header from '../component/header';
import UserApp from '../component/userTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar, NavDropdown,NavLink} from 'react-bootstrap';
import'../css/styles.css'

export default function Mainpage() {
  return (
      <div>
      <Header/>
      <div>           
        <Navbar  collapseOnSelect expand="lg"  variant="dark" style={{display:'flex',flexDirection:'row',justifyContent:'center',background:'#455970'}}>
        <ul className="navbar-nav " >           
        <NavLink className="mainlink"  exact activeClassName="underline" activeStyle to="/">CARTS</NavLink>
        <NavLink className="mainlink"  exact ClassName="underline" to="/people-profiles">FAVORITE</NavLink>
        </ul>            
        </Navbar>
      </div>
      <UserApp/>
      </div>
  )
}