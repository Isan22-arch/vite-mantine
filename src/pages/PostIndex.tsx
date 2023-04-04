import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostIndex = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/`
      );
      const data = await response.json();
      setPosts(data);
    })();
  }, []);
  return (
    <>
      <h1>Posts</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default PostIndex;
