import { catReducer, CAT_KEY } from "./catRedux/cat.reducer";
import {combineReducers} from 'redux'

let rootReducer = combineReducers({
    [CAT_KEY]: catReducer,
})

export {rootReducer}