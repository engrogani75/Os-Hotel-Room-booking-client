import { Link } from "react-router-dom";


const Registation = () => {
    return (
        <div className="flex justify-center">
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 ">
  <form className="card-body" >
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

    {/* {
      !user ? <h1 className="text-xl text-red-900 text-bold">{passwordError}</h1>: <Navigate to="/" replace={true}></Navigate>

    } */}


    <p className="pb-4">already registation! <span className="text-orange-700 text-xl"><Link to={'/login'}>Login</Link></span></p>
  </form> 
</div>
    </div>
    );
};

export default Registation;