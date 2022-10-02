// import { Dropdown } from "bootstrap"
import Link from "next/link"
import { AiOutlineSearch } from "react-icons/ai"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Search = () => {
  return (


<div className="row  sticky-top bg-white ">
      <div className="  col-md-3  text-left  ">
    <h5 className='mt-3 text-left '>Property99Acres</h5></div>
   <div className="col-md-5 ">
   <div className="input-group rounded mt-3 float-left">

        <DropdownButton
          variant="outline-secondary"
          title="Cat"
          id="input-group-dropdown-1"
        >
         <Dropdown.Item ><Link href='/Plotsland'>Plots & Lands</Link></Dropdown.Item>
         <Dropdown.Divider />
          <Dropdown.Item href="#">For Sale : House and Apartment</Dropdown.Item>
          <Dropdown.Item href="#">For Rent : House and Apartment</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">For Rent : Shops & Offices</Dropdown.Item>
          <Dropdown.Item href="#">For Sale : Shops & Offices</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">PG & Guest Houses</Dropdown.Item>
          <Dropdown.Divider />
        </DropdownButton>
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span className="input-group-text border-0" id="search-addon">
 < AiOutlineSearch/>
  </span>
    
  </div></div>

  <hr/>
</div>


  )
}

export default Search