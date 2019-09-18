import React from 'react';
import styled from 'styled-components'

import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='item-container'>
                <Field name="title" component={this.renderInput} label="Título"/>
                <Field name="description" component={this.renderInput} label="Descrição" type="text"/>
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
                <Input { ...formProps.input} autoComplete="off" placeholder={ formProps.label } />
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


const Input = styled.input`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    letter-spacing: 0.8px;
    margin: 20px;
    padding-right: 30px;
    padding-left: 30px;
    text-align: justify;
    background: inherit !important;
    border: 1px solid $medium-gray;
    border-radius: 25px;

    /* here we use the dynamically computed prop */
    margin: 1em;
    padding: 1em;
  `
;


const formWrapped = reduxForm({ form: 'streamCreate', validate: validate })(StreamCreate);
export default connect(null, { createStream })(formWrapped)