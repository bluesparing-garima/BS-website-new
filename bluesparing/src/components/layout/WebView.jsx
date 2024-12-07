import React from "react";
import "../ui/Service.css";
import { FaUser } from "react-icons/fa";

const WebView = () => {
  return (
    <>
      <div className="web_view_tab">
        <div className="web_banner1">
          <div className="web_banner_content1">
            <button>Simplify and Streamline Insurance Operations</button>
            <h2>
              BlueSparing's Insurance Management Software offers a robust
              platform to manage your insurance business effortlessly. Here's
              how we help:
            </h2>
            <ul>
              <li>
                <b>Policy Creation and Booking:</b> Quickly generate and book
                new policies with ease, reducing manual workload and ensuring
                accuracy.
              </li>
              <li>
                <b>Policy Analysis:</b>
                <span>
                  {" "}
                  Gain valuable insights into your portfolio with in-depth
                  analytics to optimize performance.
                </span>
              </li>
              <li>
                <b>Renewal Management:</b>{" "}
                <span>
                  Never miss a renewal deadline with automated notifications,
                  improving customer retention and satisfaction.
                </span>
              </li>
              <li>
                <b>Partner Wallet Management:</b>
                <span>
                  {" "}
                  Track and manage financial transactions with partners,
                  ensuring transparency and efficiency.
                </span>
              </li>
              <li>
                <b>Commission Tracking:</b>
                <span>
                  {" "}
                  Automate commission calculations and payouts, reducing errors
                  and saving time.
                </span>
              </li>
              <li>
                <b>Master Data Management:</b>{" "}
                <span style={{}}>
                  Centralize all essential data, ensuring consistency and
                  improving decision-making.
                </span>
              </li>
            </ul>
            <h4>
              Our solution empowers insurers with tools to boost efficiency,
              enhance customer engagement, and drive growth in a competitive
              market.
            </h4>
          </div>
          <img src="services/web.png" width="550px" height="500px" />
        </div>

        {/* section 2 */}
        <div className="web_banner2">
          <img src="services/web.png" width="550px" height="500px" />
          <div className="web_banner_content2">
            <button>Simplify and Streamline Insurance Operations</button>
            <h2>
              BlueSparing's Insurance Management Software offers a robust
              platform to manage your insurance business effortlessly. Here's
              how we help:
            </h2>
            <ul>
              <li>
                <b>Policy Creation and Booking:</b> Quickly generate and book
                new policies with ease, reducing manual workload and ensuring
                accuracy.
              </li>
              <li>
                <b>Policy Analysis:</b>
                <span>
                  {" "}
                  Gain valuable insights into your portfolio with in-depth
                  analytics to optimize performance.
                </span>
              </li>
              <li>
                <b>Renewal Management:</b>{" "}
                <span>
                  Never miss a renewal deadline with automated notifications,
                  improving customer retention and satisfaction.
                </span>
              </li>
              <li>
                <b>Partner Wallet Management:</b>
                <span>
                  {" "}
                  Track and manage financial transactions with partners,
                  ensuring transparency and efficiency.
                </span>
              </li>
              <li>
                <b>Commission Tracking:</b>
                <span>
                  {" "}
                  Automate commission calculations and payouts, reducing errors
                  and saving time.
                </span>
              </li>
              <li>
                <b>Master Data Management:</b>{" "}
                <span>
                  Centralize all essential data, ensuring consistency and
                  improving decision-making.
                </span>
              </li>
            </ul>
            <h4>
              Our solution empowers insurers with tools to boost efficiency,
              enhance customer engagement, and drive growth in a competitive
              market.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebView;
