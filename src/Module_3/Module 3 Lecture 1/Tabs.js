import React, { PureComponent } from 'react';
// PureComponent was designed to ease handling with doubleclicking markup elements
// it replaced the neccessaty of using shouldComponentUpdate()

class Tabs extends PureComponent {
  state = {
    activeTabIndex: 0,
  };

  // this react method make it possible to not to re-render by doubleclicking on the same button
  // shouldComponentUpdate(nextProp, nextState) {
  //   return nextState.activeTabIndex !== this.state.activeTabIndex;
    //re-rendering appears only if next state of the prop does not equel to the current state
  // }

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
