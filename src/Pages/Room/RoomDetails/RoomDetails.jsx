import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../../Provider/AuthProvider';


const RoomDetails = () => {

  const {user} = useContext(AuthContext)

    const RoomDetails = useLoaderData()
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const today = new Date();

    const Chektoday = new Date();
    

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

    const {_id, Price, RoomDescription, RoomSize, Availability, Discount, Image} = RoomDetails || []


const bookHandle = (e) => {
 
  e.preventDefault();
 if (user?.email) {
  const form = e.target;
  const bookingSeat = form.bed.value;
  const avilitySeat = Availability
  const seat = avilitySeat - bookingSeat
  const bookDate = startDate;
  const chekOutDate = endDate;
  const price = Price
  const roomSize = RoomSize
  const discount = Discount/100;
  const roomCost = price-discount*price
  const id = _id;
  const email = user.email
 const duration = chekOutDate.getTime() - bookDate.getTime() 
 const day = (duration/(1000 * 60 * 60 * 24)).toFixed(1)


 const booking = {
  avilitySeat,
  bookingSeat,
  seat,
  bookDate,
  chekOutDate,
  RoomDescription,
  price,
  discount,
  roomSize,
  roomCost,
  day,
  id,
  email,
  Image
 }

 console.log(booking);
 fetch('http://localhost:5000/booking',{

 method: 'POST',
 headers:{
    'content-type': 'application/json'
 },
 body:JSON.stringify(booking)
})
.then(res => res.json())
.then(data =>{
    console.log(data);
    if (data.insertedId) {
       alert('your service order sucessfully') 
    }
})


 }

 else{
 alert('Pls Login')
 }
 



}



    return (
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

<form className='flex flex-col justify-center items-center' onSubmit={bookHandle}>
<div className='flex gap-3'>
   <div className="mb-3">
          <label className="text-lg">Select Bed:</label>

          <input type="number" defaultValue={Availability} name='bed' className='w-10 text-center py-1' />
        </div>
<DatePicker className='text-center w-24 py-1' selected={startDate}
        onChange={handleDateChange}
        minDate={today} />  to

<DatePicker className='text-center w-24  py-1' selected={endDate}
        onChange={handleEndDateChange}
        minDate={Chektoday} />


</div>

<input type="submit" value="Book Now" className='text-center py-1 cursor-pointer btn btn-warning' />

   {/* {
    user?.email? <input type="submit" value="Book Now" className='text-center py-1 cursor-pointer btn btn-warning' />: <><input type="text" value="Book Now" className='text-center py-1 cursor-pointer btn btn-warning' /></>
   } */}

</form>


        </div>
        </>
    );
};

export default RoomDetails;