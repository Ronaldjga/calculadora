import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import commonCalculatorIcon from "./img/commonCalculator.svg"

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