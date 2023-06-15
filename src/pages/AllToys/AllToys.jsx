import { useLoaderData } from "react-router-dom";
import Toy from "./Toy";


const AllToys = () => {
    const toys = useLoaderData();

    return (
        <div className="text-center w-full mx-auto py-20 bg-[#a89a173f]">
            <h2 className="text-5xl font-bold text-amber-800 underline underline-offset-8 decoration-4 pb-4">All Toys</h2>            
                <div className="overflow-x-auto p-20 mb-16">
                    <table className="table w-full shadow-2xl">
                        {/* head */}
                        <thead>
                            <tr className="text-3xl">
                                <th className="bg-amber-600 pl-20 text-xl">Name</th>
                                <th className="bg-amber-600 pl-20 text-xl">Toy Name</th>
                                <th className="bg-amber-600 pl-20 text-xl">Sub-category</th>
                                <th className="bg-amber-600 pl-20 text-xl">Price</th>
                                <th className="bg-amber-600 pl-20 text-xl">Available Quantity</th>
                                <th className="bg-amber-600 pl-16"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map(toy => <Toy
                                    key={toy._id}
                                    toy={toy}
                                ></Toy>)
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default AllToys;