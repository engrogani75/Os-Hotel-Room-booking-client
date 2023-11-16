import { useEffect, useState } from "react";


const Feathured = () => {
  

    const [featuredRoom, setFeaturedRoom] = useState([])

    const url = `https://hotel-book-server-project.vercel.app/rooms`;

    useEffect(() =>{
        fetch(url)
        .then(res =>res.json())
        .then(data => {
           
            setFeaturedRoom(data)
        })

    }, [url])



// console.log(featuredRoom);
    


    return (
       
                <div className="my-6">
                <h1 className="text-2xl text-center font-bold">Featured Rooms</h1>
               

            <div className="lg:carousel carousel-end rounded-box my-6">

              


                {
                  featuredRoom.map(feature => <div className="carousel-item flex flex-col justify-center items-center" key={feature._id}>
                  <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src={feature.Image} alt="Drink" />
                  <div>
                    <h2 className="text-2xl">{feature.RoomDescription}</h2>
                    <button className="btn btn-secondary my-4">Book Now</button>
                  </div>
                </div>)
                    
                }

              

  {/* <div className="carousel-item">
    <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1649&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
  </div> */}


</div>
        </div>
      
    );
};

export default Feathured;