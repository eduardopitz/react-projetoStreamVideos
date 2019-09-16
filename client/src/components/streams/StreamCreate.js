import React from 'react';
import { Field, reduxForm } from 'redux-form';

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

    onSubmit(formProps) {
        
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

export default reduxForm({ 
    form: 'streamCreate',
    validate: validate
})(StreamCreate);