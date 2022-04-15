import './App.css';


const Navbar = ()=>{

    return(
        <div className ="nav-bar">
           <div className="logo">
               <img src = "../Logo.png"/>
           </div>
           <div className="nav-items">
               <ul>
                   <li>What is Rystas?</li>
                   <li>Contact Us</li>
               </ul>
               <button>Signup</button>
               <p >
                 Join our waitlist
                </p>
           </div>
           
        </div>
    )
}

export default Navbar;