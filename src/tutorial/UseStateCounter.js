import React, {useState} from 'react'

function UseStateCounter() {
    const [value,setValue] = useState(0);
    const complexIncrease = () =>{
        setTimeout(() =>{
            setValue(value+1);
        }, 2000)
    }

    return (
        <>
        <section style={{margin: '4rem 0'}}>
            <h2>A regular counter</h2>
            <h1>{value}</h1>
            <button className='btn' onClick={() => setValue(value-1)}>Decrease</button>
            <button className='btn' onClick={() => setValue(value+1)}>Increase</button>
            <button className='btn' onClick={() => setValue(0)}>Reset</button>
        </section>  
        <section style={{margin: '4rem 0'}}>
            <h2>A more complex counter</h2>
            <h1>{value}</h1>
            <button className='btn' onclick={complexIncrease}>Increase later</button>
        </section>
        </>
    )
}

export default UseStateCounter
