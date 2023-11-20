import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Swal from "sweetalert2";


const Update = () => {
    
const bookingData = useLoaderData()
const {user} = useContext(AuthContext)


const {_id, id, Image, price, RoomDescription, bookDate, chekOutDate, roomSize, bookingSeat, seat, avilitySeat} =   bookingData || []

const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());

const [dayCount, setDayCount] = useState(0);

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





const updateHandle = (event) =>{
  event.preventDefault();
  const form = event.target;
  const bookingSeat = form.bed.value;
  const seat = avilitySeat - bookingSeat
  const bookDate = startDate ? moment(startDate).format('DD-MM-YYYY') : '';
  const chekOutDate = endDate ? moment(endDate).format('DD-MM-YYYY') : ''



const updateRoom = {seat, bookDate, chekOutDate}
console.log(updateRoom);



fetch(`http://localhost:5000/rooms/updateAvailability/${id}`, {
  method: 'PUT',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(updateRoom),
})

.then((res) => res.json())
.then(data =>{

  if (data.modifiedCount > 0) {

    const updateBooking = {
      bookingSeat, seat, bookDate, chekOutDate, dayCount
    }

    fetch(`http://localhost:5000/booking/update/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateBooking),
    })

    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          icon: 'success',
          title: 'Update',
          text: 'room Update has been sucessfully',
        })
      }
  })

  }
})


}




  

    return (
        <div>
            <>
        <div className='flex justify-center items-center mt-10 flex-col'>
        <div className="card w-96 h-[500px] object-cover bg-base-100 text-orange-700 shadow-xl bottom-5 py-7 hover:">
  <div className="card-body flex flex-col justify-center items-center">
    <h2 className="card-title shadow-2xl text-3xl text-center">{RoomDescription}</h2>
    <p className='text-3xl'>Price: <span className='font-bold'>{price}</span>$</p>
    <p className='text-xl'>Size: {roomSize}</p>
   <div className='flex gap-6'>
   <p>Bed: {avilitySeat}</p>
   </div>

  </div>
  <figure><Link to={'/rooms'}><img src={Image} alt="Room" className='hover:bg-red-400' /></Link></figure>
  
</div>

<form onSubmit={updateHandle} className='flex flex-col justify-center items-center'>
<div className='flex gap-3'>
   <div className="mb-3">
          <label className="text-lg">Select Bed:</label>

          <input type="number" defaultValue={avilitySeat} name='bed' className='w-10 text-center py-1' />
        </div>


        <DatePicker className='text-center w-24 py-1' 
        
       selected={startDate}
       onChange={handleDateChange}
       minDate={today}
        />
         to

      <DatePicker className='text-center w-24  py-1'
       selected={endDate} 
       onChange={handleEndDateChange}
       minDate={Chektoday} />

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