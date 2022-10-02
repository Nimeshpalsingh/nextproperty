import Link from 'next/link'
import { ListGroup } from 'react-bootstrap'
import Navbar from '../componet/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function AddProperty() {
  return (
 
<div>
<div className="container">
  
      <div className="row mt-5"><h5>Properties Catgories</h5></div>
    
      <ListGroup >
      <ListGroup.Item action variant="light" >
      For Sale: House & Apartment
      </ListGroup.Item >
    <ListGroup.Item  action variant="light">
      For Rent: House & Apartment
      </ListGroup.Item>
      <Link  href='property/PlotsLands/AddPlotsLands'><ListGroup.Item action variant="light" >
      Land & Plots
      </ListGroup.Item></Link>
    <ListGroup.Item  action variant="light">
      For Rent : Shops & Offices
      </ListGroup.Item>
       <ListGroup.Item action variant="light">
      For Sales : Shops & Offices

      </ListGroup.Item>
      <ListGroup.Item action variant="light">
      PG & Guest Houses

      </ListGroup.Item>
 
    </ListGroup>










<Navbar/>
   
</div>



    </div>
  )
}

export default AddProperty