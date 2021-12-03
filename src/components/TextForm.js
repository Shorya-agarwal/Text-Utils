import React ,{useState} from 'react'


export default function TextForm(props) {
    const changeUp = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="conatainer">
            <h2>{props.heading}</h2>
            <div className="mb-3">
                {/* <label for="myTextBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value= {text} onChange={handleOnChange} id="myTextBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick = {changeUp}>Convert to Uppercase</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.48*(text.split(" ").length)/60} Minutes Average reading time</p>
        </div>
        </>
    )
}
