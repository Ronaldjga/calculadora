import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import commonCalculatorIcon from "./img/commonCalculator.svg"
import incomeTaxCalculatorIcon from "./img/incomeTaxCalculator.svg"
import imcCalculatorIcon from "./img/imcCalculator.svg"

export function CommonCalculatorBanner() {
    const routes = useRouter()
    return (
        <button type="button" onClick={()=> {routes.push(`/commonCalculator`)}}>
            <div
                className="min-w-[300px] min-h-[165px] bg-yelloPrimary flex gap-2 justify-between border-2 border-yelloPrimary">
                
                <div className="w-1/5 min-w-[195px] bg-gray-900 flex justify-center">
                    <Image width={'75px'} height={'75px'} src={commonCalculatorIcon} />
                </div>

                <div className="p-2 text-darkBluePrimary">
                    <h2 className="font-bold text-2xl">Calculadora Comum</h2>
                    <p className="">Calculadora comum, ultilizada para realizar contas basicas, como: adição, subtração, multiplicação e divisão. </p>
                </div>
            </div>
        </button>
    )     
}

export function IncomeTaxCalculatorBanner() {
    const routes = useRouter()
    return (
        <button type="button" onClick={()=> {routes.push(`/incomeTaxCalculator`)}}>
            <div
                className="min-w-[300px] min-h-[165px] bg-yelloPrimary flex gap-2 justify-between border-2 border-yelloPrimary">
                
                <div className="w-1/5 min-w-[195px] bg-gray-900 flex justify-center">
                    <Image width={'75px'} height={'75px'} src={incomeTaxCalculatorIcon} />
                </div>
                
                <div className="p-2 text-darkBluePrimary">
                    <h2 className="font-bold text-2xl">Calculadora de Imposto de Renda</h2>
                    <p className="">A calculadora de imposto de renda ira avaliar a situação do seu imposto de renda, com base em calculos do IRRF. O calculo do IRRF está atualizado com as tabelas de 2022.</p>
                </div>
            </div>
        </button>
    )     
}

export function ImcCalculatorBanner() {
    const routes = useRouter()
    return (
        <button type="button" onClick={()=> {routes.push(`/imcCalculator`)}}>
            <div className="min-w-[300px] min-h-[165px] bg-yelloPrimary flex gap-2 justify-between border-2 border-yelloPrimary">
                <div className="w-1/5 min-w-[195px] bg-gray-900 flex justify-center">
                    <Image width={'75px'} height={'75px'} src={imcCalculatorIcon} />
                </div>
                <div className="p-2 text-darkBluePrimary">
                    <h2 className="font-bold text-2xl">Calculadora de IMC</h2>
                    <p className="">Calcule seu IMC. IMC é uma sigla para índice de Massa Corporal. Este calculo serve para que a pessoa avalie sua situação de saúde, através de uma conta que avalia seu peso em relação a sua altura.</p>
                </div>
            </div>
        </button>
    )     
}