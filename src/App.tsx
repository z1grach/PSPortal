import {observer} from "mobx-react-lite";
import {AppRouter} from "./app/router";

export const App = observer(() => {
    return (
        <>
            <AppRouter/>
        </>
    )
})