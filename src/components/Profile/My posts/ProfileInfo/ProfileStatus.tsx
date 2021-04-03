import React, {ChangeEvent} from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileInfoPropsType} from "./ProfileInfo";
import {Input} from "antd";

class ProfileStatus extends React.Component<ProfileInfoPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
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
        this.props.updateStatus(this.state.status)
    }



    componentDidUpdate(prevProps: Readonly<ProfileInfoPropsType>, prevState: Readonly<any>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                <div className={s.description}>
                    <div>
                        {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode} className={s.status}>
                            {this.props.status
                                ? this.props.status
                                : 'Изменить статус'}
                        </span>}
                        {this.state.editMode &&
                        <Input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               type="text"
                               value={this.state.status}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileStatus;