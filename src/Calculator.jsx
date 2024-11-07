import { useState } from "react"
import Button from './Button';

function Calculator(){

    const [final, setFinal] = useState(0)

    function handleClick(value){
        setFinal(value);
    }

    return(
        <>

        <input type = 'text' value = {final}/>
        <Button label = "1" class = "digit" click = {() => handleClick(1)}/>
        <Button label = "2" class = "digit" click = {() => handleClick(2)}/>
        
        
        </>
    )



}

export default Calculator