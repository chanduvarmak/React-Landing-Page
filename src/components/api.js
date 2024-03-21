import { useState } from "react";
export default function WithApi(){
    const [userData, setUserData] = useState(null);
    async function handleClick(){
        const response = await fetch("https://reqres.in/api/users/2");
        const body = await response.json();
        console.log(body)
        setUserData(body.data.first_name);
        
    }
    return(
        <div>
            <h1>Using Async/Await with API:</h1>
            <button onClick={handleClick}>Click Here!</button>
            <h1>{userData}</h1>
            <button onClick={handleClick}>Click me</button>
                    
        </div>
    );
}
