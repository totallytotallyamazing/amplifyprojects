import React, { useState } from 'react';

const Boxs = () => {
    const [grid, setGrid] = useState({
        row: 0,
        col: 0
    });
    const [past, setPast] = useState({
        pastRow: 0,
        pastCol: 0
    });
    
    // const [rowItems, setRowItems] = useState([]);
    const [colItems, setColItems] = useState([]);

    const enterItems = () => {
        // for (let i = 0; i <= grid.row -1; i++) {
        //     rowItems.push(<div className="box" key={i}></div>);
        // }
        for (let i = 0; i <= grid.col -1; i++) {
            colItems.push(<div className="col-sm-1 box" key={i +10}></div>); // d-inline
        }

        // setRowItems([rowItems]);
        setColItems([colItems]);

        setGrid({
            row: 0,
            col: 0
        });
        setPast({
            pastRow: grid.row,
            pastCol: grid.col
        });
    }
    
    // const handleRow = (event) => {
    //     setRowItems([]);
    //     console.log('grid.row: = ' + grid.row);
    //     if(!isNaN(event.target.value)) {
    //         console.log('Row event.target.value: ' + event.target.value);
    //         setGrid(prevGrid => ({
    //             ...prevGrid,
    //             row: event.target.value
    //         }));
    //     };      
    // };

    const handleCol = (event) => {
        setColItems([]);
        // console.log('grid.col: = ' + grid.col);
        if(!isNaN(event.target.value) && event.target.value < 12) {
            // console.log('Col event.target.value: ' + event.target.value);
            setGrid(prevGrid => ({
                ...prevGrid,
                col: event.target.value
            }));
        };      
    }

    return (
        <React.Fragment>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Rows and Columns</h2>
                        {/* <pre>{JSON.stringify(rowItems)}</pre> */}
                        <input 
                            value={grid.row}
                            onChange={(event) => setGrid(prevGrid => ({ ...prevGrid, row: event.target.value}))} 
                        />
                        <input 
                            value={grid.col}
                            onChange={handleCol} 
                        />
                        <button onClick={enterItems}>ENTER items</button>
                        <h2>{past.pastRow} X {past.pastCol}</h2>

                        <div>
                        {
                            past.pastRow >= 1 && colItems.length > 0 &&
                            <div className="text-center">
                                {
                                    colItems.map(colItem => {
                                        return (
                                            <div className='row' key={colItem}>
                                                {colItem}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                        </div>
                        <div>
                        {
                            past.pastRow >= 2 && colItems.length > 0 &&
                            <div className="text-center">
                                {
                                    colItems.map(colItem => {
                                        return (
                                            <div className='row' key={colItem}>
                                                {colItem}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                        </div>
                        <div>
                        {
                            past.pastRow >= 3 && colItems.length > 0 &&
                            <div className="text-center">
                                {
                                    colItems.map(colItem => {
                                        return (
                                            <div className='row' key={colItem}>
                                                {colItem}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                        </div>
                        <div>
                        {
                            past.pastRow >= 4 && colItems.length > 0 &&
                            <div className="text-center">
                                {
                                    colItems.map(colItem => {
                                        return (
                                            <div className='row' key={colItem}>
                                                {colItem}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                        </div>
                        <div>
                        {
                            past.pastRow >= 5 && colItems.length > 0 &&
                            <div className="text-center">
                                {
                                    colItems.map(colItem => {
                                        return (
                                            <div className='row' key={colItem}>
                                                {colItem}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                        </div>
                        <div>
                        {
                            past.pastRow >= 6 && colItems.length > 0 &&
                            <div className="text-center">
                                {
                                    colItems.map(colItem => {
                                        return (
                                            <div className='row' key={colItem}>
                                                {colItem}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                        </div>

                    </div>
                </div>         
            </div>
        </React.Fragment>
    );
}

export default Boxs;

