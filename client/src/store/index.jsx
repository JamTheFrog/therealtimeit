import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import errorsReducer from "./slices/errors-slice";
import sessionsReducer from "./slices/sessions-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    sessions: sessionsReducer,
    errors: errorsReducer,
  },
});

export default store;
