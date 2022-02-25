import react, { useState } from "react"
import next from "next"
import { GrossSalary } from "../src/components/incomeTaxInputs"


export default function incomeTaxCalculator() {
    const [numberDependents, setNumberDependents] = react.useState('')

    return (
        <html lang="pt-BR">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Calculadora de Imposto de renda</title>
            </head>
            <body className="bg-darkBluePrimary">
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
            </body>
        </html>
    )
}