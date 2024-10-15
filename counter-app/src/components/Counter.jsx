import React, {useState, useEffect} from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AddIcon from '@mui/icons-material/Add';
import './Counter.css'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleDecrement = () => {
        if (counter === 0) {
            setCounter(0)
            alert('El contador ya llego a 0!');
        } else {
            setCounter(counter-1)
        }
    }

    const handleReset = () => {
        setCounter(0)
    }

    const handleIncrement = () => {
        setCounter(counter+1)
    }

    useEffect(() => {
        document.title = `Contador: ${counter}`;
    }, [counter]);

    return (
        <div className='counter'>
            <h1>Contador</h1>
            <h2>{counter}</h2>
            <div className='btn-container'>
                <button className='btn-decrement' onClick={handleDecrement}><RemoveIcon /></button>
                <button className='btn-reset' onClick={handleReset}><RestartAltIcon /></button>
                <button className='btn-increment' onClick={handleIncrement}><AddIcon /></button>
            </div>
        </div>
    )
}

export default Counter