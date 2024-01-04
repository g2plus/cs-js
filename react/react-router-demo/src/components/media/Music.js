import {useNavigate} from "react-router-dom";
function openWindow(){
    window.open("https://y.qq.com/n/ryqq/songDetail/003bVCqX2SRdEW", "QQ Music");
}
const Music=()=>{
    const navigate=useNavigate()
    return (
        <div>
            <button onClick={openWindow}>痴心绝对</button>
        </div>
    )
}
export default Music