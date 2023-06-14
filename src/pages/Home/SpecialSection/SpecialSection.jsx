

const SpecialSection = () => {
    return (
        <div className="bg-white pt-20 pb-40">
            <div className="text-center w-10/12 mx-auto pb-12">
                <div className="space-y-7 mb-24">
                    <h1 className="text-6xl font-bold text-amber-800">Our New Project</h1>
                    <p className='text-xl text-stone-600'>We are starting a new project for our special children. Where we will spend <br /> our donation for betterment of children with autism. Let together change the world one child at a time.</p>
                </div>
                <div className="w-full h-[700px] bg-amber-50 p-20 rounded-xl flex space-x-24 shadow-xl" >
                    <img src='https://images.pexels.com/photos/7944016/pexels-photo-7944016.jpeg?auto=compress&cs=tinysrgb&w=1600' className="w-[600px] h-full shadow-2xl border-8  border-l-green-600 border-t-green-600 border-r-amber-500 border-b-amber-500" />
                    <div className='flex items-center h-full'>
                        <div className="space-y-12">
                            <h1 className='text-7xl font-bold text-orange-400'>We Are Donating!!!</h1>
                            <p className='text-stone-500 hidden lg:block text-2xl'>We will donate three percent of revenue of each toy what we gonna earn from selling that. This is to a child within the autism spectrum and his family the early intervention services that will change their condition. We are working with <a href="https://www.acwf-bd.org/" className="text-blue-800 font-semibold underline underline-offset-2">AUTISTIC CHILDREN WELFARE FOUNDATION</a> Your one help is enough for a child future.

</p>
                            <div className="flex justify-center">
                                <button className='bg-green-600 hidden lg:block text-white text-center font-semibold py-4 px-9 text-2xl rounded-md'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialSection;