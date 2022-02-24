import React from "react";

export function ButtonAdd(props) {

    return (
        <div>
            <button onClick={() => {
                props.add(props.lista + props.valor)
            }}
                className={`${props.className} w-full text-xl font-bold p-4 hover:brightness-110 bg-yelloPrimary`}
                type="button">
                {props.valor}
            </button>
        </div>
    )
};

export function ButtonEquations(props) {

    return (
        <div>
            <button onClick={() => {
                props.add(props.lista + props.valor)
            }}
                className={`${props.className} w-full text-xl font-bold p-4 hover:brightness-110 bg-bluishGray text-white`}
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
                className={`${props.className} w-full text-xl font-bold p-4`}
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
                className={`${props.className} w-full text-xl font-bold p-4 bg-bluishGray text-white`}
                type="button">
                {props.valor}
            </button>    
        </div>
  )  
}

export function ButtonRemoveLast(props) {
    return (
        <div>
            <button
                onClick={() => {
                    props.add(props.lista.slice(0, -1))
                }}
                className={`${props.className} w-full text-xl font-bold p-4 bg-bluishGray text-white`}
                type="button">
                {props.valor}
            </button>    
        </div>
  )  
}