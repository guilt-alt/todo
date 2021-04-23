import { Component } from 'react';
import "./search-panel.css";

export default class SearchPanel extends Component {

  state = {
    term: ''
  }

  onChange = (evt) => {
    const term = evt.target.value
    this.setState({ term });

    this.props.onSearch(term)
  }

  render() {
    return (
      <input
        className="form-control search-panel"
        placeholder="Search"
        onChange={this.onChange}
        value={this.state.term}
      />
    )
  }
}
