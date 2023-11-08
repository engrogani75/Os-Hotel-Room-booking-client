import React from 'react';

const MyBookList = ({roomBook}) => {
    const {Image, price, RoomDescription} = roomBook || []
    console.log(roomBook);
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    
    <tbody>
    
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="mask  w-64 ">
                <img src={Image} className='w-[100%]'/>
              </div>
              <span>Room Name</span>
            </div>
         
          </div>
        </td>
        <td>
         Booking Date: 
        </td>
        <td>Chekout Date:</td>
        <td>Duration:</td>
        <td>Price</td>
        <th>
          <button className="btn btn-ghost btn-xs">Update</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">X</button>
        </th>
      </tr>
   
   
    </tbody>

  
    
  </table>
</div>
        </div>
    );
};

export default MyBookList;