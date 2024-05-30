import {configureStore} from "@reduxjs/toolkit"
import appstore from "./appslice"
import serachslice from "./serachslice"
import repliesSlice from "./showreplies"
const store= configureStore({
    reducer:{
        app:appstore,
        search:serachslice,
        replies:repliesSlice,
    }

})
export default store