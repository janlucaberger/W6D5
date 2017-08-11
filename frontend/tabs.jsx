import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);

    this.tabs = props.tabs;
    this.state = {
      selectedTab: this.tabs[0]
    };
    this.selectedTab = this.selectTab.bind(this);
  }

  selectTab(idx) {
    return () => {
      this.setState({selectedTab: this.tabs[idx]})
    };
  }

  render(){
    const titles = this.tabs.map((tab, idx) => {
      return <h1 onClick={this.selectTab(idx)} className='tab-title'>{tab.title}</h1>;
    });
    return(
      <div className="tabs-container">
        <ul className="tab-titles">
          {titles}
        </ul>
        <article>{this.state.selectedTab.content}</article>
      </div>
    );
  }
}

export default Tabs;
