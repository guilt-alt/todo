import { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {
    const { label, onDeleted, done, important, onToggleDone, onToggleImportant } = this.props;

    const classNames = done ? ' done' : important ? ' important' : '';

    return (
      <span className={`todo-list-item d-flex justify-content-between ${classNames}`}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>

        <span>
          <button type="button"
            onClick={onDeleted}
            className="btn btn-outline-danger btn-sm">
            <i className="far fa-trash-alt" />
          </button>

          <button type="button"
            onClick={onToggleImportant}
            className="btn btn-outline-success btn-sm">
            <i className="fas fa-exclamation" />
          </button>
        </span>
      </span>
    );
  };
}
