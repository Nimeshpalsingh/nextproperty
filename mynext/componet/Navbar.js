import Link from 'next/link';
import { ImHome } from 'react-icons/im';
import { FaBuilding ,FaUserAlt, FaDashcube} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
       
       <div className="text-white d-flex d-flex justify-content-around fixed-bottom bg-primary ">
  <Link  href='/'  ><div className="order-1 p-2"><ImHome/>Home</div></Link>
  <Link  href='/AddProperty'  ><div className="order-2 p-2"><FaBuilding/>Add Property</div></Link>

  <Link  href='/Account/MyAds' ><div className="order-3 p-2"><FaDashcube/>MyAds</div></Link>
  <Link  href='/Account/Account'  ><div className="order-4 p-2"><FaUserAlt/>Account</div></Link>




</div>



    </div>
  )
}

export default Navbar