import { useState } from "react";

const CommentForm = ({parentId, addComment, toggleReply}) => {
  const [text, settext] = useState("");
  const buttonDisabled = text.length === 0;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text, parentId);
    addComment(text, parentId);
    settext("");
    if(toggleReply) {
      toggleReply();
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <h3>Comments</h3>
      <textarea 
      value={text} 
      onChange={(e) => {
        settext(e.target.value);
      }}/>
      <button className="comment-button" disabled={buttonDisabled}>Comment</button>
    </form>
  )
}
  
export default CommentForm;
  