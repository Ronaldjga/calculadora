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
                className="min-w-[300px] h-[165px] min-h-[165px] bg-yelloPrimary flex gap-2 justify-between items-center border-2 border-yelloPrimary">
                
                <div className="w-1/5 h-full bg-gray-900 flex justify-center">
                    <Image width={'75px'} height={'75px'} src={commonCalculatorIcon} />
                </div>

                <div>
                    <h2 className="text-darkBluePrimary font-bold text-2xl">Calculadora Comum</h2>
                    <p className="text-darkBluePrimary">Calculadora comum, com as operaçoes basicas de uma calculadora;</p>
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
                className="min-w-[300px] h-[165px] min-h-[165px] bg-yelloPrimary flex gap-2 justify-between items-center border-2 border-yelloPrimary">
                
                <div className="w-1/5 h-full bg-gray-900 flex justify-center">
                    <Image width={'75px'} height={'75px'} src={incomeTaxCalculatorIcon} />
                </div>
                
                <div>
                    <h2 className="text-darkBluePrimary font-bold text-2xl">Calculadora de Imposto de Renda</h2>
                    <p className="text-darkBluePrimary">Calculadora  com funcionalidade para avaliar sua situação de imposto de renda</p>
                </div>
            </div>
        </button>
    )     
}

export function ImcCalculatorBanner() {
    const routes = useRouter()
    return (
        <button type="button" onClick={()=> {routes.push(`/imcCalculator`)}}>
            <div className="min-w-[300px] h-[165px] min-h-[165px] bg-yelloPrimary flex gap-2 justify-between items-center border-2 border-yelloPrimary">
                <div className="w-1/5 h-full bg-gray-900 flex justify-center">
                    <Image width={'75px'} height={'75px'} src={imcCalculatorIcon} />
                </div>
                <div>
                    <h2 className="text-darkBluePrimary font-bold text-2xl">Calculadora de IMC</h2>
                    <p className="text-darkBluePrimary">Calculadora que calcula o IMC</p>
                </div>
            </div>
        </button>
    )     
}