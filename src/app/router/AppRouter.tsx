import {observer} from "mobx-react-lite";
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "../../widgets/MainLayout";
import {PATH} from "../../shared/constants/routePaths.ts";
import Login from "../../pages/Login";

export const AppRouter = observer(() => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path={PATH.LOGIN} element={<Login/>}/>
            </Route>
        </Routes>
    )
})