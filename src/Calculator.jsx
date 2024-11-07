import { useState } from "react";
import Button from "./Button";

function Calculator() {
    const [displayValue, setDisplayValue] = useState("");
    const [result, setResult] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    function handleDigit(value) {
        if (waitingForOperand) {
            setDisplayValue(String(value));
            setWaitingForOperand(false);
        } else {
            setDisplayValue(displayValue === "0" ? String(value) : displayValue + value);
        }
    }

    function handleOperator(nextOperator) {
        const inputValue = parseFloat(displayValue);

        if (result === null) {
            setResult(inputValue);
        } else if (operator) {
            const currentResult = result || 0;
            const newResult = calculate(currentResult, inputValue, operator);
            setResult(newResult);
            setDisplayValue(String(newResult));
        }

        setOperator(nextOperator);
        setWaitingForOperand(true);
    }

    function calculate(left, right, operator) {
        switch (operator) {
            case "+":
                return left + right;
            case "-":
                return left - right;
            case "*":
                return left * right;
            case "/":
                return left / right;
            default:
                return right;
        }
    }

    function handleEqual() {
        const inputValue = parseFloat(displayValue);

        if (operator && result !== null) {
            const finalResult = calculate(result, inputValue, operator);
            setDisplayValue(String(finalResult));
            setResult(null);
            setOperator(null);
            setWaitingForOperand(true);
        }
    }

    function handleClear() {
        setDisplayValue("");
        setResult(null);
        setOperator(null);
    }

    return (
        <div>
            <input type="text" value={displayValue} readOnly />
            <div className="buttons">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
                    <Button key={digit} label={digit} onClick={() => handleDigit(digit)} />
                ))}
                <Button label="+" onClick={() => handleOperator("+")} />
                <Button label="-" onClick={() => handleOperator("-")} />
                <Button label="*" onClick={() => handleOperator("*")} />
                <Button label="/" onClick={() => handleOperator("/")} />
                <Button label="=" onClick={handleEqual} />
                <Button label="C" onClick={handleClear} />
            </div>
        </div>
    );
}

export default Calculator;
