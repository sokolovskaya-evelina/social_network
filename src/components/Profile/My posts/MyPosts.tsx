import React, {FC} from 'react';
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import Textarea from "../../common/FormsControls/FormsControls";
import {postDataType} from "../../../types/types";
import {Content} from "antd/es/layout/layout";
import {Button, Card, Form} from 'antd';

type MyPostType = {
    addPost: (newPostText: string) => void
    deletePost: (id: string) => void
    posts: Array<postDataType>
    newPostText: string
}

const MyPosts: FC<MyPostType> = React.memo((props) => {
    let postElements = props.posts.map((post, index) =>
        <Post key={`${index}_${post.id}`}
              massage={post.post}
              likeCount={post.likeCount}
              deletePost={props.deletePost}
              id={post.id}
        />)
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
            </Content>
        </Content>
    )
})

type MyPostsFormDataType = {
    newPostText: string
}

const maxLength50 = maxLengthCreator(50)

const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormDataType>> = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <Form.Item>
                    <Field
                        component={Textarea}
                        name={'newPostText'}
                        placeholder={'Enter your message'}
                        validate={[required, maxLength50]}
                    />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        Add post
                    </Button>
                </Form.Item>
            </form>
        </>
    );
};

const MyPostReduxForm = reduxForm<MyPostsFormDataType>({form: 'post'})(MyPostsForm)

export default MyPosts;