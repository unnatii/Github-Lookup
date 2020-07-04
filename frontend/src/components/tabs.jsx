import React from "react";
import { Tabs } from "@feuer/react-tabs";
import Timeline from './timeline';
import Profile from './userprofile'

const tab = (props) => {
    return (  
        <div className="App">
          <Tabs
            tabsProps={{
              style: {
                textAlign: "left"
              }
            }}
            activeTab={{
              id: "tab1"
            }}
          >
            <Tabs.Tab id="tab1" title="Profile">
              <div style={{ padding: 10 }}><Profile prop={props.info}/></div>
            </Tabs.Tab>
            <Tabs.Tab id="tab2"  title="Repositories">
             
              <div style={{ padding: 10, backgroundColor:"#F0F0F0"}}><Timeline data={props.repo}/></div>
            </Tabs.Tab>
          </Tabs>
        </div>
      );
}
 
export default tab;

