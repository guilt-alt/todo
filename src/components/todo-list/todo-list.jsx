import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todos.map(({ id, ...item }) => {
    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          { ...item }
          onDeleted={ () => onDeleted(id) }
          onToggleDone={ () => onToggleDone(id) }
          onToggleImportant={ () => onToggleImportant(id) }
        />
      </li>
      );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
}
  

export default TodoList;
