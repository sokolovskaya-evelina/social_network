import React from "react";
import s from "./ProfileInfo.module.css";
import Textarea, {CheckboxControl, createField, InputControl} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../types/types";
import {Alert, Button} from "antd";


type ProfileDataFormType = {
    initialValues: ProfileType,
    profile: ProfileType
}
const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataFormType> & ProfileDataFormType>
    = ({handleSubmit, profile, error}) => {

    return (
        <form className={s.form__description} onSubmit={handleSubmit}>
                    <span className={s.descriptionTextDataForm}>
                        <b className={s.descriptionTextName}>Full name: </b>
                        {createField('Full name', 'fullName', [], InputControl)}
                    </span>
            <span className={s.descriptionTextDataForm}>
                <b className={s.descriptionTextName}>Looking for a job: </b>
                {createField('', 'lookingForAJob', [], CheckboxControl, {type: 'checkbox'})}
            </span>
            <span className={s.descriptionTextDataForm}>
                        <b className={s.descriptionTextName}>My professional skills:
                            {createField('', 'lookingForAJobDescription', [], Textarea)}
                        </b>

                    </span>
            <span className={s.descriptionTextDataForm}>
                        <b className={s.descriptionTextName}>Contacts:</b>
                <span className={s.contactsBlock}>
                    {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={s.descriptionTextDataForm}>
                            <b className={s.descriptionTextName}>{key}:</b>
                            {createField(key, 'contacts.' + key, [], InputControl)}
                        </div>
                    })}
                </span>
            </span>
            {error && <Alert message={error} type="error" showIcon closable/>}
            <Button className={s.edit_btn} htmlType={'submit'} type={'primary'}>Save</Button>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm