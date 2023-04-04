import { Routes, Route } from 'react-router-dom';
import Post from './Post';
import PostIndex from './PostIndex';

const Posts = () => {
  return (
    <Routes>
      <Route
        index
        element={<PostIndex />}
      />
      <Route
        path=":postId"
        element={<Post />}
      />
    </Routes>
  );
};

export default Posts;
