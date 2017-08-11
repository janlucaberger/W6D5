import React from 'react';
import Clock from './frontend/clock';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';
import Tabs from './frontend/tabs'

const NAMES = ["Abba", "Barney", "Barbara", "Jeff", "Jenny", "Sarah", "Sally", "Xander"];
const TABS = [{title: "One", content: "I am the first"},{title: "Two", content: "Second pane here"}, {title: "Three", content: "Third pane here"}]

class Root extends React.Component{
  render(){
    return(
      <div>
        <Clock />
        {/*<Weather />*/}
        <Autocomplete names={NAMES} />
        <Tabs tabs={TABS} />
      </div>
    );
  }
}

export default Root;
