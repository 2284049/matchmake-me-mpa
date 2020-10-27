import React from "react";

export default function RadioQuestion(props) {
   function checkIsSelected(selectedAnswerIds, answerId) {
      return selectedAnswerIds.includes(answerId);
   }
   return (
      <>
         <div className="row mb-7">
            <div className="col-12 mb-1">
               <p>{props.questionTitle}</p>
            </div>
            {props.answers.map((answer) => {
               return (
                  <div
                     className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-3"
                     key={answer.id}
                  >
                     <div className="custom-control custom-radio d-inline">
                        <input
                           type="radio"
                           id={answer.id}
                           name={props.questionId}
                           className="custom-control-input"
                           checked={checkIsSelected(
                              props.selectedAnswerIds,
                              answer.id
                           )}
                        />
                        <label
                           className="custom-control-label"
                           htmlFor={answer.id}
                        >
                           {answer.text}
                        </label>
                     </div>
                  </div>
               );
            })}
         </div>
      </>
   );
}
