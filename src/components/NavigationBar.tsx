"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export function NavigationBar() {
  const location = useLocation();
  const isPartnershipPage = location.pathname === '/transport'
  const user = null
  return (

    <Navbar fluid rounded className="border-b bg-slate-50 py-5 md:py-3">
      <Navbar.Brand href="/transport" className="">
        <h1 className='text-4xl font-bold tracking-tighter '>NRGroup</h1>
      </Navbar.Brand>

      <div className="flex md:order-2 gap-4">

        {user ? (<div className={`${user ? 'flex' : 'hidden'}`}>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>) : (
          <div className="flex justify-center items-center">

            <Link to={'/transport/signin'} className=" bg-inherit md:flex hidden text-slate-900 font-medium text-base rounded text-center capitalize underline  md:w-full">Login</Link>
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
        <Navbar.Link href="/transport/signin" className="md:hidden flex">Login</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
