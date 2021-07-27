import React from 'react'
import './ModalContainer.css'
import { connect } from 'react-redux';
import { HideModal } from '../../Redux/Modal/ModalActions';

var ModalContainer = ({Modal,HideModal,Data}) => {
    return (
        <div className="modal-cont flex" onClick={(e)=>{
                if(e.target.classList.contains('modal-cont')) HideModal();
                e.stopPropagation()
            }}>
            {Modal ? <Modal Data={Data ? Data : ''}/> : null}
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
