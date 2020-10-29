import React from "react";
import { Link } from "react-router-dom";

export default function MatchPreview(props) {
   return (
      <>
         <div className="col-12 col-sm-6 mb-6">
            <Link to="/match">
               <img
                  src={props.photo}
                  width="100%"
                  height="auto"
                  style={{ borderRadius: "0.75rem" }}
                  alt="Match"
               />
               <h3 className="text-center">{props.username}</h3>
            </Link>
         </div>
      </>
   );
}
