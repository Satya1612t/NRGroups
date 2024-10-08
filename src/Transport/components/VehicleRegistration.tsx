import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, X } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-toastify'


interface AgreementPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Route {
  from: string;
  to: string;
  // Add other route properties as needed
}

const AgreementPopup: React.FC<AgreementPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">License and Agreement</h2>
        <p className="mb-4">
          This is the license and agreement text. By accepting this agreement, you agree to abide by all terms and conditions set forth in this document.
        </p>
        <p className="mb-4">
          1. You agree to use the vehicle registration service in compliance with all applicable laws and regulations.
        </p>
        <p className="mb-4">
          2. You certify that all information provided during the registration process is accurate and up-to-date.
        </p>
        <p className="mb-4">
          3. You understand that misuse of the service or provision of false information may result in legal consequences.
        </p>
        <Button onClick={onClose} className="w-full">Close</Button>
      </div>
    </div>
  );
};

const VehicleRegistration: React.FC = () => {
  // const [step, setStep] = useState(1);
  const [isAgreementPopupOpen, setIsAgreementPopupOpen] = useState(false);
  const [routes, setRoutes] = useState<Route[]>([{ from: '', to: '' }]);
  const formRef = useRef(null)
  const navigate = useNavigate();

  const handleInputChange = (index: number, field: string, value: string): void => {
    const newRoutes = [...routes];
    newRoutes[index] = { ...newRoutes[index], [field]: value };
    setRoutes(newRoutes);
  };

  // const collectedRoutes: { from: FormDataEntryValue | null; to: FormDataEntryValue | null }[] = routes.map((_, index) => ({
  //   from: formData.get(`from${index}`) as string,
  //   to: formData.get(`to${index}`) as string,
  // }));


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("hi444")
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const token = localStorage.getItem('token');

    // const agreementAccepted = formData.get('agreementAccepted') === 'on';
    // if (!agreementAccepted) {
    //   alert("Please accept the license and agreement before submitting.");
    //   return;
    // }


    const body = {
      vehicleDetails: {
        vehicleType: formData.get('vehicleType'),
        vehicleRegistrationNo: formData.get('vehicleRegistrationNo'),
        chassisNumber: formData.get('chassisNumber'),
        loadCapacity: formData.get('loadCapacity'),
        insurance: formData.get('insurance'),
        permitExpiry: formData.get('permitExpiry'),
      },
      driverDetails: {
        driverName: formData.get('driverName'),
        licenseNumber: formData.get('licenseNumber'),
        licenseDocs: formData.get('licenseDocs'),
      },
      routeDetails: routes,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/transport/submitAllDetails`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .catch(err => {
          console.error(err.response ? err.response.data : err.message);
          toast.error("Request failed. Please check your data or server.");
          return;
        })
      if (response && response.data) {
        toast.success(response.data.message || "Profile updated successfully");
        navigate('/transport/dash');
      }
    }
    catch (err: any) {
      console.error(err.response ? err.response.data : err.message);
      toast.error("Request failed. Please check your data or server.");
    }
    //Here you would typically send the data to your <backend></backend>
  }

  const addRoute = () => {
    setRoutes([...routes, { from: '', to: '' }])
  }

  const removeRoute = (index: number) => {
    if (routes.length > 1) {
      const newRoutes = routes.filter((_, i) => i !== index);
      setRoutes(newRoutes);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-start px-4 sm:px-6 lg:px-0 bg-transparent">
      <Card>
        <CardHeader className=' text-center pb-2'>
          <CardTitle>Register for a Vehicle</CardTitle>
          <CardDescription className='text-red-500 text-xs'>All fields are mandatory marker as asterisk *</CardDescription>
        </CardHeader>
        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4  px-10 py-5 bg-white">
            < div >
              <Label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">Vehicle Type</Label>
              <select
                id="vehicleType"
                name="vehicleType"
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              >
                <option value="Heavy Duty Truck">Heavy Duty Truck</option>
                <option value="Medium Duty Truck">Medium Duty Truck</option>
                <option value="Light Duty Truck">Light Duty Truck</option>
                <option value="Box Truck">Box Truck</option>
                <option value="Flatbed Truck">Flatbed Truck</option>
                <option value="Dump Truck">Dump Truck</option>
                <option value="Refrigerated Truck">Refrigerated Truck</option>
                <option value="Tanker Truck">Tanker Truck</option>
                <option value="Pickup Truck">Pickup Truck</option>
                <option value="Van">Van</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <InputLabel label="vehicle Registration Number" name='vehicleRegistrationNo' placeholder='AN 01 Z 0123' required={true} />
            <InputLabel label="Chassis Number" name='chassisNumber' placeholder='1HGBH41JXMN109186' required={true} />
            <InputLabel label="Driver Name" name='driverName' placeholder='Smith Dank' required={true} />
            <InputLabel label="Driving License Number" name='licenseNumber' placeholder='D1234567890' required={true} />
            <InputLabel label="Driving License Photo" name='licenseDocs' placeholder='Attact Driving License Image (Optional)' required={false} />
            <InputLabel label="Load Capacity" name='loadCapacity' placeholder='1,000.00 Kg' required={true} />

            <div>
              <Label className="block text-sm font-medium text-gray-700">Available Routes</Label>
              {routes.map((routes, index) => (
                <div key={index} className="flex flex-col space-y-2 mt-2">
                  <div className="flex space-x-2">
                    <InputLabel label="From" name={`from${index}`} placeholder="From" required={true} onChange={(e) => handleInputChange(index, 'from', e.target.value)} value={routes.from} />
                    <InputLabel label="To" name={`to${index}`} placeholder="To" required={true} onChange={(e) => handleInputChange(index, 'to', e.target.value)} value={routes.to} />

                    {index > 0 && (
                      <Button
                        type="button"
                        onClick={() => removeRoute(index)}
                        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove Route</span>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              <Button
                type="button"
                onClick={addRoute}
                className="mt-2 flex items-center text-sm text-teal-600 hover:text-teal-500"
              >
                <PlusCircle className="h-4 w-4 mr-1" />
                Add Another Route
              </Button>
            </div>
            <InputLabel type='url' label="Insurance Details" name='insurance' placeholder='Insurance Document URL (Optional)' required={false} />
            <InputLabel type='date' label="Permit Expiry" name='permitExpiry' placeholder='' required={true} />
            <div className="flex items-center">
              <Checkbox
                id="agreementAccepted"
                name='agreementAccepted'
              />
              <Label
                htmlFor="agreementAccepted"
                className="ml-2 block text-sm text-gray-900"
              >
                I accept the{" "}
                <button
                  type="button"
                  className="text-teal-600 hover:text-teal-500"
                  onClick={() => setIsAgreementPopupOpen(true)}
                >
                  license and agreement
                </button>
              </Label>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Register Vehicle
            </Button>
          </div>
        </form>
      </Card>

      <AgreementPopup
        isOpen={isAgreementPopupOpen}
        onClose={() => setIsAgreementPopupOpen(false)}
      />
    </div >
  )
}

interface InputLabelType {
  type?: string | "text",
  label: string,
  name: string,
  placeholder: string,
  required: boolean
  value?: string; // Value of the input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputLabel({ name, type, label, placeholder, required, value, onChange }: InputLabelType) {
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
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default VehicleRegistration