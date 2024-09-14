import InfoIcon from '@mui/icons-material/Info';
import { STATIC_DATA } from '../config';
import { Link } from 'react-router-dom';

type Props = { 
    type: 'real-estate' | 'transport' 
}

function ServiceCard({type}: Props) {
  return (
    <div className="relative flex flex-col items-center px-5 py-8 pb-12 lg:pb-0  cursor-pointer">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-0 bg-gray-800 text-white uppercase border-slate-50  text-2xl font-bold px-5 py-2 h-14 md:flex flex-col items-center justify-center ">{type === 'real-estate' ? 'real-estate' : 'transport'}</div>
        <div className="w-full h-auto ">
            <img src={type === 'real-estate' ? STATIC_DATA.IMAGE_URL.rs : STATIC_DATA.IMAGE_URL.transport} alt="alt" className="md:h-56 h-44 object-cover w-full" />
        </div>
        <div className='  px-2 border-b border-slate-300 mb-[4px]'>
            <h1 className='text-lg leading-tight mt-2 font-medium'>{type === 'real-estate' ? STATIC_DATA.SERVICE_CARD.REALESTATE.Title : STATIC_DATA.SERVICE_CARD.TRANSPORT.Title}</h1>
            <p className='text-sm font-light leading-tight my-2'>{type === 'real-estate' ? STATIC_DATA.SERVICE_CARD.REALESTATE.Description : STATIC_DATA.SERVICE_CARD.TRANSPORT.Description}</p>
        </div>
        <Link to={type === 'real-estate' ? '/realestate' : '/transport'} className="text-white bg-gray-800 hover:bg-gray-900 mt flex items-center gap-2 font-medium border-white text-sm px-5   py-2 me-2 capitalize"> <InfoIcon sx={{color: 'white'}} fontSize='small' />{type === 'real-estate' ? 'real-estate' : 'Transport services'}</Link>

    </div>
  )
}

export default ServiceCard