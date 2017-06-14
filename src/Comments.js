import React, { Component } from 'react'

class Comments extends Component {
  constructor(props) {
    super()
    this.state = {
      comment: '',
      comments: []
    }
    this.updateComment = this.updateComment.bind(this)
    this.addComment = this.addComment.bind(this)
  }

  updateComment(ev) {
    this.setState({
      comment: ev.target.value
    })
  }

  addComment(ev) {
    const state = {...this.state}
    const comment= {
      time: new Date(),
      text: this.state.comment
    }
    state.comments.push(comment)
    state.comment = ''
    this.setState(state)
  }

  render() {
    return (
      <div className="comments">
        <textarea value={this.state.comment} onChange={this.updateComment} placeholder='Place Comment Here'>
        </textarea>
        <button className="button">Submit Comment</button>
        {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
      </div>
    )
  }
}
function Comment (props) {
  return (
    <div className="comment">
      <div>
        {props.comment.text}
      </div>
    </div>
  )
}
export default Comments
