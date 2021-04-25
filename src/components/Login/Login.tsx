import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CheckboxControl, createField, InputControl} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import s from './../common/FormsControls/FormsControls.module.css'
import {reduxStoreType} from "../../redux/redux_store";
import {Button} from "antd";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required,], InputControl)}
            {createField('Password', 'password', [required,], InputControl, {type:'password'})}
            {createField(undefined, 'rememberMe', [], CheckboxControl, {type:'checkbox'})}
            {error && <div className={s.form_summary_error}>{error}</div>}
            <Button style={{marginTop: '15px'}} htmlType="submit" type={'primary'}>Login</Button>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.form__container}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: reduxStoreType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginUser})(Login);