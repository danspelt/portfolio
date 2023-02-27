import React, { useState } from 'react';

function FacebookClone() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="facebook-container">
      <header className="facebook-header">
        <h1>Facebook Clone</h1>
      </header>
      <main className="facebook-main">
        <PostForm addPost={addPost} />
        <PostList posts={posts} />
      </main>
    </div>
  );
}

function PostForm({ addPost }) {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost({ content });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button type="submit">Post</button>
    </form>
  );
}

function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>{post.content}</li>
      ))}
    </ul>
  );
}

export default FacebookClone;
