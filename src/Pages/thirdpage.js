import React, { Component } from 'react';
import Header from '../component/header';
import UserApp from '../component/userTable';
import {BsQuestionCircleFill} from 'react-icons/bs'
import {Nav,  Navbar, NavDropdown,NavLink,Dropdown,DropdownButton} from 'react-bootstrap';
function backpage(e) {
    e.preventDefault();
    window.location = '/second';
}
function fourth(e) {
    e.preventDefault();
    window.location = '/fourth';
}
export default function Thirdpage() {
  return (
      <div>
      <Header/>
      <div>           
        <Navbar  collapseOnSelect expand="lg"  variant="dark" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',background:'#455970'}}>
        
        <div style={{display:'flex',flexDirection:'row'}}>
        <span class="fa fa-arrow-left form-control-icon" style={{color:'rgba(255,255,255,.55)',margin:'12px 0 0 0'}} onClick={backpage}></span>
        <NavLink className="mainlink" style={{color:'whitesmoke'}}  exact ClassName="underline" to="/people-profiles">Create a new order</NavLink>
        <p style={{color:'rgba(255,255,255,.55)',margin:'9px 0 0 0'}}>2 of 3</p>
</div>
<div>
<span class="fa fa-bars form-control-icon" style={{color:'rgba(255,255,255)',margin:'12px 0 0 0'}} onClick={backpage}></span>
</div>
</Navbar>
      </div>
     <div className='container shadow'>
        
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <div className='dropdowntitle'>select category</div><div><DropdownButton size='md' className='m-2' variant="default" id="dropdown-basic-button" style={{border:'1px solid gray',width:'250px',borderRadius:'5px'}} title="Residential Door" drop="down">  
    <Dropdown.Item href="#/action-1">Residential</Dropdown.Item>  
    <Dropdown.Item href="#/action-2">Residential 2</Dropdown.Item>       
</DropdownButton></div>
        </div>
       
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <div className='dropdowntitle'>select Series  <BsQuestionCircleFill color="gray"/></div><div><DropdownButton size='md' className='m-2' variant="default" id="dropdown-basic-button" style={{border:'1px solid gray',width:'250px',borderRadius:'5px'}} title="Canyon Ridge@ Collection" drop="down">  
    <Dropdown.Item href="#/action-1">Residential</Dropdown.Item>  
    <Dropdown.Item href="#/action-2">Residential 2</Dropdown.Item>       
</DropdownButton></div>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <div className='dropdowntitle'>Door Type  <BsQuestionCircleFill color="gray"/></div><div><DropdownButton size='md' className='m-2' variant="default" id="dropdown-basic-button" style={{border:'1px solid gray',width:'250px',borderRadius:'5px'}} title="CAN212" drop="down">  
    <Dropdown.Item href="#/action-1">Residential</Dropdown.Item>  
    <Dropdown.Item href="#/action-2">Residential 2</Dropdown.Item>       
</DropdownButton></div>
        </div>
      
 
     </div>
     <div  style={{display:'flex',justifyContent:'right',margin:'2% 3%'}}>
    <button className='configbtn'  onClick={fourth} >CONFIGURE</button>
    </div>
      </div>
  )
}