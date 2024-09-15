import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Truck, Package, DollarSign, HelpCircle } from 'lucide-react'
import { useState } from 'react'

type Props = {}

function Partnership({ }: Props) {
  const [more, setMore] = useState(false)

  const handleView = () => {
    setMore(!more);
  }

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col min-h-screen">
          
          <main className="flex-grow">
            <section className="bg-slate-800 overflow-hidden text-white relative ">
              <img className='h-96 w-full object-cover' src="https://static.vecteezy.com/system/resources/previews/025/870/607/non_2x/delivery-truck-loaded-with-cardboard-boxes-logistics-warehouse-online-delivery-service-generative-ai-free-photo.jpeg" alt="" />
              <div className='container mx-auto px-4 text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:h-64 h-full bg-slate-950 opacity-55 py-5 md:w-4/5 md:rounded'></div>
              <div className="container mx-auto px-5 text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:h-64 my-6 md:w-4/5 md:rounded">
                <h1 className=" text-3xl lg:text-4xl xl:text-6xl font-bold mb-6">Your Truck, Your Schedule, Our Orders</h1>
                <p className="text-xl mb-8">Register your truck and choose your own delivery routes. We’ll find the orders while you drive on your schedule!</p>
                <Link to='/transport/register' className='relative z-20'>
                  <Button size="lg" className=" text-primary text-slate-800 text-lg py-2 bg-slate-50  hover:bg-slate-50">
                    Register Now
                  </Button>
                </Link>
              </div>
            </section>

            <section id="about" className="py-10 bg-slate-50">
              <div className="container mx-auto md:px-20 px-4">
                <h2 className="text-4xl font-bold md:mb-8 mb-5 text-center">About Our Partner Program</h2>
                <div className="grid md:grid-cols-2 gap-8 md:gap-28 ">
                  <div className="  md:text-lg text-base pt-5 space-y-5 text-left">
                    <p>Join our network of successful partners and take your business to the next level. By registering your vehicle with us, you'll gain access to a steady stream of delivery opportunities, allowing you to grow your income and expand your operations.</p>
                    <p>This means more chances to grow your income, streamline your operations, and expand your reach. Take advantage of our platform to connect with more clients and boost your earnings while we handle the details.</p>
                    <p className='md:flex hidden'>We provide the orders, you provide the transportation. It's a win-win partnership that helps you maximize your vehicle's potential and earn more.</p>
                    {more && <>
                      <p>We provide the orders, you provide the transportation. It's a win-win partnership that helps you maximize your vehicle's potential and earn more.</p>
                    </>
                    }
                    <div className={`flex items-center justify-center md:hidden`}>
                      <button className='px-4 py-2 text-base md:text-lg bg-slate-900 text-slate-50' onClick={handleView} >{more ? 'View Less' : 'View More'}</button>
                    </div>
                  </div>
                  <div className="bg-muted flex justify-center flex-col ">
                    <h3 className="md:text-3xl text-xl font-semibold mb-4">Why Choose Us?</h3>
                    <ul className="space-y-2 text-lg">
                      <li className="flex items-center"><Truck className="mr-2 h-5 w-5" /> Flexible scheduling</li>
                      <li className="flex items-center"><Package className="mr-2 h-5 w-5" /> Diverse delivery options</li>
                      <li className="flex items-center"><DollarSign className="mr-2 h-5 w-5" /> Competitive rates</li>
                      <li className="flex items-center"><HelpCircle className="mr-2 h-5 w-5" /> 24/7 support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="benefits" className="py-10 bg-slate-50">
              <div className="container mx-auto md:px-20 px-4">
                <h2 className="text-3xl font-bold md:mb-8 mb-6 text-center">Benefits of Partnering With Us</h2>
                <div className="grid md:grid-cols-3 md:gap-8 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg ">
                    <h3 className="text-xl font-semibold mb-4">Increased Revenue</h3>
                    <p className='leading-tight'>Access a large customer base and increase your earning potential with our high-volume order system.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Flexible Schedule</h3>
                    <p className='leading-tight'>Choose your own hours and work when it suits you best. Enjoy the freedom of being your own boss.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Growth Opportunities</h3>
                    <p className='leading-tight'>Expand your business with the potential to add more vehicles and drivers to your fleet.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-10 bg-slate-200 text-primary-foreground">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold md:mb-8 mb-6 ">Ready to Get Started?</h2>
                <p className="text-xl font-semibold md:mb-8 mb-6 ">Join our partner network today and start growing your business!</p>
                <form className="max-w-md mx-auto flex gap-4">
                  <Input type="email" placeholder="Enter your email" className="bg- placeholder:text-base  text-primary" />
                  <Button type="submit" className="bg-slate-800 text-slate-50 text-base md:text-lg hover:bg-gray-100">
                    Subscribe now
                  </Button>
                </form>
              </div>
            </section>

            <section id="faq" className="py-10 bg-slate-50">
              <div className="container mx-auto md:px-20 px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="max-w-2xl mx-auto">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What types of vehicles can I register?</AccordionTrigger>
                    <AccordionContent>
                      We accept a wide range of vehicles, including cars, vans, trucks, and motorcycles. The specific requirements may vary depending on the type of deliveries you wish to handle.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I get paid for deliveries?</AccordionTrigger>
                    <AccordionContent>
                      Payments are processed weekly and deposited directly into your bank account. You'll be able to track your earnings in real-time through our partner dashboard.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What kind of support do you offer partners?</AccordionTrigger>
                    <AccordionContent>
                      We provide 24/7 customer support, training resources, and a dedicated partner success team to help you maximize your earnings and resolve any issues you may encounter.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Are there any fees to become a partner?</AccordionTrigger>
                    <AccordionContent>
                      There are no upfront fees to join our partner program. We take a small percentage of each completed delivery to cover platform maintenance and support costs.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>
          </main>

        </div>
      </div>
    </>
  )
}

export default Partnership