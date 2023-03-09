import React, { useState } from 'react'

export default function TextForm(props) {
    const handleonChange = (event) => {
        // console.log("You clicked on onchange");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", 'success');
    }
    const handleclearClick = () => {
        // console.log("Uppercase was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", 'success');
    }
    const handleDnClick = () => {
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", 'success');
    }
    const handleCopyClick = () => {
        //console.log("Copy Text was clicked");
        // let text = document.getElementById("textArea");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied", 'success');
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", 'success');
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="mb-3 " style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <label htmlFor="textArea" className="form-label"><h2>{props.heading}</h2></label>
                <textarea className="form-control" value={text} onChange={handleonChange} id="textArea" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#253c60', color: props.mode === 'light' ? 'black' : 'white' }} rows="10"></textarea>
                <button disabled= {text.length===0}className="btn btn-primary my-3 " onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled= {text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleDnClick}>Convert To Lowercase</button>
                <button disabled= {text.length===0}className="btn btn-primary my-3 mx-2" onClick={handleclearClick}>Clear Text</button>
                <button disabled= {text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button disabled= {text.length===0}className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3 " style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h6>YOUR TEXT SUMMARY</h6>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters <br></br>
                    {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read </p>
                <h6>PREVIEW</h6>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div> 
        </>
    )
}
