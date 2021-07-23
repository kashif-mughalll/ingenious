import React from 'react'
import './ModalContainer.css'
import { connect } from 'react-redux';
import { HideModal } from '../../Redux/Modal/ModalActions';

var ModalContainer = ({Modal,HideModal}) => {
    return (
        <div className="modal-cont flex" onClick={HideModal}>
            {Modal ? Modal : null}
        </div>
    )
}

const mapState = (state)=> {
    return {
        Modal : state.Modal
    }
}

const actions = {
    HideModal
}

export default connect(mapState,actions)(ModalContainer)