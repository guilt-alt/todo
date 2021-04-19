import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span className="todo-list-item d-flex justify-content-between">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <span>
        <button type="button"
          className="btn btn-outline-danger btn-sm">
          <i className="far fa-trash-alt" />
        </button>

        <button type="button"
          className="btn btn-outline-success btn-sm">
          <i className="fas fa-exclamation" />
        </button>
      </span>
    </span>
  );
};

export default TodoListItem;
