'use strict';

const e = React.createElement;
const html = document.getElementById('nav_bar');

class NavigationBar extends React.Component {
      
    render() {
        // const currentPage = props.currentPage; 

        return (
            <div>
                <section id="topbar" class="d-flex align-items-center">
                
                <div class="container d-flex justify-content-center justify-content-md-between">
                    
                    <div class="contact-info d-flex align-items-center">
                        <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">rchra.rotmancommerce@gmail.com</a></i>
                    </div>

                    <div class="social-links d-none d-md-flex align-items-center">
                        <a href="https://www.facebook.com/RCHRA/" class="facebook"><i class="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/rchra.uoft/" class="instagram"><i class="bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/rchra/about/" class="linkedin"><i class="bi bi-linkedin"></i></a>
                    </div>

                </div>

                </section> 

                <header id="header" class="d-flex align-items-center">
                <div class="container d-flex justify-content-between">
            
                    <div id="logo">
                        <a href="index.html"><img src="assets/img/RCHRA logo.png" alt="RCHRA Logo"></img></a>
                    </div>
            
                    <nav id="navbar" class="navbar">

                    <ul>
                        <li><a className={html.getAttribute('currentPage') == "Home" ? "active" : ""} href="index.html">Home</a></li>
                        <li><a className={html.getAttribute('currentPage') == "Gallery" ? "active" : ""} href="gallery.html">Gallery</a></li>
                        <li><a className={html.getAttribute('currentPage') == "About" ? "active" : ""} href="about.html">About</a></li>
                        <li><a className={html.getAttribute('currentPage') == "Events" ? "active" : ""} href="events.html">Events</a></li>
                        <li><a className={html.getAttribute('currentPage') == "Team" ? "active" : ""} href="team.html">Team</a></li>
                        <li><a className={html.getAttribute('currentPage') == "Contact" ? "active" : ""} href="contact.html">Contact</a></li>
                    </ul>

                    <i class="bi bi-list mobile-nav-toggle"></i>

                    </nav>
                </div>
                </header> 
            </div>

        );

  }
}

const domContainer = document.querySelector('#nav_bar');
const root = ReactDOM.createRoot(domContainer);
root.render(e(NavigationBar));