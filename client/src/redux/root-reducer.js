import {combineReducers} from "redux"; 
import {persistReducer} from "redux-persist"; 
import storage from 'redux-persist/lib/storage';
import userReducer from "./user/user.reducer.js";
import cartReducer from "./cart/cart.reducer.js";
import directoryReducer from "./directory/directory.reducer.js";
import shopReducer from "./shop/shop.reducer.js";
import browseReducer from "./browse/browse.reducer.js";
import systemReducer from "./system/system.reducer.js"; 
import currentItemReducer from "./currentItem/currentItem.reducer.js";


const persistConfig = {
    key: "root",
    storage,
    whitelist:["cart"],
};


const rootReducer = combineReducers(
    {
        user:userReducer,
        cart:cartReducer,
        directory:directoryReducer,
        shop:shopReducer,
        browse:browseReducer,
        system:systemReducer,
        currentItem:currentItemReducer,
    }
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer; 