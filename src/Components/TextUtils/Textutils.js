import React from 'react'
import { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('Enter Text Here');
    /* text='new text'  --->  wrong way to change the state */
    /* setText('New Text'); */
    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);     

    }

    const clearText=()=>{
        /* const textArea=document.getElementById('myBox');
        let newText=textArea.value=''; */                    // this logic and below logic clear text-  work same

        let newText=''
        setText(newText);
    }
   
     /* const handleOnChange=(e)=>{
        
        setText(e.target.value);
    } */

    return (
        <>
            <div className="container">
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={(e) => { setText(e.target.value); }}></textarea>
                </div>
                <button className="btn btn-primary mx-2 mb-3" onClick={handleClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2 mb-3" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2 mb-3" onClick={clearText}>Clear</button>
            </div>
            <div className="container my-2">
                <h3>Your Text summary</h3>
                <p>{text.split(" ").length} words,{text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm