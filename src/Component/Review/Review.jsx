import { useContext, useState } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import { useLoaderData } from "react-router-dom"
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";


const Review = () => {

   const {user} =  useContext(AuthContext)
   const reviewData = useLoaderData()

   const img = reviewData[0].Image;
   const idData = reviewData[0].id;
   

   const [startDate, setStartDate] = useState(new Date());

   const today = new Date();


   const handleDateChange = (date) => {
    // Check if the selected date is not yesterday or earlier
    if (date >= today) {
      setStartDate(date);
    }
  };


 


  const reviewHandle = (e) =>{
    e.preventDefault();

    const id = idData;
    const form = e.target;
    const reviewText =form.review.value;
    const rating = form.rating.value
    const customeNmae = user.displayName
    const review = {reviewText, rating, id, startDate, customeNmae};
    console.log(review);



    
 fetch('http://localhost:5000/review-customer',{

 method: 'POST',
 headers:{
    'content-type': 'application/json'
 },
 body:JSON.stringify(review)
 
})

.then(res => res.json())

.then(data =>{
  console.log(data);
  if (data.insertedId) {
    Swal.fire({
      icon: 'success',
      title: 'add',
      text: 'review added has been sucessfully',
    })
  }
})

    


  }

  

  return (

    <div>
    <figure className="mb-4 flex justify-center items-center">
      <img src={img} alt="" className="w-96" />
    </figure>
    <h2 className="text-xl mb-4 text-center">{user.displayName}</h2>
    <form onSubmit={reviewHandle} className="flex justify-center flex-col items-center">
    <textarea
      className="textarea textarea-warning w-96"
      placeholder="Pls give your message"
      name="review"
    ></textarea>

<div className="flex gap-4">
    <input
      type="text"
      placeholder="Pls give your Rating"
      className="input input-bordered input-warning w-42 max-w-xs mt-6"
      name="rating"
    />


    <DatePicker className='text-center mt-6 max-w-xs py-2 border-2 border-yellow-300 rounded-xl' selected={startDate}
        onChange={handleDateChange}
        minDate={today} />

    <input type="submit" value="Post" className="btn btn-warning mt-6"/>
</div>

    </form>

  </div>
  )
}

export default Review

