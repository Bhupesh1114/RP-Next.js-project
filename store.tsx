import { configureStore , combineReducers} from '@reduxjs/toolkit'
import counterReducers from "./slices/counterSlice";
import postsReducer from "./slices/postsSlice";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import postsSliceWithSsrReducer from "./slices/postsSliceWithSsr";

const combinedReducer = combineReducers({
    counter : counterReducers,
    posts : postsReducer,
    postsWithSsr : postsSliceWithSsrReducer 
})

const masterStore = (state:any, action:any) => {
    if(action.type === HYDRATE){
     const nextState = {
        ...state, //use Previous state
        postsWithSsr : {
            allPosts : [...action.payload.postsWithSsr.allPosts]
        }
     }
     return nextState;
    }else{
        return combinedReducer(state,action)
    }
}

export const store = configureStore({
    reducer: masterStore
});

// export const wrapper = createWrapper(() => store, {debug : true})    [Add debug as true for all consoles in terminal]
export const wrapper = createWrapper(() => store)

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>




