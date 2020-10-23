import React from "react";
import { Link } from "react-router-dom";
import purpleLogo from "../../icons/purplelogo.png";
import photoPose from "../../img/photogesture.jpg";
import currentUser from "../../mock-data/current-user";
import RadioQuestion from "../ui/RadioQuestion";
import CheckboxQuestion from "../ui/RadioQuestion";
import LikertQuestion from "../ui/RadioQuestion";

console.log(currentUser);

export default function Questionnaire() {
  return (
    <div className="container mb-8">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
          <div className="row mb-7">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <img src={purpleLogo} width="40px" alt="Matchmake Me Logo" />
              <h2 className="text-brand text-primary d-inline mt-2 ml-2">
                Matchmake Me
              </h2>
            </div>
          </div>
          <form>
            <div className="form-row">
              <div className="col-8">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="col-4">
                <label htmlFor="birthdate">Birthdate</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="mmddyyyy"
                  id="birthdate"
                />
              </div>
            </div>
          </form>

          {currentUser.questions.map((question) => {
            if (question.type === 1) {
              return (
                <RadioQuestion
                  questionTitle={question.title}
                  key={question.id}
                  answers={question.answers}
                />
              );
            } else if (question.type === 2) {
              return (
                <CheckboxQuestion
                  questionTitle={question.title}
                  key={question.id}
                  answers={question.answers}
                />
              );
            } else if (question.type === 3) {
              return (
                <LikertQuestion
                  questionTitle={question.title}
                  key={question.id}
                  answers={question.answers}
                />
              );
            }
            return <></>;
          })}

          <p className="mb-4">
            Please upload an unedited non-filtered photo matching the following
            pose.
          </p>
          <div className="row">
            <div className="col-3 col-lg-4"></div>
            <div className="col-6 col-lg-4">
              <img className="mb-4" src={photoPose} width="100%" alt="Pose" />
            </div>
            <div className="col-3 col-lg-4"></div>
            <div className="col-md-3"></div>
            <div className="col-12 col-md-6">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose photo
                </label>
              </div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-12 text-center">
              <Link to="/matches" className="btn btn-primary btn-lg px-8 mt-7">
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
