import React from 'react'
import Footer_Button from "../Footer_Button/Footer_Button";

var Check = ()=> {
    console.log("clicked");
}


var Footer_bottom = () =>{
    return (
        <div className="Footer_bottom">
            <Footer_Button Text="© 2021 All Rights Reserved " className="Footer_bottom_Label"/>
            <Footer_Button OnClick={()=> Check()} Border={true} Text="Privacy Policy" />
            <Footer_Button OnClick={()=> Check()} Border={true} Text="Terms of Service" />
            <Footer_Button OnClick={()=> Check()} Border={true} Text="CA Supply Chain Transparency" />
            <Footer_Button OnClick={()=> Check()} Border={true} Text="Vendor Code of Conduct" />
            <Footer_Button OnClick={()=> Check()} Border={true} Text="Sitemap Pages" />
            <Footer_Button OnClick={()=> Check()} Border={true} Text="Sitemap Products" />
        </div>
    )
}

export default Footer_bottom
