import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    const navLinks =
        <>
            <li className="text-xl font-bold text-amber-700"><Link to="/">Home</Link></li>
            <li className="text-xl font-bold text-amber-700"><Link to="/allToys">All Toys</Link></li>
            {
                user?.email ?
                    <>
                        <li className="text-xl font-bold text-amber-700"><Link to="/myToys">My Toys</Link></li>
                        <li className="text-xl font-bold text-amber-700"><Link to="/addAToy"> Add A Toy</Link></li>
                    </>
                    : <></>
            }
            <li className="text-xl font-bold text-amber-700"><Link>Blogs</Link></li>
        </>


    return (
        <div className="bg-stone-200">
            <div className="mx-5 py-12">
                <div className="navbar">
                    <div className={user?.email ? 'justify-start 1/2 lg:w-1/3' : 'justify-start w-10/12'}>
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
                            <h2 className="ml-3 text-2xl lg:text-5xl font-bold">
                                <span className="text-amber-600">Toy</span>
                                <span className="text-green-700 font-extrabold">Land</span>
                            </h2>
                        </div>
                    </div>
                    <div className={user?.email ? "justify-center w-1/3  hidden lg:flex" : 'justify-end w-auto  hidden lg:flex'}>
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            {navLinks}
                        </ul>
                    </div>
                    <div className={user?.email ? 'justify-end w-1/2 lg:w-1/3' : 'justify-end w-auto'}>
                        {
                            user?.email ?
                                user?.photoURL ?
                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0}>
                                            {
                                                user?.displayName ?
                                                    <div className="dropdown dropdown-hover">
                                                        <label tabIndex={0}>
                                                            <div className="avatar">
                                                                <div className="w-14 rounded-full">
                                                                    <img src={user.photoURL} />
                                                                </div>
                                                            </div>
                                                        </label>
                                                        <ul style={{ pointerEvents: 'none' }} tabIndex={0} className="dropdown-content p-3 px-5 shadow bg-blue-300 text-xl font-semibold rounded-box w-52">
                                                            <li>{user?.displayName}</li>
                                                        </ul>
                                                    </div> :
                                                    <div className="avatar">
                                                        <div className="w-14 rounded-full">
                                                            <img src={user.photoURL} />
                                                        </div>
                                                    </div>
                                            }
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-stone-700 text-white rounded-box font-semibold w-52">
                                            <li onClick={handleLogOut}><a>Log out</a></li>
                                        </ul>
                                    </div>
                                    :
                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0}>
                                            {
                                                user?.displayName ?
                                                    <div className="dropdown dropdown-hover">
                                                        <label tabIndex={0}>
                                                            <FaUserCircle style={{ fontSize: '3rem' }}></FaUserCircle>
                                                        </label>
                                                        <ul style={{ pointerEvents: 'none' }} tabIndex={0} className="dropdown-content p-3 px-5 shadow bg-blue-300 text-xl font-semibold rounded-box w-52">
                                                            <li>{user?.displayName}</li>
                                                        </ul>
                                                    </div> :
                                                    <FaUserCircle style={{ fontSize: '3rem' }}></FaUserCircle>
                                            }
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-stone-700 text-white rounded-box font-semibold w-52">
                                            <li onClick={handleLogOut}><a>Log out</a></li>
                                        </ul>
                                    </div>
                                :
                                <Link to="/login">
                                    <button className="btn w-24 h-14 bg-green-700 border-none normal-case text-xl">Login</button>
                                </Link>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;