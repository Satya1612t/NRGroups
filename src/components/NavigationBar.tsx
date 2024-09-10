"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export function NavigationBar() {
  const user = null
  return (

    <Navbar fluid rounded className="border-b bg-slate-50 py-5 md:py-3">
      <Navbar.Brand href="/transport" className="">
        <h1 className='text-4xl font-bold tracking-tighter '>NRGroup</h1>
      </Navbar.Brand>

      <div className="flex md:order-2 gap-4">

        <Link  to={'/transport/registration'} className="text-wrap border py-2 px-4 text-slate-50 font-medium text-sm rounded  border-slate-50 bg-slate-800  w-20 md:w-full">Become a partner</Link>

        <div className={`${user ? 'flex' : 'hidden'}`}>
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
          <Navbar.Toggle />
        </div>
      </div>
      <Navbar.Collapse >
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
