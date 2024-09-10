import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { STATIC_DATA } from "../../config";

type Props = {
    type: 'sliderOne' | 'sliderTwo'
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
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

function SliderMiddle({ type }: Props) {
    let temp_1 = STATIC_DATA.INDUSTRY_SERVE;
    let temp_2 = STATIC_DATA.COMPANY
    let data;
    type === 'sliderOne' ? data = temp_1 : data = temp_2



    return (
        <>
            <div className='bg-slate-50 md:py-8 py-4'>
                <h1 className="text-center md:text-6xl text-xl  text-slate-900  whitespace-nowrap font-bold uppercase tracking-tighter">{type === 'sliderOne' ? 'industry we serve' : 'COMPANY WHOM WE WORK WITH'}</h1>
                <div className="flex justify-center">
                    <hr className="h-1 bg-slate-600 w-20 mt-2" />
                </div>
                <div className=' md:px-40 px-16 my-10 h-40'>
                    <Carousel
                        swipeable={true}
                        // sliderClass="rtl"

                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1500}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        arrows={false}
                        dotListClass="custom-dot-list-style"
                        itemClass=""
                        className='h-full bg-slate-50 '
                    // rtl={true}
                    >
                        {Object.entries(data).map(([key, value]) => (
                            <div key={key} className={` mx-2  items-center justify-center ${type === 'sliderOne' ? 'flex-col h-40' : 'border-2 rounded-md border-slate-900 h-36 flex'}` }>
                                <img src={value} alt="" className={`object-cover h-28 rounded-md shadow-xl ${type === 'sliderOne' ? 'w-full' : ''}`} />
                                <div className="flex items-center justify-center">
                                {type === 'sliderOne' ? <h1 className="text center text-xl mt-1 font font-medium text-blue-950">{key}</h1> : ""}
                                </div>
                            </div>
                        ))}
                        {/* <div className='bg-red-600 mx-2 h-20 border-2 border-black'>21</div>
                        <div className='bg-blue-600 mx-2 h-20 border-2 border-black'>211</div>
                        <div className='bg-brown-600 mx-2 h-20 border-2 border-black'>2111</div>
                        <div className='bg-green-600 mx-2 h-20 border-2 border-black'>2111</div>
                        <div className='bg-pink-600 mx-2 h-20 border-2 border-black'>2111</div>
                        <div className='bg-indigo-600 mx-2 h-20 border-2 border-black'>2111</div> */}
                        {/* </div> */}
                    </Carousel>;
                </div>
            </div>
        </>
    )
}

export default SliderMiddle