import React, { Component } from 'react'
import { render } from 'react-dom'
import './styles/main.scss'

class ListBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {author: "John", text: "This is first todo"},
        {author: "Allen", text: "This is second todo"}
      ]
    }
  }

  handleTodoSubmit(todo){
    // console.log('come from son Component')
    let data = Object.assign([], this.state.data)
    data.push(todo)
    this.setState({ data: data })
  }

  render() {
    return (
      <div className="ListBox">
        <h1>React-todoList</h1>
        <ListForm onTodoSubmit={ this.handleTodoSubmit.bind(this) }/>
        <List data={this.state.data} />
      </div>
    )
  }
}

class ListForm extends Component {
  handleSubmit(e){
    e.preventDefault()

    // console.log(this.refs)

    let author = this.refs.author.value.trim()
    let text = this.refs.text.value.trim()

    if(!author && !text){
      alert('please confirm input box non-blank')
      return
    }

    //pass value to ListBox
    this.props.onTodoSubmit({
      author: author,
      text: text
    })

    //clear input
    this.refs.author.value = ''
    this.refs.text.value = ''
  }
  render() {
    return (
      <form className="ListForm" onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <input type="text" placeholder="Name" ref="author" required/>
        </div>
        <div>
          <input type="text" placeholder="What to do..." ref="text" required/>
        </div>
        <input type="submit" value="Post" className="submit-btn"/>
      </form>
    )
  }
}

class List extends Component {
  render() {
    let todoNodes = this.props.data.map(function(item, index){
      return (
        <Todo author={ item.author } key={index}>
          {item.text}
        </Todo>
      )
    })
    return (
      <div className="todoWrap">
        { todoNodes }
      </div>
    )
  }
}

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <div className="delete" onClick={this.props.}>X</div>
        <h2>{ this.props.author }</h2>
        <p>{ this.props.children }</p>
      </div>
    )
  }
}

render(
  <ListBox />, document.getElementById('container')
)
