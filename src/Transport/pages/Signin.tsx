import Auth from "@/Transport/components/Auth"
import { Spinner } from "../../components/Spinner"
import { useState } from "react"

type Props = {}

function Signin({ }: Props) {
  const [isLogging, setIsLogging] = useState(false)
  return (
    <>
    {isLogging === true ? <Spinner /> :
      <div className="bg-[url('https://content.presspage.com/uploads/2341/1920_p-tgx-eot-individual-lion-s-1.jpg?48444')]  bg-cover bg-center w-full">
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-20 md:gap-0  ">
          <Auth type='signin' control={{isLogging, setIsLogging}} />
          <div className="relative w-full  order-first md:order-last ">
            <div className="bg-black absolute opacity-55 text-white w-full h-full"></div>
            <div className="absolute w-full flex flex-col items-start  py-10 md:px-10 px-5 md:top-1/2 md:-translate-y-1/2 space-y-1 md:space-y-2 ">
              <h1 className="md:text-7xl font-bold text-4xl md:text-white bg-white p-2 md:bg-transparent md:p-0">Fastest Delivery</h1>
              <h1 className="md:text-white capitalize font-semibold text-2xl md:text-4xl bg-white p-2 md:bg-transparent md:p-0">Providing high quality service</h1>
              <h1 className="md:text-white font-extrabold text-4xl bg-white p-2 md:bg-transparent md:p-0 ">24 hours a day</h1>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Signin