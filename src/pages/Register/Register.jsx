import { Link } from 'react-router-dom';
import backgroundImg from '../../assets/images/background/bg-register.png'
import img from '../../assets/images/special/registerImg.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const {createUser, googleLogin} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const name = form .name.value;
        const email = form .email.value;
        const password = form .password.value;
        const photo = form .photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            if(user){
                alert('You have successfully logged in');
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result => {
            const user = result.user;
            console.log(user);
            if(user){
                alert('You have successfully logged in');
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='py-44' style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="flex justify-center items-center min-h-screen w-9/12 mx-auto">
                <div className='w-1/2'>
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
                    <h2 className='text-5xl font-bold text-center pt-14'>Register your account</h2>
                    <div className="card-body p-16">
                        <form onSubmit={handleLogin} className='space-y-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control pt-5">
                                <button type='submit' className="btn bg-green-600">Register</button>
                            </div>
                        </form>
                        <p className='text-center pt-2 text-lg font-medium text-stone-500'>Already have an account? <Link to="/login" className='text-green-600 text-xl'>Login</Link></p>
                        <div className="divider py-4">OR</div>
                        <button onClick={handleGoogleLogin} className="btn btn-outline font-bold w-full btn-success">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;