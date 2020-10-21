import React from "react";
import { Link } from "react-router-dom";
import purpleLogo from "../../icons/purplelogo.png";
import photoPose from "../../img/photogesture.jpg";

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
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="col-4">
                <label for="birthdate">Birthdate</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="mmddyyyy"
                  id="birthdate"
                />
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col-6 col-sm-4 col-md-4 col-lg-4 mb-n1">
              <p className="d-inline">You identify as:</p>
            </div>
            <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-4">
              <div className="custom-control custom-radio d-inline mr-sm-4 mr-md-6 mr-lg-8">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  Female
                </label>
              </div>
            </div>
            <div className="col-12 col-sm-5 col-md-5 col-lg-3 col-xl-4">
              <div className="custom-control custom-radio d-inline">
                <input
                  type="radio"
                  id="identify_male"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_male">
                  Male
                </label>
              </div>
            </div>
          </div>

          <div className="row mt-4 mb-7">
            <div className="col-6 col-sm-4 col-md-4 col-lg-4 mb-1">
              <p className="d-inline">Looking for:</p>
            </div>
            <div className="col-12 col-sm-3 col-md-3 col-lg-4">
              <div className="custom-control custom-radio d-inline mr-sm-4 mr-md-6 mr-lg-8">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  Female
                </label>
              </div>
            </div>
            <div className="col-12 col-sm-5 col-md-5 col-lg-3">
              <div className="custom-control custom-radio d-inline">
                <input
                  type="radio"
                  id="identify_male"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_male">
                  Male
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-7">
            <div className="col-12 mb-1">
              <p>Relationship Status:</p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-racial-injustice"
                />

                <label
                  className="custom-control-label"
                  for="least-racial-injustice"
                >
                  Never married
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-health-care"
                />
                <label className="custom-control-label" for="least-health-care">
                  Currently separated
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-immigration"
                />
                <label className="custom-control-label" for="least-immigration">
                  Divorced
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-climate"
                />
                <label className="custom-control-label" for="least-climate">
                  Widowed
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-7">
            <div className="col-12 mb-1">
              <p>Do you have any kids?</p>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-3">
              <div className="custom-control custom-radio d-inline">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  Yes
                </label>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-3">
              <div className="custom-control custom-radio d-inline">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="row mb-7">
            <div className="col-12 mb-1">
              <p>Would you like to have any/additional kids in the future?</p>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-3">
              <div className="custom-control custom-radio d-inline">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  Yes
                </label>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-3">
              <div className="custom-control custom-radio d-inline">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  No
                </label>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-3">
              <div className="custom-control custom-radio d-inline">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  Maybe
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-7">
            <div className="col-12 mb-1">
              <p>How often do you smoke?</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  Never
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  Couple times a year
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  Weekly
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  Daily
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-7">
            <div className="col-12 mb-1">
              <p>How often do you drink?</p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  Never
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  Couple times a year
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  Weekly
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="identify_female"
                  name="identify"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="identify_female">
                  Daily
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-1">
              <p>How important is healthy eating to you?</p>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="healthy-lifestyle-1"
                  name="healthy-lifestyle"
                  value="1"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="healthy-lifestyle-1"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="healthy-lifestyle-2"
                  name="healthy-lifestyle"
                  value="2"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="healthy-lifestyle-2"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="healthy-lifestyle-3"
                  name="healthy-lifestyle"
                  value="3"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="healthy-lifestyle-3"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="healthy-lifestyle-4"
                  name="healthy-lifestyle"
                  value="4"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="healthy-lifestyle-4"
                ></label>
              </div>
            </div>
          </div>

          <div className="row mb-7">
            <div className="col-3 d-flex justify-content-center">
              <label
                for="healthy-lifestyle-1"
                className="text-center small-input-font"
              >
                Not at all important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="healthy-lifestyle-2"
                className="text-center small-input-font"
              >
                Not really important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="healthy-lifestyle-3"
                className="text-center small-input-font"
              >
                Somewhat important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="religious-beliefs-4"
                className="text-center small-input-font"
              >
                Extremely important
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-1">
              <p>How important are your spiritual/religious beliefs to you?</p>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="religious-beliefs-1"
                  name="religious-beliefs"
                  value="1"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="religious-beliefs-1"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="religious-beliefs-2"
                  name="religious-beliefs"
                  value="2"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="religious-beliefs-2"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="religious-beliefs-3"
                  name="religious-beliefs"
                  value="3"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="religious-beliefs-3"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="religious-beliefs-4"
                  name="religious-beliefs"
                  value="4"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="religious-beliefs-4"
                ></label>
              </div>
            </div>
          </div>

          <div className="row mb-7">
            <div className="col-3 d-flex justify-content-center">
              <label
                for="religious-beliefs-1"
                className="text-center small-input-font"
              >
                Not at all important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="religious-beliefs-2"
                className="text-center small-input-font"
              >
                Not really important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="religious-beliefs-3"
                className="text-center small-input-font"
              >
                Somewhat important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="religious-beliefs-4"
                className="text-center small-input-font"
              >
                Extremely important
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-1">
              <p>
                How important is it for you to climb the ladder at your job and
                get promotions?
              </p>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="work-promotions-1"
                  name="work-promotions"
                  value="1"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="work-promotions-1"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="work-promotions-2"
                  name="work-promotions"
                  value="2"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="work-promotions-2"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="work-promotions-3"
                  name="work-promotions"
                  value="3"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="work-promotions-3"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="work-promotions-4"
                  name="work-promotions"
                  value="4"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="work-promotions-4"
                ></label>
              </div>
            </div>
          </div>

          <div className="row mb-7">
            <div className="col-3 d-flex justify-content-center">
              <label
                for="work-promotions-1"
                className="text-center small-input-font"
              >
                Not at all important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="work-promotions-2"
                className="text-center small-input-font"
              >
                Not really important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="work-promotions-3"
                className="text-center small-input-font"
              >
                Somewhat important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="work-promotions-4"
                className="text-center small-input-font"
              >
                Extremely important
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-1">
              <p>How important is exercise or working out to you?</p>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="working-out-1"
                  name="working-out"
                  value="1"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="working-out-1"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="working-out-2"
                  name="working-out"
                  value="2"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="working-out-2"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="working-out-3"
                  name="working-out"
                  value="3"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="working-out-3"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="working-out-4"
                  name="working-out"
                  value="4"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="working-out-4"
                ></label>
              </div>
            </div>
          </div>

          <div className="row mb-7">
            <div className="col-3 d-flex justify-content-center">
              <label
                for="working-out-1"
                className="text-center small-input-font"
              >
                Not at all important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="working-out-2"
                className="text-center small-input-font"
              >
                Not really important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="working-out-3"
                className="text-center small-input-font"
              >
                Somewhat important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="working-out-4"
                className="text-center small-input-font"
              >
                Extremely important
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-1">
              <p>
                How important is it to you to participate in spiritual/religious
                activities?
              </p>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="religious-activites-1"
                  name="religious-activities"
                  value="1"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="religious-activites-1"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="religious-activities-2"
                  name="religious-activities"
                  value="2"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="religious-activities-2"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="religious-activities-3"
                  name="religious-activities"
                  value="3"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="religious-activities-3"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="religious-activities-4"
                  name="religious-activities"
                  value="4"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="religious-activities-4"
                ></label>
              </div>
            </div>
          </div>

          <div className="row mb-7">
            <div className="col-3 d-flex justify-content-center">
              <label
                for="religious-activites-1"
                className="text-center small-input-font"
              >
                Not at all important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="religious-activities-2"
                className="text-center small-input-font"
              >
                Not really important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="religious-activities-3"
                className="text-center small-input-font"
              >
                Somewhat important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="religious-activities-4"
                className="text-center small-input-font"
              >
                Extremely important
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-1">
              <p>
                How important is it that other people notice and admire your
                accomplishments?
              </p>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="accomplishments-1"
                  name="accomplishments"
                  value="1"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="accomplishments-1"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="accomplishments-2"
                  name="accomplishments"
                  value="2"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="accomplishments-2"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="accomplishments-3"
                  name="accomplishments"
                  value="3"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="accomplishments-3"
                ></label>
              </div>
            </div>
            <div className="col-3">
              <div className="custom-control custom-radio d-flex justify-content-center">
                <input
                  type="radio"
                  id="accomplishments-4"
                  name="accomplishments"
                  value="4"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label"
                  for="accomplishments-4"
                ></label>
              </div>
            </div>
          </div>

          <div className="row mb-7">
            <div className="col-3 d-flex justify-content-center">
              <label
                for="accomplishments-1"
                className="text-center small-input-font"
              >
                Not at all important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="accomplishments-2"
                className="text-center small-input-font"
              >
                Not really important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="accomplishments-3"
                className="text-center small-input-font"
              >
                Somewhat important
              </label>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <label
                for="accomplishments-4"
                className="text-center small-input-font"
              >
                Extremely important
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-1">
              <p>
                Which political topics are <em>most</em> important to you?
              </p>
              <p className="text-muted p-muted">(Choose 2)</p>
            </div>
          </div>
          <div className="row mb-7">
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="most-racial-injustice"
                />

                <label
                  className="custom-control-label"
                  for="most-racial-injustice"
                >
                  Racial Injustice
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="most-health-care"
                />
                <label className="custom-control-label" for="most-health-care">
                  Health Care
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="most-immigration"
                />
                <label className="custom-control-label" for="most-immigration">
                  Illegal Immigration
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="most-climate"
                />
                <label className="custom-control-label" for="most-climate">
                  Climate Change
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="most-security"
                />
                <label className="custom-control-label" for="most-security">
                  National Security
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="most-guns"
                />
                <label className="custom-control-label" for="most-guns">
                  Gun Rights
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-1">
              <p>
                Which political topics are <em>least</em> important to you?
              </p>
              <p className="text-muted p-muted">(Choose 2)</p>
            </div>
          </div>
          <div className="row mb-7">
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-racial-injustice"
                />

                <label
                  className="custom-control-label"
                  for="least-racial-injustice"
                >
                  Racial Injustice
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-health-care"
                />
                <label className="custom-control-label" for="least-health-care">
                  Health Care
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-immigration"
                />
                <label className="custom-control-label" for="least-immigration">
                  Illegal Immigration
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-climate"
                />
                <label className="custom-control-label" for="least-climate">
                  Climate Change
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-security"
                />
                <label className="custom-control-label" for="least-security">
                  National Security
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-guns"
                />
                <label className="custom-control-label" for="least-guns">
                  Gun Rights
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-1">
              <p>What are your main interests?</p>
              <p className="text-muted p-muted">(Choose 2)</p>
            </div>
          </div>
          <div className="row mb-7">
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-racial-injustice"
                />

                <label
                  className="custom-control-label"
                  for="least-racial-injustice"
                >
                  Cooking
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-health-care"
                />
                <label className="custom-control-label" for="least-health-care">
                  Watch tv/movies
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-immigration"
                />
                <label className="custom-control-label" for="least-immigration">
                  Reading
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-climate"
                />
                <label className="custom-control-label" for="least-climate">
                  Creating
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-security"
                />
                <label className="custom-control-label" for="least-security">
                  Working Out
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-guns"
                />
                <label className="custom-control-label" for="least-guns">
                  Video Games
                </label>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-guns"
                />
                <label className="custom-control-label" for="least-guns">
                  Sports
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-guns"
                />
                <label className="custom-control-label" for="least-guns">
                  Outdoor Activites
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-guns"
                />
                <label className="custom-control-label" for="least-guns">
                  Volunteering
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-guns"
                />
                <label className="custom-control-label" for="least-guns">
                  Meditation/Yoga
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-guns"
                />
                <label className="custom-control-label" for="least-guns">
                  Religious Activities
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-guns"
                />
                <label className="custom-control-label" for="least-guns">
                  Board/Card Games
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-1">
              <p>
                Which spiritual/religious beliefs are closest to your own
                currently:
              </p>
            </div>
          </div>
          <div className="row mb-7">
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-racial-injustice"
                />

                <label
                  className="custom-control-label"
                  for="least-racial-injustice"
                >
                  Atheist
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-health-care"
                />
                <label className="custom-control-label" for="least-health-care">
                  Spiritual but not religious
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-immigration"
                />
                <label className="custom-control-label" for="least-immigration">
                  Agnostic
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-climate"
                />
                <label className="custom-control-label" for="least-climate">
                  Catholic
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-security"
                />
                <label className="custom-control-label" for="least-security">
                  Christian / Protestant
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-guns"
                />
                <label className="custom-control-label" for="least-guns">
                  Buddhist / Taoist
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-guns"
                />
                <label className="custom-control-label" for="least-guns">
                  Hindu
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-guns"
                />
                <label className="custom-control-label" for="least-guns">
                  Muslim / Islam
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="least-guns"
                />
                <label className="custom-control-label" for="least-guns">
                  Other
                </label>
              </div>
            </div>
          </div>
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
                <label className="custom-file-label" for="customFile">
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
