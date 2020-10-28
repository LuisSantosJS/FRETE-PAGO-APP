import React from 'react';
import ProviderAuth from './context/ContextAuth';
import MainRouter from './router/MainRouter';

const App: React.FC = () => {
    return (
        <>
            <ProviderAuth>
                <MainRouter />
            </ProviderAuth>
        </>
    )
}
export default App;