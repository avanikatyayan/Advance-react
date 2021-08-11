import React, {useState} from 'react'

function UseStateObject() {
    const [person, setPerson] = useState({
        name:"Star Lord",
        age: 50,
        message: "I am a god",
    });
    const [name,setName] = useState("Tony Stark")
    const [age,setAge] = useState(45)
    const [message,setMessage] = useState("Iron Man")

    const changeMessage = () => {
        setPerson({...person, message:"Not Anymore"});
        setMessage("Hello World");
    }
    return (
        <div>
            <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={changeMessage}>Change my message</button>
            </>
            
        </div>
    )
}

export default UseStateObject
