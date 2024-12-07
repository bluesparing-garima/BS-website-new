import { useNavigate } from "react-router-dom";
import "../ui/About.css";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="about_comp">
        <div className="about_hero_banner">
          <h1>ABOUT US</h1>
        </div>
        <div className="about_banner">
          <div className="about_banner_content">
            <button
              onClick={() => {
                navigate("https://iim.bluesparing.com/");
              }}
            >
              Blue Sparing
            </button>
            <p>
              At BlueSparing, we specialize in providing cutting-edge insurance
              management solutions designed to simplify and streamline every
              aspect of the insurance lifecycle. From policy administration to
              claims processing, we empower insurers with innovative tools to
              enhance operational efficiency and deliver exceptional customer
              experiences.
            </p>
            <p>
              With years of expertise in the insurance technology landscape, we
              offer advanced features like automated underwriting, real-time
              data analytics, and AI-powered risk assessment. Our customizable
              platforms cater to the unique needs of insurance providers,
              brokers, and agents, helping them stay ahead in an ever-evolving
              industry.
            </p>
          </div>
          <img src="aboutComp/18959.jpg" />
        </div>
      </div>
    </>
  );
};

export default About;
