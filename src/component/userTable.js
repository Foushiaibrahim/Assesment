import React from 'react';
import '../css/styles.css';
import {BsArrowDownUp} from 'react-icons/bs'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import {Nav,  Navbar, NavDropdown,NavLink} from 'react-bootstrap';
import Table from './table';

function home(e) {
    e.preventDefault();
    window.location = '/second';
}
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  
  const getColor = (expire) => {
   
    if (expire == 90) return '#9b957f' ;
	if (expire < 10) return 'orange';
    return '';
};
const add=(expire)=>{
	if(expire == 90) return <button className='new'>NEW</button>
}
  return (
	<div>
	<Navbar collapseOnSelect expand="lg" bg="white" variant="dark" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                
				<div style={{display:'flex'}}>
                
				<ul className="navbar-nav " >
				
				
				<NavLink className="maincart"  exact activeClassName="underline" activeStyle to='/'>Active Carts</NavLink>
	
				<NavLink className="maincart"  exact ClassName="underline" to="/people-profiles">Archived Carts</NavLink>
				</ul>
				
				
			
				
					</div>
					<div style={{display:'flex',justifyContent:'space-around'}}>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
						
						
							
<div class="main">
  <div class="form-group">
    <span class="fa fa-search form-control-icon"></span>
    <input type="text" class="form-control" placeholder="Search"/>
  </div>  
</div>
<div class="main">
  <div class="form-group">
    <span class="fa fa-filter form-control-icon"></span>
    <input type="text" class="form-control" placeholder="Filter"/>
  </div>  
</div>
							
							
						</Nav>
					</Navbar.Collapse>
					</div>
				</Navbar>	
	<MDBTable striped  style={{ width:'100%' ,margin:'5px 0px 0px 0px' ,borderStyle:'groove'}}>
      <MDBTableHead >
        <tr style={{color:'gray'}} >
          <th onClick={() => requestSort('name')}
              className={getClassNamesFor('name')} >PRODUCT NAME <BsArrowDownUp style={{margin:'0px 5px'}}/></th>
          <th onClick={() => requestSort('cartname')}
              className={getClassNamesFor('cartname')}>CART NAME <BsArrowDownUp style={{margin:'0px 5px'}}/></th>
          <th onClick={() => requestSort('shipping')}
              className={getClassNamesFor('shipping')}>SHIPPING POINT <BsArrowDownUp style={{margin:'0px 5px'}}/></th>
          <th onClick={() => requestSort('created')}
              className={getClassNamesFor('created')}>CREATED BY <BsArrowDownUp style={{margin:'0px 5px'}}/></th>
          <th onClick={() => requestSort('expire')}
              className={getClassNamesFor('expire')}>EXPIRY <BsArrowDownUp style={{margin:'0px 5px'}}/></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        
		{items.map((item) => (
          <tr key={item.id}   >
            <td>{item.name}</td>
            <td>{item.cartname}</td>
            <td>{item.shipping}</td>
			<td>{item.created}</td>
		   <td style={{ color: getColor(item.expire) }}  >{"Expires in "+item.expire +' Days '}{add(item.expire)} </td>
          </tr>
		  		  
		))};
		
      </MDBTableBody>
    </MDBTable>
	</div>
	
    
  );
};

export default function UserApp() {
  return (
    <div className="App">
      <ProductTable
        products={[



          { id: 1, name: 'AMD collection garge Door,2 Entry Door', cartname: 'Johnson_classic14209123', shipping: 'Russia Plant',created:'Manoj Bajpayee',expire:6 },
		  { id: 2, name: 'Reyan Ridge@ collection ultra-Grain', cartname: 'Michigan_classic 14209212', shipping: 'ABC Plant',created:'steve Benneth',expire:90 },
		  { id: 3, name: '2 classic collection garge Door,2 Entry Door', cartname: 'Johnson_classic14209123', shipping: 'Russia Plant',created:'Manoj Bajpayee',expire:3 },
		  { id: 4, name: 'Canyon Ridge@ collection ultra-Grain', cartname: 'Michigan_classic 14209212', shipping: 'ABC Plant',created:'steve Benneth',expire: 5  },
		  { id: 5, name: ' collection garge Door,2 Entry Door', cartname: 'Johnson_classic14209123', shipping: 'Russia Plant',created:'Manoj Bajpayee',expire:90 },
		  { id: 6, name: 'Canyon Ridge@ collection ultra-Grain', cartname: 'Michigan_classic 14209212', shipping: 'ABC Plant',created:'steve Benneth',expire: 2  },
		  { id: 7, name: '2 classic collection garge Door,2 Entry Door', cartname: 'Johnson_classic14209123', shipping: 'Russia Plant',created:'Manoj Bajpayee',expire:6 },
		  { id: 8, name: 'Ridge@ collection ultra-Grain', cartname: 'Michigan_classic 14209212', shipping: 'ABC Plant',created:'steve Benneth',expire:90 },
          
        ]}
      />
	  
<div style={{display:'flex',justifyContent:'right'}}>
    <button style={{background:'#a5382b',border:'1px solid salmon' ,color:'#bbbaba',borderRadius:'25px',padding:'15px',position:'absolute',bottom:'2%',margin:'0 5% 0 0'}} class="fa fa-plus" onClick={home}></button>
    </div>
  

    </div>
  );
}
