import React from "react";

export function ButtonAdd(props) {

    return (
        <div>
            <button onClick={() => {
                props.add(props.lista + props.valor)
                console.log(typeof parseInt(props.lista))
            }}
                className="p-2 bg-yelloPrimary"
                type="button">
                {props.valor}
            </button>
        </div>
    )
}