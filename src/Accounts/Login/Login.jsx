
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'


const Login = () => {
  const {logInUser, loginWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate();

  const loginHandle = (event) =>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(email, password);

    logInUser(email, password)
    .then(res => {
      const result = res.user;
      Swal.fire({
        icon: 'success',
        title: 'Login',
        text: 'Login has been sucessfully',
      })
      event.target.reset()
      navigate(location?.state? location.state : '/')
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: 'error',
        title: 'Does not mach',
        text: "your password or email does not match"

      })
   
    });

  }


  const googleHandle = () =>{
    loginWithGoogle()
    .then(res =>{
      console.log(res.user);
      navigate("/")
    })
    .catch(err =>{
      console.error(err);
    })
  }


    return (
        <div>
             <div className="flex justify-center">
    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-orange-200-100 ">
    <p className="text-center py-6">Login with <span className="text-xl text-bold text-orange-700">
      <button className="text-3xl" onClick={ googleHandle}><span className="text-blue-800">G</span><span className="text-red-800">o</span>ogle</button></span></p>
    <hr />
<form className="card-body" onSubmit={loginHandle}>
<div className="form-control">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="email" placeholder="email" name="email" className="input input-bordered" required />
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input type="password" placeholder="password" name="password" className="input input-bordered" required />
  <label className="label">
    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
  </label>
</div>
<div className="form-control mt-6">
  <button className="btn btn-secondary">Login</button>
</div>
<p>New User! <span className="text-orange-700 text-xl"><Link to='/registation'>Registation</Link></span></p>


</form>



</div>
</div>
        </div>
    );
};

export default Login;