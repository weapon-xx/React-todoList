import React, { Component } from 'react'
import { render } from 'react-dom'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list : [
        {
          value : 'john'
        },
        {
          value : 'allen'
        },
        {
          value : 'kim'
        },
        {
          value : 'morning'
        }]
    }
  }

  render() {
    return (
      <div>
      {
        this.state.list.forEach(function (item) {
          return <div>Hello, {item.value}!</div>
        })
      }
      </div>
    )
  }
}


class CommentBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="commentBox">
         Hello, world! I am a CommentBox.
      </div>
    )
  }
}

render(
  <CommentBox />, document.getElementById('container')
)
