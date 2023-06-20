/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "./MyToy";
import img from "../../assets/images/background/bg-myToys.png"



const MyToys = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);
    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/toys/myToys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);

    return (
        <div style={{ backgroundImage: `url(${img})` }} className="text-center pt-32 pb-48 bg-[#c8901f38]">
            <h2 className="text-5xl font-bold text-amber-800 underline underline-offset-8 decoration-4 mb-20">My Toys</h2>
            <div className="px-20">
                <table className="table w-full shadow-2xl rounded-xl">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-amber-600">
                            </th>
                            <th className="text-xl bg-amber-600 pl-10 ">Name</th>
                            <th className="text-xl bg-amber-600">Seller Info</th>
                            <th className="text-xl bg-amber-600">Sub-category</th>
                            <th className="text-xl bg-amber-600">Price</th>
                            <th className="text-xl bg-amber-600">Rating</th>
                            <th className="text-xl bg-amber-600">Quantity</th>
                            <th className="text-xl bg-amber-600"></th>
                            <th className="bg-amber-600"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MyToy
                                key={toy._id}
                                toy={toy}
                            ></MyToy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;