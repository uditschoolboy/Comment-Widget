import Comment from './Comment';
import getFromApi from '../api';
import { useState, useEffect } from 'react';
import CommentForm from './Commentform';

const CommentList = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getFromApi().then(data => {
            setComments(data)
        })
    }, []);

    const rootComments = comments.filter(comment => comment.parentId === null);
    const getReplies = (currComment) => {
        return comments.filter(comment => comment.parentId === currComment.id);
    }

    const addComment = (text, parentId) => {
        const comment = {
            id : Math.floor(Math.random() * 1000) + 1,
            userName: "Dynamic Udit",
            text,
            parentId,
            userId: "101"
        }
        console.log(comment);
        setComments([comment, ...comments]);
        console.log(comments);
    }

    const deleteComment = (id) => {
        setComments(comments.map(comment => {
            if(comment.id == id) {
                return {
                    ...comment,
                    text: "[deleted]"
                }
            } 
            return comment;
        }));
    }


    return (
        <div>
            <CommentForm addComment={addComment} parentId={null}/>
            <div className="comment">
                {rootComments.map(rootComment => {
                    return <Comment className="replies"
                        comment = {rootComment}
                        replies = {getReplies(rootComment)}
                        comments = {comments}
                        addComment = {addComment}
                        deleteComment = {deleteComment}
                        />
                })}
            </div>
        </div>
    );
}
  
export default CommentList;
  