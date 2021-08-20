import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css"
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";




const Footer =()=>{
    let dat = new Date();
    return (
        <footer className="Footer">
            <div className="Footer_container">
                <div className ="info">
                    <h1>Nitin Gupta</h1>
                    <ul>
                        <li><address>Santacruz(East),
                            Mumbai City,<br />
                            Pin - 400055.
                        </address></li>
                        <li>Phone : +1 5589 55488 55</li>
                        <li>Email : nitin@examplegmail.com</li>
                    </ul>
                </div>
                <div className ="usefull">
                <h1>Usefull Links</h1>  
                    <ul>
                    <li><a href ="#">Home</a></li>
                    <li><a href ="#">About Us</a></li>
                    <li><a href ="#">Services</a></li>
                    <li><a href ="#">Term and condition</a></li>
                    <li><a href ="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="networks">
                    <h1>Our Social Networks</h1>
                    <ul>
                     <li><a href="https://www.facebook.com/profile.php?id=100013975472406"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a></li>
                     <li><a href= "https://www.instagram.com/nitingupta1906/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
                     <li><a href= "https://www.linkedin.com/in/nitin-gupta-6732211b7/"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a></li>
                     <li><a href= "https://twitter.com/NitinGu24695830"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>

                    </ul>
                </div>
            </div>
            <div className="copywrite">
                <p>Made by <span><em>Nitin Gupta</em></span> copywrite &copy; {dat.getFullYear()}</p>
            </div>
        </footer>
    )
}
export default Footer;
