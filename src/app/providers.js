"use client";

import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../redux/store";
import ToastWrapper from "@/components/ToastWapper";
import ProtectedPageService from "../../ProtectedPageService";

export function Providers({ children }) {
    return (
        <ReduxProvider store={store}>
            <ToastWrapper />
            <PersistGate loading={null} persistor={persistor}>
                <ProtectedPageService />
                {children}
            </PersistGate>
        </ReduxProvider>
    );
}
