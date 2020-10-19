import React from 'react';
import { YellowBox } from 'react-native';
import ProviderAuth from './context/ContextAuth';
import MainRouter from './router/MainRouter';
YellowBox.ignoreWarnings([
    // See: https://github.com/react-navigation/react-navigation/issues/7839
    'Sending \`onAnimatedValueUpdate\` with no listeners registered.',
]);
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