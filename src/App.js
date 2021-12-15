import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';

// This is the main app, though it will also be imported into index.js as if it were a component. 
function App(){
   
   // Note the use of self-closing tags. These are a feature of HTML and, I guess, of JSX but normally you don't need the closing slash.

   return(
      <div className="App">
         <Navbar />
         <div className="content">
            <Home />
         </div>
      </div>
   );
}

// We need to export this function so that we can use it from other files. 
// when we export we also need to import from the file that we want to use it in. 
export default App;