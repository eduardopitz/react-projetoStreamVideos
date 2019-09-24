import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} 
             className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modals visible active">
                <ModalStyle>
                    <div className="header">  {props.title}   </div>
                    <div className="content"> {props.content} </div>
                    <div className="actions"> {props.actions} </div>
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
        font-size: 12px;
        padding: 10px 40px;
        box-shadow: 0px 4px 15px -5px rgba(0,0,0,0.65);
        transition: all .3s;
        outline: none;
        
        :hover {
            color: #4e54c8 !important;
            outline-style: none;
            border-radius: 30px;
            background: lighten($gray, 10%);
            box-shadow: 0px 5px 20px -3px rgba(0,0,0,0.65);
        }
    }
`;


export default Modal;