import react, { useState } from "react"
import { useEffect } from "react"
import { ButtonAdd } from "../src/components/buttons"

export default function CommonCalculatorPage() {
    const [tela, setTela] = react.useState('')


    return (
        <>
            <div className="w-full h-full bg-darkBluePrimary flex flex-col items-center p-2">
               
                    <table className="">
                        <thead>
                            <tr className="text-white">
                                <td colSpan={4}>
                                <p className="min-w-[300px] h-10  p-2 bg-white text-black flex justify-end items-center tracking-widest">
                                    {tela}
                                    {console.log(tela)}
                                    </p>
                                </td>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="text-white">
                                <td><ButtonAdd lista={tela} add={setTela} valor="1"></ButtonAdd></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="2"></ButtonAdd></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="3"></ButtonAdd></td>
                                <td><ButtonAdd lista={tela} add={setTela} valor="4"></ButtonAdd></td>
                            </tr>

                            <tr className="text-white">
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                            </tr>

                            <tr className="text-white">
                                <td>9</td>
                                <td>+</td>
                                <td>-</td>
                                <td>*</td>
                            </tr>

                            <tr className="text-white">
                                <td>/</td>
                                <td>C</td>
                                <td>=</td>
                                <td></td>
                            </tr>

                            <tr className="text-white">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                
            </div>
        </>
    )
}