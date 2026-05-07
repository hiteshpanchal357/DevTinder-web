import { combineReducers, configureStore, createAction } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import feedReducer from "./feedSlice.js";
import connectionReducer from "./connectionSlice.js";
import requestReducer from "./requestSlice.js";
import premiumReducer from "./premiumSlice.js";

export const clearStore = createAction("app/clearStore");

const appReducer = combineReducers({
    user: userReducer,
    feed: feedReducer,
    connections: connectionReducer,
    requests: requestReducer,
    premium: premiumReducer,
});

const rootReducer = (state, action) => {
    if (action.type === clearStore.type) {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

const appStore = configureStore({
    reducer: rootReducer,
});

export default appStore;
