import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import s from './../common/FormsControls/FormsControls.module.css'
import {reduxStoreType} from "../../redux/redux_store";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required, ]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input} validate={[required, ]} type={'password'}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={Input}/> <span>Remember me</span>
            </div>
            {props.error && <div className={s.form_summary_error}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
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
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps =(state: reduxStoreType) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginUser})(Login);