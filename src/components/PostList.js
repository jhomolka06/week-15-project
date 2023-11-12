
// Importing necessary dependencies from React and the API service file
import React, { useState, useEffect } from 'react';
import { getPosts, deletePost } from '../services/api';

//Functional component for displaying a list of posts
const PostList = () => {
    // State to store the list of posts
  const [posts, setPosts] = useState([]);

  // Effect hook to fetch posts when the component mounts
  useEffect(() => {
    // Calling the getPosts function from the API service
    getPosts()
      .then((response) => setPosts(response.data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);
 // Function to handle post deletion
  const handleDelete = (postId) => {
      // Calling the deletePost function from the API service
    deletePost(postId)
      .then(() => setPosts(posts.filter((post) => post.id !== postId)))
      .catch((error) => console.error('Error deleting post:', error));
  };

  // Rendering the component
  return (
    <div>
      <h2>Posts</h2>
      <ul> 

        {posts.map((post) => (//Mapping through the list of posts and rendering each post
          <li key={post.id}>
            {post.title}{' '} 
            
            
            <button onClick={() => handleDelete(post.id)}>Delete</button>// Button to trigger the handleDelete function for the respective post
           
          </li>
        ))}
      </ul>
    </div>
  );
};
// Exporting the PostList component to be used in other parts of the application
export default PostList;