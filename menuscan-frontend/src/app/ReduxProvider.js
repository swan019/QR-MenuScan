"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/lib/features/store";

export default function ReduxProvider({ children }) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}
