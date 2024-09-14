import Auth from "@/Transport/components/Auth"


type Props = {}

function Signup({}: Props) {
  return (
    <>
    <div className="max-w-full grid lg:grid-cols-2 grid-cols-1 ">
        <Auth type='signup' />
    </div>
    </>
  )
}

export default Signup