import {useLocation} from "react-router-dom";
import {routePathsName} from "../../../shared/constants/routePathsName.ts";


export const useGetHeaderTitle = () => {
    const location = useLocation();

    const title = routePathsName[location.pathname] ?? '';

    return {title};
};