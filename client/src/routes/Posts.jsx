import Post from '../components/Post.jsx';
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import classes from '../components/Post.module.css';

function Posts() {
  const [ posts , setPosts ] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const data = await response.json();
      setPosts(data.posts);
    }
    
    fetchPosts();
  }, [location])

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
        {posts.map((post) => (
          <li className={classes.post} key={post.id}>
            <Post author={post.author} body={post.body} id={post.id}/>
          </li>
        ))}
      </ul>

    <Outlet />
    </>

  )
}

export default Posts;