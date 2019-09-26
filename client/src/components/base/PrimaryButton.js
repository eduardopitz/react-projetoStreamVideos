import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '../App.scss'

const PrimaryButton = (props) => {
    return (
        <StyledLink to={props.linkTo}> {props.content}</StyledLink>
    )
};

const StyledLink = styled(Link)`
    background: #4e54c8;
    text-align: center;
    color: white;
    border-radius: 30px;
    height: 50px;
    width:  160px !important;
    padding-left: 20px;
    padding-right: 20px;
    border: none;
    border-radius: 30px;
    color: $light-gray;
    font-size: 14px;
    padding: 16px 36px;
    cursor: pointer;
    box-shadow: 0px 4px 15px -5px rgba(0,0,0,0.65);
    transition: all .3s;
    outline: none;

    :hover {
        color: white;
        outline-style: none;
        border-radius: 30px;
        background: #8f94fb;
        box-shadow: 0px 5px 20px -3px rgba(0,0,0,0.65);
    }
`;


export default PrimaryButton;