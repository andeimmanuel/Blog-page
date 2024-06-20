import React, { useState, useContext } from "react";
import { BlogContext } from "../App";

const PostForm = () => {
  const { addPost } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddPost = (e) => {
    e.preventDefault();
    addPost({ title, body: content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleAddPost} className="post-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="post-input"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="post-textarea"
      />
      <button type="submit" className="post-button">
        Add Post
      </button>
    </form>
  );
};

export default PostForm;
