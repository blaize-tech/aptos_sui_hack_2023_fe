import React, {PropsWithChildren} from "react";

type ConnectAction = { type: "connect"; wallet: string; balance: string };
type DisconnectAction = { type: "disconnect" };

type Action =
    | ConnectAction
    | DisconnectAction

type Dispatch = (action: Action) => void;


type State = {
    wallet: string | null;
    isWalletConnected: boolean;
    balance: string | null;
};

const initialState: State = {
    wallet: null,
    isWalletConnected: false,
    balance: null,
} as const;

function storeReducer(state: State, action: Action): State {
    switch (action.type) {
        case "connect": {
            console.log('storeReducer connect');
            const {wallet, balance} = action;
            const newState = {...state, wallet, balance, status: "idle"} as State;
            const info = JSON.stringify(newState);
            window.localStorage.setItem("walletState", info);

            return newState;
        }
        case "disconnect": {
            window.localStorage.removeItem("walletState");

            return {...state, wallet: null, balance: null};
        }
        default: {
            throw new Error("Unhandled action type");
        }
    }
}

const StoreContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

function StoreProvider({children}: PropsWithChildren) {
    const [state, dispatch] = React.useReducer(storeReducer, initialState);
    const value = {state, dispatch};

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
}

function useStore() {
    const context = React.useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
}

export {StoreProvider, useStore};
