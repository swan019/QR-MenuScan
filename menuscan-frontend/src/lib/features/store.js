import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage
import { combineReducers } from "redux";
import userReducer from "./userSlice";
import menuReducer from "./menuSlice"; // Import your menuSlice

// Redux Persist configuration
const persistConfig = {
    key: "root",
    storage,
    blacklist: ["menus"], // Exclude the menuSlice from being persisted
};

// Combine all reducers
const rootReducer = combineReducers({
    user: userReducer,
    menus: menuReducer, // Add the menuSlice here
});

// Wrap the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Required for redux-persist
        }),
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
