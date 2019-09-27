import React from 'react';
import { Field, reduxForm } from 'redux-form';

import MediumInput from '../../components/base/form/input/MediumInput';
import LargeInput from '../../components/base/form/input/LargeInput';

class StreamForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='item-container'>
                <Field name="title"       component={this.renderMediumInput} label="Título"/>
                <Field name="description" component={this.renderLargeInput} label="Descrição" type="text"/>
                <button>{this.props.buttomContent}</button>
            </form>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    renderMediumInput = (formProps) => {
        return <MediumInput label={formProps.label} meta={formProps.meta} input={formProps.input} placeholder={formProps.label} />
    }

    renderLargeInput = (formProps) => {
        return <LargeInput label={formProps.label} meta={formProps.meta} input={formProps.input} placeholder={formProps.label} />
    }
};

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) errors.title = '(Informe um título)';
    if (!formValues.description) errors.description = '(Informe uma descrição)';

    return errors
}

export default reduxForm({ form: 'streamForm', validate: validate })(StreamForm);