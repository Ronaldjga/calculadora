import { ReactDOM } from "react"
import React from "react"
import next from "next"
import { CommonCalculatorBanner, ImcCalculatorBanner, IncomeTaxCalculatorBanner } from "../src/components/calculatorBanner"
import { Footer } from "../src/components/footer"


function HomePage() {
    return (
        <>
            <section className="w-full h-full bg-darkBluePrimary flex flex-col justify-between">
                <main className="p-5">
                    <h1 className="text-white font-h1Title text-center text-5xl font-bold p-2">Calculadoras</h1>
                    <section className="grid grid-cols-3 justify-center gap-5 items-center p-5">
                        <CommonCalculatorBanner></CommonCalculatorBanner>
                        <IncomeTaxCalculatorBanner></IncomeTaxCalculatorBanner>
                        <ImcCalculatorBanner></ImcCalculatorBanner>
                    </section>
                </main>
                <Footer></Footer>
            </section>
        </>
    )
}

export default HomePage