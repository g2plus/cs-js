import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import channelReducer from '../features/channel/channelSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer
  },
});
