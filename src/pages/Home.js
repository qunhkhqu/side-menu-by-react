import React, { useState, useEffect, useRef } from 'react'


function MouseClick() {
    const [click, setClick] = useState(0)

    function incrementClick() {
        setClick(click + 1);
    }

    // useEffect(()=>{
    //     console.log("Click: "+ click);

    // });

    // useEffect(() => {
    //     console.log("Click: " + click);
    // }, [click]);

    return (
        <div className="count-click">
            <button onClick={incrementClick}>Click to count:</button>
            <span>{click}</span>
        </div>
    )
}



class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { tick: 0 }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ tick: this.state.tick + 1 }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="timer">
                Time in seconds: <span> {this.state.tick} </span>
            </div>
        )
    }
}


function TimerByFuncComponent() {

    const [tick, setTick] = useState(0);

    const refTick = useRef(0);

    useEffect(() => {

        console.log('->Khoi tao timmer');
        var count = 0;
        const i = setInterval(() => {
            //console.log("Tick: " + count);
            let newtick = refTick.current + 1;
            count++;
            setTick(newtick);
            refTick.current = newtick;
        }, 1000);

        return () => {
            clearInterval(i);
        }

    }, []);

    return (
        <div className="timer">
            Time in seconds: <span> {tick} </span>
        </div>
    );
}


function Home() {
    return (
        <>
            <div className='main'>
                <h1>Home</h1>
                <div className="count-click-container">
                    <MouseClick />
                    <MouseClick />
                    <MouseClick />
                </div>

                <div className="count-click-container">
                    <Timer />
                </div>

                <div className="count-click-container">
                    <TimerByFuncComponent />
                </div>

            </div>
        </>
    )
}

export default Home
