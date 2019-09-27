import React from 'react';
import styled from 'styled-components';

import '../../../App.scss'

const renderError = ({ error, touched }) => {
    if (error && touched) {
        return <span className='item-error'> { error } </span>
    }
    return <span></span>
}

const LargeInput = (props) => {
    

    return (
        <div>
            <div>
                <span> {props.label} </span>
                {renderError(props.meta)}
            </div> 
            <Input {...props.input} autoComplete="off" placeholder={props.placeholder} />
        </div>
    )
};

const Input = styled.input`
    color: #d9d7d7;
    border: 1px solid #424040;
    border-radius: 3px;
    letter-spacing: 0.8px;
    margin: 20px;
    padding-right: 30px;
    padding-left: 30px;
    text-align: justify;
    background: inherit !important;
    border-radius: 25px;
    width: 500px !important;

    /* here we use the dynamically computed prop */
    margin: 1em;
    padding: 1em;
  `
;


export default LargeInput;