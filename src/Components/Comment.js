const Comment = ({comment, replies}) => {
  return (
    <div>
      <p>{comment.userName}</p>
      <p>{comment.text}</p>
      <p>{replies.length}</p>
    </div>
  ); 
}

export default Comment;
