import Footer from '../components/Footer'
import ServiceCard from '../Transport/components/ServiceCard'

type Props = {}

const Home = ({}: Props) => {
    
    return (
        <>
            <div className='border-b bg-slate-50 py-5 lg:py-3 px-5'>
                <h1 className='text-4xl font-bold tracking-tighter '>NRGroup</h1>
            </div>
            <div className='bg-slate-50 flex flex-col items-center lg:pt-5 pt-8 pb-10 px-10 lg:px-72'>
                <h1 className='mb-4 text-5xl font-bold uppercase medium lg:mb-2'>What We Do...?</h1>
                <h4 className=' text-base font-medium  text-gray-800 text-wrap lg:text-center leading-tight'>NR Group specializes in top-notch <span className='font-bold'>IT Services</span> and reliable <span className='font-bold'>Transport Solutions</span>. Discover how we deliver excellence in technology and logistics to meet your business needs.</h4>
                <div className=' bg-slate-100 rounded-md shadow-md mt-8 lg:mt-5 border w-full py-5 lg:px-14 lg:py-10'>
                    <div className='px-5 lg:mb-10 mb-6'>
                        <h1 className='text-2xl lg:text-xl font-semibold'>Select a Category</h1>
                    </div>
                    <div className='block md:flex justify-center  '>
                        <ServiceCard type={'it'} />
                        <ServiceCard type={'transport'} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home