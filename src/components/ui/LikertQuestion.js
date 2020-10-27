import React from "react";

export default function LikertQuestion(props) {
   function checkIsSelected(selectedAnswerIds, answerId) {
      return selectedAnswerIds.includes(answerId);
   }
   return (
      <div className="row">
         <div className="col-12 mb-1">
            <p>{props.questionTitle}</p>
         </div>
         {props.answers.map((answer) => {
            return (
               <div className="col-3" key={answer.id}>
                  <div className="custom-control custom-radio d-flex justify-content-center">
                     <input
                        type="radio"
                        id={answer.id}
                        name={props.questionId}
                        defaultValue={props.selectedAnswerIds}
                        className="custom-control-input"
                        // value='["postedAt", "desc"]'
                        // checked={
                        checked={checkIsSelected(
                           props.selectedAnswerIds,
                           answer.id
                        )}
                        // }
                        // onChange={(e) => {
                        //    this.setProjectOrder(e);
                        // }}
                     />
                     <label className="custom-control-label"></label>
                  </div>
               </div>
            );
         })}
         {props.answers.map((answer) => {
            return (
               <div className="col-3" key={answer.id + "label"}>
                  <div
                     className="d-flex justify-content-center mb-7"
                     // key={answer.id + "label"}
                  >
                     <label
                        htmlFor={answer.id}
                        className="text-center small-input-font"
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
