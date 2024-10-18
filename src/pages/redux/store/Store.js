import { createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import { GetPartyReducer } from "../reducer/GetPartyReducer";


const reducer=combineReducers({
    getThreedParty:GetPartyReducer
})


const initialState = {}; 
const middleWare = [thunk];
const Store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));
export default Store;