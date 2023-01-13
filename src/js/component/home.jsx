import React, { useState } from "react";
import Lights from "./Lights.jsx";
//include images into your bundle

//create your first component
const Home = () => {
    const colors = ['red', 'yellow', 'green'];
    const [select, setSelect] = useState("gray")

    return (
		<div className="container">
            {colors.map((color) => {
                return <Lights key={color} color={color} select={select} setSelect={setSelect} />
            })};
			<div className="pilar"></div>
        </div>
    )


};

export default Home;
