import React, { Component } from 'react';
import {
    Header,
    Container,
} from "semantic-ui-react";

import TabBarContainer from "features/tabs/TabBar";
import AboutInfo from "features/about/AboutInfo";
import Portfolio from "features/portfolio/PortfolioList";
import ContactDetails from "features/contact/ContactDetails";


import './App.css';

class App extends Component {
    render() {
        const tabs = [
            {name: "about", label: "About", component: AboutInfo },
            {name: "portfolio", label: "Portfolio", component: Portfolio},
            {name: "contact", label: "Contact", component: ContactDetails},
        ];

        return (
            <div className="App">
                <div className="App-header">
                    <Header as="h1">Joe Denny</Header>
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