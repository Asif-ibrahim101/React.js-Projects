import React, { useState } from 'react';
import './App.css';

function App() {
    const [counter, setCounter] = useState(0);

    const IncreaseCounter = () => {
        let increase = counter + 1
        setCounter(increase)
    };

    const decreseCounter = () => {
        let decrease = counter - 1
        setCounter(decrease)
    };

    return (
        <>
            <div className="main">
                <div className="body_main">
                    <div className="heading">
                        <h2>Counter App</h2>
                    </div>

                    <div className="counter">
                        {counter}
                    </div>

                    <div className="btns">
                        <div className="increase_main">
                            <button onClick={IncreaseCounter} className='increase'>Increase</button>
                        </div>
                        <div className="decrease_main">
                            <button disabled={counter === 0} onClick={decreseCounter} className='decrease'>Decrease</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App