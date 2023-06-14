

const UnicornToys = ({unicorn}) => {
    const { name, picture, price, rating } = unicorn;

    return (
        <div className="card w-auto lg:w-96 h-[500px] bg-base-100 shadow-xl">
            <figure className="h-8/12 pt-10">
                <img className="h-full" src={picture} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p>{rating}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Detail</button>
                </div>
            </div>
        </div>
    );
};

export default UnicornToys;