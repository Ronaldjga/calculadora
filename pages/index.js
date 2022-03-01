import { ReactDOM } from "react"
import React from "react"
import next from "next"
import { CommonCalculatorBanner, IncomeTaxCalculatorBanner } from "../src/components/calculatorBanner"


function HomePage() {
    return (
        <>
            <section className="w-full h-full bg-darkBluePrimary flex justify-center gap-5 items-center p-2">
                <CommonCalculatorBanner></CommonCalculatorBanner>
                <IncomeTaxCalculatorBanner></IncomeTaxCalculatorBanner>
            </section>
        </>
    )
}

export default HomePage