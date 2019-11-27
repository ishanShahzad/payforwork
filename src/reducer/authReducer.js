const inistate = {
  isAuthenticated: false,
  User: ""
};
export default function(state = inistate, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuthenticated: true,
        User: action.payload
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    default:
      return state;
  }
}
