import {Component} from 'react'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentList: [],
  }

  deleteComment = commentId => {
    const {commentList} = this.state

    this.setState({
      commentList: commentList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentList} = this.state

    return commentList.map(eachComment => (
    <CommentItem 
    key = {eachComment.id}
    commentDetails = {eachComment}
    toggleIsLiked = {this.toggleIsLiked}
    deleteComment = {this.deleteComment}
    />
  ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commmentInput} = this.state
    const initialContainerBackgroundClassNames = `intial-container ${
    initialContainerBackgroundClassNames[
      Math.ceil(
        Math.random() * initialContainerBackgroundClassNames.length -1,
      )
    ]
  }`
  const newComment = {
    id : v4(),
    name : nameInput,
    comment : commmentInput,
    date : new Date(),
    isLiked : false,
    intialClassName: initialContainerBackgroundClassNames,
  }

  this.setState(prevState =>({
    commmentList : [...prevState.commentList, newComment],
    nameInput : "",
    commmentInput : "",
  }))
  
  }

  onChangeNameInput = event =>{
    this.setState({
      nameInput: event.target.value,
    })
  }

  onChangeCommentInput = event => {
    this.setState({
      commmentInput: event.target.value,
    })
  }

  render() {
    const {nameInput, commentInput, commentList} = this.state

    return (
    <div className = "app-container">
    <div className="comments-container">
    <h1 className="commenst-heading">Comments</h1>
    <div className="comments-inputs">
    <form className="form" onSubmit={this.onAddComment}>
    <p className="form-description">
     Say somethimg about 4.0 Technologies
    </p>
    <input 
    type = "text"
    className = "name-input"
    placeholer = "Your Name"
    value = {nameInput}
    onChange={this.onChangeNameInput}
    />
    <textarea 
    className="comment-input">
    placeholder="Your Comment"
    value={commentInput}
    onChange={this.onChangeCommentInput}
    rows="6"
    /></textarea>
    <button className="add-button" type="submit">
    Add Comment
    </button>
    </form>
    <img 
    className="image"
    src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
    alt = "comments"
    />
    <hr className="line"/>
    <p className="heading">
    <span className="comments-counts"> {commentList.length}</span>
    Comments
    </p>
    <ul className="comments-List">{this.renderCommentsList}</ul>
    </div>
    </div>
    </div>
    )
  }
}

export default Comments