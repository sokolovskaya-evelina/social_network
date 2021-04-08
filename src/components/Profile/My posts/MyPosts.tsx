import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import Textarea from "../../common/FormsControls/FormsControls";
import {postDataType} from "../../../types/types";
import {Content} from "antd/es/layout/layout";
import Dop from "../../../Dop";
import {Comment, Avatar, Form, Button, List, Input, Card} from 'antd';


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
        <Content style={{width: '100%'}}>
            <Card title="Create Post">
                <MyPostReduxForm onSubmit={addNewPostText}/>
            </Card>
            <Content>
                {postElements}
                <Dop/>
            </Content>
        </Content>
    )
}

type MyPostsFormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormDataType>> = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit} >
                <Form.Item>
                    <Field
                        component={Textarea}
                        name={'newPostText'}
                        placeholder={'Enter your message'}
                        validate={[required, maxLength10]}
                    />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit"  type="primary">
                        Add post
                    </Button>
                </Form.Item>
            </form>
        </>
    );
};

const MyPostReduxForm = reduxForm<MyPostsFormDataType>({form: 'post'})(MyPostsForm)

export default MyPosts;