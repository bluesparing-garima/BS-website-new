import React from "react";
import "../ui/Service.css";

const AppView = () => {
  return (
    <>
      <div className="app_view_tab">
        <div className="app_banner1">
          <div className="app_banner_content1">
            <button>Empower Your Partners with a Dedicated Mobile App</button>
            <h2>
              BlueSparing's Partner-Exclusive Mobile App is designed to enhance
              collaboration and streamline operations for your business
              partners. With a user-friendly interface and powerful features,
              partners can manage their tasks efficiently, anytime, anywhere:
            </h2>
            <h3>Key Features:</h3>
            <ul>
              <li>
                <b>Policy Booking and Management:</b>
                <span>
                  {" "}
                  Partners can quickly book new policies and manage their
                  portfolio with ease.
                </span>
              </li>
              <li>
                <b>Wallet Management:</b>
                <span>
                  {" "}
                  Track wallet balances, transaction history, and payouts in
                  real-time.
                </span>
              </li>
              <li>
                <b>Commission Tracking:</b>{" "}
                <span>
                  View detailed commission reports, ensuring transparency and
                  accuracy.
                </span>
              </li>
              <li>
                <b>Renewal Notifications:</b>
                <span>
                  {" "}
                  Receive timely reminders to help clients renew their policies
                  on time.
                </span>
              </li>
              <li>
                <b>Performance Analytics:</b>
                <span>
                  {" "}
                  Access key metrics and insights to monitor and improve
                  performance.
                </span>
              </li>
              <li>
                <b>Secure Communication:</b>{" "}
                <span>
                  Easily connect with your support team for queries and updates.
                </span>
              </li>
            </ul>
            <h4>
              This app empowers partners to work more effectively, ensuring
              better service delivery and stronger business growth.
            </h4>
          </div>
          <img src="services/mobile.png" width="500px" height="500px" />
        </div>

        {/* section2 */}
        <div className="app_banner2">
        <img src="services/mobile.png" width="500px" height="500px" />
          <div className="app_banner_content2">
            <button>Empower Your Partners with a Dedicated Mobile App</button>
            <h2>
              BlueSparing's Partner-Exclusive Mobile App is designed to enhance
              collaboration and streamline operations for your business
              partners. With a user-friendly interface and powerful features,
              partners can manage their tasks efficiently, anytime, anywhere:
            </h2>
            <h3>Key Features:</h3>
            <ul>
              <li>
                <b>Policy Booking and Management:</b>
                <span>
                  {" "}
                  Partners can quickly book new policies and manage their
                  portfolio with ease.
                </span>
              </li>
              <li>
                <b>Wallet Management:</b>
                <span>
                  {" "}
                  Track wallet balances, transaction history, and payouts in
                  real-time.
                </span>
              </li>
              <li>
                <b>Commission Tracking:</b>{" "}
                <span>
                  View detailed commission reports, ensuring transparency and
                  accuracy.
                </span>
              </li>
              <li>
                <b>Renewal Notifications:</b>
                <span>
                  {" "}
                  Receive timely reminders to help clients renew their policies
                  on time.
                </span>
              </li>
              <li>
                <b>Performance Analytics:</b>
                <span>
                  {" "}
                  Access key metrics and insights to monitor and improve
                  performance.
                </span>
              </li>
              <li>
                <b>Secure Communication:</b>{" "}
                <span>
                  Easily connect with your support team for queries and updates.
                </span>
              </li>
            </ul>
            <h4>
              This app empowers partners to work more effectively, ensuring
              better service delivery and stronger business growth.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppView;
