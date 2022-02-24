import React from "react";

export function ButtonAdd(props) {

    return (
        <div>
            <button onClick={() => {
                props.add(props.lista + props.valor)
                console.log(typeof parseInt(props.lista))
            }}
                className="w-full text-xl font-bold p-4 bg-yelloPrimary"
                type="button">
                {props.valor}
            </button>
        </div>
    )
};

export function ButtonEqual(props) {
    return (
        <div>
            <button
                onClick={() => {
                    props.add('')
                    props.add(eval(props.lista))
                }}
                className="w-full text-xl font-bold p-4 bg-yelloPrimary"
                type="button">
                {props.valor}


            </button>
        </div>
    )
};

export function ButtonClear(props) {
    return (
        <div>
            <button
                onClick={() => {
                    props.add('')
                }}
                className="w-full text-xl font-bold p-4 bg-yelloPrimary"
                type="button">
                {props.valor}
            </button>    
        </div>
  )  
}