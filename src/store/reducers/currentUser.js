import actions from "../actions";

export default function currentUser(currentUser = {}, action) {
   // let newCurrentUser = { ...currentUser };

   console.log("This is in the reducer: ", action.payload);
   switch (action.type) {
      case actions.UPDATE_CURRENT_USER:
         return action.payload;
      default:
         return currentUser;
   }
}
