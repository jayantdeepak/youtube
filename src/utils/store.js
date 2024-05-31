import {configureStore} from "@reduxjs/toolkit"
import appstore from "./appslice"
import serachslice from "./serachslice"
import repliesSlice from "./showreplies"
import chatslice from './livechatclice';
const store= configureStore({
    reducer:{
        app:appstore,
        search:serachslice,
        reply:repliesSlice,
        chat:chatslice
    }

})
export default store