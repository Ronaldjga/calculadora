import react, { useState } from "react";

export function GrossSalary() {
    const [grossSalary, setGrossSalary] = react.useState('')
    
    return (
        <input
            type={`text`}
            placeholder="Salario Bruto"
            className="w-2/4"
            value={grossSalary}
            onChange={(e) => {
                const valor = e.target.value;
                setGrossSalary(valor)
            }}
        />
    )
}