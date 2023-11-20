import React, { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyBookList = ({roomBook, deleteHandle}) => {
    const {_id, id, Image,  RoomDescription, bookDate, chekOutDate, bookingSeat, roomCost, dayCount, status} = roomBook || []


    const duration =(moment(chekOutDate, 'DD-MM-YYYY')).diff(moment(bookDate, 'DD-MM-YYYY'), 'days');

    const [cancelBook, setCancelBook] = useState([])

    console.log(dayCount);



    const cancelHandle =(id) =>{
     if (dayCount > 1) {
      const proced = confirm('are you sure confirm it')
      if (proced) {
        fetch(`https://hotel-book-server-project.vercel.app/booking/update/${_id}`, {
          method: "PATCH",
          headers: {
              'content-type': 'application/json',           
          },
          body:JSON.stringify({status: 'Booking Cancel'})

        })
        .then(res => res.json())  
        .then(data => {
          if (data.modifiedCount>0) {
            Swal.fire({
              icon: 'warning',
              title: 'Sure!',
              text: 'Are you sure?',
            })
              let updated = []
              updated.status ="Booking Cancel"
              const newUpdated = [updated]
              setCancelBook(newUpdated)
          }
        })
      }
     }
     else{
      Swal.fire({
        icon: 'success',
        title: 'cancel',
        text: 'You book has been cancel',
      })
     }
    }

 
  



    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
 



    
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

