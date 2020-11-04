import actions from "../actions";

export default function matches(matches = {}, action) {
   let newMatches = { ...matches };
   switch (action.type) {
      case actions.STORE_MATCHES:
         newMatches = action.payload;
         return newMatches; // new state
      default:
         return matches;
   }
}
