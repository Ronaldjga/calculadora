import react, { useState } from "react"
import { useEffect } from "react"
import { ButtonAdd, ButtonEqual, ButtonClear } from "../src/components/buttons"

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
                className="w-full h-full bg-darkBluePrimary flex flex-col items-center p-2">
                
                <div className="bg-grayPimary w-[500px] grid grid-rows-5 grid-cols-4 gap-2 p-5">
                    <input
                        className="min-w-[300px] h-10  p-2 bg-white text-black text-right col-span-4"
                        value={tela}
                        onChange={(e) => {
                            const valor = e.target.value;
                            setTela(valor)
                        }}
                    />
                    <ButtonAdd lista={tela} add={setTela} valor="7"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="8"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="9"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="*"></ButtonAdd>

                    <ButtonAdd lista={tela} add={setTela} valor="4"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="5"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="6"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="-"></ButtonAdd>

                    <ButtonAdd lista={tela} add={setTela} valor="1"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="2"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="3"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="+"></ButtonAdd>
                    
                    <ButtonClear lista={tela} add={setTela} valor="C"></ButtonClear>
                    <ButtonAdd lista={tela} add={setTela} valor="0"></ButtonAdd>
                    <ButtonAdd lista={tela} add={setTela} valor="."></ButtonAdd>
                    <ButtonEqual lista={tela} add={setTela} valor="="></ButtonEqual>
                    

                </div>
               
                    {/* <table className="">
                        <thead>
                            <tr className="text-white">
                                <td colSpan={4}>
                                <input
                                    className="min-w-[300px] h-10  p-2 bg-white text-black text-right"
                                    value={tela}
                                    onChange={(e) => {
                                        const valor = e.target.value;
                                        setTela(valor)
                                    }}
                                />
                                </td>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="text-white">
                                <td><ButtonAdd lista={tela} add={setTela} valor="7"></ButtonAdd></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="8"></ButtonAdd></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="9"></ButtonAdd></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="*"></ButtonAdd></td>
                            </tr>

                            <tr className="text-white">
                                <td><ButtonAdd lista={tela} add={setTela} valor="4"></ButtonAdd></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="5"></ButtonAdd></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="6"></ButtonAdd></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="-"></ButtonAdd></td>
                            </tr>

                            <tr className="text-white">
                                <td><ButtonAdd lista={tela} add={setTela} valor="1"></ButtonAdd></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="2"></ButtonAdd></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="3"></ButtonAdd></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="+"></ButtonAdd></td>
                            </tr>

                            <tr className="text-white">
                                <td><ButtonClear lista={tela} add={setTela} valor="C"></ButtonClear></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="0"></ButtonAdd></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="."></ButtonAdd></td>
                                <td><ButtonEqual lista={tela} add={setTela} valor="="></ButtonEqual></td>
                            </tr>
                        </tbody>
                    </table> */}
                
            </div>
        </>
    )
}