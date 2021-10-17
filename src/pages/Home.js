import React, { useState, useEffect } from 'react'

function MouseClick()
{
    const [click, setClick] = useState(0)

    function incrementClick()
    {
        setClick(click+1);
    }

    // useEffect(()=>{
    //     console.log("Click: "+ click);

    // });

    useEffect(()=>{
        console.log("Click: "+ click);

    },[click]);

    return(
        <div className="count-click">
            <button onClick={incrementClick}>Click Here!</button>
            <span>{click}</span>
        </div>
    )
}

function Home() {
    return (
        <>
            <div className='main'>
                <h1>Home</h1>
                <div className="count-click-container">
                    <MouseClick/>
                    <MouseClick/>
                    <MouseClick/>
                </div>
            </div>
        </>
    )
}

export default Home
