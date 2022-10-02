import Link from "next/link";
import LazyLoad from "react-lazy-load";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Catgory = () => {



    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };




  return (
    <div>


<div className="m-4">
      <LazyLoad>

  <Carousel infinite={true}  swipeable={false}
  draggable={false}   keyBoardControl={true} responsive={responsive}>
  
 <Link href='/Plotsland'><div className="card" style={{width: '100%'}}>

  <img  className="card-img-top" src='./1.jpg' width='50%' alt="BigCo Inc. logo"/>
  <div className="card-body">
    <p className="card-text">Plots & Land</p>
  </div>
</div></Link>

  
<div className="card" style={{width: '100%', height: '100%'}}>

<img  className="card-img-top" src='./2.jpg' width='100%' height= '100%' alt="BigCo Inc. logo"/>
<div className="card-body">
  <p className="card-text">For Sale : House and Apartment</p>
</div>
</div>
<div className="card" style={{width: '100%'}}>

<img  className="card-img-top" src='./1.jpg' width='50%' alt="BigCo Inc. logo"/>
<div className="card-body">
  <p className="card-text">For Rent : House and Apartment</p>
</div>
</div>

<div className="card" style={{width: '100%'}}>

<img  className="card-img-top" src='./2.jpg' width='50%' alt="BigCo Inc. logo"/>
<div className="card-body">
  <p className="card-text">For Rent : Shops & Offices</p>
</div>
</div>
<div className="card" style={{width: '100%'}}>

<img  className="card-img-top" src='./1.jpg' width='50%' alt="BigCo Inc. logo"/>
<div className="card-body">
  <p className="card-text">For Sale : Shops & Offices</p>
</div>
</div>
<div className="card" style={{width: '100%'}}>

<img  className="card-img-top" src='./2.jpg' width='50%' alt="BigCo Inc. logo"/>
<div className="card-body">
  <p className="card-text">PG & Guest Houses</p>
</div>
</div>


</Carousel>
      
</LazyLoad>
    </div>



        
    </div>
  )
}

export default Catgory