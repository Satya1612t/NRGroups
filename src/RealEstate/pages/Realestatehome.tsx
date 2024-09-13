import CardSection from "../components/CardSection";
import FeaturedSection from "../components/FeatureSection";
import { SliderRealEstate } from "../components/SliderRealEstate";



const Realestatehome = () => {
  return (
    <>

    <SliderRealEstate />
    <h2 className="text-5xl bg-gray-200 text-center font-bold text-gray-900 ">Our Services</h2>
    <CardSection />
    <FeaturedSection />
    <WhyUs />
    <Testimonials />
    <ContactSection />
    <ServicesSection />
    </>
  )
}


const Services = [
  {
    title: "Interior Designer",
    description: "Transform your spaces with expert design.",
    image: 'https://img.freepik.com/free-vector/interior-design-concept-illustration_114360-5516.jpg?t=st=1726149562~exp=1726153162~hmac=d132fc384d1ef15a12733f2b0a3e4ca29e5342fe7c725f025e0d5a880c12ee38&w=1060', // Replace with a valid URL for an interior designer illustration
  },
  {
    title: "Architect Designer",
    description: "Innovative designs and architectural solutions.",
    image: 'https://dehu.in/wp-content/uploads/2023/04/Mechanical-Engineering.png', 
  },
  {
    title: "Builder & Devloper",
    description: "Quality construction services for your projects.",
    image: 'https://www.imghost.net/ib/Ud5Gvqka5pfeJLj_1726153665.png',
  },
  {
    title: "Building Contractor",
    description: "Professional contracting for your construction needs.",
    image: 'https://undraw.com/illustrations/contractor.svg',
  },
  {
    title: "Property Management",
    description: "Efficient management of your properties.",
    image: 'https://www.imghost.net/ib/uJfqotrTWBDCa1z_1726155553.png', 
  },
  {
    title: "Real Estate Consultant",
    description: "Expert advice on real estate investments.",
    image: 'https://undraw.com/illustrations/consultant.svg',
  },
  {
    title: "Mortgage Advisor",
    description: "Guidance on mortgage options and applications.",
    image: 'https://undraw.com/illustrations/mortgage_advisor.svg', 
  },
];

const ServicesSection = () => {
  return (
    <div className="w-full py-16 bg-gray-100 flex flex-col justify-center">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
      Explore Our Real Estate Services
    </h2>
    {/* First Row (4 Cards) */}
    <div className="max-w-[1200px] mx-auto grid grid-cols-2 items-center sm:grid-cols-2 md:grid-cols-4 gap-8">
      {Services.slice(0, 4).map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg relative"
          style={{ width: "90%", height: "auto" }}  // Full width on mobile
        >
          <div className="p-4 flex flex-col justify-between h-full items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center md:text-left">
              {service.title}
            </h3>
            <p className="text-gray-700 mb-4 text-sm hidden md:block">
              {service.description}
            </p>
            <button className="border border-gray-800 text-gray-800 py-1 px-4 text-sm rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300">
              Learn More
            </button>
  
            {/* For large screens */}
            <div className="absolute bottom-2 right-2 hidden md:block">
              <img
                src={service.image}
                alt={service.title}
                className="w-10 h-10"
              />
            </div>
  
            {/* For mobile screens: center the image and make it larger */}
            <div className="block md:hidden mt-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  
    {/* Second Row (3 Cards) */}
    <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 justify-center">
      {Services.slice(4).map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg relative"
          style={{ width: "90%", height: "auto" }}  // Full width on mobile
        >
          <div className="p-4 flex flex-col justify-between h-full items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center md:text-left">
              {service.title}
            </h3>
            <p className="text-gray-700 mb-4 text-sm hidden md:block">
              {service.description}
            </p>
            <button className="border border-gray-800 text-gray-800 py-1 px-4 text-sm rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300">
              Learn More
            </button>
  
            {/* For large screens */}
            <div className="absolute bottom-2 right-2 hidden md:block">
              <img
                src={service.image}
                alt={service.title}
                className="w-10 h-10"
              />
            </div>
  
            {/* For mobile screens: center the image and make it larger */}
            <div className="block md:hidden mt-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
);
};


const ContactSection = () => {

const handleClick = () => {
const form = document.getElementById('contact-form');
    if (form) {
      form.classList.toggle('hidden');
    }
  };

  return (
    <section className="w-full bg-gray-300 py-16 flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 opacity-30 z-0"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Have any questions or need more information? Click the button below to contact us directly.
        </p>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Contact Us
        </button>
      </div>
      <div id="contact-form" className="hidden">
        <ContactUs />
      </div>
    </section>
  );
};



const ContactUs = ()  => 
{
  return(
    <section className="w-full py-16 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
      <p className="text-gray-700 mb-8 text-center max-w-xl">
        Feel free to reach out to us for any inquiries or questions. We'd love to hear from you!
      </p>

      <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Phone Number"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};



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



export default Realestatehome;