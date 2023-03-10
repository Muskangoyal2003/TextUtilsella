import React ,{useState}from 'react'

export default function About(props) {
    const myStyle ={
        color:props.mode === 'dark'?'white':'black',
        backgroundColor:props.mode === 'dark'?'#172e46':'white',
        borderColor:props.mode ==='dark'?'white':'black'
    }
    
//     const [myStyle,setMyStyle] = useState({
//         color: "black",
//     backgroundColor: "white"
// });
// const[btnText,setBtnText] = useState('Enable Dark Mode');
// const toggleStyle = ()=>{
// if(myStyle.color === 'white'){
//     setMyStyle({
//         color: "black",
//     backgroundColor: "white"
// });
// setBtnText('Enable Dark Mode');
// }
// else{
//     setMyStyle({
//         color: "white",
//     backgroundColor: "black"
// });
// setBtnText('Enable Light Mode');
// }
// }
    return (
        <>
            <div className='container' style={myStyle}>
                <h2>ABOUT US</h2>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                               <strong>1.Analyze Your Text</strong> 
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                TextUtilsella gives you a way to analyze your text quickly and efficiently.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                               <strong>2.Free to use</strong> 
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                TextUtilsella is a free character counter tool that provides instant character count statistics for a given text. TextUtilsella reports the number of words and characters. Thus, it is suitable for writing text with word/character limit. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                               <strong>3.Browser Compatible</strong> 
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                This word counter software works in any web browsers such as Chrome, Firfox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container my-3">
                    <button onClick = {toggleStyle} className="btn btn-primary" >{btnText}</button>
                </div> */}
            </div>
        </>
    )
}
