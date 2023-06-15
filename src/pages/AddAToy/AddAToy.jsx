

const AddAToy = () => {
    return (
        <div className="bg-[#53ab2329] ">
            <div className="text-center py-36 w-8/12 mx-auto">
                <form style={{ backgroundImage: "url(https://images.pexels.com/photos/8923955/pexels-photo-8923955.jpeg?auto=compress&cs=tinysrgb&w=1600)" }} className="p-16 rounded-xl shadow-2xl">
                    <h2 className="text-4xl font-bold text-green-800 underline underline-offset-4 decoration-4 pb-14 ">ADD A TOY</h2>
                    {/* first row */}
                    <div className="flex">
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-full border border-amber-600" />
                        </div>
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-full border border-amber-600" />
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className="flex">
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-full border border-amber-600" />
                        </div>
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-full border border-amber-600" />
                        </div>
                    </div>
                    {/* Third Row */}
                    <div className="flex">
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-full border border-amber-600" />
                        </div>
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-full border border-amber-600" />
                        </div>
                    </div>
                    {/* fourth row */}
                    <div className="flex">
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-full border border-amber-600" />
                        </div>
                        <div className="form-control w-1/2 mx-5">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-full border border-amber-600" />
                        </div>
                    </div>
                    <div className="form-control w-full mx-5">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg mr-10 border border-amber-600" ></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAToy;

