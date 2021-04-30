import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {CheckboxControl, createField, InputControl} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import s from './Login.module.css'
import {reduxStoreType} from "../../redux/redux_store";
import {Button, message} from "antd";
import {Content} from "antd/es/layout/layout";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit, captchaUrl, error}) => {
        const onError = () => {
            if (error) {
                return message.error(error)
            }
        }
        return (
            <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.form__input}>
                    {createField('Email', 'email', [required,], InputControl)}
                </div>
                <div className={s.form__input}>
                    {createField('Password', 'password', [required,], InputControl, {type: 'password'})}
                </div>
                <div className={s.form__checkbox}>
                    {createField(undefined, 'rememberMe', [], CheckboxControl, {type: 'checkbox'})}
                    <span className={s.form__checkbox__text}>Remember me</span>
                </div>
                {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
                <div className={s.form__input}>
                    {captchaUrl && createField('Symbols from image', 'captcha', [], InputControl)}
                </div>

                <Button onClick={onError} className={s.form__button} htmlType="submit" type={'primary'}>Login</Button>
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
        <Content className={s.form__container}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </Content>
    );
};

const mapStateToProps = (state: reduxStoreType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {loginUser})(Login);