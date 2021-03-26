import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import Textarea from "../../common/FormsControls/FormsControls";
import {postDataType} from "../../../types/types";

type MyPostType = {
    addPost: (newPostText: string) => void
    posts: Array<postDataType>
    newPostText: string
}

//TODO сделать отступы между постами нормально
const MyPosts: FC<MyPostType> = (props) => {
    let postElements = props.posts.map(post => <Post massage={post.post} likeCount={post.likeCount}/>)

    let addNewPostText = (value: MyPostsFormDataType) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={s.createPost}>
            <div className={s.createPostHeader}>
                <h4 className={s.createPostTitle}>
                    Create Post
                </h4>
            </div>

            <MyPostReduxForm onSubmit={addNewPostText}/>

            <div>
                {postElements}
            </div>
        </div>
    )
}

type MyPostsFormDataType = {
    newPostText: string
}

const maxLength10=maxLengthCreator(10)

const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.createPostBody}>
            <div className={s.createPostInput}>
                <Field
                    className={s.createPostTextarea}
                    component={Textarea}
                    name={'newPostText'}
                    placeholder={'Enter your message'}
                    validate={[required, maxLength10]}
                />
            </div>
            <div className={s.createPostFooter}>
                <button className={s.tag}>
                    <i className={"fas fa-location-arrow" + ' ' + s.tagIcon}/>
                    Add post
                </button>
            </div>
        </form>
    );
};

const MyPostReduxForm = reduxForm<MyPostsFormDataType>({form: 'post'})(MyPostsForm)

export default MyPosts;