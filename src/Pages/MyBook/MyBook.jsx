import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyBookList from "./MyBookList";


const MyBook = () => {

    const {user} = useContext(AuthContext)
   

    const [booking, setBooking] = useState([])

    const url = `http://localhost:5000/booking/${user?.email}`

    useEffect(() =>{
        fetch(url)
        .then(res =>res.json())
        .then(data => {
           
            setBooking(data)
        })
    }, [url])







    return (
        <div>

          
            
            {
                booking.map(roomBook => <MyBookList key={roomBook._id} roomBook={roomBook} ></MyBookList>)
            }
        </div>
    );
};

export default MyBook;