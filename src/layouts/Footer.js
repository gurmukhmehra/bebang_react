import React from "react";
const Footer=()=>{
    const currentYear = new Date().getFullYear();
    return(
        <div>
            <div className="container-fluid bg-green pt-1 pb-1 text-white">
                <div className="container">
                    <p className="text-center mb-0 copyRight">&copy; {currentYear} Copy Right</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;