import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Menu</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                           
                            <li>
                                <Link to="/" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-calendar3-fill"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/employee" className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-people-fill"></i> <span className="ms-1 d-none d-sm-inline">Manage Employee</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/home" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-bag-fill"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></Link>
                            </li> */}
                            <li>
                                <Link to="/profile" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                    <i className="fs-4 bi-person-fill"></i> <span className="ms-1 d-none d-sm-inline">Profile</span></Link>
                                
                            </li>
                            
                            <li>
                                <Link to="/#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span></Link>
                            </li>  
                            
                        </ul>
                        
                        
                    </div>
                </div>
                <div className="col p-0 m-0 align-item-center">
                    <div className='p-1 justify-content-center border border-bottom shadow'>
                        <h4>Employee Management App</h4>
                        

                    </div>
                    <Outlet/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard