import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const RoomDetails = () => {

  const {user} = useContext(AuthContext)
    const RoomDetails = useLoaderData()

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [dayCount, setDayCount] = useState(0);

    const [bookRooms, setBookRooms] = useState([]);

    
  
    const url = `http://localhost:5000/booking/${user?.email}`
  
    useEffect(() =>{
     fetch(url)
     .then(res =>res.json())
     .then(data => {
      
       setBookRooms(data)
     })
  }, [url])



    const today = new Date();

    const Chektoday = new Date();
    

    const handleDateChange = (date) => {
      // Check if the selected date is not yesterday or earlier
      if (date >= today) {
        setStartDate(date);
        calculateDayCount(date, endDate);
      }
    };


    const handleEndDateChange = (date) => {
      // Check if the selected date is not yesterday or earlier
      if (date >= Chektoday) {
        setEndDate(date);
        calculateDayCount(startDate, date);
      }
    };

    const calculateDayCount = (start, end) => {
      const startMoment = moment(start);
      const endMoment = moment(end);
      const days = endMoment.diff(startMoment, 'days') + 1; 
      setDayCount(days);
    };


  

    const {_id, Price, RoomDescription, RoomSize, Availability, Discount, Image,  Description} = RoomDetails || []
    // console.log('booking room', bookRooms);

    // console.log('booking id', _id);

 

const bookHandle = (e) => {

  e.preventDefault();
  if (user?.email) {
   const form = e.target;
   const bookingSeat = form.bed.value;
   const avilitySeat = Availability
   const seat = avilitySeat - bookingSeat
   const bookDate = startDate ? moment(startDate).format('DD-MM-YYYY') : '';
   const chekOutDate = endDate ? moment(endDate).format('DD-MM-YYYY') : ''
   const price = Price
   const roomSize = RoomSize
   const discount = Discount/100;
   const roomCost = price-discount*price
   const id = _id;
   const email = user.email
 
   if (bookDate === chekOutDate) {
     return alert('pls select the chekout date')
   }
 
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
   dayCount,
   id,
   email,
   Image
  }
 
  console.log(bookDate, chekOutDate, dayCount);
 
 //  console.log(booking);
 
 
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
       Swal.fire({
         icon: 'success',
         title: 'add',
         text: 'room added has been sucessfully',
       })
     }
 })
 
 
  }
 
  else{
   return <Navigate to='/login' replace></Navigate>
  }



}



// const bookingHandle = (id) =>{


//     const bookDate = startDate ? moment(startDate).format('DD-MM-YYYY') : '';
//     const chekOutDate = endDate ? moment(endDate).format('DD-MM-YYYY') : ''
//     const email = user.email
    
//       const booking = {
//         bookDate,
//         chekOutDate,
//         dayCount,
//         email
//        }
    
//     console.log(booking);
    
//       fetch(`http://localhost:5000/room/update/${id}`, {
//             method: 'PUT',
//             headers:{
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify(booking )
//         })
    
//         .then(res => res.json())
    
//         .then(data => {
//           console.log(data);
//           if (data.modifiedCount > 0) {
//             Swal.fire({
//               icon: 'success',
//               title: 'Updated',
//               text: 'Product Update has been sucessfully',
//             })
            
//           }
//       })
   





// }








    return (
       <>
        <div className='flex justify-center items-center mt-10 flex-col'>
        <div className="card w-8/12 object-cover bg-base-100 text-orange-700 shadow-xl bottom-5 py-7 hover:">
  <div className="card-body flex flex-col justify-center items-center">
    <h2 className="card-title shadow-2xl text-3xl text-center">{RoomDescription}</h2>
    <p className='text-3xl'>Price: <span className='font-bold'>{Price}</span>$</p>
    <p className='text-xl'>Size: {RoomSize}</p>
   <div className='flex gap-6'>
   <p>Bed: {Availability}</p>
    <p>Discount:{Discount}%</p>
   
   </div>

  </div>
  <figure><Link to={'/rooms'}><img src={Image} alt="Room" className='hover:bg-red-400 h-96 w-full' /></Link>
</figure>

<p className='text-xl mt-4 text-purple-500'>{Description}</p>
  
</div>

<form className='flex flex-col justify-center items-center' onSubmit={bookHandle}>
<div className='flex gap-3'>
   <div className="mb-3">
          <label className="text-lg">Select Bed:</label>

          <input type="number" defaultValue={Availability} name='bed' className='w-10 text-center py-1' />
        </div>

  



        <DatePicker className='text-center w-24 py-1' 
        
         selected={startDate}
        onChange={handleDateChange}
        minDate={today} />  to

       <DatePicker className='text-center w-24  py-1'
        selected={endDate} 
        onChange={handleEndDateChange}
        minDate={Chektoday} />




</div>



{/* onClick={() => bookingHandle(_id)} */}


<input type="submit"  value="Book Now" className='text-center py-1 cursor-pointer btn btn-warning' />

   {/* {
    user?.email? <input type="submit" value="Book Now" className='text-center py-1 cursor-pointer btn btn-warning' />: <><input type="text" value="Book Now" className='text-center py-1 cursor-pointer btn btn-warning' /></>
   } */}

</form>


        </div>
        </>
    );
};

export default RoomDetails;