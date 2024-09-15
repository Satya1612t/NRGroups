import { STATIC_DATA } from "../../config"

type Props = {}

function TransportServiceCard({ }: Props) {
    return (
        <>
            {STATIC_DATA.TRANSPORTSERVICE.map((item, index) => (
                <div className="pt-10 w-80 space-y-4" key={index} >
                    <div className="w-full h-44 bg-gray-900 relative border  " >
                        <img src={item.IMG} alt="" className="w-full h-full object-cover"/>
                        <div className="absolute backdrop-blur-sm w-24 border-t border-r h-16 left-0 bottom-0  rounded-tr-md "></div>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tighter text-slate-900 uppercase">{item.TITLE}</h1>
                    <h4 className="text-lg font-base leading-tight text-slate-500">{item.DESCRIPTION}</h4>
                </div>
            ))}
        </>
    )
}

export default TransportServiceCard