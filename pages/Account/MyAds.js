import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { ButtonBase } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import LazyLoad from 'react-lazy-load';
import { TailSpin } from 'react-loader-spinner';
import { Website } from '../../Variable';
import Navbar from '../../componet/Navbar';
import { auth } from '../../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'

function MyAds() {

    let router= useRouter()

const [mycard, setmycarddata] = useState(null)




    useEffect(() => {
 
        onAuthStateChanged(auth, (user) => {
          if (user) {
         
      const id =    user.uid
      axios.get(`${Website}mycarddata.php?user_id=`+id)
      .then(res => {
        const persons2 = res.data;
        console.log(res.status)
    if (persons2.status!==false) {
 
      setmycarddata(persons2);
    }
else{
  setmycarddata(false);

}
  
      
    
      })
        
        }else{
        
            router.push('/Account/Login')


        }
    
    
    
    
    
    
    
    })
    
    
      
      
  
      
      
    
    
    
    
    
    }, [])






  return (
    <>    <div className="container"> <LazyLoad> 
    <div className="row mt-2 mb-5 ">


{
mycard===false ?<div><p style={{textAlign:'center'}}>no record</p> <Button variant="contained" style={{width:'100%' ,marginTop:100}}>Add Property</Button></div>
:

        

mycard ===null?<TailSpin
height="80"
width="800"
color="#4fa94d"
ariaLabel="tail-spin-loading"
radius="1"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/>:mycard?.map((x,y)=>{     return(   
       <div className="col-md-6 mt-2" key={x.pid}>
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
                   { x.postdate  }
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
       </div>
     </div>
)  }   ) }

    
    </div>
    </LazyLoad> <Navbar/> </div>  </>
  )
}

export default MyAds