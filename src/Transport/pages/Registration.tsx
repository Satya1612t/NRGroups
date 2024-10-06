import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import axios from 'axios'
import { toast } from 'react-toastify'

type Domain = 'TRUCKER' | 'CONSIGNER' | null

const Registration: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [addressData, setAddressData] = useState({})
  const [selectedOption, setSelectedOption] = useState<Domain>(null)
  const [step, setStep] = useState<Number>(1)
  const navigate = useNavigate()
  const formRef = useRef(null)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const handleOptionClick = (option: Domain) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const token = localStorage.getItem('token');

    if (step === 1) {
      if (formRef.current) {
        const address = {
          houseNo: formData.get('houseNo'),
          street: formData.get('street'),
          city: formData.get('city'),
          state: formData.get('state'),
          country: formData.get('country'),
          pincode: formData.get('pincode')
        }

        setAddressData(address);
        setStep(2)
        return;
      };
    }

    if (step === 2) {
      const payload = {
        role: selectedOption,
        profile: {
          aadhar: formData.get('aadhar'),
          aadharImages: formData.get('aadharImages'),
          pan: formData.get('pan'),
          panImages: formData.get('panImages'),
          dob: formData.get('dob')
        },
        address: addressData
      };
      console.log(formData.get('dob'))
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/complete-profile`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        )
          .catch(err => {
            console.error(err.response ? err.response.data : err.message);
            toast.error("Request failed. Please check your data or server.");
            return;
          })
        if (response && response.data) {
          toast.success(response.data.message || "Profile updated successfully");
          navigate('/transport/dash');
        }
      } catch (err: any) {
        console.error(err.response ? err.response.data : err.message);
        toast.error("Request failed. Please check your data or server.");
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="max-w-2xl mx-auto p-6">
        <form ref={formRef} onSubmit={handleSubmit} >
          {step === 1 ?
            (<div className="rounded-md shadow-sm space-y-4">
              <InputLabel label="House No." name='houseNo' placeholder='231' required={false} />
              <InputLabel label="Street" name='street' placeholder='A B Road' required={true} />
              <InputLabel label="city" name='city' placeholder='Lucknow' required={true} />
              <InputLabel label="state" name='state' placeholder='Maharastra' required={true} />
              <InputLabel label="country" name='country' placeholder='India' required={true} />
              <InputLabel label="pincode" name='pincode' placeholder='Pincode' required={true} />
            </div>) : (
              <div className="rounded-md shadow-sm space-y-4">
                <InputLabel label="Aadhar Number" name='aadhar' placeholder='Enter your 12-digit Aadhar number' required={false} />
                <InputLabel label="Aadhar Images" type='file' name='aadharImages' placeholder='Upload your Aadhar Card' required={false} />
                <InputLabel label="PAN Number" name='pan' placeholder='Enter your 10-digit PAN number' required={false} />
                <InputLabel label="pan Images" type='file' name='panImages' placeholder='Upload your PAN Card' required={false} />
                <InputLabel label="Date of Birth" type='date' name='dob' placeholder='Choose DOB' required={true} />
              </div>
            )}
          <div className="flex justify-between mt-6">
            <Button type="submit">
              {step === 2 ? "Save & Finish" : "Save & Continue"}
            </Button>
          </div>
        </form>

      </Card>

      <Dialog open={isOpen} onOpenChange={() => { }}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader >
            <DialogTitle className='text-center'>Select an Option</DialogTitle>
          </DialogHeader>
          <div className=" flex-col flex justify-center items-center w-full border space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button onClick={() => handleOptionClick('TRUCKER')}>Trucker</Button>
            <Button onClick={() => handleOptionClick('CONSIGNER')}>Consigner</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface InputLabelType {
  type?: string | "text",
  label: string,
  name: string,
  placeholder: string,
  required: boolean
}

function InputLabel({ name, type, label, placeholder, required }: InputLabelType) {
  return (
    <>
      <div>
        <Label htmlFor={name} className="block text-sm font-medium capitalize text-gray-700">{label}</Label>
        <Input
          id={name}
          name={name}
          type={type}
          required={required}
          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
          placeholder={placeholder}
        />
      </div>
    </>
  )
}

export default Registration