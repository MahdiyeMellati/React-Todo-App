var React = require('react');
var uuid=require('node-uuid');
var moment= require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import Search from 'Search';
var TodoAPI= require('TodoAPI');

var Main=React.createClass({
  getInitialState: function()
  {
    return{
      showCompleted:false,
      searchText:'',
      todos:TodoAPI.getTodos()

    };
  },
  componentDidUpdate: function()
  {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function(text)
  {
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },

  handleSearch: function(showCompleted,searchText)
  {
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });
  },
  render: function()
  {
    var{todos,showCompleted,searchText}=this.state;
    var filteredTodos=TodoAPI.filterTodos(todos,showCompleted,searchText);

    return(
      // <div>
      //   <div  className="page-title">
      //       Todo App
      //   </div>
      //   <div>
      //       <Search onSearch={this.handleSearch}/>
      //   </div>
      //
      //   <div>
      //     <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
      //
      //   </div>
      //   <div>
      //       <AddTodo onAddTodo={this.handleAddTodo}/>
      //   </div>
      // </div>
      <div>
        <h1 className="page-title">Todo App</h1>


        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <Search onSearch={this.handleSearch}/>
              <TodoList/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>

    )
  }

});
module.exports=Main;
