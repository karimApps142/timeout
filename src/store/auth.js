// /* eslint-disable curly */
// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import server from '../server';
// import helper from '../constants/helper';
// import navigation from '../navigations/rootNavigator';
// import toast from '../refs/toast';

// const initialState = {
//   loading: false,
//   confirm: null,
//   signupValues: null,
//   phone: null,
// };

// //send otp
// export const sendOtp = createAsyncThunk(
//   'auth/sendOtp',
//   async ({type, values}, {dispatch}) => {
//     dispatch(setLoading(true));
//     dispatch(setSignupValues(values));
//     const response = await server.sendEmailOtp({
//       email: values.email,
//       reset_password: type === 'signup' ? false : true,
//     });
//     dispatch(setLoading(false));

//     if (!response.ok) {
//       return helper.apiResponseErrorHandler(response);
//     }

//     if (type === 'signup') {
//       navigation.navigate('otp');
//     } else {
//       navigation.navigate('forgotOtp');
//     }
//     toast.show('OTP sent! Check your email.');
//   },
// );

// //resend otp
// export const resendOtp = createAsyncThunk(
//   'auth/resendOtp',
//   async ({email, setIsResendDisabled}, {dispatch}) => {
//     dispatch(setLoading(true));
//     const response = await server.auth.sendEmailOtp({
//       email: email,
//       reset_password: false,
//     });
//     dispatch(setLoading(false));
//     setIsResendDisabled(true);
//     if (!response.ok) {
//       return helper.apiResponseErrorHandler(response);
//     }
//     toast.show('OTP sent! Check your email.');
//   },
// );

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setLoading: (state, {payload}) => {
//       state.loading = payload;
//     },
//     setConfirm: (state, {payload}) => {
//       state.confirm = payload;
//     },
//     setSignupValues: (state, {payload}) => {
//       state.signupValues = payload;
//     },
//     setPhone: (state, {payload}) => {
//       state.phone = payload;
//     },
//   },
// });

// export const {setLoading, setConfirm, setPhone, setSignupValues} =
//   authSlice.actions;

// export default authSlice.reducer;
