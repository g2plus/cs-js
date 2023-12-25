import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchChannlList,selectChannelList } from './channelSlice'

export function Channel(){
    //const { channelList } = useSelector(state => state.channel)
    const channelList = useSelector(selectChannelList);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchChannlList())
      }, [dispatch])
    return(
        <div>
            <ul>
            {channelList.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}