import { Form } from "react-router-dom";
import "../ui/Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    console.log(res);
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (e) {
    console.log(e);
  }
};

const Contact = () => {
  return (
    <>
      <section>
        <div className="contact">
          <div className="contact_banner">
            <h1>CONTACT US</h1>
          </div>
          <div className="contact_heading">
            <h1>
              Connect with Us Today and Transform
              <br /> Your Insurance Operations
            </h1>
            <div className="heading_underline"></div>
          </div>
          <div className="contact_details">
            <div className="contact_info">
              <h2>We Are Here For You</h2>
              <p>
                For more information or inquiry about our products, projects and
                pricing please feel free to get in touch with us.
              </p>
              <div className="company_details">
                <div className="company_contact">
                  <div className="contact_icons">
                    <FaLocationDot className="contact_icon" />
                  </div>
                  <p>Address:</p>
                  <div className="company_spec">
                    505, 5th Floor, Royal Word, Sansar Chandra Road,
                    <br />
                    Jaipur - 302001
                  </div>
                </div>
                <div className="company_contact">
                  <div className="contact_icons">
                    <FaPhoneAlt className="contact_icon" />
                  </div>
                  <p>Phone:</p>
                  <div className="company_spec">+91 9649009500</div>
                </div>
                <div className="company_contact">
                  <div className="contact_icons">
                    <MdEmail className="contact_icon" />
                  </div>
                  <p>Email:</p>
                  <div className="company_spec">support@bluesparing.com</div>
                </div>
                <div className="company_contact">
                  <h2>Follow Us:</h2>
                  <div className="company_spec">
                    <FaFacebookF
                      style={{
                        fontSize: "18px",
                        color: "#064fc4",
                        margin: "5px 5px 0",
                      }}
                    />
                    <FaXTwitter
                      style={{
                        fontSize: "18px",
                        color: "black",
                        margin: "5px 5px 0",
                      }}
                    />
                    <FaInstagram
                      style={{
                        fontSize: "18px",
                        color: "purple",
                        margin: "5px 5px 0",
                      }}
                    />
                    <FaLinkedinIn
                      style={{
                        fontSize: "18px",
                        color: "#4287f5",
                        margin: "5px 5px 0",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.416469879065!2d75.80413339436433!3d26.92179926079258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3f8d1398f95%3A0x78439c4f05a1d4e4!2sBlue%20Sparing!5e1!3m2!1sen!2sin!4v1733229747390!5m2!1sen!2sin"></iframe>
            </div>
          </div>
        </div>
        <div className="contact_form">
          <div className="contact_form_heading">
            <h1>We want To Here From You</h1>
            <div className="form_heading_underline"></div>
          </div>
          <Form method="POST" action="/contact">
            <div className="userInput">
              <div className="input_field">
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  placeholder="Enter Your Name"
                  style={{ marginRight: "15px", width: "26.5em" }}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder="Enter Your Email"
                  style={{ margin: "0 15px 0", width: "26.5em" }}
                />
                <input
                  type="text"
                  name="subject"
                  id="username"
                  required
                  autoComplete="off"
                  placeholder="Subject"
                  style={{ marginLeft: "15px", width: "26.5em" }}
                />
              </div>
              <div className="message_box">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="8"
                  placeholder="Type your Message Here"
                />
              </div>
            </div>
            <button type="submit" className="cont_sub_btn">
              Send Message
            </button>
          </Form>
        </div>
      </section>
    </>
  );
};

export { contactData };
export default Contact;
