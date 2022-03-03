import react from "react";

export function FormReport() {
    return (
        <form
            action="Post"
            className="min-h-[500px] lg:w-2/4 bg-gray-900 flex flex-col gap-5 p-2 border-2 border-yelloPrimary"
        >
            <input
                className="p-2"
                placeholder="Nome"
            >
            
            </input>

            <select className="p-2">
                <option select disabled>Selecione a Calculadora com o Erro</option>
                <option>Calculadora Comum</option>
            </select>
    
            <textarea
                placeholder="Explique sobre o erro."
            rows={`12`}
            >

            </textarea>
        </form>
    )
}