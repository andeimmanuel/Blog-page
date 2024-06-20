import React, { useContext, useState } from "react";
import { BlogContext } from "../App";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const PostDetail = ({ post }) => {
  const { addComment } = useContext(BlogContext);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      addComment(post.id, newComment);
      setNewComment("");
    }
  };

  return (
    <div className="post-detail">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="post-link"
      >
        Read Full Article
      </a>
      <CommentForm
        newComment={newComment}
        setNewComment={setNewComment}
        handleAddComment={handleAddComment}
      />
      <CommentList comments={post.comments} />
    </div>
  );
};

export default PostDetail;
