/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "./MyToy";
import bg from "../../assets/images/background/bg-myToys.png"
import Swal from "sweetalert2";



const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [descending, setDescending] = useState([]);
    const [ascending, setAscending] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/toys/myToys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/toys/myToys/ascending?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAscending(data))
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/toys/myToys/descending?email=${user.email}`)
            .then(res => res.json())
            .then(data => setDescending(data))
    }, []);

    const handleDescending = () => {
        setToys(descending);
    }

    const handleAscending = () => {
        setToys(ascending);
    }

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/myToys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="text-center pt-32 pb-48 bg-[#c8901f38]">
            <h2 className="text-5xl font-bold text-amber-800 underline underline-offset-8 decoration-4 mb-20">My Toys</h2>
            <div className="px-20">
                <div className="dropdown dropdown-bottom flex justify-end pb-8 pr-3">
                    <label tabIndex={0} className="m-1"><button className="btn text-base bg-amber-800 border-none">
                        Sort By Price
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-10 pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button></label>
                    <ul tabIndex={0} className="dropdown-content menu p-3 shadow  rounded-box w-52 bg-blue-200">
                        <li className="" onClick={handleAscending}><a>Ascending</a></li>
                        <li onClick={handleDescending}><a>Descending</a></li>
                    </ul>
                </div>
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
                                handleDelete={handleDelete}
                            ></MyToy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;