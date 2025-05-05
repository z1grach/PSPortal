import {matchPath, useLocation} from "react-router-dom";
import {routePathsName} from "../../../shared/constants/routePathsName.ts";


export const useGetHeaderTitle = () => {
    const location = useLocation();
    const {pathname} = location;

    let title = '';

    const routeEntries = Object.entries(routePathsName);

    for (const [path, name] of routeEntries) {
        if (matchPath({path, end: false}, pathname)) {
            title = name;
            break;
        }
    }

    return {title};
};