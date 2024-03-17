import { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(8);
    const [trigger, setTrigger] = useState(false);

    function addValue() {
        setValue(previousValue => previousValue + 1)
        setTrigger(false);
    }

    function subtractValue() {
        if (value > 0) {
            setValue(previousValue => previousValue - 1)
        }
        else {
            alert("सुअर और कितना कम करेगा?")
            setTrigger(true)
        }
    }

    return (<div>
        <h2>value {value}</h2>
        <button onClick={addValue}> Add Value {value} </button> <br />
        <button onClick={subtractValue} disabled={value < 0}  > Subtract Value {value} </button>
        {trigger ? <h1> सुअर और कितना कम करेगा? </h1> : ""}
    </div>
    )
}

export default Counter