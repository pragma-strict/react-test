/*
   Return a navbar
*/
const Navbar = () => {
   return (
      <div className="container">
         <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">Pragma Strict</a>
            <div className="navbar-nav">
               <a className="nav-item nav-link active" href="#">About</a>
               <a className="nav-item nav-link" href="#">Sketches</a>
            </div>
         </nav>
      </div>
   );
}
 
export default Navbar;