import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./reducers/auth-slice";
import jobIdSlice from "./reducers/jobId-slice";
import resumeSlice from "./reducers/resume-slice";
import jobSearchSlice from "./reducers/search-slice";
import skillsSlice from "./reducers/skills-slice";
import userContactSlice from "./reducers/userContact-slice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  jobId: jobIdSlice.reducer,
  search: jobSearchSlice.reducer,
  skills: skillsSlice.reducer,
  contacts : userContactSlice.reducer,
  resume: resumeSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
