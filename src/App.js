import React, { Component } from 'react';
import {
    Header,
    Container,
} from "semantic-ui-react";

import TabBarContainer from "./features/tabs/TabBarContainer";


import './App.css';

const About = () => <div>About content</div>;

const Portfolio = () => <div>Portfolio content</div>;

const Contact = () => <div>Contact content</div>;


class App extends Component {
    render() {
        const tabs = [
            {name: "about", label: "About", component: About },
            {name: "portfolio", label: "Portfolio", component: Portfolio},
            {name: "contact", label: "Contact", component: Contact},
        ];

        return (
            <div className="App">
                <div className="App-header">
                    <Header inverted as="h1">Joe Denny</Header>
                    <h2 class='ui header'>Web Developer</h2>
                </div>
                <Container>
                    <TabBarContainer tabs={tabs} size="massive" />
                </Container>
            </div>
        );
    }
}

export default App;