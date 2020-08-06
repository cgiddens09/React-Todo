import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const data = [
  {
      name: 'Walk Dog',
      id: Date.now(),
      completed: false
  },
  {
      name: 'Take Out Trash',
      id: Date.now(),
      completed: false
  },
  {
      name: 'Mow Yard',
      id: Date.now(),
      completed: false
  }

];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
    };
  };

  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      data: this.state.data.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addItem = item => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    
    this.setState({
      data: [...this.state.data, newItem]
    });
  };

  clearList = e => {
    e.preventDefault();
    this.setState({
      data: this.state.data.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          data={this.state.data}
          toggleItem={this.toggleItem}
          clearList={this.clearList}
        />
      </div>
    );
  }
}

export default App;
