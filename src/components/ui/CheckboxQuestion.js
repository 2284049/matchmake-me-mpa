import React from "react";

export default function CheckboxQuestion(props) {
   function checkIsSelected(selectedAnswerIds, answerId) {
      return selectedAnswerIds.includes(answerId);
   }
   function changeSelectedAnswer(e) {
      let value = props.selectedAnswerIds;
      return value === e.target.value; // set the state of imageryText to be whatever the user inputs in that field (e.target.value)
   }

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
                        checked={checkIsSelected(
                           props.selectedAnswerIds,
                           answer.id
                        )}
                        name={answer.id}
                        defaultValue={props.selectedAnswerIds}
                        onChange={(e) => changeSelectedAnswer(e)}
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
   );
}
