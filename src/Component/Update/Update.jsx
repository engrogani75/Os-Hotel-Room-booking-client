import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Update = () => {
    
const bookingData = useLoaderData()


const {Image, RoomDescription, Price, RoomSize, Availability, Discount, bookDate, chekOutDate} =   bookingData || []

console.log(bookDate);


    const [startDate, setStartDate] = useState(new Date(bookDate));
    const [endDate, setEndDate] = useState(new Date(chekOutDate));

    const today = new Date(bookDate);

    const Chektoday = new Date();



    const {user} = useContext(AuthContext)



     



const handleDateChange = (date) => {
    // Check if the selected date is not yesterday or earlier
    if (date >= today) {
      setStartDate(date);
    }
  };


  const handleEndDateChange = (date) => {
    // Check if the selected date is not yesterday or earlier
    if (date >= Chektoday) {
      setEndDate(date);
    }
  };





    return (
        <div>
            <>
        <div className='flex justify-center items-center mt-10 flex-col'>
        <div className="card w-96 h-[500px] object-cover bg-base-100 text-orange-700 shadow-xl bottom-5 py-7 hover:">
  <div className="card-body flex flex-col justify-center items-center">
    <h2 className="card-title shadow-2xl text-3xl text-center">{RoomDescription}</h2>
    <p className='text-3xl'>Price: <span className='font-bold'>{Price}</span>$</p>
    <p className='text-xl'>Size: {RoomSize}</p>
   <div className='flex gap-6'>
   <p>Bed: {Availability}</p>
    <p>Discount:{Discount}%</p>
   </div>

  </div>
  <figure><Link to={'/rooms'}><img src={Image} alt="Room" className='hover:bg-red-400' /></Link></figure>
  
</div>

<form className='flex flex-col justify-center items-center'>
<div className='flex gap-3'>
   <div className="mb-3">
          <label className="text-lg">Select Bed:</label>

          <input type="number" defaultValue={Availability} name='bed' className='w-10 text-center py-1' />
        </div>
<DatePicker className='text-center w-24 py-1' selected={startDate}/>  to

<DatePicker className='text-center w-24  py-1' selected={endDate}
        onChange={handleEndDateChange}
        minDate={Chektoday}
        />
        


</div>



<input type="submit" value="Update Now" className='text-center py-1 cursor-pointer btn btn-warning' />

   {/* {
    user?.email? <input type="submit" value="Book Now" className='text-center py-1 cursor-pointer btn btn-warning' />: <><input type="text" value="Book Now" className='text-center py-1 cursor-pointer btn btn-warning' /></>
   } */}

</form>


        </div>
        </> 
        </div>
    );
};

export default Update;