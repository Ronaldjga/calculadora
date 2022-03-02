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
            <div className="min-w-[300px] bg-yelloPrimary p-2 flex flex-col gap-2">
                <Image width={'50px'} height={'50px'} src={commonCalculatorIcon} />
                <h2 className="text-darkBluePrimary font-bold text-2xl">Calculadora Comum</h2>
                <p className="text-darkBluePrimary">Calculadora comum, com as operaçoes basicas de uma calculadora;</p>
            </div>
        </button>
    )     
}

export function IncomeTaxCalculatorBanner() {
    const routes = useRouter()
    return (
        <button type="button" onClick={()=> {routes.push(`/incomeTaxCalculator`)}}>
            <div className="min-w-[300px] bg-yelloPrimary p-2 flex flex-col gap-2">
                <Image width={'50px'} height={'50px'} src={incomeTaxCalculatorIcon} />
                <h2 className="text-darkBluePrimary font-bold text-2xl">Calculadora de Imposto de Renda</h2>
                <p className="text-darkBluePrimary">Calculadora  com funcionalidade para avaliar sua situação de imposto de renda</p>
            </div>
        </button>
    )     
}

export function ImcCalculatorBanner() {
    const routes = useRouter()
    return (
        <button type="button" onClick={()=> {routes.push(`/imcCalculator`)}}>
            <div className="min-w-[300px] bg-yelloPrimary p-2 flex flex-col gap-2">
                <Image width={'50px'} height={'50px'} src={imcCalculatorIcon} />
                <h2 className="text-darkBluePrimary font-bold text-2xl">Calculadora de IMC</h2>
                <p className="text-darkBluePrimary">Calculadora que calcula o IMC</p>
            </div>
        </button>
    )     
}