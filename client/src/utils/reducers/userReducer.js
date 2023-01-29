import { UPDATE_USERS } from "../actions";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
