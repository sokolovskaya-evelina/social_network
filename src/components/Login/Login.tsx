import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {CheckboxControl, createField, InputControl} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import s from './../common/FormsControls/FormsControls.module.css'
import {reduxStoreType} from "../../redux/redux_store";
import {Alert, Button} from "antd";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}


const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit, captchaUrl, error}) => {
        return (
            <form onSubmit={handleSubmit}>
                {createField('Email', 'email', [required,], InputControl)}
                {createField('Password', 'password', [required,], InputControl, {type: 'password'})}
                {createField(undefined, 'rememberMe', [], CheckboxControl, {type: 'checkbox'})}
                {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
                {captchaUrl && createField('Symbols from image', 'captcha', [], InputControl)}
                {error && <Alert message={error} type="error" showIcon closable/>}
                <Button style={{marginTop: '15px'}} htmlType="submit" type={'primary'}>Login</Button>
            </form>
        );
    };
type LoginFormOwnProps = {
    captchaUrl: string | null
}
const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({form: 'login'})(LoginForm)


const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.form__container}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

const mapStateToProps = (state: reduxStoreType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {loginUser})(Login);