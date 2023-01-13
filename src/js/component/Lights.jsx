import React from "react";

const Light = ({ color, select, setSelect }) => {
    return (
        <div>
            <div className="light" style={{ backgroundColor: color === select ? color : 'gray'}}
                onClick={() => setSelect(color)}></div>
        </div>
    )
}


export default Light;