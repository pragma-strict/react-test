import { useState } from "react";   // Import the 'useState' hook

/*
   Return all the home page content
*/
const Home = () => {

   // Within this function we can write any valid javascript that we want. So basically we can do anything here in order to generate our JSX that gets output. Variables can be inserted into the JSX via the use of {} curly braces. 

   // In order to make sure changes in 'state' such as variables like pStyle are reflected in the DOM by causing the DOM to rerender, we need to use a type of function in react called a hook.

   let testArr = [1, 2, 3];
   let [one, two, three] = testArr;  // This is a syntax called 'array destructuring' and creates 3 new variables with the names one, two, and three, and assigns them the values in the array testArr. This can be really useful if you have a function that returns multiple values in an array and you want to take them and assign them to their own variables easily rather than having to access them by index in the returned array.

   const [pStyle, setPStyle] = useState({ // useState() is passed a value and returns two variables.
      color: "gray"  // The first variable stores the value and the second is a function that is used to  
   });   // update the value in a way that will cause react to rerender the DOM if necessary.

   // Note: pSytle is said to be 'reactive' when it is declared in this way because it now has a special function to update it which will cause the DOM to react to the updated value. This is the main way to define variables that might need to change in the future in react.

   function updateStyle() {
      setPStyle({ // Here we invoke the special function to change the variable pStyle which was created by
         color: "pink"  // the useState function.
      });
   }

   const foo = () => {
      console.log("yeah yeah");
   }

   const bar = (arg, e) => {
      console.log("Arg: " + arg);
      console.log("The automatic event argument that was passed by the button click is: ");
      console.log(e);
   }

   return ( 
      <div className="home">
         <p style={pStyle}>Home page content</p>
         <button onClick={updateStyle}>Click me</button>
         <button onClick={ (e) => bar('test!', e) }>Other button</button>
         <p>The button above is a tricky way to pass arguments to a function because the bar is wrapped inside an anonymous function.</p>
      </div>
    );
}
 
export default Home