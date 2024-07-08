
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.config';
import logo from '../../assets/images/logo/logo2.png'
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <header className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-10" />
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-4">
                    <Link to="/packages" className="hover:text-green-300">Packages</Link>
                    <Link to="/blog" className="hover:text-green-300">Blog</Link>
                    <Link to="/offers" className="hover:text-green-300">Offers</Link>
                    <Link to="/about" className="hover:text-green-300">About</Link>
                    {user && (
                        <>
                            <Link to="/addpackage" className="hover:text-green-300">Add</Link>
                            <Link to="/myorders" className="hover:text-green-300">My Orders</Link>
                            <Link to="/manageorders" className="hover:text-green-300">Manage Orders</Link>
                        </>
                    )}
                    {user ? (
                        <button
                            className="text-white hover:text-red-300"
                            onClick={handleSignOut}
                        >
                            Sign Out <span>({user.displayName})</span>
                        </button>
                    ) : (
                        <Link to="/login" className="hover:text-green-300">Login</Link>
                    )}
                </nav>
                <div className="md:hidden">
                    <button
                        className="text-white hover:text-green-300 focus:outline-none"
                        onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id="mobile-menu" className="hidden md:hidden bg-green-600">
                <div className="flex flex-col space-y-4 p-4">
                    <Link to="/packages" className="hover:text-green-300">Packages</Link>
                    <Link to="/blog" className="hover:text-green-300">Blog</Link>
                    <Link to="/offers" className="hover:text-green-300">Offers</Link>
                    <Link to="/about" className="hover:text-green-300">About</Link>
                    {user && (
                        <>
                            <Link to="/addpackage" className="hover:text-green-300">Add</Link>
                            <Link to="/myorders" className="hover:text-green-300">My Orders</Link>
                            <Link to="/manageorders" className="hover:text-green-300">Manage Orders</Link>
                        </>
                    )}
                    {user ? (
                        <button
                            className="text-white hover:text-red-300"
                            onClick={handleSignOut}
                        >
                            Sign Out <span>({user.displayName})</span>
                        </button>
                    ) : (
                        <Link to="/login" className="hover:text-green-300">Login</Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
