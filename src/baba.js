import React from "react";

// This is a component. It's a function that returns something, usually a JSX 'template'. Finally, we export the component (i.e. the function) at the bottom of the file.
function Test(){
   return(
      <div className="Test">
         <div className="content">
            <p>
               This is coming from the test function. 
            </p>
         </div>
      </div>
   );
}

// We need to export this function so that we can use it from other files. 
// when we export we also need to import from the file that we want to use it in. 
export default Test;