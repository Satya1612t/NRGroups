import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { STATIC_DATA } from "../config";
import { Link } from "react-router-dom";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const SliderTop = () => {
    const [data, _] = useState(STATIC_DATA.SERVICE)
    return (
        <>
            <div className="relative w-full ">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10  border md:px-8 md:py-14 px-3 py-4 text-center rounded-md backdrop-blur-sm backdrop-brightness-75">
                    <div className="flex flex-col items-center md:space-y-5 space-y-3">
                        <h1 className="md:text-6xl text-xl  text-slate-900  whitespace-nowrap font-bold uppercase tracking-tighter">Best Practice Transportation</h1>
                        <h4 className="md:text-lg font-medium text-slate-100 leading-tight">Now you can store your inventory at your preferred warehouse location in a facility that is safe, secure and cost-efficient.</h4>
                        <Link to='' className="text-white bg-gray-800  hover:bg-gray-900  font-medium  text-sm px-5 py-3 rounded-sm border-slate-50 border md:border-none capitalize"> Learn More</Link>
                    </div>
                </div>
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
                    className=""
                    rtl={true}
                >
                    {Object.entries(data).map(([key, value]) => (
                        <div className="w-full" key={key}>
                            <img className="object-cover h-80 sm:h-96 lg:h-[calc(100vh-70px)] w-full" src={value} alt={`Service ${key}`} />
                        </div>
                    ))}
                </Carousel>;

            </div>
        </>
    )
}