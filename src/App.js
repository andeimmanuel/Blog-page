import React, { useState, useEffect, createContext } from "react";
import BlogList from "./components/BlogList";
import PostForm from "./components/PostForm";
import "./App.css"; // Import the CSS file

export const BlogContext = createContext();

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&apiKey=3395c94c1fd54a8cab5520136759f5e4"
    )
      .then((response) => response.json())
      .then((data) => {
        const initialPosts = data.articles.slice(0, 10).map((post, index) => ({
          id: index + 1,
          title: post.title,
          body: post.description,
          url: post.url,
          comments: [],
        }));
        setPosts(initialPosts);
      });
  }, []);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1, comments: [] }]);
  };

  const addComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <BlogContext.Provider
      value={{ posts, addPost, addComment, setSelectedPost }}
    >
      <div className="app-container">
        <h1 className="app-header">Blog Platform</h1>
        <PostForm />
        <BlogList selectedPost={selectedPost} />
      </div>
    </BlogContext.Provider>
  );
};

export default App;
