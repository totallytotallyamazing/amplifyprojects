import React, { useState } from 'react';

function Example() {
    const [theColArray, setTheColArray] = useState([]);
    const [theRowArray, setTheRowArray] = useState([]);
    const addColClick = () => {
        setTheColArray(oldColArray => [...oldColArray, `Entry ${oldColArray.length}`]);
    };
    const addRowClick = () => {
        setTheRowArray(oldRowArray => [...oldRowArray, `Entry ${oldRowArray.length}`]);
    };
    return (
        <React.Fragment>
            <input type="button" onClick={addColClick} value="Add Col" />
            <input type="button" onClick={addRowClick} value="Add Row" />
            <div className="row">{theColArray.map(colEntry =>
                <div className="col-sm-1 box">{colEntry}</div>
            )}
            </div>
            <div className="row">{theColArray.map(colEntry =>
                <div className="col-sm-1 box">{colEntry}</div>
            )}
            </div>
            <div className="row">{theColArray.map(colEntry =>
                <div className="col-sm-1 box">{colEntry}</div>
            )}
            </div>
            <div className="row">{theColArray.map(colEntry =>
                <div className="col-sm-1 box">{colEntry}</div>
            )}
            </div>
            <div className="row">{theColArray.map(colEntry =>
                <div className="col-sm-1 box">{colEntry}</div>
            )}
            </div>
        </React.Fragment>
    );
}

export default Example;