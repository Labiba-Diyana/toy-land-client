import { Link, useLocation, useNavigate } from 'react-router-dom';
import backgroundImg from '../../assets/images/background/bg-login.png'
import img from '../../assets/images/special/loginImg.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const Login = () => {

    const { login, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Login');

    const from = location.state?.from?.pathname || "/login"

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'You have successfully logged in.',
                    })
                }
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                if (error) {
                    alert(error.message);
                }
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'You have successfully logged in with your google account.',
                    })
                }
                navigate(from, { replace: true })
            })
            .catch(error => {
                if (error) {
                    alert(error.message);
                }
            })
    }

    return (
        <div className='py-10' style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="flex justify-center items-center min-h-screen w-8/12 mx-auto">
                <div className='w-1/2'>
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
                    <h2 className='text-5xl font-bold text-center pt-8'>Login</h2>
                    <div className="card-body">
                        <form onSubmit={handleLogin} className='space-y-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control pt-5">
                                <button type='submit' className="btn bg-green-600 text-lg font-semibold border-none">Login</button>
                            </div>
                        </form>
                        <p className='text-center pt-2 text-lg font-medium text-stone-500'>New to ToyLand? <Link to="/register" className='text-green-600 text-xl'>Create New Account</Link></p>
                        <div className="divider py-4">OR</div>
                        <button onClick={handleGoogleLogin} className="btn btn-outline w-full btn-success text-lg font-bold">
                            <FaGoogle className='mr-3 text-2xl'></FaGoogle>  Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;