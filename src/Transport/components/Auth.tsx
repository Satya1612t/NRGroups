import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import { Spinner } from "../../components/Spinner"
import { Alert } from "@mui/material"



type Props = {
    type: 'signin' | 'signup'
}
//https://backend.satyamt154.workers.dev


function Auth({ type }: Props) {

    const [isLogging, setIsLogging] = useState(false)
    const [notify, setNotify] = useState("")
    const [severity, setSeverity] = useState<"success" | "error" | "warning" | "info">("success")

    const handleUserSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLogging(true)
        let form = new FormData(e.currentTarget);
        let formObj = Object.fromEntries(form.entries());

        if(!formObj){
            setSeverity("error")
                setNotify("error while loading, try again")
        }
        else {
            console.log(formObj);
            setSeverity('success')
            type === 'signup' ? setNotify("Profile Created Successfully") : setNotify("Welcome Back")
        }
        // try {
        //     const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup' ? 'signup' : 'signin'}`, userInput)
        //     const token = response.data.token
        //     if (!token) {
        //         setSeverity("error")
        //         setNotify("error while loading, try again")
        //     }
        //     else {
        //         localStorage.setItem("token", token)
        //         setSeverity('success')
        //         type === 'signup' ? setNotify("Profile Created Successfully") : setNotify("Welcome Back")
        //         setTimeout(() => {
        //             navigate('/')
        //         }, 1000)
        //     }
        // } catch (error) {
        //     setSeverity('info')
        //     setNotify("internal server../")
        //     console.log(error);
        // }
        // finally {
        //     setIsLogging(false)
        // }

    }

    // const handleUserRquest = async () => {
    //     setIsLogging(true)
    //     try {
    //         const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup' ? 'signup' : 'signin'}`, userInput)
    //         const token = response.data.token
    //         if (!token) {
    //             setSeverity("error")
    //             setNotify("error while loading, try again")
    //         }
    //         else {
    //             localStorage.setItem("token", token)
    //             setSeverity('success')
    //             type === 'signup' ? setNotify("Profile Created Successfully") : setNotify("Welcome Back")
    //             setTimeout(() => {
    //                 navigate('/')
    //             }, 1000)
    //         }
    //     } catch (error) {
    //         setSeverity('info')
    //         setNotify("internal server../")
    //         console.log(error);
    //     }
    //     finally {
    //         setIsLogging(false)
    //     }
    // }

    return (
        <>

            <div className=" h-screen max-w-full flex items-center justify-center bg-slate-200 ">
                {isLogging === true ? <Spinner /> :
                    <div className="max-w-96 text-wrap text-left py-4 px-8 border border-gray-400 rounded-md hover:shadow-md   ">
                        <h1 className="text-black font-Gilroy_Bold font-bold text-3xl">{type === "signup" ? 'Create an account' : 'Login'}</h1>
                        <h1 className="font-normal text-slate-700 text-sm mb-4" >{type === 'signup' ? "Already Have an account? " : "Don't Have an account "}<Link to={type === 'signup' ? '/transport/signin' : '/transport/signup'} className="underline">{type === 'signup' ? 'Login' : 'Create now'}</Link></h1>
                        <form onSubmit={handleUserSubmit} action="">
                            <div className="space-y-3">
                                {type === 'signup' ? <LabelInput label="Name" placeholder="John" /> : ''}
                                <LabelInput label="Email" placeholder="john@example.com" />
                                <LabelInput label="Password" type={"password"} placeholder="*********" />
                                {type === 'signup' ? <LabelInput label="Mobile" placeholder="John" /> : ''}
                                <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-6 py-2.5  me-2 mb-2">{type === 'signup' ? 'Create' : 'Login'}</button>
                            </div>
                        </form>
                    </div>}
                {notify &&
                    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
                        <Alert variant="filled" severity={severity} onClose={() => setNotify("")}>
                            {notify}
                        </Alert>
                    </div>}
            </div>

        </>
    )
}

interface LabelledInputType {
    type?: string;
    label: string;
    placeholder: string;
}
function LabelInput({ type, label, placeholder }: LabelledInputType) {
    return (
        <>
            <div>
                <label htmlFor="first_name" className="block mb-1 text-sm font-medium text-black ">{label}</label>
                <input type={type || "text"} id="first_name" className=" border border-slate-800 focus:outline-none text-black text-sm rounded-lg block w-full p-2 bg-transparent placeholder:text-gray-700" placeholder={placeholder} required />
            </div>
        </>
    )
}

export default Auth