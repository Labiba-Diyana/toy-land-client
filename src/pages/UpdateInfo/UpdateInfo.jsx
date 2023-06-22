

const UpdateInfo = () => {
    
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;        
        const price = parseFloat(form.price.value);
        const quantity = parseFloat(form.quantity.value);
        const detail = form.detail.value;

        const newToy = { price, quantity, detail };
        console.log(newToy)

    }

    return (
        <div className="bg-[#53ab2329] pb-14">
            <div className="text-center py-40 w-8/12 mx-auto">
                <form onSubmit={handleUpdate} style={{ backgroundImage: "url(https://images.pexels.com/photos/8923955/pexels-photo-8923955.jpeg?auto=compress&cs=tinysrgb&w=1600)" }} className="p-16 rounded-xl shadow-2xl">
                    <h2 className="text-4xl font-bold text-amber-800 underline underline-offset-4 decoration-4 pb-14 "></h2>
                    <div className="flex">
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full border border-amber-600" />
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
                        <input type="submit" value="Update Now" className='  bg-amber-700 text-white text-center font-semibold w-full mx-5 py-4 px-9 rounded-md text-2xl' />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateInfo;