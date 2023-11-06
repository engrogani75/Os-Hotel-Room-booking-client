import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
             <div className="flex justify-center">
    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-orange-200-100 ">
    <p className="text-center py-6">Login with <span className="text-xl text-bold text-orange-700">
      <button className="text-3xl"><span className="text-blue-800">G</span><span className="text-red-800">o</span>ogle</button></span></p>
    <hr />
<form className="card-body">
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