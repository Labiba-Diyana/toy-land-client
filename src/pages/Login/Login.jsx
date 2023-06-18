import backgroundImg from '../../assets/images/background/bg.png'
import img from '../../assets/images/special/loginImg.png'

const Login = () => {
    return (
        <div className='py-10' style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="flex justify-center items-center min-h-screen w-8/12 mx-auto">
                <div className='w-1/2'>
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
                    <h2 className='text-5xl font-bold text-center pt-8'>Login</h2>
                    <div className="card-body">
                        <form className='space-y-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control pt-5">
                                <button className="btn bg-green-600">Login</button>
                            </div>
                            <div className="divider py-8">OR</div>
                            <button className="btn btn-outline w-full btn-success">Login With Google</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;