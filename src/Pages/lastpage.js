import React, { Component } from 'react';
import Header from '../component/header';
import UserApp from '../component/userTable';
import {BsHeartFill,BsFillPatchCheckFill,BsFillBrushFill,BsFillFolderSymlinkFill,BsFillTrashFill,BsBagCheckFill} from 'react-icons/bs'
import {Nav,  Navbar, NavDropdown,NavLink,Dropdown,DropdownButton,ProgressBar} from 'react-bootstrap';
import DropDownButton from '../component/dropdown';

function backpage(e) {
    e.preventDefault();
    window.location = '/fourth';
}
function homepage(e) {
    e.preventDefault();
    window.location = '/';
}
const getColor = (radio) => {
   
    
	
    return 'red';}
export default function Lastpage() {
    const now = 45;
  return (
      <div>
      <Header/>
      <div>           
        <Navbar  collapseOnSelect expand="lg"  variant="dark" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',background:'#455970'}}>
        
        <div style={{display:'flex',flexDirection:'row'}}>
        <span class="fa fa-arrow-left form-control-icon" style={{color:'rgba(255,255,255,.55)',margin:'12px 0 0 0'}} onClick={backpage}></span>
        <NavLink className="mainlink" style={{color:'whitesmoke'}}  exact ClassName="underline" to="/people-profiles">Classic_John45012</NavLink>
        <p style={{color:'rgba(255,255,255,.55)',margin:'9px 0 0 0'}}>Cart #12345678</p>
</div>
<div>
<span class="fa fa-bars form-control-icon" style={{color:'rgba(255,255,255)',margin:'12px 0 0 0'}} onClick={backpage}></span>
</div>
</Navbar>

      </div>
      
      <div>
      <div className='lastcontainer  '></div>
     <div className='container3 shadow' >
     <p className="lasttitle">10' 0" * 10' 0.0" CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE,5TH Generation FINISH WaLDER DOOR</p>
     <div style={{display:'flex',flexDirection:'column',color:'#adb0ab'}}>
        <div>Job Name: Front door with glass <span style={{color:'darkred'}}>Change</span></div>
        <div>Product #CWD. Garage Door</div>
        <div>Availablity: <b style={{color:'#1e991e'}}> IN STOCK </b>(Available for Pickup)</div>
     </div>
     
     <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'2%'}}>
        <div><button className='IDbtn1'>-</button> <button className='IDbtn'>1</button> <button className='IDbtn1'>+</button></div>
        <div><p style={{color:'#1e991e'}}>Standard Multiplier: .432</p>
        <p style={{color:'#1e991e'}}>Secondary Multipliers Applied</p>
        <p style={{color:'darkred'}}><BsFillPatchCheckFill/> Apply MPQ</p></div>
        
        <div><p >Net Price: <b>$4500.00</b></p>
        <p >Unit price: $4800.00</p>
        <p style={{color:'darkred'}}>View price Details</p></div>     </div>
        <div style={{display:'flex',flexDirection:'row',marginTop:'2%'}}>
        <button className='iconbtn'><BsHeartFill/> Favourites</button>
        <button className='iconbtn'><BsFillBrushFill/> Edit</button>
        <button className='iconbtn'><BsFillFolderSymlinkFill/> Copy</button>
        <button className='iconbtn'><BsFillTrashFill/> Delete</button>
     </div>
     </div>
     <div style={{display:'flex',flexDirection:'row'}} >
        <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
     <div className='container3 shadow' ><div><p style={{color:'#5d605c'}}>Changes Delivery Date</p>
        <p style={{color:'#adb0ab'}}><input  type="date" style={{width:'70%'}}class="datepicker" data-date-format="mm/dd/yyyy" /></p>
        <p style={{color:'#5d605c'}}>standard Delivery: Tue May 28 -2019</p></div></div>
     <div className='container3 shadow' ><div><p style={{color:'#5d605c'}}>purchase Order Number</p>
        <p style={{color:'#adb0ab'}}><input  type="text" style={{width:'70%'}}placeholder="Enter PO Number" />
</p>
        <p style={{color:'#5d605c'}}>This PO will be useful to track this order items
</p></div></div></div>
     <div className='container3 shadow' style={{width:'50%'}} ><b>Bill Summary</b>
     <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingTop:'2%'}}>
        <text>Sub Total</text> <text>$ 4500.00</text></div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingTop:'2%'}}>
        <text>Energy Surcharge</text> <text>$70.18</text></div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingTop:'2%'}}>
        <text>Sales Tax</text> <text>$ 5061.11</text></div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingTop:'2%'}}>
        <text><b>TOTAL</b></text> <text><b>$ 5061.11</b></text></div>
        <div style={{borderBottom:'1px solid gray',width:'100%',paddingTop:'2%'}}/>
        <text style={{color:'darkred',margin:'3%'}} ><b><BsBagCheckFill/> Apply Tax</b></text>
        <p style={{width:'80%',color:'#adb0ab'}}>(The 1% discount is calculated into the total price for all door and doors parts .please refer to the queue or door acknowldged or details.)</p></div>
       
        
     </div>
     <div className='lastcontainer  '></div>
     <div className='container3 shadow' style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}  >
        <div>
<p style={{color:'#adb0ab'}}> Billing To</p>
<p><b>Bement Jared</b></p>
<p>144 curt shore,50,Madison,</p>
   <p> Hixson-42020</p>
    <p>Contact: (123) 456 7890
</p></div>
<div style={{borderLeft:'1px solid gray'}}/>
<div>
<p style={{color:'#adb0ab'}}> Billing From</p>
<p><b> Jared Bement</b></p>
<p>144 curt shore,50,Madison,</p>
   <p> Hixson-42020</p>
    <p>Contact: (123) 456 7890
</p></div>
     </div>
     
    </div>
    <div className='lastcontainer  '></div>
     <div className='container3 shadow' >

   
    <div style={{display:'flex', justifyContent:'right',margin:'2% 3%',flexDirection:'row'}}>
     
     <button className='prebtn'  >ADD CART</button>
    <button className='configbtn' onClick={homepage}  >PLACE ORDER</button>
    </div> </div>
      </div>
  )
}