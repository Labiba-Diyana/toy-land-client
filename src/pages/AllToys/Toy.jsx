import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Toy = ({ toy }) => {
    const {user} = useContext(AuthContext);
    const { _id, toyName,  subCategory, price, quantity } = toy;
    console.log(typeof(price))

    return (
        <tr>
            <td className="pl-20 text-lg font-semibold">{user?.displayName}</td>
            <td className="pl-20 text-lg font-semibold">{toyName}</td>
            <td className="pl-20 text-lg font-semibold">{subCategory}</td>
            <td className="pl-20 text-lg font-semibold">${price}</td>
            <td className="pl-20 text-lg font-semibold">{quantity}</td>
            <td className="pl-16"><Link to={`/toy/${_id}`}><button className="btn btn-active bg-green-700 text-center font-semibold py-3 px-5 text-base border-none">View Details</button></Link></td>
        </tr>
    );
};

export default Toy;