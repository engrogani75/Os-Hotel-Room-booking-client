import { useEffect, useState } from 'react';


import RoomTab from './RoomTab/RoomTab';
import Gallery from './Gallery/Gallery';
import { useLoaderData } from 'react-router-dom';

const Room = () => {

    const [minPrice, setMinPrice] = useState(150);
    const [maxPrice, setMaxPrice] = useState(1000);
   

   const [rooms, setRooms] = useState([]);

   const room = useLoaderData()

    

   useEffect(() =>{
    fetch('http://localhost:5000/rooms')
    .then(res =>res.json())
    .then(data => setRooms(data))
   }, [])



const filterItem = (item) =>{
    const filter = rooms.filter((currEleem) => {
        return currEleem.RoomDescription === item
    });
    if (filter) {
        setRooms(filter)
    }
    else{
        setRooms(room) 
    }
  
}


const handlePriceFilter = (e) =>{
    e.preventDefault();
  const filteredRooms = rooms.filter((room) => room.Price >= minPrice && room.Price <= maxPrice);
  setRooms(filteredRooms);

}




    return <>

    <div className='my-6'>
    <form onSubmit={handlePriceFilter}>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Minimum Price</span>
    </label>
    <label className="input-group">
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(parseFloat(e.target.value))}
        placeholder="Enter min price"
        className="input input-bordered"
      />
    </label>
  </div>

  <div className="form-control">
    <label className="label">
      <span className="label-text">Maximum Price</span>
    </label>
    <label className="input-group">
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
        placeholder="Enter max price"
        className="input input-bordered"
      />
    </label>
  </div>

  <button type="submit" className='btn btn-success mt-4'>Apply Filter</button>
</form>
    </div>



     <div className="grid grid-cols-6 justify-center items-center gap-6">
        <button className="btn btn-warning" onClick={() =>setRooms(room)}>All</button>


        {
        rooms.map((room) => (
          <RoomTab key={room._id} room={room} filterItem={filterItem}></RoomTab>
        ))
        }
      </div>


      <div className='grid grid-cols-5 gap-8 justify-center items-center mt-6'>
        {
            rooms.map(img => <Gallery key={img._id} img={img}></Gallery>)
        }
      </div>
    
    
    </>
     
    ;
};

export default Room;