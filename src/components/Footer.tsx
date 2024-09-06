import { Link } from 'react-router-dom'

type Props = {}

function Footer({ }: Props) {
  return (


    <footer className="bg-gray-800">
      <div className="w-full max-w-screen-xl mx-auto p-5 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className='space-y-5 md:w-1/2 mb-2 md:mb-0 '>
            <Link to="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              
              <h1 className='text-4xl text-gray-100 font-bold tracking-tighter '>NRGroup</h1>
            </Link>
            <h1 className='text-sm  text-slate-50'>We are Madhya Pradesh’s top Transport service provider since 2023. We serve the entire gamut of Logistics from Storage Space to Logistics, Rack Handling and Skilled Man-power supply. We guide you for a hassle-free experience & optimized solution at your cost.</h1>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0 dark:text-gray-100">
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/licence" className="hover:underline me-4 md:me-6">License</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline me-4 md:me-6">Contact Us</Link>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-100 sm:mx-auto dark:border-gray-600 lg:my-4" />
        <span className="block tracking-tighter text-sm text-gray-500 sm:text-center dark:text-gray-100">© 2023 <Link to="https://flowbite.com/" className="hover:underline">NRGroup™</Link>. All Rights Reserved.</span>
      </div>
    </footer>


  )
}

export default Footer