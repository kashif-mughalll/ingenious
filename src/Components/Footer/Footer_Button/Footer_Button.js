import React from 'react'

var Footer_Button = (props)=> {

    let ClassName = props.Border ? 'Footer_btn_style1' : 'Footer_btn_style';

    return (
        <button className={ClassName}
            onClick={ ()=> props.OnClick() } >
            {props.Text }  
            <br></br> 
        </button>
    )
}

export default Footer_Button
