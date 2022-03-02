import react, { useState } from "react"
import next from "next"
import { IncomeTaxCalculator } from "../src/components/incomeTaxInputs"


export default function incomeTaxCalculator() {
    const [numberDependents, setNumberDependents] = react.useState('')

    return (
        <>
            <div className="w-full h-full bg-darkBluePrimary flex flex-col items-center justify-center p-2 gap-5">
                <div
                    className="min-h-[500px] lg:w-2/4 bg-gray-900 flex flex-col items-center gap-5 p-2 border-2 border-yelloPrimary"
                >
                    <IncomeTaxCalculator></IncomeTaxCalculator>
                </div>
            </div>
        </>
    )
}