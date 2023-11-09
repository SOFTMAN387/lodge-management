import {  createSlice } from "@reduxjs/toolkit";
const oyoSlice = createSlice({
    name: "e-commerce",
    initialState: {
        currentItem: [],
        currentUser: [],
        currentUserOrdered: {}

    },
    reducers: {
        // addToCart:(state, action)=>{
        //     state?.currentItem?.push(action.payload);
        // },
        // removeToCart:(state, action)=> {
        //     state.currentItem = state?.currentItem?.filter((x) => x.item[0].id !== action.payload);
        //     return state;
        // },
        // removeAllCart:(state)=> {
        //     state.currentItem = [];
        //     return state;
        // },
        // userOrdered:(state, action)=> {
        //     state.currentUserOrdered=action.payload;
           
        // }
        loginUser: (state, action) => {
            state.currentUser = action.payload;
        },
        logoutUser: (state) => {
            state.currentUser = [];
        },
        // forgotPassword: (state, action) => {
        //     state.forgotUser = action.payload;
        // },
        // newPassword: (state) => {
        //     state.forgotUser = [];
        // },
        // addFavourite: (state, action) => {
        //     state.favourite.push(action.payload);
        // },
        // clearToFav: (state) => {
        //     state.favourite = [];
        // }

    },
});
export const actions = oyoSlice.actions;
// const store = configureStore({ reducer: oyoSlice.reducer, });
export default oyoSlice.reducer;