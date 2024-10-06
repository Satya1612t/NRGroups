import { useState, useRef, useEffect } from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Package, User } from 'lucide-react'
import { useAuth } from './AuthProvider'
import { Card, CardHeader, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { TrendingUp, Share2, Copy, Facebook, Twitter, Linkedin, EyeIcon, EyeOffIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from 'react-hot-toast'
import VehicleRegistration from "@/Transport/components/VehicleRegistration"
import { getMenuItems } from "@/config"
import { useMenuContext } from './MenuProvider'
import axios from 'axios'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

interface OrderPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

function Dashboard() {
    const { activeMenuItems, setActiveMenuItems } = useMenuContext()
    const { user } = useAuth()
    const [sidebarOpen, _] = useState(false)
    const menuItems = getMenuItems(user)
    const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);
    const formRef = useRef(null);

    const handlePlaceDemand = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        const formData = new FormData(formRef.current)
        const token = localStorage.getItem('token');
        console.log(token)
        const entries = Object.fromEntries(formData.entries())
        console.log(entries)
        try {

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/transport/place-demand`, entries, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            })

            if (!response || !response.data) {
                toast.error('server_down')
            }
            toast.success(response.data.message)
        } catch (error) {
            console.error('Error updating user:', error);
        }
    }

    const renderContent = () => {
        switch (activeMenuItems) {
            case 'Dashboard':
                return <Dashboard />
            case 'Profile':
                return <Profile />
            case 'My Vehicle':
                return <Vehicle />
            case 'Update Routes':
                return <div>Vehicle Information</div>;
            case 'Register Driver':
                return <div>Vehicle Documents</div>;
            case 'Add New Vehicle':
                return <AddNewVehicle />
            case 'My Order':
                return <Shipment />
            case 'Earnings':
                return <Earning />
            case 'Settings':
                return <Settings />
            default:
                return <div></div>
        }
    }

    const OrderPopup = ({ isOpen, onClose }: OrderPopupProps) => {
        if (!isOpen) return null;

        return (
            <>
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
                        <h2 className="text-xl  flex items-center justify-center font-bold mb-4">  < Package className="h-10 w-10 mr-5" /> Create Your Order</h2>
                        <form ref={formRef} onSubmit={handlePlaceDemand}>
                            <div className="space-y-2">
                                <Label htmlFor="itemName">Item Type</Label>
                                <Input
                                    id="goodsType"
                                    name="goodsType"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="quantity">Quantity</Label>
                                <Input
                                    id="quantity"
                                    name="quantity"
                                    required
                                    placeholder="In quan"

                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="rate">Expected Frieght</Label>
                                <Input
                                    id="rate"
                                    name="rate"
                                    required
                                    placeholder="Type your frieght budget e.g, 5000"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="from">From (City)</Label>
                                    <Input
                                        id="from"
                                        name="from"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="to">To (City)</Label>
                                    <Input
                                        id="to"
                                        name="to"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                Post Demand
                            </Button>
                            <Button onClick={onClose} className="w-full mt-2">Close</Button>
                        </form>
                    </div>
                </div>
            </>
        )
    }

    const Settings = () => {

        const [showPassword, setShowPassword] = useState(false)
        const [showConfirmPassword, setShowConfirmPassword] = useState(false)
        const formRef = useRef(null);

        const togglePasswordVisibility = () => setShowPassword(!showPassword)
        const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword)

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault()
            if (!formRef.current) return;

            const formData = new FormData(formRef.current);

            const dataValue = Object.fromEntries(formData.entries())


            console.log('Form submitted:', dataValue)
        }

        return (
            <>
                <Card className="w-full mx-auto">
                    <CardHeader>
                        <CardTitle>Agent Settings</CardTitle>
                        <CardDescription>Update your personal information and password</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"

                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"

                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">New Password</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}

                                        placeholder="Enter new password"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 -translate-y-1/2"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                                        <span className="sr-only">
                                            {showPassword ? "Hide password" : "Show password"}
                                        </span>
                                    </Button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                <div className="relative">
                                    <Input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm new password"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 -translate-y-1/2"
                                        onClick={toggleConfirmPasswordVisibility}
                                    >
                                        {showConfirmPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                                        <span className="sr-only">
                                            {showConfirmPassword ? "Hide password" : "Show password"}
                                        </span>
                                    </Button>
                                </div>
                            </div>
                            <CardFooter className="px-0">
                                <Button type="submit" className="ml-auto">Save Changes</Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                </Card>
            </>
        )
    }

    const Earning = () => {

        const { user } = useAuth();
        if (!user) return <div>Loading...</div>

        const copyToClipboard = (text: string) => {
            navigator.clipboard.writeText(text)
            toast.success('Copied')
            // You might want to show a toast notification here
        }

        const shareLink = `http://127.0.0.1:5173/transport/signup/${user.referralCode}`

        return (
            <>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>User Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-2"><strong>Name:</strong> {user.name}</p>
                            <p className="mb-2"><strong>Referral Code:</strong> {user.referralCode}</p>
                            <p><strong>Successful Refers:</strong> {user.totalReferred}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>My Earnings</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-4xl font-bold">${user.commissionEarned}</p>
                        </CardContent>
                    </Card>

                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Share Your Referral</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap items-center gap-4">
                                <Button
                                    variant="outline"
                                    onClick={() => copyToClipboard(user.referralCode)}
                                >
                                    <Copy className="mr-2 h-4 w-4" /> Copy Code
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => copyToClipboard(shareLink)}
                                >
                                    <Copy className="mr-2 h-4 w-4" /> Copy Link
                                </Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">
                                            <Share2 className="mr-2 h-4 w-4" /> Share
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`, '_blank')}>
                                            <Facebook className="mr-2 h-4 w-4" /> Facebook
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareLink)}`, '_blank')}>
                                            <Twitter className="mr-2 h-4 w-4" /> Twitter
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareLink)}`, '_blank')}>
                                            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }

    const Dashboard = () => {
        const { user } = useAuth();
        if (!user) return <div>Loading...</div>
        const userType = user.role;
        return (
            <>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-6">
                    <div className="col-span-3">
                        <AvailabelLoads type={userType} />
                    </div>
                    <div className=" col-span-2">
                        {user.role === 'TRUCKER' ? <Vehicle /> : <Shipment />}
                    </div>
                    <div className="col-span-1 space-y-6">
                        <Profile />
                        <QuickStat />
                    </div>
                </div>
            </>
        )
    }

    const AvailabelLoads = ({ type }: any) => {
        console.log(type)
        const token: string | null = localStorage.getItem('token');
        const [demand, setDemand] = useState([])
        // const [truckDemand, setTruckDemand] = useState([])
        console.log(demand)

        const fetchActiveOrder = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/transport/active-demand`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response) {
                    throw new Error('Failed to fetch');
                }
                const data = await response.data;
                setDemand(data.demands)
            } catch (error) {
                console.error('Error fetching active order:', error);
            }
        };

        useEffect(() => {

            setTimeout(() => {
                fetchActiveOrder();
            }, 1000)

        }, [])

        return (
            <>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            {type === 'TRUCKER' ? 'Available Loads' : 'Available Trucks'}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className=" md:py-8 py-4 w-full">
                            <Carousel
                                swipeable={true}

                                sliderClass="rtl"
                                showDots={false}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={1000}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                arrows={false}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-"
                                className="border-2 border-black  "
                                rtl={true}
                            >
                                {demand.length > 0 && demand.filter((item: any) => {
                                    // Filter based on user type
                                    if (type === 'TRUCKER') {
                                        return item.consignerId !== null;  // Only show demands with a consignerId
                                    } 
                                    
                                    // If the user is a Consigner, show all demands that are linked to their trucker
                                    else if (type === 'CONSIGNER') {
                                        return item.truckerId !== null;  // Only show demands with a truckerId
                                    }
                                    return false;
                                }).map((item: any, index) => (

                                    <Card className="w-68 flex-shrink-0 mr-4" key={index}>
                                        <CardHeader>
                                            <CardTitle className="text-lg">{`Load  ${index + 1}`}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p><strong>From:</strong>{item.from}</p>
                                            <p><strong>To:</strong>{item.to}</p>
                                            <p><strong>Weight:</strong>{item.quantity}</p>
                                            <p><strong>Price:</strong> {item.rate}</p>
                                            <p><strong>Date:</strong>21-12-2024</p>
                                            <Button className="mt-2 w-full">{type === 'TRUCKER' ? 'Book Load' : 'Book Truck'}</Button>
                                        </CardContent>
                                    </Card>

                                ))}
                                {/* <Card className="w-68 flex-shrink-0 mr-4">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Load 1</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p><strong>From:</strong>indai</p>
                                        <p><strong>To:</strong> usa</p>
                                        <p><strong>Weight:</strong> 50tonnes</p>
                                        <p><strong>Price:</strong> 100000</p>
                                        <p><strong>Date:</strong>21-12-2024</p>
                                        <Button className="mt-2 w-full">Accept Load</Button>
                                    </CardContent>
                                </Card>
                                <Card className="w-68  flex-shrink-0 mr-4">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Load 1</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p><strong>From:</strong>indai</p>
                                        <p><strong>To:</strong> usa</p>
                                        <p><strong>Weight:</strong> 50tonnes</p>
                                        <p><strong>Price:</strong> 100000</p>
                                        <p><strong>Date:</strong>21-12-2024</p>
                                        <Button className="mt-2 w-full">Accept Load</Button>
                                    </CardContent>
                                </Card>

                                <Card className="w-68  flex-shrink-0 mr-4">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Load 1</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p><strong>From:</strong>indai</p>
                                        <p><strong>To:</strong> usa</p>
                                        <p><strong>Weight:</strong> 50tonnes</p>
                                        <p><strong>Price:</strong> 100000</p>
                                        <p><strong>Date:</strong>21-12-2024</p>
                                        <Button className="mt-2 w-full">Accept Load</Button>
                                    </CardContent>
                                </Card>
                                <Card className="w-68 flex-shrink-0 mr-4">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Load 2</CardTitle>
                                    </CardHeader>
                                    <CardContent className="">
                                        <p><strong>From:</strong>indai</p>
                                        <p><strong>To:</strong> usa</p>
                                        <p><strong>Weight:</strong> 50tonnes</p>
                                        <p><strong>Price:</strong> 100000</p>
                                        <p><strong>Date:</strong>21-12-2024</p>
                                        <Button className="mt-2 w-full">Accept Load</Button>
                                    </CardContent>
                                </Card> */}
                            </Carousel>
                        </div>
                    </CardContent>
                </Card>

            </>
        )
    }

    const UpcomingTrips = () => {
        return (
            <>
                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Trips</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>From</TableHead>
                                    <TableHead>To</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {/* {mockData.TRUCKER.upcomingTrips.map((trip) => ( */}
                                <TableRow >
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="bg-green-100 text-green-800">
                                            {/* {trip.status} */}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                                {/* ))} */}
                            </TableBody>
                        </Table>
                        <Button onClick={() => setIsOrderPopupOpen(true)}>Create Demand</Button>
                    </CardContent>
                </Card>
            </>
        )
    }

    const AddNewVehicle = () => {
        return (
            <>
                <VehicleRegistration />
            </>
        )
    }

    const QuickStat = () => {

        const { user } = useAuth();
        if (!user) return <div>Loading...</div>

        console.log(user);


        return (
            <>
                <div className="space-y-6 ">
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Stats</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <TrendingUp className="text-primary" />
                                    <button onClick={() => setIsOrderPopupOpen(true)} className=" underline hover:text-blue-600">Create a Demand</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">

                                <div className="flex items-center space-x-2">
                                    <Package className="text-primary" />
                                    <span>{user.role === 'TRUCKER' ? 'Total Vehicle' : 'Total Orders'}</span>
                                </div>
                                {/* <span className="font-semibold">{user.role === 'TRUCKER' ? user.trucker?.demand.length : user.consigner?.demand.length}</span> */}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <TrendingUp className="text-primary" />
                                    <span>Active Demands</span>
                                </div>
                                <span className="font-semibold">{'2'}</span>
                            </div>

                        </CardContent>
                    </Card>
                    <OrderPopup isOpen={isOrderPopupOpen} onClose={() => setIsOrderPopupOpen(false)} />
                </div>
            </>
        )
    }

    const Profile = () => {

        const { user } = useAuth();
        if (!user) return <div>Loading...</div>
        return (
            <>

                <Card>
                    <CardHeader>
                        <CardTitle>Profile</CardTitle>
                        <CardDescription>Your account details</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-primary border flex items-center justify-center">
                                <User className="h-8 w-8 text-primary-foreground " />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{user.name}</h3>
                                <p className="text-sm text-muted-foreground">{user.email}</p>
                                <p className="text-sm text-muted-foreground">Role: {' '}{user.role}</p>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">Member since: </p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline">Edit Profile</Button>
                    </CardFooter>
                </Card>
            </>
        )
    }

    const Vehicle = () => {

        const handleVehicleRegister = () => {
            setActiveMenuItems("Add New Vehicle");
        }

        const { user } = useAuth();
        if (!user) return <div>Loading...</div>

        // if(user?.trucker?.vehicle.length === 0 ) return 

        return (
            <>
                <div className="md:col-span-2 space-y-6">
                    <UpcomingTrips />
                    {/* <AvailabelLoads /> */}
                    <Card className="">
                        <CardHeader>
                            <CardTitle>Your Trucks</CardTitle>
                            <CardDescription>View and manage your registered trucks</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Model</TableHead>
                                        <TableHead>Capacity</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {user?.trucker?.vehicle.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={3} className="text-center border border-slate text-slate-500 ">
                                                You have not registered any vehicles yet!
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        user?.trucker?.vehicle.map(truck => (
                                            <TableRow key={truck.id}>
                                                <TableCell>{truck.vehicleType}</TableCell>
                                                <TableCell>{truck.loadCapacity}</TableCell>
                                                <TableCell>{truck.permitExpiry}</TableCell>
                                            </TableRow>
                                        )))}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleVehicleRegister}>Add New Truck</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Deliveries</CardTitle>
                            <CardDescription>Your latest transport jobs</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Date</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {/* {user.consigner?.shipments.map(delivery => (
                                        <TableRow key={delivery.id}>
                                            <TableCell>{delivery.description}</TableCell>
                                            <TableCell>{delivery.status}</TableCell>
                                            <TableCell>{delivery.quantity}</TableCell>
                                        </TableRow>
                                    ))} */}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </>
            // </div>
        )
    }

    const Shipment = () => {

        const { user } = useAuth();
        if (!user) return <div>Loading</div>

        return (
            <>
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Orders</CardTitle>
                            <CardDescription>View and manage your recent orders</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Date</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {/* {mockOrders.map(order => (
                                            <TableRow key={order.id}>
                                                <TableCell>{order.description}</TableCell>
                                                <TableCell>{order.status}</TableCell>
                                                <TableCell>{order.date}</TableCell>
                                            </TableRow>
                                        ))} */}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => setIsOrderPopupOpen(true)}>Create New Order</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Demands</CardTitle>
                            <CardDescription>View your posted demands</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Item Name</TableHead>
                                        <TableHead>Bid Price</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead>From</TableHead>
                                        <TableHead>To</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>

                                    {(user?.role === 'TRUCKER' ? user.trucker : user.consigner)?.demand.map((item: any, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{item.goodsType}</TableCell>
                                            <TableCell>{item.rate}</TableCell>
                                            <TableCell>{item.description}</TableCell>
                                            <TableCell>{item.quantity}{" "}Tonnes</TableCell>
                                            <TableCell>{item.from}</TableCell>
                                            <TableCell>{item.to}</TableCell>
                                            <TableCell>
                                                <div className="bg-green-300 text-green-950 p-1 font-medium rounded text-xs text-center">
                                                    {item.status}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter>
                            <Button>Post New Demand</Button>
                        </CardFooter>
                    </Card>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-20`}>
                    <nav>
                        {menuItems.map((item) => (
                            <div key={item.name}>
                                <a

                                    href="#"
                                    className={`block py-2.5 px-4 rounded transition duration-200 ${activeMenuItems === item.name ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                                    onClick={() => {
                                        setActiveMenuItems(item.name)
                                        // setSidebarOpen(false)
                                    }}
                                >
                                    <div className="flex items-center space-x-2">
                                        <item.icon className="h-5 w-5" />
                                        <span>{item.name}</span>
                                    </div>
                                </a>
                                {item.subMenu && activeMenuItems === 'My Vehicle' && (
                                    <div className="pl-6 space-y-2 my-2">
                                        {item.subMenu.map((subItem) => (
                                            <a
                                                key={subItem.name}
                                                href="#"
                                                className={`block py-2 px-4 rounded transition duration-200 ${activeMenuItems === subItem.name ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
                                                onClick={() => {
                                                    setActiveMenuItems(subItem.name);
                                                    // setSidebarOpen(false);
                                                }}
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <subItem.icon className="h-5 w-5" />
                                                    <span>{subItem.name}</span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </aside>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="container mx-auto px-6 py-8">
                        <h3 className="text-gray-700 text-3xl font-medium">{activeMenuItems}</h3>
                        <div className="mt-8">
                            {renderContent()}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}


export default Dashboard