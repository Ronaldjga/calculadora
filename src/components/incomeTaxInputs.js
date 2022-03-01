import react, { useState } from "react";



export function Result() {
    const [result, setResult] = react.useState('')
    const [grossSalary, setGrossSalary] = react.useState('')
    const [numberDependents, setNumberDependents] = react.useState('')
    
    return (
        <>
            <div className="w-full grid grid-rows-2 grid-cols-2 gap-4 p-2">
                <input
                    type={`text`}
                    placeholder="resultado"
                    className="col-span-2 p-2 bg-white"
                    disabled
                    value={result}
                />

                <input
                    type={`text`}
                    placeholder="Salario Bruto"
                    className="p-2"
                    onChange={(e) => {
                        const valor = e.target.value
                        setGrossSalary(valor)
                        console.log(grossSalary)
                    }}
                />

                <input
                    type={`text`}
                    placeholder="dependente"
                    className="p-2"
                    onChange={(e) => {
                        e.preventDefault
                        const valor = e.target.value
                        setNumberDependents(valor)
                        console.log(numberDependents)
                    }}
                />

            </div> 
                <button
                className="bg-yelloPrimary w-2/4 p-2"
                onClick={(e) => {
                    e.preventDefault

                    










                }}
                >
                    Calcular
                </button>
        </>
    )
}