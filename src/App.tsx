import React from 'react'
import './App.css';
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css'
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import store, {reduxStoreType} from "./redux/redux_store";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import 'antd/dist/antd.css';
import {Layout, Spin,} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import Navbar from "./components/Navbar/Navbar";
import HeaderComponent from "./components/Header/Header";

const {Header, Sider, Content} = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

const styles = {
    mainLayout: {
        minHeight: '100vh',
        height: '100%'
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = () => {
        alert('Some error occured')
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render() {
        return (
            <Spin className='preloader' spinning={!this.props.initialized}>
                <Layout className='main_layout' style={styles.mainLayout}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <Navbar/>
                    </Sider>
                    <Layout className="site-layout">
                        <Header style={{padding: '0 20px'}} className="site-layout-background">
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                            <HeaderComponent/>
                        </Header>
                        <Content className='main_content'>
                            <React.Suspense fallback={<Spin/>}>
                                <Switch>
                                    <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                                    <Route path='/users' render={() => <UsersContainer/>}/>
                                    <Route path='/login' render={() => <Login/>}/>
                                    <Route path='/news' render={() => <News/>}/>
                                    <Route path='/music' render={() => <Music/>}/>
                                    <Route path='/settings' render={() => <Settings/>}/>
                                    <Route path='*' render={() => <h1>404 PAGE NOT FOUND</h1>}/>
                                </Switch>
                            </React.Suspense>
                        </Content>
                    </Layout>
                </Layout>
            </Spin>

        );
    }
}

const mapStateToProps = (state: reduxStoreType) => ({
    initialized: state.app.initialized,
    photo: state.profilePage.profile?.photos.small
})
let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

const SocialNetworkApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SocialNetworkApp