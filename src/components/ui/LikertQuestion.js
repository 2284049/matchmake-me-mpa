import React from "react";

export default function LikertQuestion(props) {
  return (
    <div className="row">
      <div className="col-12 mb-1">
        <p>{props.questionTitle}</p>
      </div>
      {props.answers.map((answer) => {
        return (
          <div className="row">
            <div className="col-3" key={answer.id}>
              <div className="row">
                <div className="col-12">
                  <div className="custom-control custom-radio d-flex justify-content-center">
                    <input
                      type="radio"
                      id={answer.id}
                      name={props.questionId}
                      value="1"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label"></label>
                  </div>
                </div>
                <div
                  className="col-12 d-flex justify-content-center mb-7"
                  key={answer.id + "label"}
                >
                  <label
                    htmlFor={answer.id}
                    className="text-center small-input-font text-danger"
                  >
                    {answer.text}
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
