import './App.css';
const Popup=()=>{
    return(
        <div className="popup">
            <img src ="./Image File.png" className="form-img"></img>
            <img src ="./xmark.png" className="close-btn"></img>
            <h3>Join Our Waitlist</h3>
            <p>We promise,we won't spam your inbox!</p>
            <input type ="text" placeholder="Your Name" ></input>
            <input type ="text" placeholder="Your Email" ></input>
            <button style={{width:"100%"}}>continue</button>
        </div>
    )
}

export default Popup;