import { Link } from "react-router-dom"
import { SliderTop } from "../components/SliderTop"
import TransportServiceCard from "../components/TransportServiceCard"
import SliderMiddle from "../components/SliderMiddle"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SavingsIcon from '@mui/icons-material/Savings';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Diversity3Icon from '@mui/icons-material/Diversity3';

type Props = {}

function TransportHome({ }: Props) {
    return (
        <>
            <SliderTop />
            <div className="md:px-52 px-5 py-6 md:py-12 w-full">
                <h1 className="text-center md:text-6xl text-xl  text-slate-900  whitespace-nowrap font-bold uppercase tracking-tighter">Services</h1>
                <div className="flex justify-center">
                    <hr className="h-1 bg-slate-600 w-20 mt-2" />
                </div>
                <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <TransportServiceCard />
                </div>
            </div>
            <div className="flex justify-center">
                <Link to='' className="text-white bg-gray-800  hover:bg-gray-900  font-medium  text-sm px-5 py-3 rounded-sm border-slate-50 border md:border-none capitalize"> See More</Link>
            </div>
            {/* // Why Choose Us  */}
            <SliderMiddle type='sliderOne' />
            <InputLabel />
            <Why />
            <SpecialFeature />
            <SliderMiddle type='sliderTwo' />
            <div className="md:px-36 px-5 py-5 bg-slate-200 flex gap-2 justify-between items-center">
                <h1 className="text-lg md:text-2xl font-semibold text-slate-900 capitalize">Not sure which solution fits you business needs?</h1>
                <Link to='' className="text-white bg-gray-800  hover:bg-gray-900  font-medium text-center whitespace-nowrap text-sm px-5 py-3 rounded-sm border-slate-50 border md:border-none capitalize">Contact Us</Link>
            </div>
        </>
    )
}

const InputLabel = () => {
    return (
        <>
            <div className="w-full h-[500px] bg-red-500 relative">
                <img src="https://www.synter.com/wp-content/uploads/2022/10/AdobeStock_345936352-1080x544.jpeg" className="object-cover h-full w-full" alt="" />
                <div className="absolute w-80 md:w-[480px] h-full bg-slate-900 z-10 top-0 left-1/2 -translate-x-1/2 md:left-[480px] opacity-85"></div>
                <div className="absolute w-80 md:w-[480px] h-full bg-transparent z-20 top-0 left-1/2 -translate-x-1/2 md:left-[480px] opacity-85 px-10 md:py-10 py-5">
                    <h1 className="text-2xl whitespace-nowrap md:text-3xl text-slate-50 font-semibold mb-4 text-center uppercase">Request a callback </h1>
                    <div className="text-white  lg:px-4">
                        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeLGtIqC2plkB1GgM-3leEdOdgiVvKy8YvqMXW-SIkcjuMvhQ/formResponse" method="POST" className="mx-auto max-w-xl ">
                            <div className="grid grid-cols-1 md:gap-x-8 md:gap-y-5 gap-y-2 gap-x-4 sm:grid-cols-2">
                                <div>
                                    <div className="">
                                        <input placeholder="John" required type="text" name="entry.1019969488" id="name" className="focus:ring-0 block w-full selection:outline-none capitalize border-0   text-slate-50 bg-transparent border-b-2 border-slate-50 placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <div className="">
                                        <input placeholder="doe" type="text" name="entry.1604412294" id="last" className="block w-full capitalize border-0  focus:ring-0  text-slate-50 bg-transparent border-b-2 border-slate-50 placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="">
                                        <input placeholder="example@gmail.com" required name="entry.1848001930" type="email" id="email" className="block w-full border-0 focus:ring-0 text-slate-50 bg-transparent border-b-2 border-slate-50 placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="">
                                        <input placeholder="MNC enterprises" type="text" name="entry.473986473" id="company" className="block capitalize w-full border-0  focus:ring-0 text-slate-50 bg-transparent border-b-2 border-slate-50 placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="">
                                    <input placeholder="9896XXXXX2" required type="tel" name="entry.2136795918" id="phone" className="block w-full border-0 focus:ring-0 text-slate-50 bg-transparent border-b-2 border-slate-50 placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="">
                                        <textarea placeholder='Leave a message...' name="entry.1049578757" id="message" rows={4} className="block w-full border-0  focus:ring-0 text-slate-50 bg-transparent border-b-2 border-slate-50 placeholder:text-gray-400  sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="text-slate-900  bg-slate-50  hover:bg-slate-500  font-medium text-center md:text-sm text-lg px-5 py-3 rounded-sm border-slate-50 border md:border-none capitalize">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

const Why = () => {
    return (
        <>
            <div className="bg-slate-200 grid grid-cols-1 md:grid-cols-2 md:gap-44 gap-10 md:px-44 px-10 py-10 ">
                <div className="w-full">
                    <h1 className=" md:text-6xl text-xl  text-slate-900  whitespace-nowrap font-bold uppercase tracking-tighter">Why</h1>
                    <hr className="h-1 bg-slate-600 w-20 mt-2" />
                    <h1 className="mt-5 text-lg font-normal text-slate-600 leading-tight ">Our Business Philosophy is based on Honesty, Sincerity, Discipline, Time Management, Quality Work and Experienced Manpower which are the secrets for our rapid growth and commendable success. We believe in fostering long-term relationships with our clients by delivering exceptional value and exceeding their expectations. </h1>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex items-center justify-center space-y-1 flex-col">
                        <AddHomeWorkIcon sx={{ height: 70, width: 70 }} />
                        <h1 className="uppercase text-xl font-bold text-slate-900">5+</h1>
                        <h4 className="capitalize text-sm text-slate-600">Years of experience</h4>
                    </div>
                    <div className="flex items-center justify-center space-y-1 flex-col">
                        <FireTruckIcon sx={{ height: 70, width: 70 }} />
                        <h1 className="uppercase text-xl font-bold text-slate-900">50+</h1>
                        <h4 className="capitalize text-sm text-slate-600">Variety of vechiles</h4>
                    </div>
                    <div className="flex items-center justify-center space-y-1 flex-col">
                        <ReduceCapacityIcon sx={{ height: 70, width: 70 }} />
                        <h1 className="uppercase text-xl font-bold text-slate-900">100+</h1>
                        <h4 className="capitalize text-sm text-slate-600">Manpower</h4>
                    </div>
                    <div className="flex items-center justify-center space-y-1 flex-col">
                        <DevicesOtherIcon sx={{ height: 70, width: 70 }} />
                        <h1 className="uppercase text-xl font-bold text-slate-900">10,000</h1>
                        <h4 className="capitalize text-sm text-slate-600">Cases Handling</h4>
                    </div>
                    <div className="flex items-center justify-center space-y-1 flex-col">
                        <PendingActionsIcon sx={{ height: 70, width: 70 }} />
                        <h1 className=" text-base font-bold text-slate-900">Punchuality</h1>
                        <h4 className="capitalize text-sm text-slate-600">Time Management</h4>

                    </div>
                    <div className="flex items-center justify-center flex-col space-y-1">
                        < AdminPanelSettingsIcon sx={{ height: 70, width: 70 }} />
                        <h1 className="uppercase text-xl font-bold text-slate-900">5+</h1>
                        <h4 className="capitalize text-sm text-slate-600">Years of experience</h4>

                    </div>

                </div>
            </div>

        </>
    )
}

const SpecialFeature = () => {
    return (
        <>
            <div className="py-10 px-10 md:px-44 bg-slate-50">
                <h1 className="text-center md:text-6xl text-xl  text-slate-900  whitespace-nowrap font-bold uppercase tracking-tighter">Our special features</h1>
                <div className="flex justify-center">
                    <hr className="h-1 bg-slate-600 w-20 mt-2" />
                </div>
                <div className="md:flex justify-center items-center md:gap-16 gap-4 py-5 md:py-10 grid grid-cols-3">
                    <div>
                        <VerifiedUserIcon color="primary" sx={{ height: 90, width: 90, }} />
                        <h1 className="text-lg font-semibold text-slate-800 mt-2 text-center">Assurance</h1>
                    </div>
                    <div>
                        <HandshakeIcon sx={{ height: 90, width: 90, }} />
                        <h1 className="text-lg font-semibold text-slate-800 mt-2 text-center">SOPs</h1>
                    </div>
                    <div>
                        <SavingsIcon sx={{ height: 90, width: 90, color: 'darkgoldenrod' }} />
                        <h1 className="text-lg font-semibold text-slate-800 mt-2 whitespace-nowrap text-center">Cost Saving</h1>
                    </div>
                    <div>
                        <AddRoadIcon sx={{ height: 90, width: 90, color: 'GrayText' }} />
                        <h1 className="text-lg font-semibold text-slate-800 mt-2 text-center">Delivery</h1>
                    </div>
                    <div>
                        <AutoModeIcon sx={{ height: 90, width: 90, color: 'red' }} />
                        <h1 className="text-lg font-semibold text-slate-800 mt-2 text-center text-wrap">Loyality</h1>
                    </div>
                    <div>
                        <Diversity3Icon sx={{ height: 90, width: 90, color: 'darkslategrey' }} />
                        <h1 className="text-lg font-semibold text-slate-800 mt-2 whitespace-nowrap text-center">Add Value</h1>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TransportHome