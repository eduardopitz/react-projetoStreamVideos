import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import history from '../../history';

const Modal = () => {
    return ReactDOM.createPortal(
        <div onClick={() => history.push('/streams/list')} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modals visible active">
                <ModalStyle>
                    <div className="header">Remover Stream</div>
                    <div className="content">
                        <p>Você tem certeza que deseja <b>remover</b> o stream?</p>
                    </div>
                    <div className="actions">
                    <div className="ui cancel button">Cancelar</div>
                        <div className="button ui approve ">Confirmar</div>
                    </div>
                </ModalStyle>
            </div>
        </div>, document.querySelector('#modal')
    );
};

const ModalStyle = styled.div`
    font-size: 14px;
    padding: 20px;
    background: #1b1b1f;
    border-radius: 30px;
    color: white;

    .button {
        color: white;
        background: #27282d !important;
        margin: 5px !important;
        border: none;
        border-radius: 30px;
        color: $light-gray;
        font-size: 12px;
        padding: 10px 40px;
        box-shadow: 0px 4px 15px -5px rgba(0,0,0,0.65);
        transition: all .3s;
        outline: none;
    }
`;


export default Modal;