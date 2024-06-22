import Post from "../components/Post.jsx";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Posts() {
  const [ posts , setPosts ] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const data = await response.json();
      setPosts(data.posts);
    }
    
    fetchPosts();
  }, [posts])

  return (
    <>
      <ul style={{
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        padding: '0 1rem 0 1rem',
        margin: '0'
      }}>
        {posts.length === 0 && (
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
          </div>
        )}
        {posts.map(post => (
          <Post key={post.body} author={post.author} body={post.body}/>
        ))}
      </ul>

    <Outlet />
    </>

  )
}

export default Posts;