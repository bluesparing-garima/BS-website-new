import "../ui/Footer.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImGooglePlus } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FcBusinessContact } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { FcManager } from "react-icons/fc";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-field">
            <div className="About_Us">
              <h1>About Us</h1>
              <p>
                We are the best IT software provider to improve your work.
                Specializing in insurance IT solutions, we enhance efficiency
                and customer engagement through innovative app development.
              </p>
              <ul className="media_icons">
                <li className="media_icon">
                  <IoLogoFacebook />
                </li>
                <li className="media_icon">
                  <FaInstagramSquare />
                </li>
                <li className="media_icon">
                  <FaGithub />
                </li>
                <li className="media_icon">
                  <ImGooglePlus />
                </li>
                <li className="media_icon">
                  <FaLinkedin />
                </li>
              </ul>
            </div>
            <div className="Quick_Link">
              <h1>Quick Link</h1>
              <p>
                <FcAbout style={{ marginRight: "5px" }} />
                About US
              </p>
              <p>
                <MdOutlineMiscellaneousServices
                  style={{ marginRight: "5px" }}
                />
                Services
              </p>
              <p>
                <FcManager />
                Testimonials
              </p>
              <p>
                <FcBusinessContact style={{ marginRight: "5px" }} />
                Contact Us
              </p>
            </div>
            <div className="Contact_Info">
              <h1>Contact Info</h1>
              <p>
                <FaMapLocationDot style={{ marginRight: "5px" }} />
                505, 5th Floor, Royal Word, Sansar Chandra Road, Jaipur - 302001
              </p>
              <p>
                <FaPhoneAlt style={{ marginRight: "5px", color: "green" }} />
                +91 96490 09500
              </p>
              <p>
                <MdEmail
                  style={{
                    marginRight: "5px",
                    backgroundImage: "linear-gradient(to right,red,gray)",
                  }}
                />
                support@bluesparing.com
              </p>
            </div>
          </div>
          <div className="horizontal"></div>
          <div className="copyright">
            <p>© 2024 | All rights reserved. Design by Blue Sparing with ❤️</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
