import React from "react";
import logo from './logo.svg';
import App2 from './Login';
import App3 from './ToDoList';
import App4 from './Movies';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import { Header, Menu } from './Header2'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    text: "Login",
                    link: "/login"
                },
                {
                    text: "Movies",
                    link: "/movies"
                },
                {
                    text: "To do list",
                    link: "/todolist"
                }
            ],
            loggedOut: false
        }
    }

    toggleActive = (text) => {

        this.state.items.forEach((item) => item.active = false);
        let item = this.state.items.find(x => x.text == text);
        item.active = !item.active
        this.setState({ items: this.state.items });
        //this.forceUpdate();
    }

    setloggedOut = (value) => {
        this.setState({ loggedOut: value })
    }


    logout = () => {
        localStorage.removeItem("whpf_user");
        this.setloggedOut(true);

    }

    if(loggedOut) {

    }


    render() {
        return <Router>
            <Header title="My website" logo={logo} menu={this.state.items} toggleActive={this.toggleActive} />
            <Switch>
                <Route path="/login" >
                    <App2 />
                </Route>
                <Route path="/movies" >
                    <App4 />
                </Route>

                <Route path="/todolist">
                    <App3 />
                </Route>
            </Switch>
        </Router>
    }
}

export default App;