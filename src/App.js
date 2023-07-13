
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

        
      
export default function InvalidDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [date, setDate] = useState(null);
   
    const values={
      selectedCity,
      date
    }

    const handleSubmit=()=>{
      console.log(values);

      setSelectedCity(null);
      setDate(null)
    }

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="flex flex-wrap p-2 align-items-center gap-3 ">
            <Dropdown  value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="p-invalid w-full md:w-14rem flex  " />
                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
                <Button className="gap-3" label="Submit" icon="pi pi-check"  onClick={handleSubmit} />
                
             </div>
    )
}
        