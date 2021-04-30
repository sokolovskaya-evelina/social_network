import React, {FC} from 'react';
import s from './FormsControls.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {Alert, Checkbox, Input} from 'antd';
import {FieldValidatorType} from "../../../utils/validators/validators";

const {TextArea} = Input;

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const styles = {
    error: {
        marginTop: '10px',
    }
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div>
            <div>{children}</div>
            {hasError && <Alert style={styles.error} message={error} type="error" showIcon />}
        </div>
    )
}

const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <TextArea style={{minWidth: '420px', width: '100%'}}
                      {...input} {...restProps} />
        </FormControl>)
};

export const InputControl: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <Input {...input} {...restProps}/>
        </FormControl>
    )
};
export const CheckboxControl: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <>
            <FormControl {...props}>
                <Checkbox  {...input} {...restProps}/>
            </FormControl>
        </>
    )
};

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         validators: Array<FieldValidatorType>,
                                                         component: FC<WrappedFieldProps>,
                                                         props = {}) {
    return <span className={s.form__item}> <Field name={name} component={component} placeholder={placeholder}
                                                  validate={validators} {...props}/> </span>
}


export default Textarea;