import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import '../css/styles.css'

const Table = (items, config = null) => {
  
  return (
    <MDBTable striped filter >
      <MDBTableHead >
        <tr>
          <th data-mdb-sort="true">PRODUCT NAME</th>
          <th data-mdb-sort="false">CART NAME</th>
          <th>SHIPPING POINT</th>
          <th>CREATED BY</th>
          <th>EXPIRY</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
       <td>2 classic collection garge Door,2 Entry Door</td>
<td>Johnson_classic14209123</td>
<td>Russia Plant</td>
<td>Manoj Bajpayee</td>
<td className='bexpire'>Expire in 6 Days</td>
</tr><tr>
<td>Canyon Ridge@ collection ultra-Grain</td>
<td>Michigan_classic 14209212</td>
<td>ABC Plant</td>
<td>steve Benneth</td>
<td className='aexpire'>Expires in 90 days<button className='new'>NEW</button></td> 
</tr><tr>

<td>8'8"*8'6" CAN211CCW1 commerical DOOR INTELLICORE</td>
<td>Christopher_Classic</td>
<td>Russia Plant</td>
<td>Menhatton creesh</td>
<td className='bexpire'>Expires in 5 days</td>
         
        </tr>
        <tr>
       <td>2 classic collection garge Door,2 Entry Door</td>
<td>Johnson_classic14209123</td>
<td>Russia Plant</td>
<td>Manoj Bajpayee</td>
<td className='bexpire'>Expire in 6 Days</td>
</tr><tr>
<td>Canyon Ridge@ collection ultra-Grain</td>
<td>Michigan_classic 14209212</td>
<td>ABC Plant</td>
<td>steve Benneth</td>
<td className='aexpire'>Expires in 90 days <button className='new'>NEW</button></td> 
</tr><tr>

<td>8'8"*8'6" CAN211CCW1 commerical DOOR INTELLICORE</td>
<td>Christopher_Classic</td>
<td>Russia Plant</td>
<td>Menhatton creesh</td>
<td className='bexpire'>Expires in 5 days</td>
         
        </tr>
        <tr>
       <td>2 classic collection garge Door,2 Entry Door</td>
<td>Johnson_classic14209123</td>
<td>Russia Plant</td>
<td>Manoj Bajpayee</td>
<td className='bexpire'>Expire in 6 Days</td>
</tr><tr>
<td>Canyon Ridge@ collection ultra-Grain</td>
<td>Michigan_classic 14209212</td>
<td>ABC Plant</td>
<td>steve Benneth</td>
<div className='expire'><td className='aexpire'>Expires in 90 days<button className='new'>NEW</button></td> </div>
</tr><tr>

<td>8'8"*8'6" CAN211CCW1 commerical DOOR INTELLICORE</td>
<td>Christopher_Classic</td>
<td>Russia Plant</td>
<td>Menhatton creesh</td>
<td className='bexpire'>Expires in 5 days</td>
         
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default Table;