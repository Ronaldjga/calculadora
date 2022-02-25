import react, { useState } from "react"
import next from "next"
import { GrossSalary } from "../src/components/incomeTaxInputs"


export default function incomeTaxCalculator() {
    const [numberDependents, setNumberDependents] = react.useState('')

    return (
        <>
            <div className="w-full h-full bg-darkBluePrimary flex flex-col items-center justify-center p-2 gap-5">
                <div
                    className="w-full h-full flex flex-col items-center justify-center p-2 gap-5"
                >
                    <div
                        className="bg-gray-900 w-2/4 flex gap-5 p-5"
                    >
                        <GrossSalary></GrossSalary>
                        <input type={`text`} placeholder="dependente" className="w-2/4" />
                        
                    </div>
                </div>
            </div> 
        </>
    )
}