import React, { Component } from 'react';
import Header from '../component/header';
import UserApp from '../component/userTable';
import {BsQuestionCircleFill} from 'react-icons/bs'
import {Nav,  Navbar, NavDropdown,NavLink,Dropdown,DropdownButton,ProgressBar} from 'react-bootstrap';
import DropDownButton from '../component/dropdown';
function backpage(e) {
    e.preventDefault();
    window.location = '/third';
}
function lastpage(e) {
    e.preventDefault();
    window.location = '/last';
}
const getColor = (radio) => {
   
    
	
    return 'red';}
export default function Fourthpage() {
    const now = 45;
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
      <ProgressBar  now={45}  label={`${now}%`}variant="success" className='progress'/>
      <div>
      <div className='titlecontainer container1 '>Layout Option</div>
     <div className='container1 shadow' >
     <DropDownButton title="Assembly type:" Dtitle="Complete Door" list="door 1" list1="door 2"/>        
        
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <div className='dropdowntitle'>Measure Size: <BsQuestionCircleFill color="gray"/></div>
        <div style={{display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',flexDirection:'row',width:'250px',justifyContent:'space-evenly'}}>
            <p className='dropdowntitle'>width:</p>
            <DropdownButton size='md' className='m-2' variant="default" id="dropdown-basic-button" style={{border:'1px solid gray',borderRadius:'5px'}} title="8 ft" drop="down">  
    <Dropdown.Item href="#/action-1">door 1</Dropdown.Item>  
    <Dropdown.Item href="#/action-2">door 2</Dropdown.Item>       
</DropdownButton>
<DropdownButton size='md' className='m-2' variant="default" id="dropdown-basic-button" style={{border:'1px solid gray',borderRadius:'5px'}} title="5 in" drop="down">  
    <Dropdown.Item href="#/action-1">door 1</Dropdown.Item>  
    <Dropdown.Item href="#/action-2">door 2</Dropdown.Item>       
</DropdownButton></div>
<div style={{display:'flex',flexDirection:'row',width:'250px',justifyContent:'space-evenly'}}>
            <p className='dropdowntitle'>Height:</p>
            <DropdownButton size='md' className='m-2' variant="default" id="dropdown-basic-button" style={{border:'1px solid gray',borderRadius:'5px'}} title="8 ft" drop="down">  
    <Dropdown.Item href="#/action-1">door 1</Dropdown.Item>  
    <Dropdown.Item href="#/action-2">door 2</Dropdown.Item>       
</DropdownButton>
<DropdownButton size='md' className='m-2' variant="default" id="dropdown-basic-button" style={{border:'1px solid gray',borderRadius:'5px'}} title="5 in" drop="down">  
    <Dropdown.Item href="#/action-1">door 1</Dropdown.Item>  
    <Dropdown.Item href="#/action-2">door 2</Dropdown.Item>       
</DropdownButton></div>
</div>
</div>
<DropDownButton title="WinCode:" Dtitle="Wincode W1" list="door 1" list1="door 2"/>     
<DropDownButton title="Design:" Dtitle="CC" list="door 1" list1="door 2"/>  
 <DropDownButton title="Color:" Dtitle="darked color" list="door 1" list1="door 2"/>        
   
     </div></div>

     <div>
      <div className='titlecontainer container1 '>Windows Option</div>
     <div className='container2 shadow' >
     <DropDownButton title="Glass Type:" Dtitle="Solid (no Windpows)" list="door 1" list1="door 2"/>  
     <DropDownButton title="Selection(s) Glazed:" Dtitle="Section 4" list="door 1" list1="door 2"/>
     <DropDownButton title="Framing:" Dtitle="Arch Design 1" list="door 1" list1="door 2"/>    
      
     </div></div>
     <div className='titlecontainer container1 '>Track Option</div>
     <div className='container1 shadow' >
     <DropDownButton title="Spring:" Dtitle="Galvanized Torsion" list="door 1" list1="door 2"/>
     <DropDownButton title="Track Size:" Dtitle="'2' Flag & Jamb Brackets Loose" list="door 1" list1="door 2"/>
     <DropDownButton title="Track Mount:" Dtitle="Bracket" list="door 1" list1="door 2"/>
     <DropDownButton title="Track Lift:" Dtitle="Standard" list="door 1" list1="door 2"/>
     <DropDownButton title="Track Radius:" Dtitle="12' Radius" list="door 1" list1="door 2"/>    
      
     </div>
     <div className='titlecontainer container1 '>Other Options</div>
     <div className='container1 shadow' >
     <DropDownButton title="Lock:" Dtitle="Inside side lock" list="door 1" list1="door 2"/>
    

        
        
      
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <div className='dropdowntitle'>Track Size: <BsQuestionCircleFill color="gray"/></div><div><input type="radio" name="radio" style={{ color: "darked"}}/> No Lock Hole</div>
        </div> 
        <DropDownButton title="Packaging:" Dtitle="Distrubutor" list="door 1" list1="door 2"/>

        
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <div className='dropdowntitle'>Additional Information: <BsQuestionCircleFill color="gray"/></div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',flexDirection:'row'}}><input  type="checkbox" id="Extra Struct" name="Extra Struct" value="Extra Struct" /><p style={{margin:'-5px 0 12px 12px'}}>Extra Struct</p></div>
        <div style={{display:'flex',flexDirection:'row'}}><input  type="checkbox" id="Extra Struct" name="Extra Struct" value="Extra Struct" /><p style={{margin:'-5px 0 12px 12px'}}>spade strap hinger(s)</p></div>
        <div style={{display:'flex',flexDirection:'row'}}><input  type="checkbox" id="Extra Struct" name="Extra Struct" value="Extra Struct" /><p style={{margin:'-5px 0 12px 12px'}}>14 GA Quiet Hinge</p></div>
        <div style={{display:'flex',flexDirection:'row'}}><input  type="checkbox" id="Extra Struct" name="Extra Struct" value="Extra Struct" /><p style={{margin:'-5px 0 12px 12px'}}>Less Bottom Astragal</p></div>
        <div style={{display:'flex',flexDirection:'row'}}><input  type="checkbox" id="Extra Struct" name="Extra Struct" value="Extra Struct" /><p style={{margin:'-5px 0 12px 12px'}}>Gold Bar Gutantee(Select Dealers)</p></div>
        
        </div>
        <div >
            <DropdownButton size='md' className='m-2' variant="default" id="dropdown-basic-button" style={{border:'1px solid gray',borderRadius:'5px'}} title='Extra Struct' drop="down">  
    <Dropdown.Item href="#/action-1">win 1</Dropdown.Item>  
    <Dropdown.Item href="#/action-2">win 2</Dropdown.Item>       
</DropdownButton></div>
        
        </div>
        </div> 
       
        
    
     
     
     </div>
     <div  style={{display:'flex', justifyContent:'right',margin:'2% 3%',flexDirection:'row'}}>
     <button className='prebtn'  >PREVIEW</button>
    <button className='configbtn' onClick={lastpage}  >ADD TO CART</button>
    </div>
      </div>
  )
}