import { Component } from 'react';

export default class AddForm extends Component {

  state = {
    label: ''
  }

  onChange = (evt) => {
    this.setState({
      label: evt.target.value
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="add-form d-flex mt-3"
        onSubmit={this.onSubmit}
      >
        <input type="text" 
          className="form-control me-2"
          onChange={this.onChange}
          placeholder="Whats need to be done"
          value={this.state.label}
        />
        <button type="submit"
          className="btn btn-outline-dark"
        >
          Add ToDo
        </button>
      </form>
    )
  }
}
