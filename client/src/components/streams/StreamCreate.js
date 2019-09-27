import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    render() {
        return (
            <div>
                <h4> # Criando uma Stream </h4>
                <StreamForm onSubmit={this.onSubmit} buttomContent="Criar"/>
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };
};

export default connect(null, { createStream })(StreamCreate);