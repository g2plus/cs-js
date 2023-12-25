import axios from "axios"
const channels = await axios.get('http://geek.itheima.net/v1_0/channels')
export {channels}