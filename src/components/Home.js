import { useState } from "react";   // Import the 'useState' hook

/*
   Return all the home page content
*/
const Home = () => {
   
   const [posts, setPosts] = useState([
      { title: 'First post', body: 'lorem ipsum this is my first post', author: 'Ian', id: 1 },
      { title: 'Second post', body: 'lorem ipsum this is my third post', author: 'Ian', id: 2 },
      { title: 'Thoughts about thoughts', body: 'lorem ipsum this is my third post', author: 'Ian', id: 3 },
      { title: 'Who said it was going to be easy?', body: 'I got a lot of things to do', author: 'Baba', id: 4 }
   ]);

   return ( 
      <div className="home">
         { 
            posts.map( (post) => (
               <div className="post-preview" key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <p>Post id: {post.id}</p>
               </div>
             ) ) 
         }   
      </div>
    );
}
 
export default Home