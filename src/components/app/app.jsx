import { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddForm from '../add-form';

import './app.css'

const LABELS = [
  'Drink Coffee',
  'Make React App',
  'Have a Lunch',
  'Make Love',
  'Have Fun',
  'Take a Cake',
  'Drink Vodka',
  'Eat Selyodka',
  'Fuck Pilotka'
];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomInt = (min, max) =>
  Boolean(Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min));

export default class App extends Component {

  state = {
    todoData: new Array(3)
      .fill()
      .map((_, idx) => this.createTodoItem(idx)),
    term: '',
    filter: 'all'
  };

  createTodoItem(id) {
    return {
      label: getRandomItem(LABELS),
      important: getRandomInt(0, 1),
      done: getRandomInt(0, 1),
      id
    }
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArr
      };
    });
  };

  addItem = (label) => {
    this.setState(({ todoData }) => {
      const id = !todoData.length ? 0 : todoData[todoData.length - 1].id + 1;

      const newArr = [
        ...todoData,
        { ...this.createTodoItem(id), label, important: false, done: false },
      ];

      return {
        todoData: newArr
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];

    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onSearch = (term) => {
    this.setState({ term })
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter(({ label }) => label.toLowerCase().indexOf(term.toLowerCase()) > -1)
  };

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  filtered(items, filter) {
    switch (filter) {
      case 'active':
        return items.filter(({ done }) => done === false)
      case 'done':
        return items.filter(({ done }) => done === true)
      default:
        return items
    }
  }

  render() {
    const { todoData, term, filter } = this.state;

    const filteredItems = this.filtered(this.search(todoData, term), filter);
    
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel
            onSearch={this.onSearch}
          />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <TodoList
          todos={filteredItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />

        <AddForm
          todos={todoData}
          onAdded={this.addItem}
        />
      </div>
    );
  }
};
