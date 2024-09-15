import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import VehicleRegistration from '../components/VehicleRegistration'

type Option = 'A' | 'B' | 'C' | null

const Registration: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option>(null)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  const renderForm: Function = () => {
    switch(selectedOption){
      case 'A' :
        return <VehicleRegistration />
      case 'B' :
        return console.log('B');
      case 'C' :
        return <VehicleRegistration />
      default : 
        return (<div>
          Hello There!!!
        </div>)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="max-w-2xl mx-auto p-6">
       {renderForm()}
      </Card> 

      <Dialog open={isOpen} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader >
            <DialogTitle className='text-center'>Select an Option</DialogTitle>
          </DialogHeader>
          <div className=" flex-col flex justify-center items-center w-full border space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button onClick={() => handleOptionClick('A')}>User</Button>
            <Button onClick={() => handleOptionClick('B')}>Trucker</Button>
            <Button onClick={() => handleOptionClick('C')}>Agent</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Registration