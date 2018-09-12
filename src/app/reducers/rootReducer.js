import {combineReducers} from "redux";

import entitiesReducer from "./entitiesReducer";
import tabsReducer from "features/tabs/tabsReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";

const rootReducer = combineReducers({
    entities : entitiesReducer,
    tabs : tabsReducer,
    unitInfo : unitInfoReducer,
});

export default rootReducer;