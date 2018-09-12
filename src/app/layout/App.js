import React, { Component } from 'react';
import {
    Header,
    Container,
} from "semantic-ui-react";

import TabBarContainer from "features/tabs/TabBar";
import UnitInfo from "features/unitInfo/UnitInfo";
import Pilots from "features/pilots/Pilots";
import Mechs from "features/mechs/Mechs";
import UnitOrganization from "features/unitOrganization/UnitOrganization";

import './App.css';

class App extends Component {
    render() {
        const tabs = [
          {name : "unitInfo", label : "Unit Info", component : UnitInfo,},
          {name : "pilots", label : "Pilots", component : Pilots,},
          {name : "mechs", label : "Mechs", component : Mechs,},
          {name : "unitOrganization", label : "Unit Organization", component : UnitOrganization}
        ];

        return (
          <div className="App">
            <div className="App-header">
                <Header inverted as="h1">Folk Music of the British Isles</Header>
            </div>
            <Container>
                <TabBarContainer tabs={tabs} size="massive" />
            </Container>
        </div>
        );
    }
}

export default App;