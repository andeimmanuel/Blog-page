import React, { useContext } from "react";
import { BlogContext } from "../App";
import PostDetail from "./PostDetail";

const BlogList = ({ selectedPost }) => {
  const { posts, setSelectedPost } = useContext(BlogContext);

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div key={post.id} className="blog-item">
          <h2 className="blog-title" onClick={() => setSelectedPost(post)}>
            {post.title}
          </h2>
          <p className="blog-body">{post.body}</p>
          {selectedPost && selectedPost.id === post.id && (
            <PostDetail post={selectedPost} />
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
