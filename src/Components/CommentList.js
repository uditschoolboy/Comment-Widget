import Comment from './Comment';
import getFromApi from '../api';

const CommentList = () => {
    const comments = getFromApi();
    const rootComments = comments.filter(comment => comment.parentId === null);
    const getReplies = (currComment) => {
        return comments.filter(comment => comment.parentId === currComment.id);
    }
    return (
        <div>
            {rootComments.map(rootComment => {
                return <Comment 
                    comment = {rootComment}
                    replies = {getReplies(rootComment)}
                    />
            })}
        </div>
    );
}
  
export default CommentList;
  