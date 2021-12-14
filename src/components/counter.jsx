import React, { Component } from 'react';

class Counter extends Component {
   render() { 
      return ( 
         <React.Fragment>
            <h1>This JSX is being returned from the render() method on class Counter</h1> 
            <button>Test button!</button>
            <p>
               An important thing to note is that this markup, which looks like HTML, is actually JSX. I'm not really sure why it's being used instead of HTML but there's a compiler (or, a transpiler?) called Babel which converts this JSX into HTML for display in the browser. One difference between JSX and HTML is that we have to use className instead of class to define the HTML classes. We can't use 'class' directly because it's a reserved keyword in javascript but it does get transpiled to class by Babel.
            </p>
         </React.Fragment>
      );
   }
}


export default Counter;