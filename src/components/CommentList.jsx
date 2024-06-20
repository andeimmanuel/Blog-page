import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <p>{comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
