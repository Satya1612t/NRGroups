"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export function NavigationBar() {
  const location = useLocation();
  const isPartnershipPage = location.pathname === '/transport'
  const isLoginPage = location.pathname === '/transport/signin'
  const { user, logout, isAuthenticated } = useAuth()


  return (

    <Navbar fluid rounded className="border-b bg-slate-50 py-5 md:py-3">
      <Navbar.Brand href={`${location.pathname.includes('/transport') ? "/transport" : '/realestate'}`} className="">
        <h1 className='text-4xl font-bold tracking-tighter '>NRGroup</h1>
      </Navbar.Brand>

      <div className="flex md:order-2 gap-4">

        {isAuthenticated ? (<div className={`${isAuthenticated ? 'flex' : 'hidden'}`}>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="" rounded />
            }
          >
            <Dropdown.Header className="z-50">
              <span className="block text-sm">{user?.name}</span>
              <span className="block truncate text-sm font-medium">{user?.email}</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          </Dropdown>
        </div>) : ( !isLoginPage &&
          <div className="flex justify-center items-center">

            <Link to={`${location.pathname.includes('/realestate') ? '/realestate/loginpage' : '/transport/signin'}`} className=" bg-inherit md:flex hidden text-slate-900 font-medium text-base rounded text-center capitalize underline  md:w-full">Login</Link>
          </div>
        )}
        {isPartnershipPage &&
          <Link to={'/transport/partnership'} className="text-wrap border py-2 px-4 text-slate-50 font-medium text-sm rounded text-center capitalize border-slate-50 bg-slate-800 w-28   md:w-full">Become a partner</Link>
        }
        <Navbar.Toggle className="" />
      </div>

      <Navbar.Collapse className="" >
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        {!isAuthenticated && <Navbar.Link href={`${location.pathname.includes('/realestate') ? '/realestate/loginpage' : '/transport/signin'}`} className="md:hidden flex">Login</Navbar.Link>}
      </Navbar.Collapse>
    </Navbar>
  );

 

}
