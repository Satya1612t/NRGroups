import { FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { toast } from 'react-toastify'
import { useAuth } from "@/components/AuthProvider";


type Props = {
    type: 'signin' | 'signup'
    control: {
        isLogging: boolean,
        setIsLogging: (value: boolean) => void
    }
}

function Auth({ type, control }: Props) {
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleUserSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        control.setIsLogging(true)
        let form = new FormData(e.target as HTMLFormElement);
        let formObj = Object.fromEntries(form.entries());
        formObj['type'] = 'Transport'

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/transport/${type === 'signup' ? 'signup' : 'signin'}`, formObj, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            );
            const token = response.data.token
            if (!token) {
                toast.error("error while loading, try again")
            }
            else {
                localStorage.setItem('token', token)
                type === 'signup' ? toast.success(response.data.msg || "Profile Created Successfully") : toast.success(response.data.msg || "Welcome Back")
                login(token);
                navigate('/transport/register');
                // type === 'signup' ? navigate('/transport/signin') : navigate('/transport/register')
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    toast.error(error.response.data.error || "Error occurred during request");
                } else if (error.request) {
                    toast.warning("No response from server. Please try again.");
                } else {
                    toast.error("Request setup error");
                }
            } else {
                toast.error("An unknown error occurred.");
            }
            console.log(error);
        }
        finally {
            control.setIsLogging(false)
        }

    }

    return (
        <>
            <div className=" h-screen max-w-full flex items-center justify-center bg-transparent z-50">
                <div className="max-w-96 text-wrap text-left py-8 px-12 border bg-black  border-gray-400 rounded-md hover:shadow-md   ">
                    <h1 className="text-slate-50 mb-2 font-Gilroy_Bold font-bold text-3xl">{type === "signup" ? 'Create an account' : 'Login'}</h1>
                    <h1 className="font-normal text-slate-50 text-sm mb-4" >{type === 'signup' ? "Already Have an account? " : "Don't Have an account "}<Link to={type === 'signup' ? '/transport/signin' : '/transport/signup'} className="underline text-slate-50">{type === 'signup' ? 'Login' : 'Create now'}</Link></h1>
                    <form onSubmit={handleUserSubmit} action="">
                        <div className="space-y-3">
                            {type === 'signup' ? <LabelInput label="Name" placeholder="John" /> : ''}
                            <LabelInput label="Email" placeholder="john@example.com" />
                            <LabelInput label="Password" type={"password"} placeholder="*********" />
                            {type === 'signup' ? <LabelInput label="Mobile" placeholder="John" /> : ''}
                            <button type="submit" className="text-black bg-slate-100 hover:bg-slate-50 font-medium rounded-sm text-sm px-6 py-2.5  me-2 mb-2">{type === 'signup' ? 'Create' : 'Login'}</button>
                        </div>
                    </form>
                </div>
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
            <div className="">
                <label htmlFor={label} className="block mb-1 text-sm font-medium text-slate-50 ">{label}</label>
                <input type={type || "text"} name={label.toLowerCase()} className=" border border-slate-200 focus:outline-none text-white text-sm rounded-lg block w-full p-2 bg-transparent placeholder:text-slate-50" placeholder={placeholder} required />
            </div>
        </>
    )
}

export default Auth