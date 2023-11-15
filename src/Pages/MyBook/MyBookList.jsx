import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const MyBookList = ({roomBook, deleteHandle}) => {
    const {_id, id, Image, price, RoomDescription, bookDate, bookingSeat, day, chekOutDate, roomSiz, roomCost, seat, avilitySeat} = roomBook || []




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
              <div className="mask  w-24 ">
                <img src={Image} className='w-[100%]'/>
              </div>
              <span>{RoomDescription}</span>
            </div>
         
          </div>
        </td>
      
      
        <td>Duration: {day} days</td>
        <td>Seat: {bookingSeat}</td>
        <td>Price: {price}$</td>
        <td>After Discount: {roomCost}$</td>
        <th>
          <Link to={`/update/${_id}`}><button className="btn btn-warning btn-xs">Update</button></Link>
        </th>
        <th>
          <button className="btn btn-info btn-xs" onClick={() =>deleteHandle(_id)}>X</button>
        </th>
        <th>
          <Link to={`/review/${_id}`}><button className="btn btn-info btn-xs">review</button></Link>
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