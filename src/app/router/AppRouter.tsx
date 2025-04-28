import {observer} from "mobx-react-lite";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "../../widgets/MainLayout";
import {PATH} from "../../shared/constants/routePaths.ts";
import Login from "../../pages/Login";
import React from "react";

const Registration = React.lazy(() => import('../../pages/Registration'));
const Teams = React.lazy(() => import('../../pages/Teams'));
const Connection = React.lazy(() => import('../../pages/Connection'));
const Profile = React.lazy(() => import('../../pages/Profile'));
const About = React.lazy(() => import('../../pages/About'));
const Platforms = React.lazy(() => import('../../pages/Platforms'));

export const AppRouter = observer(() => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.TEAMS} element={<Teams/>}/>
                <Route path={PATH.CONNECTION} element={<Connection/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.ABOUT} element={<About/>}/>
                <Route path={PATH.PLATFORMS} element={<Platforms/>}/>
                <Route path="*" element={<Navigate to={PATH.LOGIN}/>}/>
            </Route>
        </Routes>
    )
})