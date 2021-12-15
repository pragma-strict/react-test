/*
   Return all the home page content
*/
const Home = () => {

   // Within this function we can write any valid javascript that we want. So basically we can do anything here in order to generate our JSX that gets output. Variables can be inserted into the JSX via the use of {} curly braces. 

   let pStyle = {
      color: "gray"  
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
         <button onClick={foo}>Click me</button>
         <button onClick={ (e) => bar('test!', e) }>Other button</button>
         <p>The button above is a tricky way to pass arguments to a function because the bar is wrapped inside an anonymous function.</p>
      </div>
    );
}
 
export default Home