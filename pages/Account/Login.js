import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from "../../firebase";
import { useRouter } from 'next/router';


function Loginpage() {
        const provider = new GoogleAuthProvider();
        let router= useRouter()


    const glogin =()=>{


    
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
         
            const user1 = result.user.email;

            router.push('/Account/Account')
            swal("Congratulation!","You are Login", "success");
       
           
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            swal(errorMessage);
            router.push('/Account/Login')

            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });



    }



  return (
  



<div className="row m-auto mt-4">
  


<div className="col-sm-4 m-auto text-center">
 <label  className="col text-center" ><Link href="Account" passHref>Back </Link></label>
        <h1>Property99Acres </h1>
<img src="./code.jpg" alt="..." className="img-thumbnail" />


<div className="col-6 m-auto mt-4">
<button type="submit" className="btn btn-primary btn-block mb-3">Continue with phone</button>
</div>
<div className="col-6 m-auto mt-2">
<button type="submit" onClick={()=>glogin()} className="btn btn-primary btn-block mb-3">Continue with Gmail</button>
</div>
OR
<div className="col-6 m-auto mt-2">
  <label  className="col text-center" >
  <Link   href="/Account/LoginEmail" passHref>Log in with Email</Link>
        </label> </div>



</div>












      



    </div>
  )
}








export default Loginpage






