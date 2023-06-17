import { useLoaderData } from "react-router-dom";
import Toy from "./Toy";
import img from '../../assets/images/background/background-allToys.png'
import { useState } from "react";



const AllToys = () => {
    const toyData = useLoaderData();
    const data = useLoaderData();
    const [toys, setToys] = useState(toyData);

    const handleSearch = (event) => {
        event.preventDefault();
        const innerText = event.target.toy.value;
        const searchedToys = data.filter(toy => toy.toyName === innerText);
        setToys(searchedToys);
    }

    return (
        <div style={{ backgroundImage: `url(${img})` }} className="text-center w-full mx-auto py-20 bg-[#c8901f38]">
            <h2 className="text-5xl font-bold text-amber-800 underline underline-offset-8 decoration-4 mb-16">All Toys</h2>
            <form onSubmit={handleSearch} className="flex justify-center mb-8">
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" name="toy" placeholder="Search…" className="input input-bordered" />
                        <button type="submit" className="btn btn-square bg-amber-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </form>
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