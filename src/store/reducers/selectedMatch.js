import actions from "../actions";

export default function selectedMatch(selectedMatch = {}, action) {
   let newselectedMatch = { ...selectedMatch };
   switch (action.type) {
      case actions.STORE_SELECTED_MATCH:
         newselectedMatch = action.payload;
         return newselectedMatch; // new state
      default:
         return selectedMatch;
   }
}
