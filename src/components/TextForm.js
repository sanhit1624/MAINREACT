import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("UpperCase was clicked " + text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showalert("converted to uppercase !!", "success");
  }
  const handleLowClick=()=>{
    console.log("LowerCase was clicked " + text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showalert("converted to lowercase !!", "success");
  }
  const handlecleartext=()=>{
    setText("")
    props.showalert("Text is cleared now !!", "success");
  }
  const handleOnChange=(event)=>{
    console.log("Onchanged")
    setText(event.target.value)
  }
  const [text, setText]=useState('')
  // text="new text";  // wrong way to change the state
  // setText("new text");  // correct way to change the state  // settext change the value of original text
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="13"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handlecleartext}>clear text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} to read words in minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
} 