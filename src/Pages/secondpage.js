import React, { Component } from 'react';
import Header from '../component/header';
import UserApp from '../component/userTable';
import {BsArrowRightShort} from 'react-icons/bs'
import {Nav,  Navbar, NavDropdown,NavLink,Card} from 'react-bootstrap';
function backpage(e) {
    e.preventDefault();
    window.location = '/';
}
function thirdpage(e) {
    e.preventDefault();
    window.location = '/third';
}
export default function Secondpage() {
  return (
      <div>
      <Header/>
      <div>           
        <Navbar  collapseOnSelect expand="lg"  variant="dark" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',background:'#455970'}}>
        
        <div style={{display:'flex',flexDirection:'row'}}>
        <span class="fa fa-arrow-left form-control-icon" style={{color:'rgba(255,255,255,.55)',margin:'12px 0 0 0'}} onClick={backpage}></span>
        <NavLink className="mainlink" style={{color:'whitesmoke'}}  exact ClassName="underline" to="/people-profiles">Create a new order</NavLink>
</div>
<div>
<span class="fa fa-bars form-control-icon" style={{color:'rgba(255,255,255)',margin:'12px 0 0 0'}} onClick={backpage}></span>
</div>
</Navbar>
      </div>
      <Card style={{margin:'2% 5%',background:'#acb7c014'}} onClick={thirdpage}>
  
  <Card.Body>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <div>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Configure your door from scratch{' '}
      </p>
      <footer className="blockquote-footer">
        Residential,Commerical,Entry doors
      </footer>
    </blockquote>
    </div>
    <div style={{display:'flex',alignItems:'center',fontWeight:'bold'}} ><BsArrowRightShort className='arrowicon'/></div>
    </div>
  </Card.Body>
</Card>
<Card style={{margin:'2% 5%',background:'#acb7c014'}}>
  
  <Card.Body>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <div>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Configure your door from scratch{' '}
      </p>
      <footer className="blockquote-footer">
        Residential,Commerical,Entry doors
      </footer>
    </blockquote>
    </div>
    <div style={{display:'flex',alignItems:'center',fontWeight:'bold'}} > <BsArrowRightShort className='arrowicon'/> </div>
    </div>
  </Card.Body>
</Card>
<Card style={{margin:'2% 5%',background:'#acb7c014'}}>
  
  <Card.Body>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <div>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Parts/Openers{' '}
      </p>
      <footer className="blockquote-footer">
        Order Parts and Openers
      </footer>
    </blockquote>
    </div>
    <div style={{display:'flex',alignItems:'center',fontWeight:'bold'}} ><BsArrowRightShort className='arrowicon'/></div>
    </div>
  </Card.Body>
</Card>
<Card style={{margin:'2% 5%',background:'#acb7c014'}}>
  
  <Card.Body>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <div>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Choose from favourites{' '}
      </p>
      <footer className="blockquote-footer">
        Re-order door from your favourites
      </footer>
    </blockquote>
    </div>
    <div style={{display:'flex',alignItems:'center',fontWeight:'bold'}} ><BsArrowRightShort className='arrowicon'/></div>
    </div>
  </Card.Body>
</Card>
      </div>
  )
}