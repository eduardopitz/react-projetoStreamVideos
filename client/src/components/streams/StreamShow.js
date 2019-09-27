import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if (!this.props.stream) {
            return (
                <div className='item-container'>
                    <span> L O A D I N G . . . </span>
                </div>
            )    
        }
        return (
            <div className='item-container'>
                <span> {this.props.stream.title} </span> <br/>
                <span> {this.props.stream.description} </span>
            </div>
        )
    }

};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);