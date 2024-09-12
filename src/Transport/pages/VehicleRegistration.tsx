import React, { useState, FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { PlusCircle, X } from 'lucide-react'


interface AgreementPopupProps {
  isOpen: boolean;
  onClose: () => void;
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
  const [step, setStep] = useState(1);
  const [isAgreementPopupOpen, setIsAgreementPopupOpen] = useState(false);
  const [routes, setRoutes] = useState([{ from: '', to: '' }]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let form = new FormData(e.target as HTMLFormElement);

    if (step === 1) {
      setStep(2)
    }
    else {
      const agreementAccepted = form.get('agreementAccepted') === 'on';
      if (!agreementAccepted) {
        alert("Please accept the license and agreement before submitting.");
        return;
      }
    }
    let formObject = Object.fromEntries(form.entries());
    console.log(formObject);

    // if (!formData.agreementAccepted) {
    //   alert("Please accept the license and agreement before submitting.")
    //   return
    // }
    // console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Vehicle Registration
          </h2>

          <p className="mt-2 text-center text-sm text-gray-600">
            Please fill out all the required information
          </p>
          <p>
            Steps {step} of 2: {step === 1 ? 'User registration' : 'Vehicle Registration'}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {step === 1 ? (
            <div className="rounded-md shadow-sm space-y-4">
              <InputLabel label="Full Name (Owner)" name='fullname' placeholder='John Doe' required={true} />
              <InputLabel type='email' label="Email" name='email' placeholder='john@example.com' required={true} />
              <InputLabel type='password' label="Password" name='Password' placeholder='********' required={true} />
              <InputLabel label="Mobile Number" name='mobile' placeholder='98452XXXX0' required={true} />
              <InputLabel label="Address" name='addressLine1' placeholder='House No. and Street Name' required={true} />
              <InputLabel label="Address 2" name='addressLine2' placeholder='Apartment, Suite, unit, etc (Optional)' required={true} />
              <div className='grid grid-cols-2 gap-x-5'>
                <InputLabel label="City/Town" name='city' placeholder='City' required={true} />
                <InputLabel label="Zipcode" name='zipcode' placeholder='ZIP Code' required={true} />
              </div>
              <InputLabel label="Adhaar Number" name='adhaarNumber' placeholder='12-Digits Adhaar Number' required={true} />
              <div className='grid grid-cols-2 gap-x-5'>
                <InputLabel type='file' label="Adhaar Front" name='adhaarFront' placeholder='Attact Front-side Image (Optional)' required={false} />
                <InputLabel type='file' label="Adhaar Back" name='adhaarBack' placeholder='Attact Back-side Image (Optional)' required={false} />
              </div>
              <div className='grid grid-cols-2 gap-x-5'>
                <InputLabel label="State" name='state' placeholder='State' required={true} />
                <InputLabel label="Country" name='country' placeholder='Country' required={true} />
              </div>
            </div>
          ) : (
            <div className="rounded-md shadow-sm space-y-4">
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
              <InputLabel label="vehicle Registration Number" name='vehicleRegistrationNumber' placeholder='AN 01 Z 0123' required={true} />
              <InputLabel label="Chassis Number" name='chassisNumber' placeholder='1HGBH41JXMN109186' required={true} />
              <InputLabel label="Driver Name" name='driverName' placeholder='Smith Dank' required={true} />
              <InputLabel label="Driving License Number" name='driverLicenseNumber' placeholder='D1234567890' required={true} />
              <InputLabel label="Driving License Photo" name='driverLicensePhoto' placeholder='Attact Driving License Image (Optional)' required={false} />
              <InputLabel label="Load Capacity" name='loadCapacity' placeholder='1,000.00 Kg' required={true} />

              <div>
                <Label className="block text-sm font-medium text-gray-700">Available Routes</Label>
                {routes.map((route, index) => (
                  <div key={index} className="flex flex-col space-y-2 mt-2">
                    <div className="flex space-x-2">
                      <InputLabel label="From" name={`routes_from_${index + 1}`} placeholder='From' required={true} />
                      <InputLabel label="To" name={`routes_from_${index + 1}`} placeholder='to' required={true} />

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
          )}
          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              {step === 1 ? 'Next' : "Register Vehicle"}
            </Button>
          </div>
        </form>
      </div >
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

export default VehicleRegistration