import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "./reducers/slice/rootReducer";
import { authApiSlice } from "../services/auth/auth";

const persistConfig = {
    key: "root",
    storage,
    // whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: {
        // cart: cartReducer,
        persistedReducer,
        [authApiSlice.reducerPath]: authApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            authApiSlice.middleware,
        ),
});

const persistor = persistStore(store);
setupListeners(store.dispatch);

export { store, persistor };
