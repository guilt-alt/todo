import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const TodoList = ({ todos }) => {
  const elements = todos.map(({ id, ...item }) => {
    return (
      <li key={id} className="list-group-item">
        <TodoListItem { ...item } />
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
