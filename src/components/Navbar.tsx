import { useAuth } from './AuthProvider'
import { Link, useLocation } from "react-router-dom"
import { Menu, MessageSquare, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetClose, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getMenuItems } from '@/config'
import { useMenuContext } from "./MenuProvider"

function Navbar() {
    const location = useLocation();
    const { user, logout, isAuthenticated } = useAuth()
    const isLoginPage = location.pathname === '/transport/signin'
    const isPartnershipPage = location.pathname === '/transport/partnership'
    const menuItem = getMenuItems(user)
    const { setActiveMenuItems } = useMenuContext()

    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="max-w-full  px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Mobile menu button and Desktop Logo */}
                        <div className="flex items-center ">
                            {/* Mobile menu button */}
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="md:hidden">
                                        <Menu className="h-6 w-6" />
                                        <span className="sr-only">Open menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-72">
                                    <SheetHeader>
                                        <SheetTitle>
                                            <Link to={`${location.pathname.includes('/transport') ? '/transport' : '/realestate'}`} className="flex items-center">
                                                <span className="font-bold text-xl">NRGroup</span>
                                            </Link>
                                        </SheetTitle>
                                    </SheetHeader>
                                    <hr className='h-2 w-full text-black mt-6' />
                                    <div className="mt-5 flex flex-col space-y-5">
                                        <SheetClose asChild>
                                            <Link to="/services" className="text-lg font-medium">Services</Link>
                                        </SheetClose>
                                        <SheetClose asChild>
                                            <Link to="/about" className="text-lg font-medium">About</Link>
                                        </SheetClose>
                                        <SheetClose asChild>
                                            <Link to="/career" className="text-lg font-medium">Career</Link>
                                        </SheetClose>
                                        <SheetClose asChild>
                                            <Link to="/pricing" className="text-lg font-medium">pricing</Link>
                                        </SheetClose>
                                        {/* {isAuthenticated && (
                                            <>
                                                <SheetClose asChild>
                                                    <Link to="/dashboard" className="text-lg font-medium">Dashboard</Link>
                                                </SheetClose>
                                                <SheetClose asChild>
                                                    <Link to="/my-vehicle" className="text-lg font-medium">My Vehicle</Link>
                                                </SheetClose>
                                                <SheetClose asChild>
                                                    <Link to="/profile" className="text-lg font-medium">Profile</Link>
                                                </SheetClose>
                                                <SheetClose asChild>
                                                    <Link to="/settings" className="text-lg font-medium">Settings</Link>
                                                </SheetClose>
                                            </>
                                        )} */}
                                    </div>
                                </SheetContent>
                            </Sheet>

                            {/* Desktop Logo - hidden on mobile, visible on larger screens */}
                            <Link to={`${location.pathname.includes('/transport') ? "/transport" : '/realestate'}`} className="hidden md:flex items-center">
                                <span className="font-bold text-xl">NRGroup</span>
                            </Link>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:flex md:items-center md:justify-center md:space-x-5 md:ml-24">
                            <Link to="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
                            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
                            <Link to="/career" className="text-gray-700 hover:text-gray-900">Career</Link>
                            <Link to="/pricing" className="text-gray-700 hover:text-gray-900">pricing</Link>
                        </div>

                        {/* Right side icons/buttons */}
                        <div className="flex items-center">
                            {isAuthenticated ? (
                                <>
                                    <Button variant="ghost" size="icon">
                                        <MessageSquare className="h-5 w-5" />
                                        <span className="sr-only">Messages</span>
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <Bell className="h-5 w-5" />
                                        <span className="sr-only">Notifications</span>
                                    </Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="flex items-center space-x-2">
                                                <Avatar className="h-8 w-8">
                                                    {user ? (
                                                        <>
                                                            {/* <AvatarImage src={user} alt={user.name} /> */}
                                                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                                        </>
                                                    ) : (
                                                        ""
                                                    )}</Avatar>
                                                {user && <span className="hidden md:inline-block">{user.name}</span>}
                                                <ChevronDown className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-56 ">
                                            {menuItem.map((item, index) => (
                                                item.name && (
                                                    <div key={index}>
                                                        <DropdownMenuItem className='flex md:hidden' >
                                                            <item.icon className="h-4 w-4 mr-2" />
                                                            <Link onClick={() => setActiveMenuItems(item.name)} to="/transport/dash" className="capitalize">{item.name}</Link>
                                                        </DropdownMenuItem>
                                                        {/* <DropdownMenuItem>
                                                            <Car className="mr-2 h-4 w-4" />
                                                            <Link to="/my-vehicle">My Vehicle</Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Settings className="mr-2 h-4 w-4" />
                                                            <Link to="/settings">Settings</Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem>
                                                            <MoreHorizontal className="mr-2 h-4 w-4" />
                                                            <Link to="/more">More</Link>
                                                        </DropdownMenuItem> */}
                                                    </div>)
                                            ))}
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={logout}>
                                                Log out
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </>
                            ) : (
                                <>
                                    {!isLoginPage &&
                                        <Button variant="ghost" >
                                            <Link to={'/transport/signin'}>
                                                Log in
                                            </Link>
                                        </Button>}
                                    {!isPartnershipPage && <Button className="" variant="outline">
                                        <Link to={'/transport/partnership'}>Get Started?</Link>
                                    </Button>}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar