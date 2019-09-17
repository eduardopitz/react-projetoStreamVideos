import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='item-container'>
                <Field name="title" component={this.renderInput} label="Título"/>
                <Field name="description" component={this.renderInput} label="Descrição"/>
                <button>Processar</button>
            </form>
        )
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    renderInput = (formProps) => {
        return (
            <div>
                <div>
                    <span> { formProps.label } </span>
                    {this.renderError(formProps.meta)}
                </div> 
                <input { ...formProps.input} autoComplete="off" className='item'/>
            </div>
        )
    }

    renderError({ error, touched }) {
        if (error && touched) {
            return <span className='item-error'> { error } </span>
        }
        return <span></span>
    }

};

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) errors.title = '(Informe um título)';
    if (!formValues.description) errors.description = '(Informe uma descrição)';

    return errors
}

const formWrapped = reduxForm({ form: 'streamCreate', validate: validate })(StreamCreate);
export default connect(null, { createStream })(formWrapped)