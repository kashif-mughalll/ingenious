import React from 'react'
import './ModalContainer.css'
import { connect } from 'react-redux';
import { HideModal } from '../../Redux/Modal/ModalActions';
import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';

var ModalContainer = ({Modal,HideModal,Data}) => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div  className="modal-cont flex" onClick={(e)=>{
                if(e.target.classList.contains('modal-cont')) HideModal();
                e.stopPropagation()
            }}>
            {Modal ? <div data-aos="fade-up"><Modal Data={Data ? Data : ''}/></div> : null}
        </div>
    )
}

const mapState = (state)=> {
    return {
        Modal : state.Modal.Form,
        Data : state.Modal.data
    }
}

const actions = {
    HideModal
}

export default connect(mapState,actions)(ModalContainer)
