import React from 'react';
import s from './FormsControls.module.css'
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import { Comment, Form, Button, List, Input } from 'antd';

const { TextArea } = Input;

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children})=>{
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
    return <FormControl {...props}><TextArea rows={3} {...input} {...restProps} /></FormControl>
};

export const InputControl: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><Input {...input} {...restProps}/></FormControl>
};



export default Textarea;