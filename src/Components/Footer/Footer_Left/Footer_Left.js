import React,{useState} from 'react'
import Footer_Button from "../Footer_Button/Footer_Button";

var dd= ()=>{
    console.log("fine");
}


function Footer_Left() {

    const [Width,SetWidth] = useState(window.innerWidth);
    const [CompanyVisiblity,SetCompanyVisiblity] = useState(false);
    const [AccountVisiblity,SetAccountVisiblity] = useState(false);
    const [ConnectVisiblity,SetConnectVisiblity] = useState(false);
    const [VisitUsVisiblity,SetVisitUsVisiblity] = useState(false);

    window.addEventListener('resize',(e)=> { SetWidth( window.innerWidth ) });


    if(Width <= 450 ){
        return(
            <div className="footer_left_mobile">

                <div className="Box_btn_Style" >
                    <div className="Box_btn_Style_Top">
                        <div className="Heading_Style">Account</div>
                        <div>
                            <button onClick={()=> SetAccountVisiblity(!AccountVisiblity) } className="Btn__style"> 
                                { AccountVisiblity ? '-' : '+'} </button>
                        </div>
                    </div>
                    <div>
                        { AccountVisiblity ?                            
                            <div className="Box_btn_Style_Bottom"> 
                                <Footer_Button OnClick={dd} Text="Manage Account" />
                                <Footer_Button OnClick={dd} Text="Saved items" />
                                <Footer_Button OnClick={dd} Text="Orders & Returns" />
                                <Footer_Button OnClick={dd} Text="Redeem a Gift card" />  
                            </div> : null 
                        }
                    </div>
                </div>

                
                <div className="Box_btn_Style" >
                    <div className="Box_btn_Style_Top">
                        <div className="Heading_Style">Company</div>
                        <div>
                            <button onClick={()=> SetCompanyVisiblity(!CompanyVisiblity) } className="Btn__style"> 
                                { CompanyVisiblity ? '-' : '+'} </button>
                        </div>
                    </div>
                    <div>
                        { CompanyVisiblity ?                            
                            <div className="Box_btn_Style_Bottom"> 
                                <Footer_Button OnClick={dd} Text="About" />
                                <Footer_Button OnClick={dd} Text="Factories" />
                                <Footer_Button OnClick={dd} Text="Careers" />
                                <Footer_Button OnClick={dd} Text="International" />
                                <Footer_Button OnClick={dd} Text="Accessibility" />
                            </div> : null 
                        }
                    </div>
                </div>


                <div className="Box_btn_Style" >
                    <div className="Box_btn_Style_Top">
                        <div className="Heading_Style">Connect</div>
                        <div>
                            <button onClick={()=> SetConnectVisiblity(!ConnectVisiblity) } className="Btn__style"> 
                                { ConnectVisiblity ? '-' : '+'} </button>
                        </div>
                    </div>
                    <div>
                        { ConnectVisiblity ?                            
                            <div className="Box_btn_Style_Bottom"> 
                                <Footer_Button OnClick={dd} Text="Contact & FAQ" />
                                <Footer_Button OnClick={dd} Text="Instagram" />
                                <Footer_Button OnClick={dd} Text="Twitter" />
                                <Footer_Button OnClick={dd} Text="Affiliate" />
                                <Footer_Button OnClick={dd} Text="Bulk Orders" /> 
                            </div> : null 
                        }
                    </div>
                </div>

                <div className="Box_btn_Style" >
                    <div className="Box_btn_Style_Top">
                        <div className="Heading_Style">Visit Us</div>
                        <div>
                            <button onClick={()=> SetVisitUsVisiblity(!VisitUsVisiblity) } className="Btn__style"> 
                                { VisitUsVisiblity ? '-' : '+'} </button>
                        </div>
                    </div>
                    <div>
                        { VisitUsVisiblity ?                            
                            <div className="Box_btn_Style_Bottom"> 
                                <Footer_Button OnClick={dd} Text="Find location nearnest" />
                                <Footer_Button OnClick={dd} Text="See Our Stories" />
                            </div> : null 
                        }
                    </div>
                </div>
                

            </div>
        );
    }
    else
    {
        return (
            <div className="footer_left">
                
                <div className="_block" >
                    <div className="Footer_Label">Account</div>
                    <Footer_Button OnClick={dd} Text="Manage Account" />
                    <Footer_Button OnClick={dd} Text="Saved items" />
                    <Footer_Button OnClick={dd} Text="Orders & Returns" />
                    <Footer_Button OnClick={dd} Text="Redeem a Gift card" />                
                </div>
    
    
                <div className="_block" >
                    <div className="Footer_Label">Company</div>                
                    <Footer_Button OnClick={dd} Text="About" />
                    <Footer_Button OnClick={dd} Text="Factories" />
                    <Footer_Button OnClick={dd} Text="Careers" />
                    <Footer_Button OnClick={dd} Text="International" />
                    <Footer_Button OnClick={dd} Text="Accessibility" />
                    
                </div>
    
    
                <div className="_block" >
                    <div className="Footer_Label">Connect</div>
                    <Footer_Button OnClick={dd} Text="Contact & FAQ" />
                    <Footer_Button OnClick={dd} Text="Instagram" />
                    <Footer_Button OnClick={dd} Text="Twitter" />
                    <Footer_Button OnClick={dd} Text="Affiliate" />
                    <Footer_Button OnClick={dd} Text="Bulk Orders" />                
                </div>
    
    
                <div className="_block" >
                    <div className="Footer_Label">Visit Us</div>
                    <Footer_Button OnClick={dd} Text="Find location nearnest" />
                    <Footer_Button OnClick={dd} Text="See Our Stories" />                    
                </div>
    
            </div>
        )
    }
}

export default Footer_Left
