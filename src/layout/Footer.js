import React from 'react'

function Footer() {
   return (
      <footer className="page-footer blue">
         <div className="footer-copyright">
            <div className="container">
               © {new Date().getFullYear()} Copyright Text
               <a className="grey-text text-lighten-4 right" href="#!">Movie</a>
            </div>
         </div>
      </footer>
   )
}

export default Footer