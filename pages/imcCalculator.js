import react, { useState } from "react"
import next from "next"
import { ImcInputs } from "../src/components/ImcInputs"


export default function imcCalculator() {
    return (
        <>
            <div
                className="w-full h-full bg-darkBluePrimary flex flex-col items-center justify-center p-2 gap-5"
            >
                <div
                    className="min-h-[500px] lg:w-2/4 bg-gray-900 flex flex-col items-center gap-5 p-2 border-2 border-yelloPrimary"
                >
                    <ImcInputs></ImcInputs>
                </div>
                
                <div>
                    <p className="text-white">
                        Calculo de IMC
                    </p>
                </div>
            </div>
        </>
    )
}