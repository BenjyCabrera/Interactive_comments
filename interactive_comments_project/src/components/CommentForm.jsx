import React, { useState } from 'react';

function CommentForm({ onCommentSubmit }) {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCommentSubmit(newComment);
    setNewComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="newComment" className="form-label">
          Nuevo Comentario
        </label>
        <textarea
          className="form-control"
          id="newComment"
          rows="3"
          value={newComment}
          onChange={handleCommentChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Publicar Comentario
      </button>
    </form>
  );
}

export default CommentForm;