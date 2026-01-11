import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/mainPage/mainPage.jsx";
import Story from "./components/story/story.jsx";
import Contact from "./components/contact/contact.jsx";
import About from "./components/about/about.jsx";
import Updates from "./components/updates/updates.jsx";
import Header from "./components/header/header.jsx";
import Gallery from "./components/gallery/gallery.jsx";
class App extends Component {



    render() {
        return (
            <BrowserRouter>
                <Header path="/header" component={Header} />
                <Route exact path={["/", "/mainPage"]} component={MainPage} />
                <Route path="/story" component={Story} />
                <Route path="/about" component={About} />
                <Route path="/updates" component={Updates} />
                <Route path="/contact" component={Contact} />
                <Route path="/gallery" component={Gallery} />
            </BrowserRouter>
        );
    }
}

export default App;
