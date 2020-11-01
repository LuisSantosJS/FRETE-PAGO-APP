import React, { useEffect, useState } from 'react';
import ProviderAuth from './context/ContextAuth';
import MainRouter from './router/MainRouter';
import NetInfo from "@react-native-community/netinfo";
import Spinner from 'react-native-loading-spinner-overlay';
import io from 'socket.io-client';
import NotFound from './NotFound';
import api, { URL } from './service/api';
const App: React.FC = () => {
    const [isNetWork, setIsNetWork] = useState<boolean>(true);
    const [isBlocked, setIsBlocked] = useState<boolean>(false);
    const socket = io(String(URL));
    useEffect(() => {
        loadInternet();
    }, []);
    useEffect(() => {
        api.get('/app/status').then(res => {
            if (String(res.data.value) === 'false') {
                setIsBlocked(true);
            }
            socket.on('app_status_isBlocked', (res: string) => {
                if (res === 'false') {
                    setIsBlocked(true)
                } else {
                    setIsBlocked(false)
                }

            })
        }).catch(() => { });

    }, [isBlocked])

    const loadInternet = () => {
        NetInfo.addEventListener(state => {
            // console.log("Connection type", state.type);
            // console.log("Is connected?", state.isConnected);
            setIsNetWork(Boolean(state.isConnected));
        });
    }
    if (isBlocked) {
        return <NotFound />;
    }
    return (
        <>
            <Spinner
                visible={!isNetWork}
                textContent={'Reconnecting ...'}
                textStyle={{ color: '#e5e5e5', fontSize: 22, fontWeight: '600' }}
            />
            <ProviderAuth>
                <MainRouter />
            </ProviderAuth>
        </>
    )
}
export default App;