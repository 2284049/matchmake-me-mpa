import React from "react";
import { Link } from "react-router-dom";
import purpleLogo from "../../icons/purplelogo.png";
import pencilIcon from "../../icons/pencil.svg";
import logoutIcon from "../../icons/account-logout.svg";
import guyThree from "../../img/guy3.jpg";
import guyOne from "../../img/guy1.jpg";
import guyFour from "../../img/guy4.jpeg";
import guyTwo from "../../img/guy2.jpg";

export default function Matches() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6
    offset-xl-3"
        >
          <div className="row mb-6">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <img src={purpleLogo} width="40px" alt="Matchmake Me Logo" />
              <h2 className="text-brand text-primary d-inline mt-2 ml-2">
                Matchmake Me
              </h2>
            </div>
          </div>
          <div className="row mb-6">
            <div className="col-12">
              <Link to="/questionnaire" className="btn btn-link" role="button">
                <img
                  src={pencilIcon}
                  width="16px"
                  className="mr-2 mb-2"
                  alt=""
                />
                Edit Your Profile
              </Link>
              <Link
                to="/landing"
                className="btn btn-link float-right mt-n1"
                role="button"
              >
                <img src={logoutIcon} width="16px" className="mr-1" alt="" />
                Log out
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 mb-6">
              <Link to="/match">
                <img
                  src={guyThree}
                  width="100%"
                  height="auto"
                  style={{ borderRadius: "0.75rem" }}
                  alt="Match"
                />
                <h3 className="text-center">flying_cedar</h3>
              </Link>
            </div>
            <div className="col-12 col-sm-6">
              <Link to="#">
                <img
                  src={guyOne}
                  width="100%"
                  height="auto"
                  style={{ borderRadius: "0.75rem" }}
                  alt="Match"
                />
                <h3 className="d-flex justify-content-center">jumping_fir</h3>
              </Link>
            </div>
            <div className="col-12 col-sm-6 mb-6">
              <Link to="#">
                <img
                  src={guyFour}
                  width="100%"
                  height="auto"
                  style={{ borderRadius: "0.75rem" }}
                  alt="Match"
                />
                <h3 className="text-center">walking_evergreen</h3>
              </Link>
            </div>
            <div className="col-12 col-sm-6 mb-6">
              <Link to="#">
                <img
                  src={guyTwo}
                  width="100%"
                  height="auto"
                  style={{ borderRadius: "0.75rem" }}
                  alt="Match"
                />
                <h3 className="text-center">running_maple</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
