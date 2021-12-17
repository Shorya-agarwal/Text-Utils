import React ,{useState} from 'react'


export default function TextForm(props) {
    const changeUp = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppecase","success")
    }
    const changeLow = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const clearText =()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Cleared all Text", "danger")
    }
    const handleCopy=()=>{
        let text = document.getElementById("myTextBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied to ClipBoard","success")
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="conatainer" style= {{color: props.mode ==='dark' ? 'white' :'#081849'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value= {text} style= {{backgroundColor: props.mode ==='dark' ? 'grey' :'white', color: props.mode ==='dark' ? 'white' :'#081849'}} onChange={handleOnChange} id="myTextBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick = {changeUp}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick = {handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick = {changeLow}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick = {clearText}>Clear Text </button>
            <button className="btn btn-primary mx-1 my-1" onClick = {handleExtraSpace}>Remove Extra Spaces </button>
        </div>
        <div className="container my-3" style= {{color: props.mode ==='dark' ? 'white' :'#081849'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((el)=> {return el.length!==0}).length} words, {text.length} characters</p>
            <p>{0.48*(text.split(" ").length)/60} Minutes Average reading time</p>
            <h2>Priview</h2>
            <p>{text.length>0? text: "Enter something to preview it here"}</p>
        </div>
        </>
    )
}
