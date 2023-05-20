import { useState } from "react";

export const useCounter = (setup) => {
    let {initial, min, max, jump} = setup

    initial = initial ? initial : 0
    min = min ? min : -Infinity
    max = max ? max : Infinity
    jump = jump ? jump : 1
    
    const [counter, setCounter] = useState(initial);

    const error = (text) => {
        console.log(text)
        return 0
    }

    if (min > initial) return (error('Valor min não pode ser maior que o inicial!'))
    
    if(initial > max) return (error('Valor inicial não pode ser maior do que o máximo!'))

    if (min === max) return (error('Valor min e max não podem ser iguais!'))

    if (jump < 1) return (error('incremento não pode ser menor do que 1!'))

    const increment = () => {
        if(counter + jump <= max)
        setCounter(prevState => prevState + jump)
    }

    const decrement = () => {
        if(counter - jump >= min)
        setCounter(prevState => prevState-jump)
    }

    const reset = () => {
        setCounter(initial)
    }

    return {counter, increment, decrement, reset}
}