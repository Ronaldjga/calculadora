import react, { useState } from "react"
import { useEffect } from "react"
import { ButtonAdd, ButtonEqual, ButtonClear, ButtonEquations, ButtonRemoveLast } from "../src/components/buttons"

export default function CommonCalculatorPage() {
    const [tela, setTela] = react.useState('')

    return (
        <>
            <div onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    setTela('')
                    setTela(eval(tela))
                } 
            }}
                className="w-full h-full bg-darkBluePrimary flex flex-col items-center justify-center p-2 gap-5"
            >
                <h1 className="font-h1Title text-white text-5xl font-bold">Calculadora Comun</h1>
                <div
                    className="bg-gray-900 w-[500px] grid grid-rows-6 grid-cols-4 gap-x-2 gap-y-4 p-5"
                >
                    <input
                        className="min-w-[300px] p-2 bg-white text-black text-right col-span-4 text-3xl"
                        value={tela}
                        onChange={(e) => {
                            const valor = e.target.value;
                            setTela(valor)
                        }}
                        placeholder="0"
                    />
                    <ButtonClear lista={tela} add={setTela} valor="C"></ButtonClear>
                    <ButtonEquations lista={tela} add={setTela} valor="."></ButtonEquations>
                    <ButtonRemoveLast lista={tela} add={setTela} valor="X"></ButtonRemoveLast>
                    <ButtonEquations lista={tela} add={setTela} valor="/"></ButtonEquations>

                    <ButtonAdd lista={tela} add={setTela} valor="7"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="8"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="9"></ButtonAdd>
                    <ButtonEquations lista={tela} add={setTela} valor="*"></ButtonEquations>

                    <ButtonAdd lista={tela} add={setTela} valor="4"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="5"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="6"></ButtonAdd>
                    <ButtonEquations lista={tela} add={setTela} valor="-"></ButtonEquations>

                    <ButtonAdd lista={tela} add={setTela} valor="1"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="2"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="3"></ButtonAdd>
                    <ButtonEquations lista={tela} add={setTela} valor="+"></ButtonEquations>
                    
                    <ButtonEquations lista={tela} add={setTela} valor="("></ButtonEquations>
                    <ButtonAdd lista={tela} add={setTela} valor="0"></ButtonAdd>
                    <ButtonEquations lista={tela} add={setTela} valor=")"></ButtonEquations>
                    <ButtonEqual className="bg-bluePrimary text-white" lista={tela} add={setTela} valor="="></ButtonEqual>
                    

                </div>
            </div>
        </>
    )
}