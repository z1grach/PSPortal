import {observer} from "mobx-react-lite";
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "../../widgets/MainLayout";
import {PATH} from "../../shared/constants/routePaths.ts";
import Login from "../../pages/Login";
import React from "react";

const Registration = React.lazy(() => import('../../pages/Registration'));

export const AppRouter = observer(() => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
            </Route>
        </Routes>
    )
})