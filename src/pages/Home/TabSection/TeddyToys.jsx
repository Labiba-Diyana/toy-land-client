import { Link } from "react-router-dom";


const TeddyToys = ({ teddy }) => {
    const { _id, name, picture, price, rating } = teddy;

    return (
        <div className="card w-auto lg:w-96 h-[500px] bg-base-100 shadow-xl">
            <figure className="h-8/12 pt-10">
                <img className="h-full" src={picture} />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p className="text-xl">Price: ${price}</p>
                <p>{rating}</p>
               <Link to={`/tabsView/${_id}`}> <button className="btn bg-green-700 w-full border-none">View Detail</button></Link>
            </div>
        </div>
    );
};

export default TeddyToys;