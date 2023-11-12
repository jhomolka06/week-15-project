// Importing necessary dependencies from React
import React from 'react';
// Functional component for rendering a single post
const Post = ({ post }) => {
    // Rendering the post title and body
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};
// Exporting the Post component to be used in other parts of the application
export default Post;