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
      <div className="container">
         { 
            posts.map( (post) => (
               <div className="card my-4" key={post.id}>
                  <div className="card-body">
                     <h3 className="card-title">{post.title}</h3>
                     <p className="card-text">{post.body}</p>
                     <small>
                        <p className="text-muted">Post id: {post.id}</p>
                     </small>
                  </div>
               </div>
             ) ) 
         }   
      </div>
    );
}
 
export default Home