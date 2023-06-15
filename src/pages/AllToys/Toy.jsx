

const Toy = ({ toy }) => {
    const { picture, toyName, name, email, subCategory, price, rating, quantity, detail } = toy;



    return (
        <tr>
            <td className="pl-20 text-lg font-semibold">{name}</td>
            <td className="pl-20 text-lg font-semibold">{toyName}</td>
            <td className="pl-20 text-lg font-semibold">{subCategory}</td>
            <td className="pl-20 text-lg font-semibold">{price}</td>
            <td className="pl-20 text-lg font-semibold">{quantity}</td>
            <td className="pl-16"><button className='bg-green-700 hidden lg:block text-white text-center font-semibold py-3 px-5 text-lg rounded-md'>View Details</button></td>
        </tr>
    );
};

export default Toy;