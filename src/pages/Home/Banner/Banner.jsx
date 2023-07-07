import banner1 from '../../../assets/images/banner/banner1.png'
import banner2 from '../../../assets/images/banner/banner2.png'
import banner3 from '../../../assets/images/banner/banner3.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='mx-6 lg:mx-0 pt-12 lg:pt-0'>
            <div className="carousel w-full h-[370px] lg:h-[850px] rounded-lg">
                <div id="item1" className="carousel-item w-full relative" >
                    <img src={banner1} className="w-full" />
                    <div className='absolute h-full w-9/12 left-0 top-0 flex items-center bg-gradient-to-r from-[#cd9155ee] to-[rgba(21, 21, 21, 0)]'>
                        <div className='pl-8 lg:pl-24 space-y-5 lg:space-y-11 animation'>
                            <h1 className='text-white text-4xl lg:text-8xl font-bold'>Get the best
                                <br /> toy for your kid</h1>
                            <p className='text-white hidden lg:block text-3xl'>We are here to provide you the best collection of animal features toys <br /> for your little ones. Our main priority is your child happiness.</p>
                            <button className='bg-green-700 hidden lg:block text-white text-center font-semibold py-4 px-9 rounded-md text-2xl'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full relative" >
                    <img src={banner2} className="w-full" />
                    <div className='absolute h-full w-9/12 left-0 top-0 flex items-center bg-gradient-to-r from-[#cd9155ee] to-[rgba(21, 21, 21, 0)]'>
                        <div className='pl-8 lg:pl-24 space-y-5 lg:space-y-11 animation'>
                            <h1 className='text-white text-4xl lg:text-8xl font-bold'>Get the best
                                <br /> toy for your kid</h1>
                            <p className='text-white hidden lg:block text-3xl'>We are here to provide you the best collection of animal features toys <br /> for your little ones. Our main priority is your child happiness.</p>
                            <button className='bg-green-700 hidden lg:block text-white text-center font-semibold py-4 px-9 rounded-md text-2xl'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative" >
                    <img src={banner3} className="w-full" />
                    <div className='absolute h-full w-9/12 left-0 top-0 flex items-center bg-gradient-to-r from-[#cd9155ee] to-[rgba(21, 21, 21, 0)]'>
                        <div className='pl-8 lg:pl-24 space-y-5 lg:space-y-11 animation'>
                            <h1 className='text-white text-4xl lg:text-8xl font-bold'>Get the best
                                <br /> toy for your kid</h1>
                            <p className='text-white hidden lg:block text-3xl'>We are here to provide you the best collection of animal features toys <br /> for your little ones. Our main priority is your child happiness.</p>
                            <button className='bg-green-700 hidden lg:block text-white text-center font-semibold py-4 px-9 rounded-md text-2xl'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-10/12 lg:w-full  py-2 gap-2 mt-[-40px] lg:mt-[-60px] absolute">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;
