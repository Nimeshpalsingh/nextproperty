import { getAuth, signOut } from "firebase/auth";






function SignOut() {



   const sigout1 =()=>{
    const result = window.confirm('Do You Want to Sign out');
   console.log(result);

    if (result===true) {
  
      const auth = getAuth();

    
      signOut(auth).then(() => {
      
      
      }).catch((error) => {
        // An error happened.
      });


    } else {
    
    
      alert('OK')
      
    }












}









  return (
    <div>
      
      <button type="button" onClick={()=>sigout1()}  className="btn btn-outline-dark btn-floating btn-sm" data-mdb-ripple-color="dark"> Log Out</button>

     </div>
  )
}

export default SignOut
