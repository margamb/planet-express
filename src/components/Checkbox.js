import React from 'react';
import './Checkbox.css';

function switchTheme(mode) {
    document.body.setAttribute("data-color-mode", mode)
}

function Checkbox() {
    function handleChange(e) {
        if (e.target.checked) {
            switchTheme("dark")
        } else {
            switchTheme("light")
        }
    }

    return (
        <div className="checkbox__container">
            <input type="checkbox" className="circle-check" id="" onChange={handleChange} />
            <label htmlFor="" className=""></label>
        </div>
    );
}

export default Checkbox;