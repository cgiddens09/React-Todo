import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const data = [
  {
      name: 'Walk Dog',
      id: 1,
      completed: false
  },
  {
      name: 'Take Out Trash',
      id: 2,
      completed: false
  },
  {
      name: 'Mow Yard',
      id: 3,
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
        if (itemId == item.id) {
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
      name: item,
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
      data:[]
    });
  };
  // this.state.data.filter(item => !item.completed)
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
