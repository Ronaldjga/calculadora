import react from "react";

export function FormReport() {
    return (
        <form
            action="https://formspree.io/f/xvolrylz"
            method="POST"
            className=" lg:w-2/4 bg-gray-900 flex flex-col gap-5 p-5 border-2 border-yelloPrimary"
        >
            <input
                name="Nome"
                type={"text"}
                className="p-2"
                placeholder="Seu nome"
            />

            <input
                name="E-mail"
                type={"email"}
                className="p-2"
                placeholder="Seu e-mail"
            />
            
            <select
                name="Calculadora"
                className="p-2">
                <option selected disabled>Selecione a Calculadora com o Erro</option>
                <option>Calculadora Comum</option>
                <option>Calculadora de Importo de Renda (IRRF)</option>
                <option>Calculadora de Indice de Massa Corporal (IMC)</option>
            </select>
    
            <textarea
                required
                name="Mensagem"
                className="p-2"
                placeholder="Explique sobre o erro."
                rows={`12`}
            >
            </textarea>
            <button
                type="submit"
                className="w-2/5 mx-auto py-4 font-bold hover:brightness-110 bg-yelloPrimary">
                    ENVIAR
            </button>
        </form>
    )
}