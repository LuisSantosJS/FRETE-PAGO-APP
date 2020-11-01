import React, { createContext, useState, useContext, useEffect } from 'react';

import api from '../service/api';
import { UserDataTruck } from '../types/truck';




type ContextType = {
    // userSaved: boolean;
    // setUserSaved: (value: boolean) => void;
    loading: boolean;
    setLoading: (value: boolean) => void;
    status: number;
    setStatus: (value: number) => void;
    userData: UserDataTruck;
    setUserData: (value: UserDataTruck) => void;
    token: string;
    setToken: (value: string) => void;

};


const ContextApp = createContext<ContextType>({
    // userSaved: false,
    // setUserSaved: (value: boolean) => { },
    loading: true,
    setLoading: (value: boolean) => { },
    status: 0,
    setStatus: (value: number) => { },
    userData: {} as UserDataTruck,
    setUserData: (value: UserDataTruck) => { },
    token: '',
    setToken: (value: string) => { },
});




const ProviderAuth: React.FC = ({ children }) => {
    // const [userSaved, setUserSaved] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [status, setStatus] = useState<number>(0);
    const [userData, setUserData] = useState<UserDataTruck>({} as UserDataTruck);
    const [token, setToken] = useState<string>('');



    return (
        <ContextApp.Provider value={{
            // userSaved, setUserSaved,
            loading, setLoading,
            status, setStatus,
            userData, setUserData,
            token, setToken
        }}>
            {children}
        </ContextApp.Provider>
    );
}
export default ProviderAuth;

// export function useUserSaved() {
//     const infoUser: ContextType = useContext(ContextApp);
//     const { userSaved, setUserSaved } = infoUser;
//     return { userSaved, setUserSaved };
// }
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

export function useUserData() {
    const infoUser: ContextType = useContext(ContextApp);
    const { userData, setUserData } = infoUser;
    return { userData, setUserData };
}

export function useToken() {
    const infoUser: ContextType = useContext(ContextApp);
    const { token, setToken } = infoUser;
    return { token, setToken };
}



















