import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServiceCart = ({service}) => {
    const {_id,title,price,img}=service
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-96">
        <figure>
          <img
            src={img}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-600 text-xl font-semibold">Price: ${price}</p>
          <div className="card-actions justify-end">
           <Link to={`checkout/${_id}`}>
           <button className="btn bg-white text-orange-600"><AiOutlineArrowRight className='text-2xl '></AiOutlineArrowRight></button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
