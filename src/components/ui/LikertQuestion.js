import React from "react";

export default function LikertQuestion(props) {
   function checkIsSelected(selectedAnswerIds, answerId) {
      return selectedAnswerIds.includes(answerId);
   }

   //  const title = props.question.title;
   //  const answers = props.question.answers;
   //  const id = props.question.id;
   //  const selectedAnswerIds = props.question.selectedAnswerIds;
   const { title, answers, id, selectedAnswerIds } = props.question;

   return (
      <div className="row">
         <div className="col-12 mb-1">
            <p>{title}</p>
         </div>
         {answers.map((answer) => {
            return (
               <div className="col-3" key={answer.id}>
                  <div className="custom-control custom-radio d-flex justify-content-center">
                     <input
                        type="radio"
                        id={answer.id}
                        name={id}
                        className="custom-control-input"
                        value={answer.id}
                        checked={checkIsSelected(selectedAnswerIds, answer.id)}
                        onChange={(e) => {
                           props.setCurrentUserDataRadioVersion(e);
                        }}
                     />
                     <label className="custom-control-label"></label>
                  </div>
               </div>
            );
         })}
         {answers.map((answer) => {
            return (
               <div className="col-3" key={answer.id + "label"}>
                  <div className="d-flex justify-content-center mb-7">
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
