import React, {useState} from "react";

function NavBar() {
    const [open, setOpen]= useState(false);
    return (
        <div>
            <nav>
                <div className="logo">getBooks</div>
                <ul className="navlinks" style={{ transform: open ? "translateX(0px)" : ""}}>
                    <li><a>Sell</a></li>
                    <li><a>View</a></li>
                    <li><a>Request</a></li>
                    <li><a>LogIn</a></li>
                </ul>
                <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
            </nav>
        </div>
    );
}    

export default NavBar;