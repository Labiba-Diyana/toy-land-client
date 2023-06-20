

const MyToy = ({ toy }) => {

    const { picture, toyName, name, email, subCategory, price, rating, quantity, detail } = toy

    return (
        < tr >
            <th className="pl-14">
                <label>
                    <button className="btn btn-circle bg-orange-800 border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-32 h-32">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-2xl">{toyName}</div>
                    </div>
                </div>
            </td>
            <td className="text-lg font-semibold">
                {name}
                <br />
                <span className="badge badge-ghost badge-sm bg-stone-200">{email}</span>
            </td>
            <td className="text-lg font-semibold">{subCategory}</td>
            <td className="text-lg font-semibold">${price}</td>
            <td className="text-lg font-semibold">{rating}</td>
            <td className="text-lg font-semibold">{quantity}</td>
            <td className="text-lg font-semibold">
                <div className="dropdown">
                    <label tabIndex={0} className="m-1"><button className="btn btn-ghost text-lg font-extrabold text-indigo-800 btn-xs">Details</button></label>
                    <div tabIndex={0} className="dropdown-content card card-compact w-96 p-2 shadow bg-primary text-primary-content">
                        <div className="card-body whitespace-pre-line w-full">
                            <h3 className="card-title text-3xl">Detail description of {toyName}.</h3>
                            <p className="text-blue-300 text-xl">{detail}</p>
                        </div>
                    </div>
                </div>
            </td>
            <th>
                <button className="btn btn-outline btn-error text-lg font-bold">Update</button>
            </th>
        </tr >
    );
};

export default MyToy;