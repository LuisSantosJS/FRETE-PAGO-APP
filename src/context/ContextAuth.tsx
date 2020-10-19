import React, { createContext, useState, useContext } from 'react';

type ContextType = {
    userSaved: boolean;
    setUserSaved: (value: boolean) => void;
    loading: boolean;
    setLoading: (value: boolean) => void;
    status: number;
    setStatus: (value: number) => void;
};


const ContextApp = createContext<ContextType>({
    userSaved: false,
    setUserSaved: (value: boolean) => { },
    loading: true,
    setLoading: (value: boolean) => { },
    status: 0,
    setStatus: (value: number) => { },
});




const ProviderAuth: React.FC = ({ children }) => {
    const [userSaved, setUserSaved] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<number>(0);

    return (
        <ContextApp.Provider value={{
            userSaved, setUserSaved,
            loading, setLoading,
            status, setStatus
        }}>
            {children}
        </ContextApp.Provider>
    );
}
export default ProviderAuth;

export function useUserSaved() {
    const infoUser: ContextType = useContext(ContextApp);
    const { userSaved, setUserSaved } = infoUser;
    return { userSaved, setUserSaved };
}
export function useLoading() {
    const infoUser: ContextType = useContext(ContextApp);
    const { loading, setLoading } = infoUser;
    return { loading, setLoading };
}

export function useStatus() {
    const infoUser: ContextType = useContext(ContextApp);
    const { status, setStatus } = infoUser;
    return { status, setStatus };
}













