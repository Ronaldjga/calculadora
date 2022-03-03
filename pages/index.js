import { ReactDOM } from "react"
import React from "react"
import next from "next"
import { CommonCalculatorBanner, ImcCalculatorBanner, IncomeTaxCalculatorBanner } from "../src/components/calculatorBanner"
import { Footer } from "../src/components/footer"
import { ReportButton } from "../src/components/reportButton"


function HomePage() {
    return (
        <>
            <section className="w-full h-full bg-darkBluePrimary flex flex-col justify-between">
                <main className="p-5">
                    <h1 className="text-white font-h1Title text-center text-5xl font-bold p-2">Calculadoras</h1>
                    <p className="max-w-screen-lg mx-auto text-white">
                        Calculadoras online é um site desenvolvido como experimento prático no intuito de reforçar conhecimento de tecnologias de desenvolvimento web. Portanto, se encontrar algum erro, reporte para que haja correção.
                    </p>
                    <section className="max-w-screen-lg flex flex-col justify-center gap-10 mx-auto p-5">
                        <CommonCalculatorBanner></CommonCalculatorBanner>
                        <IncomeTaxCalculatorBanner></IncomeTaxCalculatorBanner>
                        <ImcCalculatorBanner></ImcCalculatorBanner>
                    </section>
                    <ReportButton></ReportButton>
                </main>
                <Footer></Footer>
            </section>
        </>
    )
}

export default HomePage