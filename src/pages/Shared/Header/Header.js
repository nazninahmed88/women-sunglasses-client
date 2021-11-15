import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
import 'animate.css';

const Header = () => {
    const { user, logout } = useAuth();

    const getLogout = () => {
        logout();
        window.location.reload(true);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-Color">
                <div className="container-fluid">
                    <a className="navbar-brand fs-2 animate__animated animate__flip" to='/home'><span className='text-danger'>SUN</span><span className='text-warning'>GLASSES</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <Link className="nav-link fs-5 text-light" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 text-light" to='/products'>Explore</Link>
                            </li>
                            {
                                user?.email &&
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 text-white" to='/dashboard'>Dashboard</Link>
                                </li>
                            }
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

                                {user.photoURL &&
                                    <img style={{ width: '30px', height: '30px', borderRadius: '30px', marginRight: '10px' }} src={user.photoURL} alt="" />
                                }
                                {
                                    user.displayName &&
                                    <span className='text-white' style={{ marginRight: '10px' }}>{user.displayName}</span>
                                }
                                   {
                                    user.email &&
                                    <span className='text-white' style={{ marginRight: '10px' }}>({user.email})</span>
                                }
                                <li className="nav-item">
                                    {user?.email ?
                                        <Link className="nav-link text-white " onClick={getLogout}>Log Out</Link>
                                        :
                                        <Link className="nav-link text-white" to='/login'>Login</Link>
                                    }
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;