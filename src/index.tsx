import React, { useEffect, useState } from 'react';
import ProviderAuth from './context/ContextAuth';
import MainRouter from './router/MainRouter';
import NetInfo from "@react-native-community/netinfo";
import Spinner from 'react-native-loading-spinner-overlay';
const App: React.FC = () => {
    const [isNetWork, setIsNetWork] = useState<boolean>(true);
    useEffect(() => {
        loadInternet();
    }, []);

    const loadInternet = () => {
        NetInfo.addEventListener(state => {
            // console.log("Connection type", state.type);
            // console.log("Is connected?", state.isConnected);
            setIsNetWork(Boolean(state.isConnected));
        });
    }
    return (
        <>
            <Spinner
                visible={!isNetWork}
                textContent={'Reconnecting ...'}
                textStyle={{color:'#e5e5e5', fontSize: 22, fontWeight: '600' }}
            />
            <ProviderAuth>
                <MainRouter />
            </ProviderAuth>
        </>
    )
}
export default App;