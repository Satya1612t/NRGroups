import CardSection from "./components/CardSection";
import { NavigationBar } from "../components/NavigationBar"
import { SliderRealEstate } from "./components/SliderRealEstate"
import FeaturedSection from "./components/FeatureSection";
import Footer from "../components/Footer";



const RealEstate = () => {
  return (
    <>
     <div className="w-full h-screen bg-slate-50">

     <NavigationBar /> 
    <SliderRealEstate />
    <h2 className="text-5xl bg-gray-200 text-center font-bold text-gray-900 ">Our Services</h2>
    <CardSection />
    <FeaturedSection />
    <WhyUs />
    <Testimonials />
    <Footer />
    
    
     </div>
    

    </>
  )
}

const Testimonials = () => {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
      <p className="text-gray-700 mb-8 text-center max-w-2xl">
        Hear from our satisfied clients who have experienced our real estate services first-hand.
      </p>

      <div className="flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-screen-xl">
        
        {/* Testimonial 1 */}
        <div className="w-full sm:w-80 md:w-60 lg:w-72 bg-gray-100 shadow-lg rounded-lg overflow-hidden p-6">
          <p className="italic text-gray-600 mb-4">
            "NR RealEstate helped us find our dream home! The process was smooth, and the agents were incredibly helpful."
          </p>
          <h4 className="text-lg font-semibold text-gray-800">- John Doe</h4>
        </div>

        {/* Testimonial 2 */}
        <div className="w-full sm:w-80 md:w-60 lg:w-72 bg-gray-100 shadow-lg rounded-lg overflow-hidden p-6">
          <p className="italic text-gray-600 mb-4">
            "Professional, transparent, and always available to answer our questions. Highly recommend their services."
          </p>
          <h4 className="text-lg font-semibold text-gray-800">- Jane Smith</h4>
        </div>

        {/* Testimonial 3 */}
        <div className="w-full sm:w-80 md:w-60 lg:w-72 bg-gray-100 shadow-lg rounded-lg overflow-hidden p-6">
          <p className="italic text-gray-600 mb-4">
            "They found the perfect rental property for us, and the process was quick and easy!"
          </p>
          <h4 className="text-lg font-semibold text-gray-800">- Mark Wilson</h4>
        </div>
      </div>
    </section>
  );
};


const WhyUs= () =>
  { return(
    <section className="w-full py-16 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
      <p className="text-gray-700 mb-8 text-center max-w-2xl">
        We provide unparalleled real estate services to meet your needs, with a focus on customer satisfaction, transparency, and professionalism.
      </p>

      <div className="flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-screen-xl">
        {/* Benefit 1 */}
        <div className="w-full sm:w-80 md:w-60 lg:w-72 bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Experienced Agents</h3>
          <p className="text-gray-600 mb-4">
            Our team of experienced agents is dedicated to helping you find the best property suited for your needs.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="w-full sm:w-80 md:w-60 lg:w-72 bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Best Market Value</h3>
          <p className="text-gray-600 mb-4">
            We ensure that you get the best market value for your property, whether you're buying or selling.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="w-full sm:w-80 md:w-60 lg:w-72 bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Trusted by Clients</h3>
          <p className="text-gray-600 mb-4">
            Our clients trust us for our transparency and professionalism in handling all real estate transactions.
          </p>
        </div>
      </div>
    </section>
  )
};



export default RealEstate