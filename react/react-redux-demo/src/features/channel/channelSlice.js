import { createSlice } from "@reduxjs/toolkit"
import {channels} from './channelApi'

const initialState = {
    channelList: [],
    status: 'idle',
  };

const channelStore = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setChannels (state, action) {
      state.channelList = action.payload
    }
  }
})

// 异步请求部分
const { setChannels } = channelStore.actions

const fetchChannlList = () => {
  return async (dispatch) => {
    const res = channels
    dispatch(setChannels(res.data.data.channels))
  }
}

export const selectChannelList = (state) => state.channel.channelList;

export { fetchChannlList }

const reducer = channelStore.reducer

export default reducer