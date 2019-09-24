import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../base/Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
    
    onDismiss = () => {
        history.push('/streams/list');
    };

    onDelete = () => {
        console.log(this.props.stream.id);
        this.props.deleteStream(this.props.stream.id);
        console.log(' << ');
    }

    renderActions() {
        return (
            <React.Fragment>
                <Link to="/streams/list" className="ui cancel button"> Cancelar </Link>
                <button className="ui approve button"
                        onClick={() => this.onDelete()}>
                    Remover
                </button>
            </React.Fragment>
        );
    };

    renderContent() {
        if (!this.props.stream) {
            return "Você tem certeza que deseja remover o stream?"
        } else {
            return `Você tem certeza que deseja remover o stream ${this.props.stream.title}?`
        }
    }

    render() {
        return (
            <div>
                <Modal
                    title="Remover Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => this.onDismiss()}
                />
            </div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);