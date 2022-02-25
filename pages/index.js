import { ReactDOM } from "react"
import React from "react"
import next from "next"
import { CommonCalculatorBanner, IncomeTaxCalculatorBanner } from "../src/components/calculatorBanner"


function HomePage() {
    return (
        <>
            <div className="w-full h-full bg-darkBluePrimary flex flex-col items-center p-2">
                <section>
                    <CommonCalculatorBanner></CommonCalculatorBanner>
                </section>
            </div>
            <div className="w-full h-full bg-darkBluePrimary flex flex-col items-center p-2">
                <section>
                    <IncomeTaxCalculatorBanner></IncomeTaxCalculatorBanner>
                </section>
            </div>
        </>
    )
  }
  
  export default HomePage