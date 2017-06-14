import React, { Component } from 'react'

class Comments extends Component {
  constructor(props) {
    super()
    this.state = {
      comment: ''
    }
    this.updateComment = this.updateComment.bind(this)
  }

  updateComment(ev) {
    this.setState({
      comment: ev.target.value
    })
  }

  render() {
    return (
      <div className="comments">
        <textarea value={this.state.comment} onChange={this.updateComment} placeholder='Place Comment Here'>
        </textarea>
        <button className="button">Submit Comment</button>
      </div>
    )
  }
}
export default Comments
