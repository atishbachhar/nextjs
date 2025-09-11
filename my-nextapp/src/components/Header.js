import Link from "next/link";

export default function Header() {
  return (

  
      <div className="header_section">
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand" href="/"><img src="images/logo.png" /></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto">
                     <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="/about">About Us</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="/gallery">Gallery</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="/blog">Blog</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Us</a>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     <div className="login_text">
                        <ul>
                           <li><a href="#!">Login</a></li>
                           <li><a href="#!"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </form>
               </div>
            </nav>
         </div>
      </div>
  );
}
