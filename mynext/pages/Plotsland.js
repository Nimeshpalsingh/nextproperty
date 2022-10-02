import Link from 'next/link';
import Navbar from '../componet/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../componet/Search';
import { Website } from '../Variable';
import slugify from 'slugify';



export async function getStaticProps(context) {
    const res = await fetch(`${Website}plotlandget.php`)
    const data = await res.json()

    if (!data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
          // statusCode: 301
        },
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }



const Plotsland = ({data}) => {
  return (
  
        <div className="container">
<div className="row">
    <Search/>
       
  
        {data.map((x)=>{ return( <div className="col-md-6 mt-2 " key={x.pid}>
        <Link  scroll={false} href={`/property/PlotsLands/${slugify(x.name)}/${slugify(x.city)}/${slugify(x.region)}/${slugify(x.adtitle)}/${x.pid}`}   key={x.pid} passHref={true}>
      

      <div className="card">
            <div className="row">
              <div className="col-4 ">
                <img
                  className="card-img-top "
                  src={`${Website}`+x.imgpath}
                  alt="Card image cap"
               height='150px'
                />
              </div>
              <div className="col-7 g-0">
                <div className="card-body">
                  <h5 className="card-title">₹ {x.pricing}</h5>
                 
                  <p className="card-text">
                    {x.adtitle}                   
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      { x.postdate}
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      {x.region}, {x.locarea}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div></Link>
        </div> )})}


        </div>  <Navbar/>
        </div>
       
       
  )
}

export default Plotsland