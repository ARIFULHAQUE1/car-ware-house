import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
      return (
            <div>

                  <div className="navbar bg-gradient-to-r from-secondary to-accent text-primary flex justify-between">
                        <div className="navbar-start">
                              <div className="dropdown font-semi-bold">
                                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52 ">
                                          <li><Link to={'/about'}>About</Link></li>
                                          <li><Link to={'/contact'}>Contact</Link></li>
                                          <li><Link to={'/myItem'}>My Item</Link></li>
                                          <li><Link to={'/manageItem'}>Manage Item</Link></li>



                                    </ul>
                              </div>
                              <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Next Gear</Link>

                        </div>
                        <div className="navbar-center hidden lg:flex font-semibold">
                              <ul className="menu menu-horizontal p-0">
                                    <li><Link to={'/about'}>About</Link></li>

                                    <li><Link to={'/contact'}>Contact</Link></li>
                                    <li><Link to={'/myItem'}>My Item</Link></li>
                                    <li><Link to={'/manageItem'}>Manage Item</Link></li>



                              </ul>
                        </div>

                        <div className="navbar-end  dropdown dropdown-end  flex justify-end">

                              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">


                                    <div className="w-10 rounded-full">
                                          <img src="https://placeimg.com/80/80/people" />
                                    </div>


                              </label>

                              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-48 p-2 shadow bg-secondary rounded-box w-52 text-primary">
                                    <li>
                                          <a className="justify-between">
                                                Profile
                                                <span className="badge badge-secondary">New</span>
                                          </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                              </ul>
                        </div>

                  </div>

            </div>
      );
};

export default Navbar;