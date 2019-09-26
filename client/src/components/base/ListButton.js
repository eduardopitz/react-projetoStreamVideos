import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '../App.scss'

const ListButton = (props) => {
    return (
        <StyledLink to={props.linkTo}> {props.content}</StyledLink>
    )
};

const StyledLink = styled(Link)`
    margin: 2px;
    text-align: center;
    color: white;
    width:  60px !important;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
    border: 0.7px solid #4e54c8;
    border-radius: 30px;
    font-size: 10px;
    box-shadow: 0px 4px 15px -5px rgba(0,0,0,0.65);
    transition: all .3s;

    :hover {
        color: white;
        outline-style: none;
        border-radius: 30px;
        background: #8f94fb;
        box-shadow: 0px 5px 20px -3px rgba(0,0,0,0.65);
    }
`;


export default ListButton;