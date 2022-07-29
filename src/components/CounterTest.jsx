import React, { useEffect, useRef, useState } from 'react';

function CounterTest() {
    const [count, setCount] = useState(0);
  //the useRef Hook allows you to persist data between renders
    const prevCountRef = useRef();
    useEffect(() => {
      //assign the ref's current value to the count Hook
      prevCountRef.current = count;
    }, [count]); //run this code when the value of count changes
    return (
      <h1>
        Now: {count}, before: {prevCountRef.current}
        {/*Increment  */}
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      </h1>
    );
  };

  export default CounterTest;