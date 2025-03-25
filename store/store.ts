import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import auth from "./auth/authSlice";
import cart from "./cart/cartSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  wishlist:[auth,cart]
};

const rootReducer = combineReducers({
  auth,
  cart
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    // To prevent conflict b/w non-serializable state or serializable
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { persistor, store };
