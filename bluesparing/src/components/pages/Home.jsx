import "../ui/Home.css";
import { MdDeveloperMode } from "react-icons/md";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";
import { IoPeople } from "react-icons/io5";
import ImageSlider from "../layout/ImageSlider";
import { useNavigate } from "react-router-dom";
import { LiaRProject } from "react-icons/lia";
import { FaSmile } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";
import { RiDoubleQuotesL } from "react-icons/ri";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* home page section */}
      <section>
        <ImageSlider />

        {/* card-section */}
        <div className="services">
          <div className="services_heading">
            <h1>Innovative IT Solutions For Your Business</h1>
          </div>
          <div className="services_icons">
            <div className="icon1">
              <span>
                <MdOutlineBrowserUpdated className="Appicon" />
              </span>
              <h1>Web Development</h1>
              <p>
                We create tailored software Solutions that address your specific
                business challenges. Our development process ensures
                high-quality, scalable, and maintainable software.
              </p>
              <button>Read More...</button>
            </div>
            <div className="icon1">
              <span>
                <MdDeveloperMode className="Appicon2" />
              </span>
              <h1>App Development</h1>
              <p>
                Engage your customers on the go with our innovative mobile app
                development services. We create high-performance, user-friendly
                mobile applications for both iOS and Android platforms.
              </p>
              <button>Read More...</button>
            </div>
            <div className="icon1">
              <span>
                <SiAdobeindesign className="Appicon" />
              </span>
              <h1>Graphic Designing</h1>
              <p>
                Enhance your brand's appeal with our expert graphic design
                solutions. From logos to digital assets, we create captivating
                visuals tailored to your brand.
              </p>
              <button>Read More...</button>
            </div>
            <div className="icon1">
              <span>
                <IoPeople className="Appicon2" />
              </span>
              <h1>Consulting</h1>
              <p>
                Our IT consulting services help you navigate the complex
                technology landscape. We provide strategic advice to optimize
                your IT infrastructure and operations.
              </p>
              <button>Read More...</button>
            </div>
          </div>
        </div>

        {/* about section */}
        <div className="about_section">
          <h2>Innovative IT Solutions For Your Business</h2>
          <p>
            At Blue Sparing, we specialize in providing innovative IT solution
            with a focus on the insurance industry. our mission is to empower
            insurance companies through cutting-edge technology, enhancing
            efficiency and customer engagement. Our expertise in developing
            robust, user-friendly insurance apps allows our clients to
            streamline their operations and provide exceptional service to their
            customers. Trust us to be your partner in digital transformation and
            innovation.
          </p>
          <button
            onClick={() => {
              navigate("/contact");
            }}
          >
            Get Started
          </button>
        </div>

        {/* services section */}
        <div className="services_section">
          <div className="services_strategy">
            <div className="services_strategy_img">
              <img
                // src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src="services.jpg"
                alt="service_img"
              />
            </div>
            <div className="strategy_content">
              <h1>
                Transforming Insurance Operations, Elevating Customer
                Experiences
              </h1>
              <p>
                We are your trusted partner in transforming the way you work.
                Specializing in insurance IT solutions, we streamline operations
                and elevate customer experiences with cutting-edge app
                development and automation tools.
              </p>
              <div className="strategy_progress">
                <h4>Market Strategy</h4>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: "80%" }}>
                    <span className="progress_span">80%</span>
                  </div>
                </div>
              </div>
              <div className="strategy_progress">
                <h4>Financial Support</h4>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: "95%" }}>
                    <span className="progress_span">95%</span>
                  </div>
                </div>
              </div>
              <div className="strategy_progress">
                <h4>Online reporting</h4>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: "90%" }}>
                    <span className="progress_span">90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services_experience">
            <h1>
              We have over 10 years <br />
              Experience
            </h1>
            <div className="services_experience_icons">
              <div className="services_experience_icon">
                <div className="experience_icon">
                  <LiaRProject />
                </div>
                <h1>20</h1>
                <p>Successful Projects</p>
              </div>
              <div className="services_experience_icon">
                <div className="experience_icon">
                  <FaSmile />
                </div>
                <h1>20</h1>
                <p>Happy Clients</p>
              </div>
              <div className="services_experience_icon">
                <div className="experience_icon">
                  <FaAward />
                </div>
                <h1>15</h1>
                <p>Business Awards</p>
              </div>
              <div className="services_experience_icon">
                <div className="experience_icon">
                  <GiCoffeeCup />
                </div>
                <h1>100</h1>
                <p>Cup Coffee</p>
              </div>
            </div>
          </div>

          <div className="services_testimonials">
            <h1>Customers Love BlueSparing</h1>
            <div className="testimonial_cards">
              <div className="testimonial_card">
                <p>
                  <RiDoubleQuotesL className="quotes_icon" /> I am extremely
                  satisfied with the services provided by Blue Sparing. Their
                  expertise in IT solutions is unmatched, and they have truly
                  transformed our business operations. The team at blue sparing
                  is highly professional, responsive, and dedicated to
                  delivering results. With their help, we were able to
                  streamline our processes, improve efficiency, and enhance
                  customer satisfaction. I highly recommend blue sparing to any
                  business looking to elevate their IT infrastructure and stay
                  ahead in today's competitive market.
                </p>
                <div className="customer_review">
                  <img
                    src="https://c0.wallpaperflare.com/preview/276/301/198/avatar-people-person-business.jpg"
                    alt="customer_img"
                  />
                  <div className="customer_name">
                    <h3>ALEX ACKER</h3>
                    <p>Senior Manager</p>
                  </div>
                </div>
              </div>
              <div className="testimonial_card">
                <p>
                  <RiDoubleQuotesL className="quotes_icon" /> I am extremely
                  satisfied with the services provided by Blue Sparing. Their
                  expertise in IT solutions is unmatched, and they have truly
                  transformed our business operations. The team at blue sparing
                  is highly professional, responsive, and dedicated to
                  delivering results. With their help, we were able to
                  streamline our processes, improve efficiency, and enhance
                  customer satisfaction. I highly recommend blue sparing to any
                  business looking to elevate their IT infrastructure and stay
                  ahead in today's competitive market.
                </p>
                <div className="customer_review">
                  <img
                    src="https://c0.wallpaperflare.com/preview/276/301/198/avatar-people-person-business.jpg"
                    alt="customer_img"
                  />
                  <div className="customer_name">
                    <h3>ALEX ACKER</h3>
                    <p>Senior Manager</p>
                  </div>
                </div>
              </div>
              <div className="testimonial_card">
                <p>
                  <RiDoubleQuotesL className="quotes_icon" /> I am extremely
                  satisfied with the services provided by Blue Sparing. Their
                  expertise in IT solutions is unmatched, and they have truly
                  transformed our business operations. The team at blue sparing
                  is highly professional, responsive, and dedicated to
                  delivering results. With their help, we were able to
                  streamline our processes, improve efficiency, and enhance
                  customer satisfaction. I highly recommend blue sparing to any
                  business looking to elevate their IT infrastructure and stay
                  ahead in today's competitive market.
                </p>
                <div className="customer_review">
                  <img
                    src="https://c0.wallpaperflare.com/preview/276/301/198/avatar-people-person-business.jpg"
                    alt="customer_img"
                  />
                  <div className="customer_name">
                    <h3>ALEX ACKER</h3>
                    <p>Senior Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
