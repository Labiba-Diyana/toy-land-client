import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';



const UnicornToys = ({ unicorn }) => {
    const { _id, name, picture, price, rating } = unicorn;
    AOS.init();

    return (
        <div data-aos="fade-up" className="card w-auto lg:w-96 h-[360px] lg:h-[520px] bg-base-100 shadow-xl">
            <figure className="h-2/3 lg:h-1/2 pt-5">
                <img className="h-full" src={picture} />
            </figure>
            <div className="card-body lg:space-y-1">
                <h2 className="text-lg lg:text-3xl font-bold lg:pb-4">{name}</h2>
                <p className="text-sm lg:text-xl font-bold">Price: <span className="font-semibold text-red-500">${price}</span></p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <p className="text-sm lg:text-xl font-bold mr-1">Rating:</p>
                        <span className="block lg:hidden font-bold text-xs text-stone-500 mx-2">{rating}</span>
                        <Rating style={{ maxWidth: 130 }} value={Math.round(rating)} readOnly />
                    </div>
                    <div className="hidden lg:block">
                        <p className="font-bold text-base text-stone-500">({rating} Out of 5)</p>
                    </div>
                </div>
                <Link to={`/tabsView/${_id}`}> <button className="btn btn-sm bg-green-700 w-full border-none mt-3 text-xs lg:btn lg:bg-green-700 lg:w-full lg:border-none lg:mt-5 lg:text-lg">View Details</button></Link>
            </div>
        </div>
    );
};

export default UnicornToys;