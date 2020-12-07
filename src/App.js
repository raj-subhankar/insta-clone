import { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      userName: "cleverQazi",
      caption: "Wow it works",
      imageUrl: "https://images.unsplash.com/photo-1607346705566-b2b5048ae44a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      userName: "cleverQazi",
      caption: "Wow it wordddks",
      imageUrl: "https://images.unsplash.com/photo-1607331813431-a275b44ab68c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ]);

  return (
    <div className="App">
      <div className="app__header">
        <img
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
      </div>

      {
        posts.map(post => (
          <Post userName={post.userName} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
