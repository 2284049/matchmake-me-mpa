import React from "react";

export default function CheckboxQuestion(props) {
  return (
    <div className="row mb-7">
      <div className="col-12 mb-1">
        <p>{props.questionTitle}</p>
      </div>
      {props.answers.map((answer) => {
        return (
          <div className="col-xs-12 col-sm-6" key={answer.id}>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id={answer.id}
              />

              <label className="custom-control-label" htmlFor={answer.id}>
                {answer.text}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
}
