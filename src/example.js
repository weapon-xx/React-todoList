import React, { Component } from 'react'
import { render } from 'react-dom'

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
  handleCommentSubmit(todo) {
    let data = Object.assign([], this.state.data)
    data.push(todo)
    this.setState({ data: data })
  }
  render() {
    return(
      <div>
        <h1>React-todoList</h1>
        <ListForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
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
    this.props.onCommentSubmit({
      author: author,
      text: text
    })

    //clear input
    this.refs.author.value = ''
    this.refs.text.value = ''
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
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
      return(
        <div key={index}>
          <h2>{ item.author }</h2>
          <p>{ item.text }</p>
        </div>
      )
    })
    return(
      <div>
        {todoNodes}
      </div>
    )
  }
}

render(
  <ListBox />,document.getElementById('container')
)
