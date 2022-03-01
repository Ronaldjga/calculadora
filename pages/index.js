import { ReactDOM } from "react"
import React from "react"
import next from "next"
import { CommonCalculatorBanner, ImcCalculatorBanner, IncomeTaxCalculatorBanner } from "../src/components/calculatorBanner"


function HomePage() {
    return (
        <>
            <section className="w-full h-full bg-darkBluePrimary grid justify-center gap-5 items-center p-2">
                <CommonCalculatorBanner></CommonCalculatorBanner>
                <IncomeTaxCalculatorBanner></IncomeTaxCalculatorBanner>
                <ImcCalculatorBanner></ImcCalculatorBanner>
            </section>
        </>
    )
}

export default HomePage