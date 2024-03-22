import React, { useEffect, useState } from "react";
import '../service/service.css'
export function Service() {
    // const [service, setService] = useState("");
    // const [count, setCount] = useState(0);

    // useEffect(() => { setService(`hi this is chandu's service ${count}`) }, [count])
    // function onClickHandler() {
    //     console.log("hi click handler is called")
    //     setCount((prevCount) => prevCount + 1);
    // }
    return (
        <>
            <section>
                <div className="service-head flex-col">
                    <h1>Service component works!</h1>
                    {/* <button onClick={onClickHandler}>click me {count}</button>
                    <p>{service}</p> */}
                </div>
            </section>
        </>
    );
};
export default Service;