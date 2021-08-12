import React from 'react'


function LearnJSON() {
    const handleClick =(b) => {
        const promise = axios.post("http://localhost:4000/users",{
            name: "Tony" },{
                headers: {
                    ['content-type']: 'application/json'
                }}
                )
                promise.then(response => {
                    console.log(response)
                })
                promise.catch(error=>{
                    console.error(error);
                })
                let c=b;
                console.log(c);
            }
    
    return (
        <>
        <button type ="button" className='btn' onClick={handleClick}> Send User</button>
        <button type ="button" className='btn' onClick={getUsers}> Get User</button>
        
        </>
    )
}

export default LearnJSON
