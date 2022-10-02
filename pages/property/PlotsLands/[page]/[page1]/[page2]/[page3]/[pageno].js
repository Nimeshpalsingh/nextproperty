import Button from '@mui/material/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegUserCircle, FaShareAltSquare } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { Website } from '../../../../../../../Variable';


// export async function getStaticPaths() {

//     const res = await fetch(`${Website}plotlandget.php`)
//     const data = await res.json();
//     console.log(data);
// const paths = data.map((y)=>{
//     return{  
// params:{

//   page:y.name,
//   page1:y.city,
//   page2:y.region,
//   page3:y.locarea,
// pageno:y.pid.toString(),

// },

// }});


// return{
// paths,
// fallback:true,


// }



//   }


  // export async function getStaticProps(context) {
  // const id =  context.params.pageno;
  // debugger;
  // console.log(context)
  //   const res = await fetch(`${Website}mycarddetails.php?card_id=`+id)
  //   const data = await res.json();

  // return {
  //     props: { data }, // will be passed to the page component as props
  //   }


  // }

  

  export async function getServerSideProps({query}) {
    // Fetch data from external API
 const {pageno} =  query;

//   
// console.log(context.params)
    const res = await fetch(`${Website}mycarddetails.php?card_id=`+pageno)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }






// export async function getStaticProps(context) {
//     const res = await fetch(`${Website}mycarddetails.php?card_id=`+82)
//     const data = await res.json()
// console.log(data);
//     if (!data) {
//       return {
//         redirect: {
//           destination: '/',
//           permanent: false,
//           // statusCode: 301
//         },
//       }
//     }
  
//     return {
//       props: { data }, // will be passed to the page component as props
//     }
//   }


function pageno({data}) {
 

  return (

    <div>
        <div className="container">
       {  data?.map((x,y)=>{ return(<div key={y}>
    <div className="row" >
      <div className="row position-fixed bg-white "style={{zIndex: '100'}} >
        <div className="col">
        <Link  scroll={false} href="/Plotsland" ><a className="nav-link" >   <h5 className="text-start"><MdArrowBack size={35}/></h5>
</a></Link>

        </div>
        <div className="col">
          <h5 className="text-end"><FaShareAltSquare size={35}/></h5>
        </div>
      </div>
    </div>
    <div className="row mt-5 ">
      <div className="col-lg-6 m-auto ">
        <Carousel  infiniteLoop={true} swipeable={true}>
          <div>
            <img src={`${Website}${x.imgpath}`} />
            <p className="legend">Property99acres</p>
          </div>
          <div>
            <img src="./assets/2.jpg" />
            <p className="legend">Property99acres</p>
          </div>
          <div>
            <img src="./assets/3.jpg" />
            <p className="legend">Property99acres</p>
          </div>
        </Carousel>
      </div>
    </div>
    <hr />
    
    <div className="row">
      <div className="col-6"> <h5> ₹ {x?.pricing}</h5></div>
      <div className="col-6">
        <h5 className="text-end"><AiOutlineHeart size={25}/></h5>
      </div>
    </div>
    <div className="row">
      <span><h5> {x.adtitle}</h5></span>
    </div>

    <div className="row">
      <div className="col-8">
        <span> <h6>{x.region} {x.city} {x.name} </h6></span>
      </div>

      <div className="col-4 g-0">
        <p className="text-end">{x.postdate}</p>
      </div>
    </div>
    <div className="row">
      <div className="row">
         <h5>Details</h5> </div>
      <div className="row">
        <table class="table">
          <tbody>
            <tr>
              <th>Type</th>
              <td>{x.utype}</td>
            </tr>
            <tr>
              <th>Listed BY</th>
              <td>{x.listedby}</td>
            </tr>
            <tr>
              <th>PLOT AREA</th>
              <td>{x.area}</td>
            </tr>
            <tr>
              <th>LENGHT</th>
              <td>{x.length}</td>
            </tr>

            <tr>
              <th>WIDTH</th>
              <td>{x.width}</td>
            </tr>
            <tr>
              <th>Facing</th>
              <td>{x.facing}</td>
            </tr>
            <tr>
              <th>Project Name</th>
              <td>{x.projectName}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="row">
      <div className="row">
        <h6>Description</h6>
      </div>
      <div className="row">
        <p>{x.des}</p>
        <hr />
      </div>

                    <div className="row mb-5">
        <div className="col-2 "><FaRegUserCircle  size={60}/></div>
        <div className="col-5  ">
          <div className="row"><h6 >{x.sname}</h6></div>
          <div className="row"><h6>{x.semail}</h6></div>
          </div>
      </div>
    </div>

<div className="row  fixed-bottom">

<Button variant="contained">Mobile Number</Button>


</div>


  </div>) })}
        
        
        </div></div>
  )
}

export default pageno