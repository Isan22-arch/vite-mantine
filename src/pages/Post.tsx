import React, { useEffect, useState } from 'react';
import { Loader, Paper, Skeleton, Text } from '@mantine/core';
import { Link as RouterLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      //stop for 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await response.json();
      setPost(data);
      setIsLoading(false);
    })();
  }, [postId]);
  return (
    <>
      {isLoading ? (
        <div>
          <Skeleton
            height={50}
            circle
            mb="xl"
          />
          <Skeleton
            height={8}
            radius="xl"
          />
          <Skeleton
            height={8}
            mt={6}
            radius="xl"
          />
          <Skeleton
            height={8}
            mt={6}
            width="70%"
            radius="xl"
          />
        </div>
      ) : (
        <Paper
          shadow="md"
          radius="md"
          p="md"
        >
          <p>{post.id}</p>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Text
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
            ta="center"
            fz="xl"
            fw={700}
            component={RouterLink}
            to="/posts"
          >
            Back to All Posts
          </Text>
        </Paper>
      )}
    </>
  );
};

export default Post;
