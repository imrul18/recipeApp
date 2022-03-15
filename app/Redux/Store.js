import { configureStore } from "@reduxjs/toolkit"

import Favourite from "./Favourite/Favourite"


export default configureStore({
    reducer: {
        favourite: Favourite,
    }
})