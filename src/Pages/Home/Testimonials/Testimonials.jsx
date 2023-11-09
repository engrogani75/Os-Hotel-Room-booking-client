import { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  const url = `http://localhost:5000/review-customer`

  useEffect(() =>{
    fetch(url)
    .then(res =>res.json())
    .then(data => {
       
      setTestimonials(data)
    })
}, [url])


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

  
    return (

<div>
  <h1 className="my-10 text-2xl font-bold text-center">Our Client Says</h1>
<Slider {...settings} className="mt-4">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          
          <h3 className="text-2xl mb-3">{testimonial.customeNmae}:</h3>
          <p className="text-xl mb-4">{testimonial.reviewText}</p>
          <p className="badge badge-secondary">Rating: {testimonial.rating}</p>
        </div>
      ))}
    </Slider>
</div>
  



    
//         <div>
//             <div className="carousel carousel-end rounded-box my-6">

              

//   <div className="carousel-item">
//     <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1649&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
//   </div> 
//   <div className="carousel-item">
//     <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg" alt="Drink" />
//   </div> 
//   <div className="carousel-item">
//     <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
//   </div> 
//   <div className="carousel-item">
//     <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
//   </div> 
//   <div className="carousel-item">
//     <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
//   </div> 
//   <div className="carousel-item">
//     <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
//   </div> 
//   <div className="carousel-item">
//     <img className="h-96 w-[300px] ml-4 bottom-2 rounded-xl" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Drink" />
//   </div>
// </div>
//         </div>
    );
};

export default Testimonials;