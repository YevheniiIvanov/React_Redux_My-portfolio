import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import emailjs from 'emailjs-com';

const initialState = {
    hamburger: false,
    scrollWin: '',
    formStatus: ''
}

export const postFormEmail = createAsyncThunk(
    'portfolio/postForm',
    async(data) => {
        return await emailjs.sendForm('service_bekedab', 'template_1rfpg3u', data, 'user_9Xr5RhBZgigZufufUrR4D');
    }
)

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        portfolioHamburger: (state, action) => {
            state.hamburger = action.payload;
        },
        portfolioScroll: (state, action) => {
            state.scrollWin = action.payload;
        },
        portfolioFormStatus: (state, action) => {
            state.formStatus = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(postFormEmail.pending, state => { state.formStatus = 'loading' })
            .addCase(postFormEmail.fulfilled, state => { state.formStatus = 'idle' })
            .addCase(postFormEmail.rejected, state => { state.formStatus = 'error' })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = portfolioSlice;

export default reducer;
export const {
    portfolioHamburger,
    portfolioScroll,
    portfolioFormStatus
} = actions;