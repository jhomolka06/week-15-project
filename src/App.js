

import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const API_URL = 'http://localhost:3031/users';


const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostSubmit = (newPost) => {
    setSelectedPost(null);
  };

  return (
    <div>
      <h1>CRUD Operations on Posts</h1>

      <PostForm onSubmit={handlePostSubmit} initialPost={selectedPost} />

      <PostList />
    </div>
  );
};

export default App;

//--------------------------------------------

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // Define the API endpoint
// const API_URL = 'http://localhost:3031/users';

// // Create a React component to represent the resource
// function App() {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState({ title: '', body: '' });
//   const [selectedPost, setSelectedPost] = useState(null);

//   // Fetch the list of posts from the API on component load
//   useEffect(() => {
//     axios.get(API_URL)
//       .then((response) => {
//         setPosts(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   // Function to handle the creation of a new post
//   const createPost = () => {
//     axios.post(API_URL, newPost)
//       .then((response) => {
//         setPosts([...posts, response.data]);
//         setNewPost({ title: '', body: '' });
//       })
//       .catch((error) => {
//         console.error('Error creating a post:', error);
//       });
//   };

//   // Function to handle the update of an existing post
//   const updatePost = () => {
//     if (selectedPost) {
//       axios.put(`${API_URL}/${selectedPost.id}`, selectedPost)
//         .then(() => {
//           const updatedPosts = posts.map((post) =>
//             post.id === selectedPost.id ? selectedPost : post
//           );
//           setPosts(updatedPosts);
//           setSelectedPost(null);
//         })
//         .catch((error) => {
//           console.error('Error updating the post:', error);
//         });
//     }
//   };

//   // Function to handle the deletion of a post
//   const deletePost = (postId) => {
//     axios.delete(`${API_URL}/${postId}`)
//       .then(() => {
//         const updatedPosts = posts.filter((post) => post.id !== postId);
//         setPosts(updatedPosts);
//       })
//       .catch((error) => {
//         console.error('Error deleting the post:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>CRUD Operations on Posts</h1>

//       {/* Create Operation */}
//       <div>
//         <h2>Create Post</h2>
//         <input
//           type="text"
//           placeholder="Title"
//           value={newPost.title}
//           onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//         />
//         <textarea
//           placeholder="Body"
//           value={newPost.body}
//           onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
//         />
//         <button onClick={createPost}>Create</button>
//       </div>

//       {/* Read Operation (List of Posts) */}
//       <h2>Posts</h2>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             {post.title}
//             <button onClick={() => setSelectedPost(post)}>Edit</button>
//             <button onClick={() => deletePost(post.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       {/* Update Operation (Edit Post) */}
//       {selectedPost && (
//         <div>
//           <h2>Edit Post</h2>
//           <input
//             type="text"
//             value={selectedPost.title}
//             onChange={(e) => setSelectedPost({ ...selectedPost, title: e.target.value })}
//           />
//           <textarea
//             value={selectedPost.body}
//             onChange={(e) => setSelectedPost({ ...selectedPost, body: e.target.value })}
//           />
//           <button onClick={updatePost}>Update</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

