import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const AddAToy = () => {

    const {user} = useContext(AuthContext);

    const handleAddAToy = event => {
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        const toyName = form.toyName.value;
        const name = form.name.value;
        const email = form.email.value;
        const subCategory = form.subCategory.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value)
        const quantity = parseFloat(form.quantity.value);
        const detail = form.detail.value;

        const newToy = { picture, toyName, name, email, subCategory, price, rating, quantity, detail };


        fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your toy has been added successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
    }

    return (
        <div className="bg-[#53ab2329] pb-14">
            <div className="text-center py-40 w-8/12 mx-auto">
                <form onSubmit={handleAddAToy} style={{ backgroundImage: "url(https://images.pexels.com/photos/8923955/pexels-photo-8923955.jpeg?auto=compress&cs=tinysrgb&w=1600)" }} className="p-16 rounded-xl shadow-2xl">
                    <h2 className="text-4xl font-bold text-amber-800 underline underline-offset-4 decoration-4 pb-14 ">ADD A TOY</h2>
                    {/* first row */}
                    <div className="flex">
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Picture URL of the toy</span>
                            </label>
                            <input type="text" name="picture" placeholder="Picture URL" className="input input-bordered w-full border border-amber-600" />
                        </div>
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Toy Name</span>
                            </label>
                            <input type="text" name="toyName" placeholder="Toy Name" className="input input-bordered w-full border border-amber-600" />
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className="flex">
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text text-lg font-medium">User Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered w-full border border-amber-600" />
                        </div>
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text text-lg font-medium">User Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} readOnly placeholder="Email" className="input input-bordered w-full border border-amber-600" />
                        </div>
                    </div>
                    {/* Third Row */}
                    <div className="flex">
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Sub-category</span>
                            </label>
                            <input type="text" name="subCategory" placeholder="Sub-category" className="input input-bordered w-full border border-amber-600" />
                        </div>
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full border border-amber-600" />
                        </div>
                    </div>
                    {/* fourth row */}
                    <div className="flex">
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full border border-amber-600" />
                        </div>
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Available Quantity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full border border-amber-600" />
                        </div>
                    </div>
                    <div className="form-control w-full mx-5">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Detail Description</span>
                        </label>
                        <textarea placeholder="Detail Description" name="detail" className="textarea textarea-bordered textarea-lg mr-10 border border-amber-600" ></textarea>
                    </div>

                    <div className="flex mt-12">
                        <input type="submit" value="Add Now" className='bg-amber-700 text-white text-center font-semibold w-full mx-5 py-4 px-9 rounded-md text-2xl' />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddAToy;
