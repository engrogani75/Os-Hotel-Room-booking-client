import { Link } from "react-router-dom";


const Gallery = ({img}) => {

    const {_id, Image} = img
    return (
        <div>
            <figure>
                <Link to={`/rooms/${_id}`}><img src={Image} className="h-80 object-cover" alt="" /></Link>

            </figure>
        </div>
    );
};

export default Gallery;