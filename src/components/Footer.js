import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();
return(
    <footer>
    <h4>Copyright {currentYear}</h4>
    </footer>
) 
}

export default Footer;