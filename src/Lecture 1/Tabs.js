import React, { Component } from 'react';

class Tabs extends Component {
  state = {
    activeTabIndex: 0,
  };

  setActiveTabIndex = (idx) => {
    this.setState({ activeTabIndex: idx });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);
    // console.log(this.props); 
    const { activeTabIndex } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIndex];

    return (
      <>
        <div>
          {items.map((tab, idx) => (
            <button
              type="button"
              key={tab.label}
              onClick={() => this.setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}

export default Tabs;
