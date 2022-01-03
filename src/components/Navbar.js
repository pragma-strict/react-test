/*
   Return a navbar
*/
const Navbar = () => {
   return (
      <div className="container">
         <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">Pragma Strict</a>
            <div class="navbar-nav">
               <a class="nav-item nav-link active" href="#">Home</a>
               <a class="nav-item nav-link" href="#">Link</a>
            </div>
         </nav>
      </div>
   );
}
 
export default Navbar;