import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreamList } from '../../actions';
import PrimaryButton from '../base/PrimaryButton';
import ListButton from '../base/ListButton';

class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.fetchStreamList();
    }

    render() {
        return (
            <div className="list">
                <br/>
                {this.renderCreateStream()}
                <br/>
                <br/>
                <br/>
                <span className="title-list"> Online agora </span>
                <br/>
                <br/>
                {this.renderList()}
                <br />
                
            </div>
        )
    }

    renderCreateStream() {
        if (this.props.isSignedIn) {
            return (
                <PrimaryButton linkTo="/streams/new" content="Criar stream" />
            )
        }
    }

    renderCurrentUserActions(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div>
                    <ListButton linkTo={`/streams/edit/${stream.id}`} content="Editar" /> 
                    <ListButton linkTo={`/streams/delete/${stream.id}`} content="Excluir" />
                </div>
            )
        }
    }

    renderList() {
        return this.props.streamList.map(stream => {
            return (
                <ItemList key={stream.id}>
                    <div className="box a"><span><b> {stream.title} </b></span></div>
                    <div className="box b"><span> {stream.description} </span></div>
                    <div className="box c">{this.renderCurrentUserActions(stream)}</div>
                </ItemList>
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

const ItemList = styled.div`
    display: grid;
    padding-top: 20px;
    
    grid-gap: 5px;
        grid-template-columns: 70% 10px 150px;
    }

    .box {
        // background-color: #444;
        // color: #fff;
        font-size: 150%;

    }

    .a {
        grid-column: 1 / 3;
        grid-row: 1;
    }
    .b {
        grid-column: 1 / 3;
        grid-row: 2 ;
    }
    .c {
        grid-column: 3 ;
        grid-row: 1 / 3;
    }
`;

export default connect(mapStateToProps, { fetchStreamList })(StreamList);