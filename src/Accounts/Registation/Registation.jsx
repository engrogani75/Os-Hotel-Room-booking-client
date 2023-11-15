// import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";
import UseAuth from "../../Provider/Hook/UseAuth";


const Registation = () => {

   // const {user, creatUser, passwordError} = useContext(AuthContext)

   const {user, creatUser, passwordError} = UseAuth()


    const loginHandle = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const photoUrl = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photoUrl, email, password)

        creatUser(email, password)

        .then(res =>{
            const result = res.user;
    
            Swal.fire({
                        icon: 'success',
                        title: 'Your registation',
                        text: 'Your resgistation has been sucessfully',
                      })

            updateProfile(result, {
                displayName: name,
                photoURL: photoUrl
              })
              .then(() => console.log('profile name has been displayed'))


             .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
              icon: 'error',
              title: {errorCode },
              text: {errorMessage}
            })
         
            });


            // const user = {name, photoUrl, email}

        //   .then(res => res.json())
        //   .then(data => {
        //     console.log(data);
        //     if (data.insertedId) {
        //       Swal.fire({
        //         icon: 'success',
        //         title: 'Your registation',
        //         text: 'Your resgistation has been sucessfully',
        //       })
  
        //     }
        //   })
        
          })

  

    }


    return (
        <div className="flex justify-center">
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 ">
  <form className="card-body" onSubmit={loginHandle}>
  <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="Enter Name" name = "name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo Url</span>
      </label>
      <input type="text" placeholder="Photo Url" name = "photo" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" name = "email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" name="password" className="input input-bordered" required />
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-secondary">Registaion</button>
    </div>

    {
      !user ? <h1 className="text-xl text-red-900 text-bold">{passwordError}</h1>: <Navigate to="/" replace={true}></Navigate>

    }




    <p className="pb-4">already registation! <span className="text-orange-700 text-xl"><Link to={'/login'}>Login</Link></span></p>
  </form> 
</div>
    </div>
    );
};

export default Registation;