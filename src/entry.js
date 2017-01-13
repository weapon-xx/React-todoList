import React, { Component } from 'react'
import { render } from 'react-dom'
import './styles/main.scss'
// const converter = new Showdown.converter()

class CommentBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [
        {author: "John", text: "This is first todo"},
        {author: "Allen", text: "This is second todo"}
      ]
    }
  }

  handleCommentSubmit(comment){
    // console.log('come from son Component')
    var data = Object.assign([], this.state.data)
    data.push(comment)
    this.setState({ data: data })
  }

  render() {
    return(
      <div className="commentBox">
        <h1>React-todoList</h1>
        <CommentForm data={this.state.data } onCommentSubmit={ this.handleCommentSubmit.bind(this) }/>
        <CommentList data={this.state.data} />
      </div>
    )
  }
}

class CommentForm extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e){
    e.preventDefault()

    // console.log(this.refs)

    let author = this.refs.author.value.trim()
    let text = this.refs.text.value.trim()

    if(!author && !text){
      alert('please confirm input box non-blank')
      return
    }

    //pass input value to father component
    this.props.onCommentSubmit({
      author: author,
      text: text
    })

    //clear input
    this.refs.author.value = ''
    this.refs.text.value = ''
  }
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
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

class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count : 0
    }
  }
  render() {
    let commentNodes = this.props.data.map(function(comment, index){
      return (
        <Comment author={ comment.author } key={index}>
          {comment.text}
        </Comment>
      )
    })
    return (
      <div className="commentList">
        { commentNodes }
      </div>
    )
  }
}

class Comment extends Component {
  render() {
    // let rawMarkup = converter.makeHtml(this.props.children.toString())
    // <div dangerouslySetInnerHTML={{ __html: rawMarkup }} />
    return (
      <div className="comment">
        <h2>{ this.props.author }</h2>
        <p>{ this.props.children }</p>
      </div>
    )
  }
}

render(
  <CommentBox />, document.getElementById('container')
)
