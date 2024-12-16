import React, { useState } from 'react';


export default function (props) {
    const [text, setText] = useState("")

    const textChange = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const textChangeToLow = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const textEntering = (letters) => {
        setText(letters.target.value)
    }

    const capitalizeText = () => {
        var firstLetterCapital = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        var makeWordCapital = text.split(" ").map(firstLetterCapital)
        var finalizedText = makeWordCapital.join(" ");
        setText(finalizedText)
    }

    const clearText = () => {
        setText("")
    }

    const copyText = () => {
        navigator.clipboard.writeText(text)
        props.alert("Copy to Clipboard", "success")
    }

    return (
        <>

            <div style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h5>Enter the Text to Analyze</h5>
                <div>
                    <textarea className="form-control" id="floatingTextarea" value={text} placeholder='Enter your text to change the case' rows={10} onChange={textEntering} style={{ backgroundColor: props.mode === "light" ? "white" : "#222831", color: props.mode === "light" ? "black" : "white", border: `1px solid ${props.mode === "light" ? "black" : "red"}` }}></textarea>
                </div>

                <button className="btn btn-dark my-2 mx-1" onClick={textChange}>Convert to UpperCase</button>
                <button className="btn btn-dark my-2 mx-1" onClick={textChangeToLow}>Convert to LowerCase</button>
                <button className="btn btn-dark my-2 mx-1" onClick={capitalizeText}>Convert to Capitalize</button>
                <button className="btn btn-dark my-2 mx-1" onClick={copyText}>Copy your text</button>
                <button className="btn btn-danger my-2 mx-1" onClick={clearText}>Clear Text</button>

            </div>

            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2 className='my-5'>Analytic of your Text</h2>
                {/* <p>{text.split(" ").length} words and {text.split("").length} characters</p> */}
                <p>{text.length == " " ? "0" : text.split(" ").length } words and {text.split('').filter(char => char.trim() !== '').join('').length
                } characters</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your text to see the preview"}</p>
            </div>


        </>
    )
}
