import React from 'react';
import Comment from './Comment';

function CommentList({ comments, onReplySubmit, onCommentDelete }) {
  return (
    <div className="d-flex flex-column-reverse">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onReplySubmit={onReplySubmit}
          onCommentDelete={onCommentDelete}
          image={comment.user.image.png}
        />
      ))}
    </div>
  );
}

console.log(CommentList)
export default CommentList;