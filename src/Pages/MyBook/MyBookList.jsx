import React, { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const MyBookList = ({roomBook, deleteHandle}) => {
    const {_id, id, Image, price, RoomDescription, bookDate, chekOutDate, bookingSeat,  roomSiz, roomCost, seat, avilitySeat, dayCount, status} = roomBook || []


    const duration =(moment(chekOutDate, 'DD-MM-YYYY')).diff(moment(bookDate, 'DD-MM-YYYY'), 'days');

    const [cancelBook, setCancelBook] = useState([])

    console.log(dayCount);



    const cancelHandle =(id) =>{
     if (dayCount > 1) {
      const proced = confirm('are you sure confirm it')
      if (proced) {
        fetch(`http://localhost:5000/booking/update/${_id}`, {
          method: "PATCH",
          headers: {
              'content-type': 'application/json',           
          },
          body:JSON.stringify({status: 'Booking Cancel'})

        })
        .then(res => res.json())  
        .then(data => {
          if (data.modifiedCount>0) {
              alert("confirm this")
              let updated = []
              updated.status ="Booking Cancel"
              const newUpdated = [updated]
              setCancelBook(newUpdated)
          }
        })
      }
     }
     else{
      return alert("You can not cancel this room booked")
     }
    }

    console.log(cancelBook.status);
  



    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}



    
    <tbody>
    
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="mask  w-16 ">
                <img src={Image} className='w-[100%]'/>
              </div>
              <span>{RoomDescription}</span>
            </div>
         
          </div>
        </td>
      
      
        <td>Duration: {duration} days</td>
        <td>Seat: {bookingSeat}</td>
        <td>After Discount: {roomCost}$</td>
        <th>
          <Link to={`/update/${_id}`}><button className="btn btn-warning btn-xs">Update booking</button></Link>
        </th>
        <th>
          <button className="btn btn-info btn-xs" onClick={() =>deleteHandle(_id)}>X</button>
        </th>
        <th>
          <Link to={`/review/${_id}`}><button className="btn btn-info btn-xs">review</button></Link>
        </th>
        <th>
          {/* <button className="btn btn-info btn-xs" onClick={() =>cancelHandle(id)}>booked</button> */}

        {
            status === 'Booking Cancel'? <button className="btn btn-info btn-xs">bookin Cancel</button>:<button className="btn btn-info btn-xs" onClick={() =>cancelHandle(id)}>booked</button>
        }
        </th>
      </tr>
   
   
    </tbody>

  
    
  </table>
</div>
        </div>
    );
};

export default MyBookList;

{/* <div>
<div className="carousel carousel-end rounded-box my-6">

{
testimonials.map(review => <>
<div className="carousel-item overflow-x-hidden">

  <div className="w-64 ml-4 bottom-2 rounded-xl overflow-x-hidden">

    {review.reviewText}
  </div>

</div> 

</>)
}

</div>
</div> */}