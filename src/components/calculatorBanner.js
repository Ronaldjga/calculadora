import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import commonCalculatorIcon from "./img/commonCalculator.svg"
import incomeTaxCalculatorIcon from "./img/incomeTaxCalculator.svg"

export function CommonCalculatorBanner() {
    const routes = useRouter()
    return (
        <button type="button" onClick={()=> {routes.push(`/commonCalculator`)}}>
            <div className="min-w-[300px] bg-yelloPrimary p-2 flex flex-col gap-2">
                <Image width={'50px'} height={'50px'} src={commonCalculatorIcon} />
                <h2 className="text-white font-bold text-2xl">Calculadora Comum</h2>
                <p className="text-white">Calculadora comum, com as operaçoes basicas de uma calculadora;</p>
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
                <h2 className="text-white font-bold text-2xl">Calculadora de Imposto de Renda</h2>
                <p className="text-white">Calculadora  com funcionalidade para avaliar sua situação de imposto de renda</p>
            </div>
        </button>
    )     
}