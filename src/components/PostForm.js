// Importing necessary dependencies from React and the API service file
import React, { useState } from 'react';
import { createPost, updatePost } from '../services/api';
// Functional component for rendering a form to create or update a post
const PostForm = ({ onSubmit, initialPost }) => {
      // State to manage the post data in the form
    const [post, setPost] = useState(initialPost || { title: '', body: '' });
// Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Determining whether to call createPost or updatePost based on whether initialPost is provided
    const apiFunction = initialPost ? updatePost : createPost;
// Calling the appropriate API function with the post data
    apiFunction(post)
      .then((response) => onSubmit(response.data))
      .catch((error) => console.error('Error saving post:', error));
  };
 // Rendering the form with input fields for title and body
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })} // Updating the title in the state
        />
      </label>
      <br />
      <label>
        Body:
        <textarea
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })} // Updating the body in the state
        />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};
// Exporting the PostForm component to be used in other parts of the application
export default PostForm;