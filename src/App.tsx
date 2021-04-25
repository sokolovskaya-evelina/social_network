import React from 'react'
import './App.css';
import {Route, withRouter} from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css'
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import {reduxStoreType} from "./redux/redux_store";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import 'antd/dist/antd.css';
import {Layout, Spin} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import Navbar from "./components/Navbar/Navbar";

const {Header, Sider, Content} = Layout;

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Spin style={{background: '#fff', width: '100%', height: '100vh'}} spinning={!this.props.initialized}>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo"/>
                        <Navbar/>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{padding: 0}}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                            <HeaderContainer/>
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: '100vh',
                                height: '100%'
                            }}
                        >
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                        </Content>
                    </Layout>
                </Layout>
            </Spin>

        );
    }
}

const mapStateToProps = (state: reduxStoreType) => ({
    initialized: state.app.initialized
})
export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);
