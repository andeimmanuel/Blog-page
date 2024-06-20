import React from "react";

const CommentForm = ({ newComment, setNewComment, handleAddComment }) => {
  return (
    <form onSubmit={handleAddComment} className="comment-form">
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
        className="comment-input"
      />
      <button type="submit" className="comment-button">
        Add Comment
      </button>
    </form>
  );
};

export default CommentForm;
