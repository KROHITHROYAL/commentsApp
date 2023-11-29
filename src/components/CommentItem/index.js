// Write your code here
import {formationDistanceNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {CommentDetails} = props
  const {id, name, comment, isLiked, intialClassName, date} = CommentDetails
  const intial = name ? name[0].toUpperCase() : ''
  const postedTime = formatDistanceToNow(date)
  const likeImageUrl = isLiked(
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
)
  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-contianer">
        <div className={intialClassName}>
          <p className="initial">{intial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{nmae}</p>
            <p className="time">{postTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
        <div className="buttons-container">
          <div className="like-container">
            <img src={likeImageUrl} alt="like" className="like-image" />
            <button
              className={likeTextClassName}
              type="button"
              onClick={onClickLike}
            >
              Like
            </button>
          </div>
          <button
            className="button"
            type="button"
            onClick={onDeleteComment}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delte-image"
            />
          </button>
        </div>
        <hr className="comment-line" />
      </div>
    </li>
  )
}

export default CommentItem
