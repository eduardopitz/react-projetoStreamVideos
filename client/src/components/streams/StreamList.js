import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreamList } from '../../actions';

class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.fetchStreamList();
    }

    render() {
        return (
            <div className="list">
                <br/>
                <span className="title-list"> Comece a assistir agora </span>
                <br/>
                <br/>
                {this.renderList()}
                <br />
                {this.renderCreateStream()}
            </div>
        )
    }

    renderCreateStream(stream) {
        if (this.props.isSignedIn) {
            return (
                <StyledLink to="/streams/new">Criar stream</StyledLink>
            )
        }
    }

    renderCurrentUserActions(stream) {
        if (stream.userId == this.props.currentUserId) {
            return (
                <Button>Editar</Button>
            )
        }
    }

    renderList() {
        return this.props.streamList.map(stream => {
            return (
                <div className="item-list" key={stream.id}>
                    <span> {stream.title} </span>
                    <span> {stream.description} </span>
                    {this.renderCurrentUserActions(stream)}
                    <hr/>
                </div>
            )
        })
    }

};

const mapStateToProps = (state) => {
    return { 
        streamList: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

const Button = styled.button`
    font-size: em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 30px;
    margin-bottom: 0px;
    margin-top: 0px;
`;

const StyledLink = styled(Link)`
    background: #4e54c8;
    color: white;
    border-radius: 30px;
    height: 50px;
    width:  250px;
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

export default connect(mapStateToProps, { fetchStreamList })(StreamList);