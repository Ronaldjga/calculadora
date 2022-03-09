import react, { useState } from "react";



export function IncomeTaxCalculator() {
    const [result, setResult] = react.useState('')
    const [grossSalary, setGrossSalary] = react.useState('')
    const [numberDependents, setNumberDependents] = react.useState('')
    
    return (
        <div className="w-full h-full flex flex-col items-center justify-around">
            <h1 className="font-h1Title text-white text-3xl text-center sm:text-4xl lg:text-5xl font-bold">
                Calculadora de IRRF
            </h1>
            <div className="w-full grid grid-rows-2 grid-cols-2 gap-4 p-2">
                <input
                    type={`text`}
                    placeholder="resultado"
                    className="col-span-2 p-2 bg-white font-bold text-center"
                    disabled
                    value={result}
                />

                <input
                    type={`text`}
                    placeholder="Salario Bruto"
                    className="p-2 h-12 font-bold"
                    onChange={(e) => {
                        const valor = e.target.value
                        setGrossSalary(valor)
                        console.log(grossSalary)
                    }}
                />

                <input
                    type={`text`}
                    placeholder="dependente"
                    className="p-2 h-12 font-bold"
                    onChange={(e) => {
                        e.preventDefault
                        const valor = e.target.value
                        setNumberDependents(valor)
                        console.log(numberDependents)
                    }}
                />

            </div> 
                <button
                className="bg-yelloPrimary w-full sm:w-2/4 p-2"
                onClick={(e) => {
                    e.preventDefault
                    if (grossSalary <= 1903.98) {
                        setResult('')
                        setResult('Isento de Imposto de renda')
                    } else if (grossSalary >= 1903.99 && grossSalary <= 2826.65) {
                        if (grossSalary >= 1903.99 && grossSalary <= 2427.35) {
                            const fist = 1212 * (7.5 / 100)
                            const second = (grossSalary - 1212) * (9 / 100)
                            const contaInss = fist + second
                            const dependentes = numberDependents * 189.59
                            const finalResult = ((grossSalary - dependentes - contaInss) * (7.5 / 100)) - 142.80
                            setResult('')
                            setResult(finalResult)
                        }
                    } else if (grossSalary >= 2826.66 && grossSalary <= 3751.05) {

                    }
                    










                }}
                >
                    Calcular
                </button>
        </div>
    )
}