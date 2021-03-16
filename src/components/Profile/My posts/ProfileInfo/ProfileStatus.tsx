import React, {ChangeEvent} from 'react';
import s from "./ProfileInfo.module.css";
import avatar from "../../../../assets/avatar.png";

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status || 'Введите статус')
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                <img className={s.profileImage}
                     src={this.props.profile.photos.large ? this.props.profile.photos.large : avatar}/>
                <div className={s.description}>
                    <div>
                        {!this.state.editMode && <span onDoubleClick={this.activateEditMode}
                                                       className={s.descriptionTextName}><b>{this.props.status}</b></span>}
                        {this.state.editMode &&
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text"
                               value={this.state.status}/>}
                    </div>

                    {/*<div>
                        {!this.state.editMode && <span onDoubleClick={this.activateEditMode.bind(this)}
                                                       className={s.descriptionTextName}><b>{this.props.profile.fullName}</b></span>}
                        {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text"
                               value={this.props.profile.fullName}/>}
                    </div>
                    <div>
                        {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode.bind(this)} className={s.descriptionText}><b>About me:</b> <i>{this.props.profile.aboutMe}</i></span>}
                        {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text"
                               value={this.props.profile.aboutMe}/>}
                    </div>
                    <div>
                        {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode.bind(this)} className={s.descriptionText}><b>Looking for a job:</b>{this.props.profile.lookingForAJob ? 'yes' : 'no'}</span>}
                        {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text"
                               value={this.props.profile.lookingForAJob}/>}
                    </div>
                    <div>
                        {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode.bind(this)} className={s.descriptionText}><b>Looking for a job description:</b>{this.props.profile.lookingForAJobDescription}</span>}
                        {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text"
                               value={this.props.profile.lookingForAJobDescription}/>}
                    </div>
                    <span className={s.descriptionText}><b>Contacts:</b></span>
                    <div>
                        {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode.bind(this)} className={s.descriptionTextContacts}><b><i
                            className="fab fa-facebook-f">:</i></b>{this.props.profile.contacts.facebook ? this.props.profile.contacts.facebook : 'not specified'}</span>}
                        {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text"
                               value={this.props.profile.facebook}/>}
                    </div>
                    <div>
                        {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode.bind(this)} className={s.descriptionTextContacts}><b><i
                            className="fab fa-linkedin">:</i></b>{this.props.profile.contacts.website ? this.props.profile.contacts.website : 'not specified'}</span>}
                        {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text"
                               value={this.props.profile.website}/>}
                    </div>
                    <div>
                        {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode.bind(this)} className={s.descriptionTextContacts}><b><i
                            className="fab fa-vk">:</i></b>{this.props.profile.contacts.vk ? this.props.profile.contacts.vk : 'not specified'}</span>}
                        {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text"
                               value={this.props.profile.vk}/>}
                    </div>
                    <div>
                        {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode.bind(this)} className={s.descriptionTextContacts}><b><i
                            className="fab fa-twitter">:</i></b>{this.props.profile.contacts.instagram ? this.props.profile.contacts.instagram : 'not specified'}</span>}
                        {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text"
                               value={this.props.profile.instagram}/>}
                    </div>
                    <div>
                        {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode.bind(this)} className={s.descriptionTextContacts}><b><i
                            className="fab fa-youtube">:</i></b>{this.props.profile.contacts.youtube ? this.props.profile.contacts.youtube : 'not specified'}</span>}
                        {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text"
                               value={this.props.profile.youtube}/>}
                    </div>
                    <div>
                        {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode.bind(this)} className={s.descriptionTextContacts}><b><i
                            className="fab fa-github">:</i></b>{this.props.profile.contacts.github ? this.props.profile.contacts.github : 'not specified'}</span>}
                        {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text"
                               value={this.props.profile.github}/>}
                    </div>
                    <div>
                        {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode.bind(this)} className={s.descriptionTextContacts}><b><i
                            className="fas fa-link">:</i></b>{this.props.profile.contacts.mainLink ? this.props.profile.contacts.mainLink : 'not specified'}</span>}
                        {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text"
                               value={this.props.profile.mainLink}/>}
                    </div>*/}
                </div>
            </div>
        );
    }
};

export default ProfileStatus;