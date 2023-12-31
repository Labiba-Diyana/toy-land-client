import { useLoaderData } from "react-router-dom";
import bg from '../../assets/images/background/bg-details.png'
import useTitle from "../../hooks/useTitle";
import { Rating } from "@smastrom/react-rating";

const ViewDetails = () => {
    const toy = useLoaderData();
    useTitle('Toy Details');
    console.log(toy);
    const { picture, toyName, name, email, price, rating, quantity, detail } = toy;

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="pt-28 pb-64 text-center">
            <h2 className="text-5xl font-bold text-amber-800 underline underline-offset-8 decoration-4 mb-24">Toy Details</h2>
            <div className=" bg-green-100 w-10/12 mx-auto rounded-xl p-20 flex space-x-24 shadow-2xl">
                <img src={picture} className="w-[600px] h-full shadow-2xl  rounded-xl" />
                <div className='flex items-center h-full'>
                    <div className="text-start space-y-8 h-full">
                        <h1 className='text-4xl font-bold text-orange-500'>Name: {toyName}</h1>
                        <div className="text-xl space-y-8 font-medium">
                            <p><span className="text-2xl font-bold pr-2">Seller Name : </span> {name}</p>
                            <p><span className="text-2xl font-bold pr-2">Seller Email : </span> {email}</p>
                            <p><span className="text-2xl font-bold pr-2">Price : </span> {price}</p>
                            <div className="flex items-center">
                                <p className="mr-2"><span className="text-2xl font-bold pr-2">Rating : </span>{rating}</p>
                                <Rating style={{ maxWidth: 130 }} value={Math.round(rating)} readOnly />
                                <p className="font-bold text-base text-stone-500 pl-5">(out of 5)</p>
                            </div>
                            <p><span className="text-2xl font-bold pr-2">Available Quantity : </span> {quantity}</p>
                            <p><span className="text-2xl font-bold pr-2">Detail Description : </span> {detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;

