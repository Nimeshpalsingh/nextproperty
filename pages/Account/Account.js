import { onAuthStateChanged } from '@firebase/auth';
import { useEffect, useState } from 'react'
import Navbar from '../../componet/Navbar';
import { auth } from '../../firebase';
import SignOut from './SignOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/router'



function Account() {
const [state, setsate] = useState(null);
let router= useRouter()


useEffect(() => {
  
onAuthStateChanged(auth, (user) => {
  if (user) {
 
console.log(user.displayName)
setsate(user);


    const uid = user.uid;
  } else {
    
    router.push('/Account/Login')
  }
});}, [state])






  return (
    <>
    { state !== null ? <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="card" style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }}>
                <div className="card-body p-4 text-black">
                  <div>
                    <h6 className="mb-4">You can Add Your Property Free</h6>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <p className="small mb-0"><i className="far fa-clock me-2" />Email :</p>
                      <p className="fw-bold mb-0">{state.email}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                    <FaUserCircle  className="img-fluid rounded-circle border border-dark border-3" style={{ width: '70px' }}/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <p className="mb-0 me-2">{state.displayName}</p>
                       
                        <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
                          <li>
                            <i className="fas fa-star fa-xs" />
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs" />
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs" />
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs" />
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs" />
                          </li>
                        </ul>
                      </div>
                      <div>
                        <button type="button" className="btn btn-outline-dark btn-rounded btn-sm" data-mdb-ripple-color="dark">+ Follow</button>
                        <button type="button" className="btn btn-outline-dark btn-rounded btn-sm" data-mdb-ripple-color="dark">See profile</button>
                        <SignOut/>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <p className="my-4 pb-1">My Ads</p>
             <Link href="/AddProperty" passHref><button type="button" className="btn btn-success btn-rounded btn-block btn-lg"><i className="far fa-clock me-2" />Add Free Property</button></Link> 
                </div>
              </div>
            </div>
          </div>
        </div>

:  <div>
      




        <div className="row m-auto mt-4">

          <div className="col-sm-4 m-auto text-center">
            <h1>Property99Acres </h1>
            <img src="./code.jpg" alt="..." className="img-thumbnail" />


             <div className="col-6 m-auto mt-4">
             <Link href="/Account/Login">
 <button type="submit" className="btn btn-primary btn-block mb-3">Login and Register</button>
 </Link> 
            </div>
          </div>





        </div>

        </div>}


        <Navbar />
        
       </>
  )
}

export default Account