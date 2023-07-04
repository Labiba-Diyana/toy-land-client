import { useLoaderData } from "react-router-dom";
import Toy from "./Toy";
import bg from '../../assets/images/background/bg-all-toys.png'
import { useState } from "react";
import useTitle from "../../hooks/useTitle";



const AllToys = () => {
    const toyData = useLoaderData();
    const data = useLoaderData();
    const [toys, setToys] = useState(toyData);
    useTitle('All Toys')

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target
        const innerText = form.toy.value;
        const searchedToys = data.filter(toy => toy.toyName.toLowerCase() === innerText.toLowerCase());
        if (searchedToys.length !== 0) {
            setToys(searchedToys);
        }
        else {
            setToys(null);
        } 
    }

    const handleToSeeAll = () => {
        setToys(toyData);
    }

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="text-center  py-20 bg-[#c8901f38]">
            <h2 className="text-5xl font-bold text-amber-800 underline underline-offset-8 decoration-4 mb-16">All Toys</h2>
            <form onSubmit={handleSearch} className="flex justify-center mb-5">
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
                <div className="mb-10 flex justify-end mr-5">
                    <button onClick={handleToSeeAll} className="btn text-base bg-amber-800 border-none">
                        See All
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-10 pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                </div>
                {
                    toys === null ?
                        <h2 className="text-6xl text-red-600 font-medium">No result found. Try again.</h2> :
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
                }
            </div>
        </div>
    );
};

export default AllToys;
