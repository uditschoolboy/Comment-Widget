import CommentForm from "./Commentform";
import { useState } from "react";

const Comment = ({comment, replies, comments, addComment, deleteComment}) => {
  const [showReplyBox, setshowReplyBox] = useState(false);
  const getReplies = (currComment) => {
    return comments.filter(comment => comment.parentId === currComment.id);
  }

  const replyClicked = () => {
    setshowReplyBox(!showReplyBox);
  }
  const deleteClicked = () => {
    deleteComment(comment.id);
  }
  
  return (
    <div>
      <p>{comment.userName}</p>
      <p>{comment.text}</p>
      <button className="small-buttons" onClick={replyClicked}>Reply</button>
      <button className="small-buttons">Edit</button>
      <button className="small-buttons" onClick={deleteClicked}>Delete</button>
      {showReplyBox && <CommentForm parentId={comment.id} addComment={addComment} toggleReply={replyClicked}/>}
      <div className="replies">
        {replies.map(reply => {
          return <Comment
                comment={reply}
                replies={getReplies(reply)}
                comments={comments}
                addComment={addComment}
                deleteComment={deleteComment}
                />
        })}
      </div>
    </div>
  ); 
}

export default Comment;
