import React,{useState} from "react";
import './Footer.css'
import Footer_bottom from "./Footer_Bottom/Footer_bottom";
import Footer_Left from "./Footer_Left/Footer_Left";
import Footer_Right from "./Footer_Right/Footer_Right";



const Footer = ()=> {
    window.addEventListener('resize',(e)=> { 
        if(window.innerWidth <= 780) SetOrder(false); else SetOrder(true)});

    const [Order, SetOrder] = useState(true);

    return(
        <div className="footer" >
            <div>
                {
                    Order ? 
                    <div className="Footer_top">
                        <Footer_Left/>
                        <div><Footer_Right/></div>
                    </div>
                    :
                    <div className="Footer_top">                        
                        <Footer_Right/>
                        <div><Footer_Left/></div>
                    </div>                    
                }
            </div>

            <Footer_bottom/>
                     
        </div>
    );
}

export default Footer;