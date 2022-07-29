import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/features/counter.feature';

const CounterRedux = () => {

    let dispatch = useDispatch();

    // get data from Redux Store
    let counterState = useSelector((state) => {
        return state['counter'];
    });

    console.log('RENDERING Counter');

    let { count } = counterState;
    
    const handleIncrement = num => {
        dispatch(increment(num));
    }

    return (
        <React.Fragment>
            <div className="container mt-5">
            <div className="row">
                    <div className="col mt-3">
                        <p className="h3 text-primary">Counter</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, dolores eius voluptates quos doloremque commodi excepturi reprehenderit cumque quia provident praesentium sequi magnam voluptatem aliquid aspernatur consectetur rem laboriosam numquam?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3 display-3">{count}</p>
                                <button onClick={() => handleIncrement(1)}className="btn btn-success m-1">Increment</button>
                                <button onClick={() => handleIncrement(-1)}className="btn btn-warning m-1">Decrement</button>
                                <button onClick={() => handleIncrement(5)}className="btn btn-danger m-1">Increment by 5</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CounterRedux;