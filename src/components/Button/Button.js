/*import React from 'react';
import "./button.css";

function Button (props) {
        
    return (
        <button onClick={props.onClick}
        className="btn"
        ></button>
    );
}

export default Button;


/* EJEMPLO DE LA CLASE
import React,  from 'react';
import "./button.css";

function Button ({ children}) {
    let [color, setColor] = useState("lightblue");
    function handleClick() {
        alert("clickeado!");
        color("green");
    }
    return (
        <button
        style={{backgroundColor: color}}
        onClick={handleClick}
        className="btn"
        >
            {children}
        </button>
    );
}
export default Button;
*/