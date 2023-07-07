import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import img from '../../assets/images/special/update.png'


const UpdatedInfo = () => {
    const toy = useLoaderData();
    const { _id, toyName, price, quantity, detail } = toy;
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = parseFloat(form.price.value);
        const quantity = parseFloat(form.quantity.value);
        const detail = form.detail.value;

        const updatedToy = { price, quantity, detail };

        fetch(`https://toy-store-server-six.vercel.app/toys/myToys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your data has been successfully updated',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div className="pb-14 bg-[#53ab2329]">
            <div className="text-center pt-44 pb-32 w-7/12 mx-auto">
                <div style={{ backgroundImage: `url(${img})` }} className="p-20 pb-24 rounded-xl shadow-2xl">
                    <h2 className="text-5xl font-bold text-amber-800 underline underline-offset-4 decoration-4 mt-12 mb-16 ">Updated Info: {toyName}</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="flex">
                            <div className="form-control w-1/2 mx-5">
                                <label className="label">
                                    <span className="label-text text-2xl font-medium">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full border border-amber-500" />
                            </div>
                            <div className="form-control w-1/2 mx-5">
                                <label className="label">
                                    <span className="label-text text-2xl font-medium">Available Quantity</span>
                                </label>
                                <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full border border-amber-500" />
                            </div>
                        </div>
                        <div className="form-control w-full mx-5 mt-7">
                            <label className="label">
                                <span className="label-text text-2xl font-medium">Detail Description</span>
                            </label>
                            <textarea placeholder="Detail Description" defaultValue={detail} name="detail" className="textarea textarea-bordered textarea-lg mr-10 border border-amber-500" ></textarea>
                        </div>
                        <div className="flex mt-14 mx-5">
                            <input type="submit" value="Update Now" className='btn btn-block mr-10 bg-amber-700 h-16 text-2xl border-none' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatedInfo;