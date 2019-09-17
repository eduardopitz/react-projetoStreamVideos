import React from 'react';

import { connect } from 'react-redux';
import { fetchStreamList } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreamList();
    }

    render() {
        return (
            <div className="list">
                <span className="title-list"> Comece a assistir agora </span>
                <br/>
                <br/>
                {this.renderList()}
            </div>
        )
    }

    renderList() {
        return this.props.streamList.map(stream => {
            return (
                <div className="item-list" key={stream.id}>
                    <span> {stream.title} </span>
                    <span> {stream.description} </span>
                </div>
            )
        })
    }
};

const mapStateToProps = (state) => {
    return { streamList: Object.values(state.streams) };
}

export default connect(mapStateToProps, { fetchStreamList })(StreamList);