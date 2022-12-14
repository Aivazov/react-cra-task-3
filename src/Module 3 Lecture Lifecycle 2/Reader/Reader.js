import { Component } from "react";
import PropTypes from 'prop-types'; 

import { Progress } from "./Progress";
// import readingContent from "./reader.json";

export default class Reader extends Component {
  state = {
    publicationIndex: 0
  } 

  // onPrev = () => {
  //   this.setState(state => ({publicationIndex: state.publicationIndex - 1}))
  // }

  // onNext = () => {
  //   this.setState(state => ({publicationIndex: state.publicationIndex + 1}))
    
  // }

  //remove double functioning using versitale func

  changeIndex = (value) => {
    this.setState(state => ({publicationIndex: state.publicationIndex + value}))

  }

  render() {
    const {publicationIndex} = this.state;
    const {items} = this.props;
    const currentItem = this.props.items[this.state.publicationIndex];

    // console.log(this.props.items[this.state.publicationIndex])

    return (
      <div>
        <section>
          <button type="button" disabled={publicationIndex === 0} onClick={() => this.changeIndex(-1)}>Previous</button>
          <button type="button" disabled={publicationIndex + 1 >= items.length} onClick={() => this.changeIndex(1)}>Next</button> 
        </section>

        <Progress currentIdx={publicationIndex + 1} itemsLength={items.length}/>
        {/* <p>{publicationIndex + 1}/{items.length}</p> */}

        <article>
          <h2>{currentItem.title}</h2>

          <p>{currentItem.text}</p>
        </article>
      </div>
    )
  }
}

Reader.propTypes = {
  changeIndex: PropTypes.func,
};