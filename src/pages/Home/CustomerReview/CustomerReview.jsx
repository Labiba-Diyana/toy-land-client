import { useState } from "react";
import {  FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';


const CustomerReview = () => {
    const [firstLike, setFirstLike] = useState(0);
    const [secondLike, setSecondLike] = useState(0);
    const [thirdLike, setThirdLike] = useState(0);

    const handleLikeFirst = () => {
        if (firstLike === 0) {
            const newLikes = firstLike + 1;
            setFirstLike(newLikes);
        }
        else {
            setFirstLike(0);
        }
    }
    const handleLikeSecond = () => {
        if (secondLike === 0) {
            const newLikes = secondLike + 1;
            setSecondLike(newLikes);
        }
        else {
            setSecondLike(0);
        }
    }
    const handleLikeThird = () => {
        if (thirdLike === 0) {
            const newLikes = thirdLike + 1;
            setThirdLike(newLikes);
        }
        else {
            setThirdLike(0);
        }
    }


    return (
        <div className="text-center my-20 lg:my-36 w-9/12 mx-auto">
            <div className="space-y-5 lg:space-y-7 mb-20 lg:mb-24">
                <h1 className="text-3xl lg:text-6xl font-bold text-amber-800">Happy Customer</h1>
                <p className='text-xs lg:text-xl text-stone-600'>There are some review from some of our  happy <br className="hidden lg:block"/> customer. Hope this will help you. Cause customer satisfaction is our first priority.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-white">
                <div className="card shadow-xl bg-blue-900">
                    <figure className="mt-[-30px]"><img className="mask mask-circle h-[83px] lg:h-[100px]" src="https://imgv3.fotor.com/images/slider-image/a-woman-in-a-suit-with-a-white-background.png" /></figure>
                    <div className="card-body space-y-3 lg:space-y-5">
                        <div className="flex">
                            <h2 className="card-title">Anna Frank</h2>
                            <p className="text-end"><small>April 16, 2023</small></p>
                        </div>
                        <hr />
                        <p className="text-start text-xs lg:text-base">The details on every single figure were great! I was very happy with this order!</p>
                        <hr />
                        <div className="flex">
                            <div className="rating gap-1 grow">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" readOnly />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                            </div>
                            <div>
                                <button onClick={handleLikeFirst}>
                                    {
                                        firstLike === 0 ? <FaRegThumbsUp></FaRegThumbsUp>
                                            : <FaThumbsUp></FaThumbsUp>
                                    }
                                </button>
                                <span className="ml-2">
                                    {firstLike}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-12 lg:mt-0 bg-yellow-600 shadow-xl">
                    <figure className="mt-[-30px]"><img className="mask mask-circle h-[83px] lg:h-[100px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRc2TQsepIQ6hndf_5uPGqGJFH9aXEbm5Sg&usqp=CAU" /></figure>
                    <div className="card-body space-y-3 lg:space-y-5">
                        <div className="flex">
                            <h2 className="card-title">David Sam</h2>
                            <p className="text-end"><small>Feb 16, 2023</small></p>
                        </div>
                        <hr />
                        <p className="text-start text-xs lg:text-base">Great choice of toys for my daughter, can not fault the dollhouse and my daughter loved it! Quick delivery too!</p>
                        <hr />
                        <div className="flex">
                            <div className="rating gap-1 grow">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" readOnly />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                            </div>
                            <div>
                                <button onClick={handleLikeSecond}>
                                    {
                                        secondLike === 0 ? <FaRegThumbsUp></FaRegThumbsUp>
                                            : <FaThumbsUp></FaThumbsUp>
                                    }
                                </button>
                                <span className="ml-2">
                                    {secondLike}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-12 lg:mt-0 bg-pink-700 shadow-xl text-white">
                    <figure className="mt-[-30px]"><img className="mask mask-circle h-[83px] lg:h-[100px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1hekb7zCAt6aMJiS0Z09VwpEiMPFh840Xw&usqp=CAU" /></figure>
                    <div className="card-body space-y-3 lg:space-y-5">
                        <div className="flex">
                            <h2 className="card-title">Amy Rose</h2>
                            <p className="text-end"><small>June 16, 2023</small></p>
                        </div>
                        <hr />
                        <p className="text-start text-xs lg:text-base">Such a great selection of toys and speedy delivery.
                            My query was answered expeditiously, great company to deal with.
                            Highly recommend!</p>
                        <hr />
                        <div className="flex ">
                            <div className="rating gap-1 grow">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" readOnly />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                            </div>
                            <div>
                                <button onClick={handleLikeThird}>
                                    {
                                        thirdLike === 0 ? <FaRegThumbsUp></FaRegThumbsUp>
                                            : <FaThumbsUp></FaThumbsUp>
                                    }
                                </button>
                                <span className="ml-2">
                                    {thirdLike}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerReview;