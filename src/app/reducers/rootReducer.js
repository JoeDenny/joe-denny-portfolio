import {combineReducers} from "redux";

import tabsReducer from "features/tabs/tabsReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";

const rootReducer = combineReducers({
    tabs : tabsReducer,
    unitInfo : unitInfoReducer,
});

export default rootReducer;