import { configureStore } from "@reduxjs/toolkit";
import oyoReducers from "./reducers/oyoReducers";
import  storage  from "redux-persist/lib/storage";
import { persistStore,persistReducer } from "redux-persist";

const persistConfig={
    key:"oyo-key",
    storage,
}
const persistedReducer=persistReducer(persistConfig,oyoReducers);
// const rootReducer=combineReducers({
//     user:authReducer
// });
export const store=configureStore({
    // reducer:rootReducer
    reducer:persistedReducer
});
export const persistor=persistStore(store);