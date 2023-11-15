import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyBookList from "./MyBookList";
import Swal from 'sweetalert2'


const MyBook = () => {

    const {user} = useContext(AuthContext)
   

    const [booking, setBooking] = useState([])

    const url = `http://localhost:5000/booking/${user?.email}`

    useEffect(() =>{
        fetch(url, {credentials: 'include'})
        .then(res =>res.json())
        .then(data => {
           
            setBooking(data)
        })
    }, [url])


    const deleteHandle =(id) =>{
       
        const proced = confirm('are you sure remove this one')

        
        if (proced) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
               
                if (data.deletedCount > 0) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Delete',
                        text: 'Dlete has been sucessfully',
                      })
                    const remainData = booking.filter(order => order._id !== id);
                    console.log(remainData);
                    setBooking(remainData)
                }
            })
        }
    }

   







    return (
        <div>

          
            
            {
                booking.map(roomBook => <MyBookList key={roomBook._id} roomBook={roomBook} deleteHandle={deleteHandle}></MyBookList>)
            }
        </div>
    );
};

export default MyBook;