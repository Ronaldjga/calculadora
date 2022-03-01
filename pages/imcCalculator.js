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
                    className="bg-gray-900 w-2/4 flex flex-col items-center gap-5"
                >
                    <ImcInputs></ImcInputs>
                </div>
            </div>
        </>
    )
}