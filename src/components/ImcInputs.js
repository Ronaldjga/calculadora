import react, { useState } from "react";

export function ImcInputs() {
    const [result, setResult] = react.useState('')
    const [peso, setPeso] = react.useState('');
    const [altura, setAltura] = react.useState('')

    return (
        <div className="w-full h-full flex flex-col items-center justify-around">
            <h1
                className="font-h1Title text-white text-3xl text-center sm:text-4xl lg:text-5xl font-bold"
            >Calculadora de IMC
            </h1>
            <div className="w-full grid grid-rows-2 grid-cols-2 gap-4 p-2">
                <input
                    className="p-2 h-12 font-bold"
                    type={`text`}
                    placeholder="Peso"
                    maxLength={`3`}
                    onChange={(e) => {
                        const valor = e.target.value;
                        setPeso(valor)
                    }}
                />
                
                <input
                    className="p-2 h-12 font-bold"
                    type={`text`}
                    placeholder="Altura"
                    maxLength={`3`}
                    onChange={(e) => {
                        const valor = e.target.value;
                        setAltura(valor);
                    }}
                />

                <input
                    className="p-2 bg-white col-span-2 h-12 font-bold text-center"
                    placeholder="Resutlado"
                    value={result}
                    disabled
                />

            </div>


            <button
                className="bg-yelloPrimary w-full sm:w-2/4 p-2"
                onClick={(e) => {
                    e.preventDefault;

                    if (peso === '' && altura === '') {
                        setResult('')
                        setResult(`preencha os campos acima`)
                    } else if (peso === '') {
                        setResult('')
                        setResult(`Preencha o campo de peso`)
                    } else if (altura === '') {
                        setResult('')
                        setResult(`Preencha o campo de altura`)
                    } else {
                        const newAltura = altura[0] + '.' + altura[1] + altura[2]
                    const conta = peso / (newAltura * newAltura)
                    if (conta <= 18.5) {
                        setResult('')
                        setResult(`Abaixo do peso. Seu IMC: ${conta.toFixed(2)}`)
                    } else if (conta >= 18.6 && conta <= 24.9) {
                        setResult('')
                        setResult(`Peso Normal. Seu IMC: ${conta.toFixed(2)}`)
                    } else if (conta >= 25 && conta <= 29.9) {
                        setResult('')
                        setResult(`Acima do Peso (Sobrepeso). Seu IMC: ${conta.toFixed(2)}`)
                    } else if (conta >= 30 && conta <= 34.9) {
                        setResult('')
                        setResult(`Obesidade I. Seu IMC: ${conta.toFixed(2)}`)
                    } else if (conta >= 35 && conta <= 39.9) {
                        setResult('')
                        setResult(`Obesidade II. Seu IMC: ${conta.toFixed(2)}`)
                    } else if (conta > 40) {
                        setResult('')
                        setResult(`Obesidade III. Seu IMC: ${conta.toFixed(2)}`)
                    } else {
                        setResult('')
                        setResult(`Conta Invalida`)
                    }

                    }
                }}
            >
                Calcular
            </button>
        </div>

    )
}