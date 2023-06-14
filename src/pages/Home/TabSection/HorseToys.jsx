

const HorseToys = ({ horse }) => {
    const { name, picture, price, rating } = horse;

    return (
        <div className="card w-auto lg:w-96 h-[500px] bg-base-100 shadow-xl">
            <figure className="h-8/12 pt-10">
                <img className="h-full" src={picture} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <div className="flex justify-center items-center">
                    <p>{rating}</p>
                    <div className="card-actions">
                        <button className="btn bg-green-700 border-none">View Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorseToys;