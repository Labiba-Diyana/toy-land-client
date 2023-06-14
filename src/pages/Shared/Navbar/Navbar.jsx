import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'

const Navbar = () => {

    const navLinks =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link>All Toys</Link></li>
            <li><Link>My Toys</Link></li>
            <li><Link> Add A Toy</Link></li>
            <li><Link>Blogs</Link></li>
        </>


    return (
        <div className="bg-stone-100">
            <div className="mx-8 lg:mx-20 py-12">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown mr-3">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="hidden lg:block">
                                <Link to='/'>
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                            <h2 className="ml-[-20px] text-2xl lg:text-5xl font-bold">
                                <span className="text-amber-600">Toy</span>
                                <span className="text-green-700 font-extrabold">Land</span>
                            </h2>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;