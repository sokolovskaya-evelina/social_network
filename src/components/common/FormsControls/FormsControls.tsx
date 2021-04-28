import React, {FC} from 'react';
import s from './FormsControls.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {Checkbox, Input} from 'antd';
import {FieldValidatorType} from "../../../utils/validators/validators";

const {TextArea} = Input;

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error

    return (
        <div className={hasError ? s.error : s.form}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><TextArea
        style={{minWidth: '420px', width: '100%'}} {...input} {...restProps} /></FormControl>
};

export const InputControl: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <Input {...input} {...restProps}/>
    </FormControl>
};
export const CheckboxControl: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <span>
        <FormControl {...props}>
        <Checkbox  {...input} {...restProps}/>
    </FormControl>
            </span>
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