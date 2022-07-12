import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { example } from '../redux/example.reducer';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        example: example,
    },
});
