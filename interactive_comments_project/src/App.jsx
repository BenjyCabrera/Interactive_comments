import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import data from '../data.json';

function App() {
  const [comments, setComments] = useState(data.comments);
  const currentUser = data.currentUser;

  const handleCommentSubmit = (newComment) => {
    const comment = {
      id: Date.now(),
      content: newComment,
      createdAt: 'Just now',
      score: 0,
      user: {
        image: currentUser.image,
        username: currentUser.username,
      },
      replies: [],
    };
    setComments([...comments, comment]);
  };

  const handleReplySubmit = (reply, commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const newReply = {
          id: Date.now(),
          content: reply,
          createdAt: 'Just now',
          score: 0,
          replyingTo: currentUser.username,
          user: {
            image: currentUser.image,
            username: currentUser.username,
          },
        };
        comment.replies.push(newReply);
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleCommentDelete = (commentId) => {
    const updatedComments = comments.filter((comment) => {
      if (comment.id === commentId) {
        return comment.user.username !== currentUser.username;
      }
      return true;
    });
    setComments(updatedComments);
  };

  return (
    <div>
      <CommentList
        comments={comments}
        onReplySubmit={handleReplySubmit}
        onCommentDelete={handleCommentDelete}
      />
      <CommentForm onCommentSubmit={handleCommentSubmit} />
    </div>
  );
}
export default App;