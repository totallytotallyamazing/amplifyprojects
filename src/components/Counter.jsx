import React, { useState } from 'react';

const Counter = () => {

    let [state, setState] = useState({
        count: 0
    });
    
    const increment = num => {
        setState(prevState => ({
            ...prevState,
            count: prevState.count + num
        }))
    }

    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3">{state.count}</p>
                                <button onClick={() => increment(1)}className="btn btn-success m-1">Increment</button>
                                <button onClick={() => increment(-1)}className="btn btn-warning m-1">Decrement</button>
                                <button onClick={() => increment(5)}className="btn btn-danger m-1">Increment by 5</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Counter;