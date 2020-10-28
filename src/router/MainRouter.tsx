import React from 'react';
import { useLoading, useStatus } from '../context/ContextAuth';
import AuthRouter from './AuthRouter';
import Waiting from '../pages/Waiting';
import LoadingPage from '../pages/Loading';
import TruckRouter from './TruckRouter';
import CompanyRouter from './CompanyRouter';
const MainRouter: React.FC = () => {
    const { loading } = useLoading();
    const { status } = useStatus();
    if (loading) {
        return <LoadingPage />
    }
    switch (Number(status)) {
        case 0:
            return <AuthRouter />;
        case 1:
            return <Waiting />
        case 2:
            return <TruckRouter />;
        case 3:
            return <CompanyRouter />;
        default:
            return <AuthRouter />;
    }
}
export default MainRouter;



/// STATUS

// 0 - NÃO REGISTRADO/ NÃO CADASTRADO
// 1 - A ESPERA DA LIBERAÇÃO
// 2 - LOGADO / LIBERADO CAMINHONEIRO 
// 3 - LOGADO / LIBERADO EMPRESA
