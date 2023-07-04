import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HorseToys = ({ horse }) => {
    const { _id, name, picture, price, rating } = horse;
    AOS.init();

    return (
        <div data-aos="fade-up" className="card w-auto lg:w-96 h-[520px] bg-base-100 shadow-xl">
            <figure className="h-1/2 pt-5">
                <img className="h-full" src={picture} />
            </figure>
            <div className="card-body space-y-1">
                <h2 className="text-3xl font-bold pb-4">{name}</h2>
                <p className="text-xl font-bold">Price: <span className="font-semibold text-red-500">${price}</span></p>
                <div className="flex items-center justify-between">
                    <div className="flex">
                        <p className="text-xl font-bold mr-1">Rating:</p>
                        <Rating style={{ maxWidth: 130 }} value={Math.round(rating)} readOnly />
                    </div>
                    <div>
                        <p className="font-bold text-base text-stone-500">({rating} out of 5)</p>
                    </div>
                </div>
                <Link to={`/tabsView/${_id}`}> <button className="btn bg-green-700 w-full border-none mt-5 text-lg">View Details</button></Link>
            </div>
        </div>
    );
};

export default HorseToys;